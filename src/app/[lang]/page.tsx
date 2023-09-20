import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../lib/get-dictionary";
import { Aside, MainArticle, Trendings } from "@/components";

export default async function Homepage({
  params: { lang },
}: {
  params: { lang: Locale },
}) {
  const { homepage } = await getDictionary(lang);

  return (
    <main className="w-full px-4 pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-20 md:flex-row md:flex-wrap md:justify-between md:gap-10">
        <MainArticle data={homepage.mainArticle} />

        <Aside data={homepage.newArticles} />

        <Trendings data={homepage.trendingArticles} />
      </div>
    </main>
  )
}
