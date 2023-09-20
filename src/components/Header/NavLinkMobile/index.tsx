import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import IconMenuClose from '@/assets/images/icon-menu-close.svg';
import Switch from '../Switch';

export default function NavLinkMobile({
  btnCloseEvent,
  navLink,
}: {
  btnCloseEvent: () => void,
  navLink: Record<string, string>,
}) {
  const pathname = usePathname();
  const currentLocale = pathname.slice(0,3);
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-end">
      <nav className="w-full max-w-[225px] h-full px-4 py-7 bg-gray-400 flex flex-col items-end gap-20">
        <button onClick={btnCloseEvent}>
          <Image src={IconMenuClose} alt="Icon close menu" priority />
        </button>

        <ul className="w-full flex flex-col gap-7 font-text-link text-gray-200">
          {
            Object.entries(navLink).map(([key, value]) => (
              <li key={key}>
                <Link href={`${currentLocale}/${key === "home" ? "" : key}`} onClick={btnCloseEvent}>
                  {value}
                </Link>
              </li>
            ))
          }

          <li className="flex items-center gap-2">
            Lang: <Switch />
          </li>
        </ul>
      </nav>
    </div>
  )
}
