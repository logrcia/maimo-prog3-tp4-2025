'use client'
import Image from 'next/image';
import Link from 'next/link';

const CardStore = ({product}) => {
   
   
  return (
    <section >
      
    <article className="flex flex-wrap justify-between bg-stone-300 text-neutral-800 m-3 p-5 w-[300px]  rounded-3xl shadow-xl/20">
      <Link href={`/product/${product._id}`}>
        <h1 className='font-bold text-lg'>{product.name}</h1>
        <Image
        src={`/dummy-images/products/${product.image[0]}`}
        width={300}
        height={300}
        alt={`${product.name}`}
        priority
        />
        <p>${product.price}</p>
      </Link>
    </article> 
    
    </section>
  )
}

export default CardStore