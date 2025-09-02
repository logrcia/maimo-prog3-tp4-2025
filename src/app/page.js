import Navbar from "@/components/Navbar";
import SectionMusic from "@/components/SectionMusic";
import Footer from "@/components/Footer";
import SectionStore from "@/components/SectionStore";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <SectionMusic/>
      <SectionStore/>
      <Footer/>
    </div>
  );
}
