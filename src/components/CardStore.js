'use client'
import Image from 'next/image';
import Link from 'next/link';

const CardStore = ({product}) => {
   
   
  return (
    <section >
    <article className='mb-5 ml-15'>
      <Link href={`/product/${product._id}`}>
        <h1>{product.name}</h1>
      </Link>
    </article> 
    
    </section>
  )
}

export default CardStore