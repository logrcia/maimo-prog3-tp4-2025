'use client';
import Image from "next/image";
import { useShopContext } from "@/app/contexts/ShopContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useShopContext(); 

  return (
    <div className="flex flex-col justify-between bg-stone-300 text-black m-3 p-5 w-[300px] rounded-3xl flex-shrink-0 shadow-xl/20">
      <p>{product.name}</p>
      <Image
        src={`/dummy-images/products/${product.image}`}
        width={300}
        height={300}
        alt={`${product.name}`}
        priority
      />
      <p>Cantidad: {product.qty}</p>
      <p>Size: {product.selectedSize}</p>
      <p>Color: {product.selectedColor}</p>
      <p>Print: {product.selectedPrint}</p>
      <p>Price: {product.selectedPrice}</p>
      <button
        onClick={() => removeFromCart(product)}
        className="bg-black text-white mt-5 w-full py-5 rounded-4xl cursor-pointer"
      >
        Remove from cart
      </button>
    </div>
  );
};

export default CartCard;
