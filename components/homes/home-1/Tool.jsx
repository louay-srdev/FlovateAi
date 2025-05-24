import { useLanguage } from "@/context/LanguageContext";
import { tools } from "@/data/tools";
import React from "react";

export default function Tool() {
  const { t } = useLanguage();
  return (
    <div className="list-tool">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>{t("toolTitle")}</h6>
              <div className="main-title">
                {t("toolSubtitle")}
                <br />
                <span className="animation-text">{t("toolAnimated")}</span>
              </div>
              <p className="subtitle mt-4">
                {t("toolDescription")}
              </p>
            </div>
          </div>
          {tools(t).map((tool, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div
                className={`wg-tool wow fadeInUp`}
                data-wow-delay={tool.delay}
              >
                <div className="tool-icon-wrapper">
                  <div className={`icon ${tool.iconClass}`} />
                  {tool.isNew && <span className="new-badge">New</span>}
                </div>
                <h3>
                  <a href="#">{tool.title}</a>
                </h3>
                <p>{tool.description}</p>
                <div className="tool-footer">
                  <div className="order">{tool.order}</div>
                  {tool.features && (
                    <div className="tool-features">
                      {tool.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
