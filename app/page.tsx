import LoadingScreen from "./components/LoadingScreen";
import About from "./pages/About";
import Hero from "./pages/Hero";
import TechStack from "./pages/TechStack";

export default function Page() {
  return (
    <div>
      <Hero />
      {/* <LoadingScreen /> */}
      <About />
      <TechStack />
    </div>
  );
}
