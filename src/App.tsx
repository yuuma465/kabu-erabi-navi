import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LineCta from "./components/LineCta";
import RankingSection from "./components/RankingSection";
import ScrollHeader from "./components/ScrollHeader";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#282828]">
      <ScrollHeader />
      <Hero />
      <LineCta />
      <RankingSection />
      <Footer />
    </main>
  );
}
