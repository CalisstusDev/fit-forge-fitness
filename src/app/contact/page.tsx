import { Mail, MapPin, MessageSquare } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return <>
    <PageIntro kicker="LET'S TALK TRAINING" title="YOUR NEXT STEP" highlight="STARTS HERE." description="Questions about training, nutrition, or getting started? Tell us what is on your mind and our team will get back to you." />
    <section className="section"><div className="wrap contact-layout"><aside className="contact-details"><span className="eyebrow">CONTACT THE TEAM</span><h2>GOOD THINGS<br />START WITH<br /><span className="orange-text">A CONVERSATION.</span></h2><p>Share a goal, ask a question, or tell us what you need. We will get back to you as soon as we can.</p><div className="contact-detail"><Mail size={18} /><span>Email us<small><a href="mailto:gabrielgabriel9727@gmail.com">gabrielgabriel9727@gmail.com</a></small></span></div><div className="contact-detail"><MessageSquare size={18} /><span>What to expect<small>A personal reply from the FITFORGE team</small></span></div><div className="contact-detail"><MapPin size={18} /><span>Our approach<small>Support that fits real life, wherever you train</small></span></div></aside><ContactForm /></div></section>
  </>;
}
