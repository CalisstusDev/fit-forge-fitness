import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return <section className="auth-page"><div className="auth-art"><div className="auth-art-copy"><span className="eyebrow">TRAIN WITH PURPOSE</span><h2>THE NEXT<br /><span className="orange-text">REP IS YOURS.</span></h2></div></div><div className="auth-panel"><AuthForm mode="login" /></div></section>;
}
