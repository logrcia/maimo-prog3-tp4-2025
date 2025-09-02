import Navbar from "@/components/Navbar";
import SectionMusic from "@/components/SectionMusic";
import Footer from "@/components/Footer";
import SectionStore from "@/components/SectionStore";
import Lyrics from "@/components/Lyrics";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SectionMusic/>
      <SectionStore/>
      <Lyrics/>
      <Footer/>
    </div>
  );
}
