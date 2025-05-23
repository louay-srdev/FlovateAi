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
export const metadata = {
  title: "Home 1 || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
export default function Home() {
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
