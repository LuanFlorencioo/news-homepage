"use client";

import { i18n } from "../../../../i18n-config";
import { useRouter, useParams, usePathname } from "next/navigation";

export default function Switch() {
  const { replace } = useRouter();
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <select
      name="language"
      id="language"
      defaultValue={lang}
      onChange={(e) => {
        const locale = e.target.value;
        replace(`/${locale}${pathname.slice(3)}`);
      }}
      className="px-6 py-2 bg-gray-100 text-gray-400 md:hover:cursor-pointer"
    >
      {
        i18n.locales.map(locale => (
          <option key={locale} value={locale}>{locale.toUpperCase()}</option>
        ))
      }
    </select>
  )
}
