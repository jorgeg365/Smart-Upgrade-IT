import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import IntroScreen from "./components/IntroScreen.jsx";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}
      <Header />
      <Home />
      <Footer />
    </>
  );
}
