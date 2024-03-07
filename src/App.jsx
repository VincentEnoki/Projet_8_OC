import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="container text-white flex flex-col items-center">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
