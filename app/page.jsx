import Image from "next/image"
import Head from "next/head"

export default function Home() {
  return (

    <>
      <Head>
        <title>Home | Soberbia</title>
        <meta name="description" content="Soberbia" />
      </Head>
      <main
        className={`
          debug
        `}
      >

        <Image
          width={1200}
          height={800}
          src="/images/part-1.webp"
          className={`
          hero
          w-full
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-2.webp"
          className={`
          products
          w-full
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-3.webp"
          className={`
          designs
          w-full
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-4.webp"
          className={`
          customs
          w-full
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-5.webp"
          className={`
          colors-1
          w-full
          mt-20
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-6.webp"
          className={`
          colors-2
          w-full
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-7.webp"
          className={`
          clothins-fitting
          w-full
          mt-36
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-8.webp"
          className={`
          testimonials
          w-full
          mt-28
        `}
        />

        <Image
          width={1200}
          height={800}
          src="/images/part-9.webp"
          className={`
          footer
          w-full
        `}
        />

      </main>
    </>

  )
}
