import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div style={{
      backgroundImage: "linear-gradient(to bottom, rgba(3,7,18,1), rgba(3,7,18,0)), url(/dummy-images/Folklore.webp)",
    }}  
    className="h-screen  text-white bg-cover bg-no-repeat bg-bottom">
      <div className="mx-15 flex justify-between max-w-full py-8 items-center ">
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
    </div>
  );
};

export default Navbar;
