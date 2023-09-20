import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/get-dictionary';
import Menu from './Menu';
import Logo from './Logo';

export default async function Header({
  lang,
}: {
  lang: Locale,
}) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="w-full px-4">
      <div className="w-full max-w-[1100px] mx-auto py-7 flex justify-between items-center">
        <Logo />        

        <Menu navLink={dictionary.navLinks} />
      </div>
    </header>
  )
}
