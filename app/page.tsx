import LoadingScreen from "./components/LoadingScreen";
import About from "./pages/About";
import Hero from "./pages/Hero";

export default function Page() {
  return (
    <div>
      <Hero />
      {/* <LoadingScreen /> */}
      <About />
    </div>
  );
}
