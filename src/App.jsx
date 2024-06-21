import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative z-0">
        <div className="overflow-x-hidden">
          <Hero />
        </div>
      </main>
    </>
  );
}

export default App;
