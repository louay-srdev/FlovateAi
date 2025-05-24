"use client";
import { services } from "@/data/services";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Helpfull() {
  const { t } = useLanguage();

  return (
    <div className="helpful pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>{t('serviceTitle')}</h6>
              <div className="main-title">
                {t('serviceSubtitle')}
              </div>
            </div>
          </div>
          {services.map((elm, i) => (
            <div key={i} className="col-xl-2 col-md-3 col-6">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className={elm.iconClass} />
                </div>
                <h6>
                  <a href="#">{t(elm.textKey)}</a>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
