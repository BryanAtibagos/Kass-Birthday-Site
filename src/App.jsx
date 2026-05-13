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
  const t1 = setTimeout(() => setFadeOut(true), 2500);
  const t2 = setTimeout(() => setLoading(false), 3200);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
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
      <Home startAnimation={!loading} />
      <Pictures />
      <Song />
    </div>
  );
}

export default App;