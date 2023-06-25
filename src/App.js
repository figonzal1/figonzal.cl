import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Components/HomeSection/Home";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
