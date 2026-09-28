import Link from "next/link";
import { NewsletterStatus } from "@/components/newsletter-status";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Play, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { FitnessGallery } from "@/components/fitness-gallery";
import { programs } from "@/lib/content";

const mealShots = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=950&q=85",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=950&q=85",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=950&q=85",
];

export default async function Home({ searchParams }: { searchParams: Promise<{ newsletter?: string | string[] }> }) {
  const params = await searchParams;
  return <>
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <div className="hero-kicker"><span /> TRAIN WITH INTENT. LIVE WITH POWER.</div>
        <h1 className="rise">BUILD YOUR<br /><span>STRONGER SELF</span></h1>
        <p className="hero-copy rise">Strength is built one choice at a time. Find your rhythm with expert coaching, honest food, and a crew that keeps showing up.</p>
        <div className="hero-actions rise"><Link className="btn" href="/signup">Start Your Journey <ArrowUpRight size={17} /></Link><Link className="hero-secondary" href="/programs"><span className="play-ring"><Play size={13} fill="currentColor" /></span> Explore Programs</Link></div>
        <div className="hero-note"><span>01 / 03</span><i /><span>MOVE WITH PURPOSE</span><ArrowDown size={15} /></div>
      </div>
      <div className="hero-stamp"><span>FORGED<br />TOGETHER</span><b>FF</b></div>
    </section>

    <section className="proof-strip"><div className="wrap proof-inner"><span className="eyebrow">BUILT FOR REAL LIFE</span><div><b>01</b><span>Meet yourself where you are</span></div><div><b>02</b><span>Progress with a plan</span></div><div><b>03</b><span>Keep what makes you feel good</span></div></div></section>

    <section className="section" id="programs"><div className="wrap">
      <Reveal className="section-heading-row"><div><span className="eyebrow">TRAINING THAT MEETS YOU</span><h2 className="section-title">FIND YOUR<br /><span className="orange-text">NEXT GEAR.</span></h2></div><div><p className="section-copy">No one-size-fits-all plans. Choose the kind of work that moves you forward, then make it your own with coaching that pays attention.</p><Link className="text-link" href="/programs">View all programs <ArrowRight size={16} /></Link></div></Reveal>
      <div className="program-grid">{programs.map((program) => <Reveal className="program-card" key={program.number}><div className="program-top"><span>{program.number} / TRAINING</span><span className="program-icon">{program.icon}</span></div><h3>{program.name}</h3><p>{program.text}</p><div className="program-bottom"><span>{program.tag}</span><Link href="/programs" aria-label={`Explore ${program.name}`}><ArrowUpRight size={19} /></Link></div></Reveal>)}</div>
    </div></section>

    <section className="why-section grid-lines"><div className="wrap why-layout"><Reveal className="why-photo"><div className="why-photo-img" /><div className="photo-label"><span>STRONG IS A PRACTICE</span><b>FF / 24</b></div></Reveal><Reveal className="why-content"><span className="eyebrow">WHY FITFORGE</span><h2 className="section-title">THE WORK<br />IS YOURS.<br /><span className="orange-text">THE CREW IS OURS.</span></h2><p className="section-copy">We make room for every starting point. A clear plan, thoughtful coaching, and a community that celebrates the quiet wins as much as the big ones.</p><ul className="check-list"><li><Check size={16} /> Coaches who listen before they load the bar</li><li><Check size={16} /> Training designed for long-term progress</li><li><Check size={16} /> Nutrition guidance without the noise</li></ul><Link className="btn btn-ghost" href="/about">Meet FITFORGE <ArrowUpRight size={16} /></Link></Reveal></div></section>

    <section className="feature-workout"><div className="workout-photo" /><div className="workout-scrim" /><div className="wrap workout-content"><span className="eyebrow">FEATURED SESSION / 35 MIN</span><h2 className="section-title">POWER<br />IN EVERY<br /><span className="orange-text">REP.</span></h2><p>Build full-body strength with a focused circuit that leaves room for good form, steady breath, and a little more confidence than you brought in.</p><Link className="btn" href="/programs">View Programs <ArrowUpRight size={16} /></Link><span className="workout-watermark">TRAIN / RECOVER / REPEAT</span></div></section>

    <FitnessGallery />

    <section className="section nutrition-peek"><div className="wrap nutrition-layout"><Reveal className="nutrition-copy"><span className="eyebrow">NOURISH THE WORK</span><h2 className="section-title">EAT WELL.<br /><span className="orange-text">FEEL READY.</span></h2><p className="section-copy">Food is not a test you pass. Find a satisfying rhythm with flexible meals, plenty of color, and the fuel to take on what matters.</p><div className="nutrition-points"><span><b>01</b> Color your plate</span><span><b>02</b> Make protein count</span><span><b>03</b> Keep it enjoyable</span></div><Link className="btn" href="/nutrition">Explore Nutrition <ArrowUpRight size={16} /></Link></Reveal><Reveal className="meal-collage"><div className="meal-main" style={{ backgroundImage: `url('${mealShots[0]}')` }} /><div className="meal-small meal-two" style={{ backgroundImage: `url('${mealShots[1]}')` }} /><div className="meal-small meal-three" style={{ backgroundImage: `url('${mealShots[2]}')` }} /><div className="meal-caption"><Sparkles size={14} /> GOOD FOOD, NO GUILT</div></Reveal></div></section>

    <section className="stats-band"><div className="wrap stats-grid"><div><span className="eyebrow">THE FITFORGE EFFECT</span><h2>SMALL WINS.<br /><span className="orange-text">BIG MOMENTUM.</span></h2></div><div className="stat"><b>3<span>×</span></b><p>weekly sessions<br />to build a rhythm</p></div><div className="stat"><b>01</b><p>body, one plan<br />made for you</p></div><div className="stat"><b>100<span>%</span></b><p>progress measured<br />your way</p></div></div></section>

    <section className="section testimonials"><div className="wrap"><div className="testimonial-header"><div><span className="eyebrow">REAL PEOPLE, REAL PROGRESS</span><h2 className="section-title">STRONGER LOOKS<br /><span className="orange-text">DIFFERENT ON EVERYONE.</span></h2></div><span className="review-count">COMMUNITY NOTES / 001—003</span></div><div className="quote-grid"><blockquote><span>“</span><p>I stopped chasing a perfect week and started building a routine I actually enjoy. That changed everything.</p><footer><b>MAYA R.</b><small>MEMBER SINCE 2023</small></footer></blockquote><blockquote><span>“</span><p>The coaching feels personal. I know what I’m working toward, and I can see myself getting there.</p><footer><b>JORDAN K.</b><small>STRENGTH LAB</small></footer></blockquote><blockquote><span>“</span><p>Training gave me more than strength. It gave me a place where showing up is enough to start.</p><footer><b>ELI T.</b><small>ENGINE ROOM</small></footer></blockquote></div></div></section>

    <section className="join-banner"><div className="join-banner-image" /><div className="wrap join-inner"><div><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>SHOW UP<br /><span>FOR YOURSELF.</span></h2></div><Link className="btn" href="/signup">Join FITFORGE <ArrowUpRight size={17} /></Link></div></section>

    <section className="newsletter" id="newsletter"><div className="wrap newsletter-inner"><div><span className="eyebrow">THE FORGE LETTER</span><h2>GOOD ENERGY.<br />STRAIGHT TO YOUR INBOX.</h2><p>Training ideas, food inspiration, and the occasional nudge to keep going.</p></div><div className="newsletter-form-wrap"><form action="/api/newsletter" method="post" className="newsletter-form"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" name="email" placeholder="Your email address" required /><button className="btn">Count me in <ArrowRight size={16} /></button><small>Thoughtful notes only. Unsubscribe whenever.</small></form><NewsletterStatus received={params.newsletter === "received"} /></div></div></section>
  </>;
}
