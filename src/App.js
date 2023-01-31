import "./styles/App.css";
import MainLayout from "./components/MainLayout";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <MainLayout>
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Contact />
      </MainLayout>
    </div>
  );
}

export default App;
