'use client';
import { ChangeEventHandler } from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { i18n } from '../../../../i18n-config';

export default function Switch() {
  const { replace } = useRouter();
  const { lang } = useParams();
  const pathname = usePathname();

  const changeLocale: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const locale = e.target.value;
    replace(`/${locale}${pathname.slice(3)}`);
  }

  return (
    <select
      name="language"
      id="language"
      defaultValue={lang}
      onChange={changeLocale}
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
