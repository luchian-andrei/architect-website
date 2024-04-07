import "./App.css";
import Header from "./sections/Header";
import Logo from "./sections/Logo";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Logo />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
