'use client';

import { useShopContext } from "@/app/contexts/ShopContext";
import { useState, useEffect } from "react"
import Image from "next/image";

const ProductContainer = ({ params }) => {
  const { getOneProduct, product, handleAddToCart } = useShopContext()
  const [qty, setQty] = useState(1)
  const [image, setImage] = useState("")

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

  useEffect(()=>{
    if(product?.image && product.image.length > 0){ //product?image : existe product y tiene la propiedad image?
      setImage(product.image[0])
    }
  }, [product])

  const addToCart = (product) => {

    const productToAdd = {
      ...product,
      qty
    };
    handleAddToCart(productToAdd)
  }

  
  return (
    <div className="flex mx-15 mt-50 mb-50 justify-center items-center">
      <div className="w-[600px] h-[600px]">
        <Image
        src={`/dummy-images/products/${image}`}
        width={600}
        height={600}
        alt={`${product.name}`}
        priority
        />
      </div>
      <div className="ml-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2">${product.price}</p>
      </div>
      <div className="w-100 mb-10">
        <p>{product.description}</p>
      </div>
      <div>
        <h2>Quantity</h2>
        <div className="px-4 py-2 border mt-2 w-fit mb-8">
          <button onClick={()=> setQty(qty - 1)}>-</button>
          <span className="mx-2">{qty}</span>
          <button onClick={()=> setQty(qty + 1)}>+</button>
        </div>
      </div>

      <p>Ships on or before September 8, 2025</p>

      <button className="bg-black text-white mt-5 w-full py-5 rounded-4xl" onClick={() => addToCart(product)}>Add to cart</button>
    </div>
    </div>
  )
}

export default ProductContainer