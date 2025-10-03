'use client';

import { useShopContext } from "@/app/contexts/ShopContext";
import { useState, useEffect } from "react"
import Link from "next/link";
const ProductContainer = ({ params }) => {
  const { getOneProduct, product } = useShopContext()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      
      if (!params) {
        console.error("params es undefined")
        return
      }
      
      const resolvedParams = await params
      
      if (resolvedParams?.id) {
        getOneProduct(resolvedParams.id)
      }
    }
    fetchProduct()
  }, [])
  
  return (
    <div className="flex mx-15 mt-50 mb-50 justify-center items-center">
      <div className="w-[600px] h-[600px] bg-neutral-600"></div>
      <div className="ml-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2">${product.price}</p>
      </div>
      <div className="w-100 mb-10">
        <p>{product.description}</p>
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

      <button className="bg-black text-white mt-5 w-full py-5 rounded-4xl">Add to cart</button>
    </div>
    </div>
  )
}

export default ProductContainer