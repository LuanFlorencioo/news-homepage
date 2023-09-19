export default function Aside() {
  return (
    <aside className="w-full max-w-[343px] mx-auto px-6 py-7 bg-gray-100 flex flex-col gap-7">
      <h3 className="font-title-200 text-orange">
        New
      </h3>

      <nav className="w-full flex flex-col gap-7">
        <article className="w-full flex flex-col gap-2 group">
          <h4 className="font-title-300 text-gray-400 group-hover:text-orange md:cursor-pointer">
            Hydrogen VS Electric Cars
          </h4>

          <p className="font-text-normal text-gray-300">
            Will hydrogen-fueled cars ever catch up to WVs?
          </p>
        </article>

        <span className="w-full h-[1px] bg-gray-200" />

        <article className="w-full flex flex-col gap-2 group">
          <h4 className="font-title-300 text-gray-400 group-hover:text-orange md:cursor-pointer">
            The Downsides of AI Artistry
          </h4>

          <p className="font-text-normal text-gray-300">
            What are the possible adverse effects of on-demand AI image generation?
          </p>
        </article>

        <span className="w-full h-[1px] bg-gray-200" />

        <article className="w-full flex flex-col gap-2 group">
          <h4 className="font-title-300 text-gray-400 group-hover:text-orange md:cursor-pointer">
            Is VC Funding Drying Up?
          </h4>

          <p className="font-text-normal text-gray-300">
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>
        </article>
      </nav>
    </aside>
  )
}
