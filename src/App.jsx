import "./App.css";
import { useEffect, useState } from "react";

import Home from "./Home";
import Navbar from "./Navbar";
import Pictures from "./Pictures";
import Song from "./Song";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // simulate + give time for 3D + fonts + assets
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out first
    }, 2500);

    const hide = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  if (loading) {
    return (
      <div className={`valentine-loader ${fadeOut ? "fade-out" : ""}`}>
        <div className="heart">💗</div>
        <h1>Just for you...</h1>
        <p>Loading something sweet 💕</p>
      </div>
    );
  }

  return (
    <div className="app-fade-in">
      <Navbar />
      <Home />
      <Pictures />
      <Song />
    </div>
  );
}

export default App;