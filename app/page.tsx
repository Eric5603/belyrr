import Testimonial from "./Components/Testimonial";
import Icons from "./Components/Icons";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import Headers from "./Components/Header";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import ShopAll from "./Components/ShopAll";

import CtaSection from "./Components/CtaSection";
import Gallery from "./Components/Gallery";
export default function Home() {
  return (
   <div>
    <Headers />
    <Hero/>
    {/* Add more components as needed */}
    <ShopAll/>
    <Featured />
   

    {/* Add more components as needed */}
    <Icons />
    <Feed />
    {/* Add more components as needed */}
    <Gallery />
    <Testimonial />
  
    <CtaSection/>
    <Footer />
   </div>
  );
}
