'use client'
import CardStore from "@/components/CardStore";
import { useShopContext } from "@/app/contexts/ShopContext";

const SectionStore = () => {
  const {products} = useShopContext()
  return (
    < div className="my-20">
        <h2 className="text-4xl font-bold flex flex-wrap justify-center mb-5">Store</h2>
        <div className='flex flex-wrap justify-center gap-6'>
        {products.map((p)=>(
          <CardStore key={p._id} product={p}/>
        ))}
        </div>
    </div>
  )
}

export default SectionStore