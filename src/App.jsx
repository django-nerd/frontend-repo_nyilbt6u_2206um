import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with Spline background */}
      <Hero />

      {/* About */}
      <About />

      {/* Rooms summary */}
      <Rooms />

      {/* Facilities */}
      <Facilities />

      {/* Highlights / Testimonials */}
      <Highlights />

      {/* Gallery */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
