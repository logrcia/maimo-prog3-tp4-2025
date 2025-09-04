import Image from 'next/image';

const Lyrics = () => {
  return (
     <div className="relative w-full h-96 shadow-lg overflow-hidden flex items-center justify-center">
      <Image
        src="/assets/background.svg"
        alt="background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <p className="relative text-center text-white text-xl md:text-2xl font-medium px-6 max-w-2xl z-10">
        "You showed me colors you know I can't see with anyone else"
      </p>
    </div>
  )
}

export default Lyrics