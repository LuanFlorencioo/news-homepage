import Image from "next/image";
import Link from "next/link";
import IconMenuClose from "@/assets/images/icon-menu-close.svg";

export default function NavLinkMobile({
  btnCloseEvent,
}: {
  btnCloseEvent: () => void,
}) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-end">
      <nav className="w-full max-w-[225px] h-full px-4 py-7 bg-gray-400 flex flex-col items-end gap-20">
        <button onClick={btnCloseEvent}>
          <Image src={IconMenuClose} alt="Icon close menu" priority />
        </button>

        <ul className="w-full flex flex-col gap-7 font-text-link text-gray-200">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          
          <li>
            <Link href="new">
              New
            </Link>
          </li>
          
          <li>
            <Link href="popular">
              Popular
            </Link>
          </li>
          
          <li>
            <Link href="trending">
              Trending
            </Link>
          </li>
          
          <li>
            <Link href="categories">
              Categories
            </Link>
          </li>

          <li className="flex items-center gap-2">
            Lang: <select name="language" id="language" className="px-6 py-2 bg-red text-gray-400">
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  )
}
