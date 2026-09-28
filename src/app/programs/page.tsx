import Link from "next/link";
import { ArrowUpRight, Clock3, Dumbbell, HeartPulse, Move3d } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { programs } from "@/lib/content";

const details = [
  { icon: Dumbbell, focus: "Progressive strength", format: "45–60 minutes", level: "All experience levels", detail: "Learn the core movement patterns, build confidence under load, and progress at a pace your body can recover from." },
  { icon: HeartPulse, focus: "Conditioning & capacity", format: "30–40 minutes", level: "Scalable intensity", detail: "Intervals, carries, and circuits help you build stamina and a stronger engine without turning every session into a race." },
  { icon: Move3d, focus: "Mobility & control", format: "20–35 minutes", level: "Recovery friendly", detail: "Intentional mobility work restores range and helps you move with better control in training and everyday life." },
];

export default function ProgramsPage() {
  return <>
    <PageIntro kicker="TRAIN WITH INTENT" title="A PLAN FOR" highlight="YOUR NEXT GEAR." description="Three ways to build a stronger, more capable you. Choose a focus, get the guidance you need, and let consistency do its work." />
    <section className="section"><div className="wrap content-grid">{details.map((item, index) => { const Icon = item.icon; return <article className="content-tile program-detail" key={item.focus}><span className="tile-number">0{index + 1}</span><Icon size={25} className="orange-text" /><h2>{programs[index].name}</h2><p>{item.detail}</p><div className="program-specs"><span><Clock3 size={14} /> {item.format}</span><span>{item.level}</span></div><Link className="text-link" href="/signup">Choose this focus <ArrowUpRight size={15} /></Link></article>; })}</div></section>
    <section className="feature-workout"><div className="workout-photo" /><div className="workout-scrim" /><div className="wrap workout-content"><span className="eyebrow">HOW WE COACH</span><h2 className="section-title">FORM FIRST.<br /><span className="orange-text">THEN FORWARD.</span></h2><p>Every session starts with a clear intention and leaves space to adapt. We help you find the right challenge for the day you are having.</p><Link className="btn" href="/contact">Talk to a coach <ArrowUpRight size={16} /></Link></div></section>
    <section className="section"><div className="wrap"><span className="eyebrow">GET STARTED IN THREE STEPS</span><h2 className="section-title">MAKE THE FIRST<br /><span className="orange-text">MOVE SIMPLE.</span></h2><div className="content-grid"><article className="content-tile"><span className="tile-number">01</span><h3>Tell us your goal</h3><p>Share what you want more of, what your week looks like, and where you are starting from.</p></article><article className="content-tile"><span className="tile-number">02</span><h3>Choose your focus</h3><p>We will help you find the training path that fits your interests and supports your goal.</p></article><article className="content-tile"><span className="tile-number">03</span><h3>Build the rhythm</h3><p>Begin with a repeatable schedule and adjust as your strength and confidence grow.</p></article></div><Link className="btn programs-cta" href="/signup">Start Your Journey <ArrowUpRight size={16} /></Link></div></section>
  </>;
}
