import Hero from "../components/Hero";
import MainFeatures from "../components/MainFeatures";
import HelpVideo from "../components/HelpVideo";
import Companies from "../components/Companies";
import About from "../components/About";
import Info from "../components/Info";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Support from "../components/Support";
import Teams from "../components/Team";


const Home = () => {
  return (
    <>
      <Hero />
      <HelpVideo />
      <Companies />
      <MainFeatures />
      <About />
      <Info />
      <Reviews />
      <Pricing />
      <Teams />
      <Support />
    </>
  );
};

export default Home;
