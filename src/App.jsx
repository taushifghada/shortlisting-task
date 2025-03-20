import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import WhyCarboncrunch from "./components/WhyCarboncrunch/WhyCarboncrunch";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyCarboncrunch />
      <HowItWorks />
      <Login />
      <Footer />
    </>
  );
}

export default App;
