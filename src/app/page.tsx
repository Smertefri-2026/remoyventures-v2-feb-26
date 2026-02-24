import PublicHeader from "@/components/shell/PublicHeader";
import PublicFooter from "@/components/shell/PublicFooter";

import Section1Hero from "@/app/sections/Section1Hero";
import Section2Investors from "@/app/sections/Section2Investors";
import Section3ProjectsGrid from "@/app/sections/Section3ProjectsGrid";
import Section4Smertefri from "@/app/sections/Section4Smertefri";
import Section5Smooday from "@/app/sections/Section5Smooday";
import Section8Contact from "@/app/sections/Section8Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="top" />
      <PublicHeader />

      {/* ✅ Kun innholdet er boxed */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <Section1Hero />
        <Section2Investors />
        <Section3ProjectsGrid />
        <Section4Smertefri />
        <Section5Smooday />
        <Section8Contact />
      </div>

      {/* ✅ Footer utenfor wrapper = full width */}
      <PublicFooter />
    </main>
  );
}