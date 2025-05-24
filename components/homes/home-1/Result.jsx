import Counter from "@/components/common/Counter";
import React from "react";
import { useLanguage } from '@/context/LanguageContext';

export default function Result() {
  const { t } = useLanguage();
  return (
    <div className="wg-result pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <div className="sub-title">
                {t('resultProfessionalsTeams')}
              </div>
              <div className="main-title">
                {t('resultBestExperience')}
                <br />
                <span className="animation-text">{t('resultPremiumResults')}</span>
              </div>
            </div>
            <div className="counter text-center">
              <div className="number-counter">
                <Counter parentClass={"number"} max={9684201} min={1684201} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
