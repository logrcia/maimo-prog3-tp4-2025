'use client'
import CardStore from "@/components/CardStore";
import { useShopContext } from "@/app/contexts/ShopContext";
import { useState } from "react";

const SectionStore = () => {
  const {products, getAllProducts, getProductsByCategory} = useShopContext();
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      getAllProducts();
    } else {
      getProductsByCategory(category);
    }
  }

  return (
    < div className="my-20">
        <h2 className="text-4xl font-bold flex flex-wrap justify-center mb-5">Store</h2>
        <div className="flex justify-center mb-5 py-6 text-md">
          <button onClick={() => categoryClick("All")} className={`px-4 py-2 mr-2 ${selectedCategory === "All" ? "border rounded-2xl border-neutral-800" : "hover:bg-gray-300 rounded-2xl"}`}>All</button>
          <button onClick={() => categoryClick("music")} className={`px-4 py-2 mr-2 ${selectedCategory === "music" ? "border rounded-2xl border-neutral-800" : "hover:bg-gray-300 rounded-2xl"}`}>Music</button>
          <button onClick={() => categoryClick("clothes")} className={`px-4 py-2  ${selectedCategory === "clothes" ? "border rounded-2xl border-neutral-800" : "hover:bg-gray-300 rounded-2xl"}`}>Clothes</button>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
        {products && products.length > 0 && products.map(product => (
        <CardStore key={product._id} product={product} />
        ))}
        </div>
    </div>
  )
}

export default SectionStore