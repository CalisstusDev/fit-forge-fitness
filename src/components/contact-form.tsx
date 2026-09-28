"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Your message could not be sent.");
      setStatus("Your message has been delivered. A coach will be in touch soon.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <form className="form-grid" onSubmit={submit}>
    <label className="form-label">Your name<input className="field" name="name" autoComplete="name" required maxLength={100} placeholder="Name" /></label>
    <label className="form-label">Email address<input className="field" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
    <label className="form-label full">Subject<input className="field" name="subject" required maxLength={160} placeholder="What can we help with?" /></label>
    <label className="form-label full">Message<textarea className="field form-message" name="message" required minLength={10} maxLength={5000} placeholder="Tell us a little about what you're looking for." /></label>
    <button className="btn full" type="submit" disabled={busy}>{busy ? "Sending..." : "Send your message"} <ArrowUpRight size={16} /></button>
    {status && <p className={`form-status full ${status.startsWith("Your message could") || status.includes("RESEND") ? "form-error" : ""}`} role="status">{status}</p>}
  </form>;
}
