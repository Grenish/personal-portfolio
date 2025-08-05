import About from "@/components/about";
import DailyDevSquad from "@/components/ads";
import HackathonTimeline from "@/components/hackathon";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen w-full bg-gray-950 relative">
        <div
          className="absolute inset-0 z-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <About />

      <Projects />

      <HackathonTimeline />

      <DailyDevSquad />
    </div>
  );
}
