import Arc from "./components/Arc";
import ConnectWithDevelopers from "./components/ConnectWithDevelopers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectBasedFreelanceWorkSection from "./components/ProjectBasedFreelanceWorkSection";
import SoftwareSection from "./components/SoftwareSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SoftwareSection />
      <ProjectBasedFreelanceWorkSection />
      <Arc />
      <ConnectWithDevelopers />
      <Footer />
    </>
  );
}

export default App;
