import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, CalendarDays, Flame, Target } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { LogoutButton } from "@/components/logout-button";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/login?setup=required");
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/login?next=%2Fdashboard");

  return <>
    <PageIntro kicker="MEMBER SPACE" title="YOUR WORK." highlight="YOUR MOMENTUM." description="A steady practice, built around the goals that matter to you. Keep showing up and let the small wins add up." />
    <section className="section"><div className="wrap"><div className="dashboard-top"><div><span className="eyebrow">WELCOME BACK</span><h1 className="section-title">{user.email?.split("@")[0] ?? "ATHLETE"}<span className="orange-text">.</span></h1><p className="section-copy">One good session at a time. Your next move is right here.</p></div><LogoutButton /></div><div className="dashboard-cards"><article className="dashboard-card"><span><CalendarDays size={14} /> YOUR WEEK</span><b>Start fresh</b><p>Pick two or three training windows that fit your week.</p></article><article className="dashboard-card"><span><Target size={14} /> YOUR FOCUS</span><b>Build a rhythm</b><p>Consistency is a skill. Begin with sessions you can repeat.</p></article><article className="dashboard-card"><span><Flame size={14} /> NEXT UP</span><b>Make a plan</b><p>Choose the right training focus for where you are today.</p></article></div><div className="content-tile dashboard-next"><span className="eyebrow">KEEP YOUR MOMENTUM</span><h2>Choose your next focus.</h2><p>Explore training paths and find a starting point that feels achievable. A coach can help you tailor the details.</p><Link className="btn" href="/programs">Explore programs <ArrowUpRight size={16} /></Link></div></div></section>
  </>;
}
