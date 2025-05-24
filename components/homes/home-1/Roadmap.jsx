import { roadMapItems } from "@/data/roadmap";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Roadmap() {
  const { t } = useLanguage();
  return (
    <div className="wg-road-map pt-130 pb-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>{t("roadmap.heading")}</h6>
              <div className="main-title">
              {t("roadmap.subheading1")} <br />
                {t("roadmap.subheading2")}{" "}
                <span className="animation-text">{t("roadmap.subheading3")}</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="road-map-content">
              {roadMapItems.map((item, index) => (
                <div
                  className={`road-map-item item-${index + 1} wow fadeInUp`}
                  key={index}
                >
                  <div className="number">{t(item.number)}</div>
                  <h4>
                    <a href={item.link}>{t(item.title)}</a>
                  </h4>
                  <p>{t(item.description)}</p>
                  <span className="arrow">
                    <svg
                      width={51}
                      height={16}
                      viewBox="0 0 51 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292892 7.29046C-0.0976296 7.68098 -0.0976295 8.31415 0.292893 8.70467L6.65685 15.0686C7.04738 15.4592 7.68054 15.4592 8.07107 15.0686C8.46159 14.6781 8.46159 14.0449 8.07107 13.6544L2.41422 7.99756L8.07107 2.34071C8.46159 1.95018 8.46159 1.31702 8.07107 0.926495C7.68054 0.53597 7.04738 0.53597 6.65685 0.926495L0.292892 7.29046ZM51 6.99756L1 6.99756L1 8.99756L51 8.99756L51 6.99756Z"
                        fill="#6844ED"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
