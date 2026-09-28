"use client";

import { useEffect, useState } from "react";
import { foodImages } from "@/lib/content";

const categories = ["All", "Plant power", "Morning fuel", "Protein", "Recovery", "Training", "Balanced plate", "Whole foods", "Fresh energy", "Everyday fuel"];

function shuffled<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [randomized, setRandomized] = useState(foodImages);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setRandomized(shuffled(foodImages)));
    return () => cancelAnimationFrame(frame);
  }, []);

  const visible = category === "All" ? randomized : randomized.filter((image) => image.kind === category);

  return <>
    <div className="filter-row" aria-label="Filter gallery images">
      {categories.map((item) => <button type="button" key={item} className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <div className="gallery-grid">{visible.map((image) => <article className="gallery-tile" key={`${image.title}-${image.src}`} style={{ backgroundImage: `url('${image.src}')` }}><div><span>{image.kind}</span><h2>{image.title}</h2></div></article>)}</div>
  </>;
}
