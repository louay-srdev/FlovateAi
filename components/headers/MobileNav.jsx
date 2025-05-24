"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isParentActive = (links) => {
    return links.some((elm) => elm.url.split("/")[1] == pathname.split("/")[1]);
  };

  return (
    <nav id="mobile-main-nav" className="mobile-main-nav" >
      <ul id="menu-mobile-menu" className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${
              item.hasChildren ? "menu-item-has-children" : ""
            } ${
              isParentActive(item.subMenu ? item.subMenu : [])
                ? "current-menu-item"
                : ""
            }
            ${
              item.url?.split("/")[1] == pathname.split("/")[1]
                ? "current-menu-item"
                : ""
            }`}
          >
            {item.hasChildren ? (
              <a href={item.url}>{t(item.textKey)}</a>
            ) : (
              <Link className={`menu-item`} href={item.url}>
                {t(item.textKey)}
              </Link>
            )}
            {item.subMenu && item.subMenu.length > 0 && (
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`menu-item ${
                      subItem.url.split("/")[1] == pathname.split("/")[1]
                        ? "current-item"
                        : ""
                    }`}
                  >
                    <Link href={subItem.url}>{t(subItem.textKey)}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
