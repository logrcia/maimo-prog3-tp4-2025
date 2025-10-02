'use client'
import CardStore from "@/components/CardStore";
import { useShopContext } from "@/app/contexts/ShopContext";

const SectionStore = () => {
  const {products} = useShopContext()
  return (
    <>
        <h2 className="mr-5 text-2xl font-bold mx-15">Store</h2>
        <div>
        {products.map((p)=>(
          <CardStore key={p._id} product={p}/>
        ))}
        </div>
    </>
  )
}

export default SectionStore