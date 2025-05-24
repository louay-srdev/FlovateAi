"use client";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Cta from "@/components/homes/home-1/Cta";
import Features from "@/components/homes/home-1/Features";
import Features2 from "@/components/homes/home-1/Features2";
import Faq from "@/components/homes/home-1/Faq";
import Service from "@/components/homes/home-1/Service";
import Partners from "@/components/homes/home-1/Partners";

import Roadmap from "@/components/homes/home-1/Roadmap";
import Tool from "@/components/homes/home-1/Tool";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";

import About from "@/components/homes/home-1/About";
import Service1 from '@/components/homes/home-1/Service1';
import Service2 from '@/components/homes/home-1/Service2';
import Service3 from '@/components/homes/home-1/Service3';
import ServicesOverview from "@/components/homes/home-1/ServiceOverview";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function handleAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const id = anchor.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          // Scroll to center
          const rect = el.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offset = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
          window.scrollTo({ top: offset, behavior: "smooth" });

          // Highlight card
          el.classList.add("card-highlight");
          setTimeout(() => {
            el.classList.remove("card-highlight");
          }, 3000);
        }
      }
    }
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <Banner />
          {/* <Result /> */}
          <About />
          <Partners />
          <ServicesOverview />
          {/* <Service1 /> */}
          {/* <Service2 /> */}
          {/* <Service3 /> 
          <Features />*/}
          <Tool />
          {/* <Features2 /> */}
          <Service />
          <Roadmap />
          {/* <Pricing /> */}
          <Faq />
          <Cta />
          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
