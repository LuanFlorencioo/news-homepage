"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import IconMenuOpen from "@/assets/images/icon-menu.svg";
import NavLinkMobile from "./NavLinkMobile";
import NavLinkDesktop from "./NavLinkDesktop";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => setIsShowMenu(bool => !bool);

  useEffect(() => {
    const checkIsMobile = () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      setIsMobile(mediaQuery.matches);
    };

    checkIsMobile();

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const mediaListener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', mediaListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaListener);
    };
  }, []);

  return (
    <header className="w-full px-4">
      <div className="w-full max-w-[1100px] mx-auto py-7 flex justify-between items-center">
        <Image src={Logo} alt="Logo W" height={isMobile ? 28 : 40} priority />

        {
          isMobile && (
            <button onClick={handleShowMenu}>
              <Image src={IconMenuOpen} alt="Icon menu" priority />
            </button>
          )
        }

        {
          isMobile
            ? isShowMenu && <NavLinkMobile btnCloseEvent={handleShowMenu} />
            : <NavLinkDesktop />
        }
      </div>
    </header>
  )
}
