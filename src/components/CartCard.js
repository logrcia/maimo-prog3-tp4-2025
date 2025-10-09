'use client'
import Image from "next/image"
const CartCard = ({ product }) => {
  return (
    <div className="flex flex-col justify-between bg-stone-300 text-black m-3 p-5 w-[300px]  rounded-3xl flex-shrink-0 shadow-xl/20">
      {product.name}
      <Image
        src={`/dummy-images/products/${product.image[0]}`}
        width={300}
        height={300}
        alt={`${product.name}`}
        priority
        />
    
    </div>
  )
}

export default CartCard