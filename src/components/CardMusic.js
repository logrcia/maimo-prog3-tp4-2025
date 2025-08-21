import Image from 'next/image';
import Link from 'next/link';

const CardMusic = () => {
  return (
    <article className="col-span-3 rounded-3xl p-3 flex-col justify-between h-[500px]">
        <Image
            src="/assets/folklore-cd.svg"
            width={200}
            height={200}
            alt="folklore-cd"
            className="flex justify-center"
        />
        <h3 className="text-xl mb-2 text-[#0a0a0a] font-bold min-h-[1rem] flex justify-center">folklore cd</h3>
        <h3 className="text-xl mb-2 text-[#0a0a0a] min-h-[1rem] flex justify-center">9,99</h3>
    </article> 
  )
}

export default CardMusic