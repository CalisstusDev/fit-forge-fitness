import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Create an account" };

export default function SignupPage() {
  return <section className="auth-page"><div className="auth-art"><div className="auth-art-copy"><span className="eyebrow">ONE GOOD CHOICE AT A TIME</span><h2>YOUR STRONGER<br /><span className="orange-text">SELF STARTS HERE.</span></h2></div></div><div className="auth-panel"><AuthForm mode="signup" /></div></section>;
}
