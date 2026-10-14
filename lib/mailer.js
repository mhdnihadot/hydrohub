// Sends enquiry emails through the company mailbox (SMTP).
// All settings come from environment variables — see .env.example. Never hard-code credentials here.
import nodemailer from "nodemailer";

const env = (name) => process.env[name]?.trim() || "";

export function mailConfigured() {
  return Boolean(env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS") && env("ENQUIRY_TO"));
}

let transport;
function getTransport() {
  if (!transport) {
    const port = Number(env("SMTP_PORT")) || 465;
    transport = nodemailer.createTransport({
      host: env("SMTP_HOST"),
      port,
      secure: env("SMTP_SECURE") ? env("SMTP_SECURE") === "true" : port === 465,
      auth: { user: env("SMTP_USER"), pass: env("SMTP_PASS") },
    });
  }
  return transport;
}

const escape = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Simple branded wrapper (inline styles — email clients ignore stylesheets)
function layout(title, bodyHtml) {
  return `<!doctype html><html><body style="margin:0;background:#F1F3F8;font-family:Arial,Helvetica,sans-serif;color:#181918">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
        <tr><td style="background:#2C3274;padding:20px 28px;color:#ffffff;font-size:18px;font-weight:bold">Hydro Hub Industries</td></tr>
        <tr><td style="padding:28px">
          <h1 style="margin:0 0 16px;font-size:20px;color:#2C3274">${escape(title)}</h1>
          ${bodyHtml}
        </td></tr>
        <tr><td style="padding:16px 28px;background:#F6F8FB;color:#5E6472;font-size:12px">
          Hydro Hub Industries · Bengaluru, Karnataka, India
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

const rows = (pairs) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:14px;border-collapse:collapse">${pairs
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 0;color:#5E6472;width:140px;vertical-align:top;border-bottom:1px solid #E3E6EF">${escape(k)}</td>` +
        `<td style="padding:8px 0;border-bottom:1px solid #E3E6EF;white-space:pre-wrap">${escape(v)}</td></tr>`
    )
    .join("")}</table>`;

// 1. Notification to the company inbox (Reply goes straight to the visitor)
export async function sendCompanyNotification(e) {
  const details = [
    ["Name", e.name],
    ["Phone", e.phone],
    ["Email", e.email],
    ["Looking for", e.interest],
    ["Products", e.product],
    ["Preferred contact", e.contact],
    ["Message", e.message],
    ["Received", new Date(e.receivedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" }) + " IST"],
  ];
  return getTransport().sendMail({
    from: env("MAIL_FROM") || env("SMTP_USER"),
    to: env("ENQUIRY_TO"),
    replyTo: e.email ? `${e.name} <${e.email}>` : undefined,
    subject: `New enquiry from ${e.name}${e.interest ? ` · ${e.interest}` : ""}`,
    text: details.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n"),
    html: layout("New website enquiry", rows(details)),
  });
}

// 2. Thank-you to the visitor (Reply goes to the company inbox)
export async function sendThankYou(e) {
  const first = e.name.split(" ")[0];
  const summary = [
    ["Looking for", e.interest],
    ["Message", e.message],
  ];
  return getTransport().sendMail({
    from: env("MAIL_FROM") || env("SMTP_USER"),
    to: e.email,
    replyTo: env("ENQUIRY_TO"),
    subject: "Thank you for contacting Hydro Hub Industries",
    text:
      `Hi ${first},\n\nThank you for your enquiry. Our team has received your details and will get back to you ` +
      `by ${e.contact === "Email" ? "email" : e.contact === "WhatsApp" ? "WhatsApp" : "phone"} within one working day.\n\n` +
      `Hydro Hub Industries\nBengaluru, Karnataka, India`,
    html: layout(
      `Thank you, ${first}`,
      `<p style="margin:0 0 16px;font-size:15px;line-height:1.6">Thank you for your enquiry. Our team has received your details and will
      get back to you by ${e.contact === "Email" ? "email" : e.contact === "WhatsApp" ? "WhatsApp" : "phone"} within one working day.</p>
      ${summary.some(([, v]) => v) ? `<p style="margin:0 0 8px;font-size:13px;color:#5E6472">Your enquiry</p>${rows(summary)}` : ""}
      <p style="margin:20px 0 0;font-size:15px;line-height:1.6">Let's develop the next generation of water solutions together.<br/>
      <strong>Hydro Hub Industries</strong></p>`
    ),
  });
}
