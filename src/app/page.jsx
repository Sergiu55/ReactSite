import HeroSection from "../components/HeroSection";
import HomeContent from "../components/HomeContent";
import StrapiSections from "./components/StrapiSections";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <HomeContent />
      <StrapiSections />
    </main>
  );
}
