import Image from "next/image";
import Retro from "@/assets/images/image-retro-pcs.jpg";
import Laptops from "@/assets/images/image-top-laptops.jpg";
import Games from "@/assets/images/image-gaming-growth.jpg";

export default function Trendings() {
  return (
    <section className="w-full max-w-[345px] mx-auto flex flex-col gap-8 md:max-w-none md:flex-row md:flex-wrap md:justify-center">
      <article className="w-full h-[140px] flex justify-between md:max-w-[345px] md:hover:cursor-pointer group">
        <figure className="w-[100px] h-full">
          <Image
            src={Retro}
            className="w-full h-full object-cover"
            alt="article image"
            priority
          />
        </figure>

        <div className="w-[223px] flex flex-col justify-between">
          <span className="font-text-numeric text-gray-300">
            01
          </span>

          <h4 className="font-title-400 text-gray-100 md:group-hover:text-red">
            Reviving Retro PCs
          </h4>

          <p className="font-text-normal text-gray-200">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </article>

      <article className="w-full h-[140px] flex justify-between md:max-w-[345px] md:hover:cursor-pointer group">
        <figure className="w-[100px] h-full">
          <Image
            src={Laptops}
            className="w-full h-full object-cover"
            alt="article image"
            priority
          />
        </figure>

        <div className="w-[223px] flex flex-col justify-between">
          <span className="font-text-numeric text-gray-300">
            02
          </span>

          <h4 className="font-title-400 text-gray-100 md:group-hover:text-red">
            Top 10 Laptops of 2022
          </h4>

          <p className="font-text-normal text-gray-200">
            Our best picks for varios needs and budgets.
          </p>
        </div>
      </article>

      <article className="w-full h-[140px] flex justify-between md:max-w-[345px] md:hover:cursor-pointer group">
        <figure className="w-[100px] h-full">
          <Image
            src={Games}
            className="w-full h-full object-cover"
            alt="article image"
            priority
          />
        </figure>

        <div className="w-[223px] flex flex-col justify-between">
          <span className="font-text-numeric text-gray-300">
            03
          </span>

          <h4 className="font-title-400 text-gray-100 md:group-hover:text-red">
            The Growth of Gaming
          </h4>

          <p className="font-text-normal text-gray-200">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </section>
  )
}
