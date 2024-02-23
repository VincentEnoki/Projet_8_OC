import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="container text-white flex flex-col items-center">
      <Header />
      <Nav />
      <About />
      <Experience />
    </div>
  );
}

export default App;
