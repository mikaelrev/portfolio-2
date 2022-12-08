import "./App.css";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Hero />
      </div>
    </div>
  );
}

export default App;
