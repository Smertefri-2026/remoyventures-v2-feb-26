import PublicHeader from "@/components/shell/PublicHeader";
import PublicFooter from "@/components/shell/PublicFooter";

import Section1Hero from "@/app/sections/Section1Hero";
import Section2About from "@/app/sections/Section2About";
import Section3Services from "@/app/sections/Section3Services";
import Section4Collaboration from "@/app/sections/Section4Collaboration";
import Section8Contact from "@/app/sections/Section8Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="top" />
      <PublicHeader />

      {/* ✅ Kun innholdet er boxed */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <Section1Hero />
        <Section2About />
        <Section3Services />
        <Section4Collaboration />
        <Section8Contact />
      </div>

      {/* ✅ Footer utenfor wrapper = full width */}
      <PublicFooter />
    </main>
  );
}