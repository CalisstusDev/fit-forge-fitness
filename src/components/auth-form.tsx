"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { ArrowUpRight } from "lucide-react";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const isSignup = mode === "signup";

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      setError("Authentication is not configured yet. Add the Supabase URL and anon key to the environment before continuing.");
      return;
    }
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    setBusy(true);
    try {
      const supabase = createBrowserClient(url, key);
      const result = isSignup
        ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=%2Fdashboard` } })
        : await supabase.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (isSignup && !result.data.session) {
        setNotice("Your account is ready. Check your email to confirm your address, then log in.");
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "We could not complete that request.");
    } finally {
      setBusy(false);
    }
  }

  return <form className="auth-form" onSubmit={submit}>
    <span className="eyebrow">{isSignup ? "YOUR NEXT CHAPTER" : "WELCOME BACK"}</span>
    <h1>{isSignup ? <>CREATE<br /><span className="orange-text">YOUR ACCOUNT.</span></> : <>GOOD TO<br /><span className="orange-text">SEE YOU.</span></>}</h1>
    <p>{isSignup ? "A stronger routine starts with one small step. Set up your FITFORGE account to get started." : "Pick up where you left off. Your next session is waiting."}</p>
    <label className="form-label">Email address<input className="field" type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
    <label className="form-label">Password<input className="field" type="password" name="password" autoComplete={isSignup ? "new-password" : "current-password"} required minLength={8} maxLength={128} placeholder={isSignup ? "At least 8 characters" : "Your password"} /></label>
    {error && <p className="form-status form-error" role="alert">{error}</p>}
    {notice && <p className="form-status" role="status">{notice}</p>}
    <button className="btn" type="submit" disabled={busy}>{busy ? "Please wait..." : isSignup ? "Create account" : "Log in"} <ArrowUpRight size={16} /></button>
    <div className="auth-foot">{isSignup ? "Already a member? " : "New to FITFORGE? "}<Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Log in" : "Create an account"}</Link></div>
  </form>;
}
