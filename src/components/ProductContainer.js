'use client';
import Navbar from '@/components/Navbar';

import { useState } from "react"
const ProductContainer = ({id}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex mx-15 mt-15 justify-center items-center">
      <Navbar/>
      <div className="w-[400px] h-[400px] bg-neutral-600"></div>
      <div className="ml-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">folklore CD</h1>
        <p className="text-xl mt-2">$9.99</p>
      </div>
      <div>
        <h2>quantity</h2>
        <div className="px-4 py-2 border w-fit mb-8">
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
      </div>

      <p>Ships on or before September 8, 2025</p>

      <button className="bg-black w-fit p-5 text-white py-3 rounded-full hover:bg-gray-800 transition px-12">
        add to cart
      </button>
    </div>
    </div>
  )
}

export default ProductContainer