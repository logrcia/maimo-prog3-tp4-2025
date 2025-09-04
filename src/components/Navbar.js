import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div style={{
      backgroundImage: "linear-gradient(to bottom, rgba(3,7,18,1), rgba(3,7,18,0)), url(/dummy-images/Folklore.webp)",
    }}  
    className=" relative h-screen  text-white bg-cover bg-no-repeat bg-bottom">
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-8 h-40 bg-gradient-to-b from-gray-950/100 to-gray-950/0">
        <Image
          src="/dummy-images/folklore-logo-white.svg"
          width={200}
          height={200}
          alt="folklore-logo"
        />
        <div className="flex items-center">
          <Link href={"/"} className="mr-5 text-2xl font-bold">
            Home
          </Link>
          <Link href={"/"} className="mr-5 text-2xl font-bold">
            My account
          </Link>
          <Link href={"/"}>
            <Image
              src="/dummy-images/cart.svg"
              width={40}
              height={40}
              alt="cart-logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Welcome to the lakes</h1>
        <h3 className="text-3xl">a website for the poets</h3>
      </div>
    </div>
  );
};

export default Navbar;
