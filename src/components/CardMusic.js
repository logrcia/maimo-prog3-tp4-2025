import Image from 'next/image';
import Link from 'next/link';

const CardMusic = () => {
  return (
    <section className="grid grid-cols-12">
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/1">
        <Image
            src="/dummy-images/folklore-cd.webp"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h3 className="text-xl mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">folklore cd</h3>
        <h3 className="text-xl mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">9,99</h3>
      </Link>
    </article> 
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/2">
        <Image
            src="/dummy-images/folklore-vinyl.webp"
            width={200}
            height={200}
            alt="folklore-vinyl"
        />
        <h3 className="text-xl mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">folklore vinyl</h3>
        <h3 className="text-xl mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h3>
      </Link>
    </article> 
    </section>
  )
}

export default CardMusic