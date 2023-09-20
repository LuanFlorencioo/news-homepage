import Link from "next/link";
import { usePathname } from "next/navigation";
import Switch from "../Switch";

export default function NavLinkDesktop({
  navLink
}: {
  navLink: Record<string, string>
}) {
  const pathname = usePathname();
  const currentLocale = pathname.slice(0,3);
  return (
    <nav>
      <ul className="w-full flex items-center gap-7 font-text-link text-gray-200">
        {
          Object.entries(navLink).map(([key, value]) => (
            <li key={key} className="hover:text-red transition">
              <Link href={`${currentLocale}/${key === "home" ? "" : key}`}>
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
  )
}
