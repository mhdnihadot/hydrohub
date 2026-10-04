// Receives enquiry form submissions.
// TODO: forward to email / CRM / WhatsApp — for now it validates and logs on the server.

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
    interest: clean(body.interest, 50),
    contact: clean(body.contact, 20),
    product: clean(body.product, 100),
    message: clean(body.message, 1000),
    receivedAt: new Date().toISOString(),
  };

  if (enquiry.name.length < 2) {
    return Response.json({ success: false, message: "Please enter your name." }, { status: 400 });
  }
  if (!/^[0-9+()\s-]{7,20}$/.test(enquiry.phone)) {
    return Response.json({ success: false, message: "Please enter a valid phone number." }, { status: 400 });
  }
  if (enquiry.contact === "Email" && !enquiry.email) {
    return Response.json({ success: false, message: "Please add your email so we can reply." }, { status: 400 });
  }
  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return Response.json({ success: false, message: "Please enter a valid email." }, { status: 400 });
  }

  console.log("[enquiry]", enquiry);

  return Response.json({ success: true, message: "Enquiry received", data: { receivedAt: enquiry.receivedAt } });
}
