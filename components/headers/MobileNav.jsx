"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const parentRefs = useRef([]);
  const subMenuRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const isParentActive = (links) => {
    return links.some((elm) => elm.url.split("/")[1] === pathname.split("/")[1]);
  };

  useEffect(() => {
    parentRefs.current.forEach((el) => {
      if (el) el.classList.remove("active");
    });

    subMenuRefs.current.forEach((el) => {
      if (el) {
        el.style.height = "0px";
        el.style.overflow = "hidden";
        el.style.transition = "all 0.5s ease-in-out";
        el.style.marginTop = "0px";
      }
    });

    if (currentIndex !== -1) {
      const parent = parentRefs.current[currentIndex];
      const submenu = subMenuRefs.current[currentIndex];

      if (parent) parent.classList.add("active");
      if (submenu) {
        submenu.style.height = submenu.scrollHeight + "px";
        submenu.style.overflow = "hidden";
        submenu.style.transition = "all 0.5s ease-in-out";
        submenu.style.marginBottom = "10px";
      }
    }
  }, [currentIndex]);

  return (
    <nav id="mobile-main-nav" className="mobile-main-nav">
      <ul id="menu-mobile-menu" className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            ref={(el) => (parentRefs.current[index] = el)}
            className={`menu-item ${
              item.subMenu ? "menu-item-has-children-mobile" : ""
            } ${
              isParentActive(item.subMenu || []) ? "current-menu-item" : ""
            } ${
              item.url?.split("/")[1] === pathname.split("/")[1]
                ? "current-menu-item"
                : ""
            }`}
          >
            {item.hasChildren ? (
              <a onClick={() => setCurrentIndex(prev => prev === index ? -1 : index)} href={item.url}>
                {t(item.textKey)}
              </a>
            ) : (
              <Link className="menu-item" href={item.url}>
                {t(item.textKey)}
              </Link>
            )}

            {item.subMenu && (
              <ul
                className="sub-menu-mobile"
                ref={(el) => (subMenuRefs.current[index] = el)}
                style={{ display: "block" }}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`menu-item ${
                      subItem.url.split("/")[1] === pathname.split("/")[1]
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
