import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Ribbon from "./components/Ribbon";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Ribbon />
      <About />
      <Projects />
    </div>
  );
}

export default App;
