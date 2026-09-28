export function PageIntro({ kicker, title, highlight, description }: { kicker: string; title: string; highlight?: string; description: string }) {
  return <section className="page-hero grid-lines"><div className="wrap page-hero-inner"><span className="eyebrow">{kicker}</span><h1>{title}{highlight && <> <span className="orange-text">{highlight}</span></>}</h1><p>{description}</p></div></section>;
}
