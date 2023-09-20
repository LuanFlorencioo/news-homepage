import Image from "next/image";

export default function Trendings({
  data,
}: {
  data: {
    title: string,
    description: string,
    image: string,
  }[],
}) {
  return (
    <section className="w-full max-w-[345px] mx-auto flex flex-col gap-8 md:max-w-none md:flex-row md:flex-wrap md:justify-center">
      {
        data.map((article, i) => (
          <article key={i} className="w-full h-[140px] flex justify-between md:max-w-[345px] md:hover:cursor-pointer group">
            <figure className="w-[100px] h-full">
              <Image
                src={article.image}
                width={100}
                height={140}
                className="w-full h-full object-cover"
                alt="article image"
                priority
              />
            </figure>

            <div className="w-[223px] flex flex-col justify-between">
              <span className="font-text-numeric text-gray-300">
                {i < 10 ? 0 + (i + 1) : i}
              </span>

              <h4 className="font-title-400 text-gray-100 md:group-hover:text-red">
                {article.title}
              </h4>

              <p className="font-text-normal text-gray-200">
                {article.description}
              </p>
            </div>
          </article>
        ))
      }
    </section>
  )
}
