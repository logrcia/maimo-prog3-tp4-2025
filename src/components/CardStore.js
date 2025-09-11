import Image from 'next/image';
import Link from 'next/link';

const CardStore = () => {
  return (
    <section className="grid grid-cols-12">
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/3">
        <Image
            src="/dummy-images/folklore-green-hoodie.webp"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h4 className="text-mg mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">lore ipsu</h4>
        <h4 className="text-mg mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h4>
        </Link>
    </article> 
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/4">
        <Image
            src="/dummy-images/folklore-beige-hoodie.webp"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h4 className="text-mg mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">lore ipsu</h4>
        <h4 className="text-mg mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h4>
        </Link>
    </article> 
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/5">
        <Image
            src="/dummy-images/folklore-gray-shirt.webp"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h4 className="text-mg mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">lore ipsu</h4>
        <h4 className="text-mg mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h4>
        </Link>
    </article> 
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/6">
        <Image
            src="/dummy-images/folklore-black-hoodie.webp"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h4 className="text-mg mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">lore ipsu</h4>
        <h4 className="text-mg mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h4>
        </Link>
    </article> 
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/7">
        <Image
            src="/dummy-images/folklore-white-shirt.webp"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h4 className="text-mg mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">lore ipsu</h4>
        <h4 className="text-mg mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h4>
        </Link>
    </article> 
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px] mx-15">
        <Link href="/product/8">
        <Image
            src="/dummy-images/folklore-cardigan.png"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h4 className="text-mg mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-right">lore ipsu</h4>
        <h4 className="text-mg mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-right">19,99</h4>
        </Link>
    </article>
    </section>
  )
}

export default CardStore