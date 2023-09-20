import { Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../lib/get-dictionary"
import { ListEmpty } from "@/components";

export default async function Categories({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { navLinks } = await getDictionary(lang);

  return (
    <main className="w-full px-4 pb-[120px]">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-20 md:flex-row md:flex-wrap md:justify-between md:gap-10">
        <h2 className="font-title-100 text-gray-100 md:max-w-[275px] relative before:w-full before:h-1/3 before:absolute before:bottom-0 before:left-0 before:bg-orange before:-z-10">
          {navLinks.categories}
        </h2>

        <ListEmpty />
      </div>
    </main>
  )
}
