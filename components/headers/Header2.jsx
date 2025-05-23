"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
export default function Header2() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header_main"
      className={`header header-green header-fixed style-absolute  ${
        scrollHeight > 70 ? "is-fixed" : ""
      } ${scrollHeight > 100 ? "is-small" : ""}`}
    >
      <div className="themesflat-container w1420">
        <div className="row">
          <div className="col-12">
            <div className="header-inner">
              <div id="site-logo">
                <div id="site-logo-inner">
                  <Link href={`/`} rel="home" className="main-logo">
                    <Image
                      id="logo_header"
                      src="/assets/images/logo/logo-green.png"
                      width={166}
                      alt="image"
                      height={40}
                      data-retina="/assets/images/logo/logo-green@2x.png"
                    />
                  </Link>
                </div>
              </div>
              {/* logo */}
              <nav id="main-nav" className="main-nav">
                <ul id="menu-primary-menu" className="menu-primary-menu">
                  <Nav />
                </ul>
              </nav>
              {/* /#main-nav */}
              <div className="header-right">
                <Link
                  href={`/contact-us`}
                  className="tf-button style-green get-start h45"
                >
                  <span>Get Started</span>
                  <i className="icon-arrow-right2" />
                </Link>
              </div>
              <div
                onClick={() => setIsMobileMenuActive(true)}
                className="mobile-button hidden"
              >
                <span />
              </div>
              {/* /.mobile-button */}
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-nav-wrap ${isMobileMenuActive ? "active" : ""}`}>
        <div
          className="overlay-mobile-nav"
          onClick={() => setIsMobileMenuActive(false)}
        />
        <div className="inner-mobile-nav">
          <Link href={`/`} rel="home" className="main-logo">
            <Image
              id="mobile-logo_header"
              src="/assets/images/logo/logo.png"
              width={166}
              height={40}
              alt="image"
              data-retina="/assets/images/logo/logo@2x.png"
            />
          </Link>
          <div
            onClick={() => setIsMobileMenuActive(false)}
            className="mobile-nav-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="white"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.878 122.88"
              enableBackground="new 0 0 122.878 122.88"
              xmlSpace="preserve"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
