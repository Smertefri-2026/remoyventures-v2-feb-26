import PublicHeader from "@/components/shell/PublicHeader";

import Section1Hero from "@/app/sections/Section1Hero";
import Section2Intro from "@/app/sections/Section2Intro";
import Section3ProjectsGrid from "@/app/sections/Section3ProjectsGrid";
import Section4Smertefri from "@/app/sections/Section4Smertefri";
import Section5Smooday from "@/app/sections/Section5Smooday";
import Section6PTCrew from "@/app/sections/Section6PTCrew";
import Section7Investors from "@/app/sections/Section7Investors";
import Section8Contact from "@/app/sections/Section8Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PublicHeader />

      <div className="mx-auto w-full max-w-6xl px-6">
        <Section1Hero />
        <Section2Intro />
        <Section3ProjectsGrid />
        <Section4Smertefri />
        <Section5Smooday />
        <Section6PTCrew />
        <Section7Investors />
        <Section8Contact />
      </div>
    </main>
  );
}