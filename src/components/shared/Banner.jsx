import Image from 'next/image'

export default function Banner({banner}) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden mt-12 h-screen">
        <Image
          src={banner?.image || "/banner.jpg"}
          alt={banner?.alt}
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">{banner?.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {banner?.description}
          </p>
        </div>
      </section>
  )
}
