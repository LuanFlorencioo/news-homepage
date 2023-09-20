'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import IconMenuOpen from '@/assets/images/icon-menu.svg';
import NavLinkMobile from '../NavLinkMobile';
import NavLinkDesktop from '../NavLinkDesktop';

export default function Menu({
  navLink
}: {
  navLink: Record<string, string>
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => setIsShowMenu(bool => !bool);

  useEffect(() => {
    const checkIsMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);
    };

    checkIsMobile();

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const mediaListener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", mediaListener);

    return () => {
      mediaQuery.removeEventListener("change", mediaListener);
    };
  }, []);

  return (
    <>
      {
        isMobile && (
          <button onClick={handleShowMenu}>
            <Image src={IconMenuOpen} alt="Icon menu" priority />
          </button>
        )
      }

      {
        isMobile
          ? isShowMenu && (
            <NavLinkMobile
              btnCloseEvent={handleShowMenu}
              navLink={navLink}
            />
          )
          : <NavLinkDesktop navLink={navLink} />
      }
    </>
  )
}
