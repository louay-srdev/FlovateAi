"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="wg-about pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <div className="main-title">
                {t('aboutTitle')}
              </div>
              <br />

              <div className="sub-title mt-20" style={{ flex: 'flex-wrap' }}>
                {t('aboutSubtitle')}
              </div>
              <a href="#contact" className="tf-button get-start mx-auto mt-30">
                {t('getInTouch')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
