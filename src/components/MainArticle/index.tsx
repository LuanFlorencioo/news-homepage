import Image from "next/image";
import ImageWebDesktop from "@/assets/images/image-web-3-desktop.jpg";
import { Button } from "@/components";

export default function MainArticle({
  data,
}: {
  data: {
    title: string,
    description: string,
    buttonLabel: string,
  }
}) {
  return (
    <section className="w-full max-w-[400px] mx-auto flex flex-col gap-5 md:max-w-[717px]">
      <figure className="w-full h-[300px] md:h-[270px]">
        <Image
          src={ImageWebDesktop}
          className="w-full h-full object-cover"
          alt="Main illustration"
          priority
        />
      </figure>

      <article className="w-full flex flex-col gap-5 md:flex-row md:justify-between">
        <h2 className="font-title-100 text-gray-100 md:max-w-[275px]">
          {data.title}
        </h2>

        <div className="w-full flex flex-col gap-5 md:max-w-[340px] md:justify-between">
          <p className="font-text-normal text-gray-200">
            {data.description}
          </p>

          <Button>{data.buttonLabel}</Button>
        </div>
      </article>
    </section>
  )
}
