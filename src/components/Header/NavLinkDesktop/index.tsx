import Link from "next/link";

export default function NavLinkDesktop() {
  return (
    <nav>
      <ul className="w-full flex items-center gap-7 font-text-link text-gray-200">
        <li className="hover:text-red transition">
          <Link href="/">
            Home
          </Link>
        </li>
        
        <li className="hover:text-red transition">
          <Link href="new">
            New
          </Link>
        </li>
        
        <li className="hover:text-red transition">
          <Link href="popular">
            Popular
          </Link>
        </li>
        
        <li className="hover:text-red transition">
          <Link href="trending">
            Trending
          </Link>
        </li>
        
        <li className="hover:text-red transition">
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
  )
}
