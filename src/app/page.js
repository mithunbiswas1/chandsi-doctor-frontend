import ClinicsSection from "@/components/pages/home/ClinicsSection";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import VideoReviewsSlider from "@/components/pages/home/VideoReviewsSlider";


export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#f6f9fc] to-[#e8eef6]">
        <Hero></Hero>
        <ClinicsSection></ClinicsSection>
        <Services></Services>
      <VideoReviewsSlider></VideoReviewsSlider>
      </section>
    </main>
  );
}
