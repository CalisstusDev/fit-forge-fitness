"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Shuffle } from "lucide-react";
import { fitnessImages } from "@/lib/content";

function chooseMoments() {
  const shuffled = [...fitnessImages];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled.slice(0, 5 + Math.floor(Math.random() * 4));
}

export function FitnessGallery() {
  const [moments, setMoments] = useState(fitnessImages.slice(0, 6));

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMoments(chooseMoments()));
    return () => cancelAnimationFrame(frame);
  }, []);

  return <section className="fitness-gallery-section">
    <div className="wrap">
      <div className="fitness-gallery-heading">
        <div><span className="eyebrow">PEOPLE IN MOTION</span><h2 className="section-title">MADE OF<br /><span className="orange-text">MOMENTUM.</span></h2><p className="section-copy">Different goals. Different starting lines. The same decision to show up and keep moving.</p></div>
        <div className="fitness-gallery-actions"><button className="shuffle-button" type="button" onClick={() => setMoments(chooseMoments())}><Shuffle size={16} /> Mix the moments</button><Link className="text-link" href="/gallery">Explore the gallery <ArrowUpRight size={16} /></Link></div>
      </div>
      <div className="fitness-gallery-grid" aria-live="polite">{moments.map((image, index) => <article key={image.title} className={`fitness-shot fitness-shot-${index % 6}`} style={{ backgroundImage: `url('${image.src}')`, backgroundPosition: image.position }} role="img" aria-label={`${image.title}, ${image.kind.toLowerCase()}`}><div><span>{image.kind}</span><h3>{image.title}</h3></div></article>)}</div>
    </div>
  </section>;
}