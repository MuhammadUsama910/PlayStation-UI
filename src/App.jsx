import ConsoleAccesorioes from "./components/ConsoleAccesorioes";
import FeelNewReal from "./components/FeelNewReal";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import GamesOutNow from "./components/GamesOutNow";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import PlayStationPlus from "./components/PlayStationPlus";
import PlayStationStore from "./components/PlayStationStore";
import ThisJuly from "./components/ThisJuly";
import ThisJulyCard from "./components/ThisJulyCard";


export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ConsoleAccesorioes/>
      <GamesOutNow/>
      <PlayStationPlus/>
      <FeelNewReal/>
      <ThisJuly/>
      <ThisJulyCard/>
      <PlayStationStore/>
      <LatestNews/>
      <Follow/>
      <Footer/>
    </>
  )
}