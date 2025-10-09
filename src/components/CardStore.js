'use client'
import Image from 'next/image';
import Link from 'next/link';

const CardStore = ({product}) => {
   
   
  return (
    <section >
    <article className="flex flex-wrap justify-between bg-stone-300 text-black m-3 p-5 w-[300px]  rounded-3xl shadow-xl/20">
      <Link href={`/product/${product._id}`}>
        <h1>{product.name}</h1>
        <Image
        src={`/dummy-images/products/${product.image[0]}`}
        width={300}
        height={300}
        alt={`${product.name}`}
        priority
        />
      </Link>
    </article> 
    
    </section>
  )
}

export default CardStore