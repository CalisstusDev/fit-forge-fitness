import { Resend } from "resend";
import { z } from "zod";

const newsletterSchema = z.object({ email: z.email().max(254) });

export async function POST(request: Request) {
  let form: FormData;
  try { form = await request.formData(); } catch { return Response.json({ error: "Submit a valid email address." }, { status: 400 }); }
  const result = newsletterSchema.safeParse({ email: form.get("email") });
  if (!result.success) return Response.json({ error: "Enter a valid email address." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return Response.json({ error: "Newsletter delivery is not configured. Add RESEND_API_KEY and CONTACT_FROM_EMAIL to the deployment environment." }, { status: 503 });

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: "gabrielgabriel9727@gmail.com",
    replyTo: result.data.email,
    subject: "FITFORGE newsletter subscription request",
    text: `Please add this address to the FITFORGE newsletter list: ${result.data.email}`,
  });
  if (error || !data) return Response.json({ error: "The email provider could not process your request." }, { status: 502 });
  return Response.redirect(new URL("/?newsletter=received#newsletter", request.url), 303);
}
