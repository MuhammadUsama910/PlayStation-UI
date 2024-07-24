import Follow from "./components/Follow";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { LatestNews } from "./components/LatestNews";
import { Navbar } from "./components/Navbar";


export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LatestNews/>
      <Follow/>
      <Footer/>
    </>
  )
}