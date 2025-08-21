import Navbar from "@/components/Navbar";
import SectionMusic from "@/components/SectionMusic";
import Footer from "@/components/Footer";
import Tracklist from "@/components/Tracklist";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SectionMusic/>
      <Tracklist/>
      <Footer/>
    </div>
  );
}
