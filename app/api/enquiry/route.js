// Receives enquiry form submissions: validates, emails the company inbox, and sends the visitor a thank-you.
// Email settings live in environment variables (see .env.example and lib/mailer.js).
import { mailConfigured, sendCompanyNotification, sendThankYou } from "@/lib/mailer";

const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, message: "Invalid request" }, { status: 400 });
  }

  const enquiry = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 30),
    email: clean(body.email, 150),
    interest: clean(body.interest, 600),
    contact: clean(body.contact, 20),
    product: clean(body.product, 600),
    message: clean(body.message, 1000),
    receivedAt: new Date().toISOString(),
  };

  if (enquiry.name.length < 2) {
    return Response.json({ success: false, message: "Please enter your name." }, { status: 400 });
  }
  if (!/^[0-9+()\s-]{7,20}$/.test(enquiry.phone)) {
    return Response.json({ success: false, message: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!enquiry.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return Response.json({ success: false, message: "Please enter a valid email." }, { status: 400 });
  }

  if (!mailConfigured()) {
    // Local development without email settings: keep the form usable and log instead.
    if (process.env.NODE_ENV !== "production") {
      console.log("[enquiry] email not configured, logging only:", enquiry);
      return Response.json({ success: true, message: "Enquiry received", data: { receivedAt: enquiry.receivedAt } });
    }
    console.error("[enquiry] email is not configured (SMTP_* / ENQUIRY_TO missing)");
    return Response.json(
      { success: false, message: "Sorry, we couldn't send your enquiry right now. Please email us directly." },
      { status: 500 }
    );
  }

  // The company must receive the enquiry; if that fails, tell the visitor so they can try again.
  try {
    await sendCompanyNotification(enquiry);
  } catch (err) {
    console.error("[enquiry] company notification failed:", err);
    return Response.json(
      { success: false, message: "Sorry, we couldn't send your enquiry right now. Please try again shortly." },
      { status: 502 }
    );
  }

  // The thank-you is a courtesy: a failure here shouldn't fail an enquiry the company already has.
  try {
    await sendThankYou(enquiry);
  } catch (err) {
    console.error("[enquiry] thank-you email failed:", err);
  }

  return Response.json({ success: true, message: "Enquiry received", data: { receivedAt: enquiry.receivedAt } });
}
