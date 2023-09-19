import { Aside, MainArticle, Trendings } from "@/components";

export default function Homepage() {
  return (
    <main className="w-full px-4 pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-20 md:flex-row md:flex-wrap md:justify-between md:gap-10">
        <MainArticle />

        <Aside />

        <Trendings />
      </div>
    </main>
  )
}
