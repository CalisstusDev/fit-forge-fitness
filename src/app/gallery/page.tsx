import { GalleryGrid } from "@/components/gallery-grid";
import { PageIntro } from "@/components/page-intro";

export default function GalleryPage() {
  return <>
    <PageIntro kicker="COLOR YOUR ROUTINE" title="GOOD FOOD." highlight="GOOD ENERGY." description="A look at the meals, movement, and everyday moments that help make a healthy routine feel like your own." />
    <section className="section"><div className="wrap"><GalleryGrid /></div></section>
  </>;
}
