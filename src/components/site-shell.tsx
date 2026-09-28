"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Dumbbell, Menu, X as XIcon } from "lucide-react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="FITFORGE home"><span className="brand-mark"><Dumbbell size={18} /></span><span>FIT<span>FORGE</span></span></Link>
        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <div className="mobile-auth"><Link href="/login" onClick={() => setOpen(false)}>Log in</Link><Link href="/signup" className="btn" onClick={() => setOpen(false)}>Join FITFORGE <ArrowUpRight size={15} /></Link></div>
        </nav>
        <div className="header-actions"><Link href="/login" className="login-link">Log in</Link><Link href="/signup" className="btn header-join">Join FITFORGE <ArrowUpRight size={15} /></Link></div>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <XIcon /> : <Menu />}</button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="wrap footer-main">
      <div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark"><Dumbbell size={18} /></span><span>FIT<span>FORGE</span></span></Link><p>Build strength for the life you want to live. Training, nutrition, and a community that moves with you.</p><a className="footer-mail" href="mailto:gabrielgabriel9727@gmail.com">gabrielgabriel9727@gmail.com</a></div>
      <div className="footer-links"><h3>Explore</h3>{navItems.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-links"><h3>Member access</h3><Link href="/login">Log in</Link><Link href="/signup">Create an account</Link><Link href="/dashboard">Member dashboard</Link></div>
      <div className="footer-social"><h3>Find your people</h3><div><a aria-label="X" href="https://x.com" target="_blank" rel="noreferrer">𝕏</a><a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer">in</a><a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">◎</a></div><Link className="footer-cta" href="/contact">Talk to a coach <ArrowUpRight size={16} /></Link></div>
    </div>
    <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} FITFORGE. Stronger, together.</span><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}