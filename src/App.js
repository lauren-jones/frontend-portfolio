import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Ribbon from "./components/Ribbon";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Ribbon />
      <About />
    </div>
  );
}

export default App;
