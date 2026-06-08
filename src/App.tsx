import { useEffect, useState } from "react";
import ArticleListSection from "./components/ArticleListSection";
import ArticlePage from "./components/ArticlePage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LineCta from "./components/LineCta";
import RankingSection from "./components/RankingSection";
import ScrollHeader from "./components/ScrollHeader";

type Route = { name: "home" } | { name: "post"; slug: string };

function readRoute(): Route {
  const match = window.location.hash.match(/^#\/posts\/([^/?#]+)/);
  return match ? { name: "post", slug: decodeURIComponent(match[1]) } : { name: "home" };
}

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || hash.startsWith("/")) {
      window.scrollTo({ top: 0 });
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView();
    });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#282828]">
      <ScrollHeader />
      <Hero />
      <ArticleListSection />
      <LineCta />
      <RankingSection />
      <Footer />
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => readRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(readRoute());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (route.name === "post") {
    return <ArticlePage slug={route.slug} />;
  }

  return <HomePage />;
}
