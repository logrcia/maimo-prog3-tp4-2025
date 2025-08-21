import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-950/100 to-gray-950/0 text-white ">
      <div className="mx-15 flex justify-between max-w-full py-8 items-center ">
        <Image
          src="/assets/folklore-logo-white.svg"
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
              src="/assets/cart.svg"
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
