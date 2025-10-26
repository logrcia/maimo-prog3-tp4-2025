import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(3,7,18,1), rgba(3,7,18,0)), url(/dummy-images/Folklore.webp)",
      }}
      className="relative h-screen bg-cover bg-no-repeat bg-bottom text-white"
    >
      <Navbar />
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Welcome to the lakes</h1>
        <h3 className="text-3xl">a website for the poets</h3>
      </div>
    </div>
  );
};

export default Hero;
