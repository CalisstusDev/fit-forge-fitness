import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "Send a valid JSON form submission." }, { status: 400 }); }
  const result = contactSchema.safeParse(body);
  if (!result.success) return Response.json({ error: "Check the form fields and try again." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return Response.json({ error: "Email delivery is not configured. Add RESEND_API_KEY and CONTACT_FROM_EMAIL to the deployment environment." }, { status: 503 });

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = result.data;
  const { data, error } = await resend.emails.send({
    from,
    to: "gabrielgabriel9727@gmail.com",
    replyTo: email,
    subject: `FITFORGE contact: ${subject}`,
    text: `New FITFORGE contact message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
  });
  if (error || !data) {
    console.error("FITFORGE contact email failed", error);
    return Response.json({ error: "The email provider could not deliver your message. Please email us directly." }, { status: 502 });
  }
  return Response.json({ ok: true }, { status: 200 });
}
