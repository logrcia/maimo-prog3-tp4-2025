import Navbar from "@/components/Navbar";
import SectionMusic from "@/components/SectionMusic";
import Footer from "@/components/Footer";
import SectionStore from "@/components/SectionStore";
import Lyrics from "@/components/Lyrics";
import Tracklist from "@/components/Tracklist";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SectionMusic/>
      <SectionStore/>
      <Lyrics/>
      <Tracklist/>
      <Footer/>
    </div>
  );
}
