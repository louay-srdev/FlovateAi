"use client";
import React from "react";
import { FaCogs, FaPuzzlePiece, FaChalkboardTeacher } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-130" style={{ background: "#f9fafb", marginTop: "100px" }}>
      <div className="themesflat-container">
        <div className="heading-section text-center wow fadeInUp ">
          <div className="main-title py-5">
            {t('serviceOverviewTitle')}
          </div>
        </div>

        <div className="row gy-5 py-5">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100">
              <div
                className="d-inline-flex justify-content-center align-items-center mb-4"
                style={{
                  width: 80,
                  height: 80,
                  background: "#ede9fe",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(104, 68, 237, 0.15)",
                }}
              >
                <FaCogs size={32} color="#6844ed" />
              </div>
              <h5 className="fw-bold mb-3">{t('service1Title')}</h5>
              <p className="text-muted">
                {t('service1Description')}
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100">
              <div
                className="d-inline-flex justify-content-center align-items-center mb-4"
                style={{
                  width: 80,
                  height: 80,
                  background: "#ede9fe",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(104, 68, 237, 0.15)",
                }}
              >
                <FaPuzzlePiece size={32} color="#6844ed" />
              </div>
              <h5 className="fw-bold mb-3">{t('service2Title')}</h5>
              <p className="text-muted">
                {t('service2Description')}
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center h-100">
              <div
                className="d-inline-flex justify-content-center align-items-center mb-4"
                style={{
                  width: 80,
                  height: 80,
                  background: "#ede9fe",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(104, 68, 237, 0.15)",
                }}
              >
                <FaChalkboardTeacher size={32} color="#6844ed" />
              </div>
              <h5 className="fw-bold mb-3">{t('service3Title')}</h5>
              <p className="text-muted">
                {t('service3Description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
