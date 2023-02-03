import "./styles/App.css";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [isSent, setIsSent] = useState(true);

  useEffect(() => {
    const timer = show
      ? setTimeout(() => {
          setShow(false);
        }, 7000)
      : "";

    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className="App">
      <MainLayout>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact setShow={setShow} setIsSent={setIsSent} />
        <Notification show={show} isSent={isSent} />
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;
