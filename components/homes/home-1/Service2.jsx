import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import { useLanguage } from '@/context/LanguageContext';

export default function Service2() {
  const { t } = useLanguage();

  return (
    <section id="service2" className="py-5" style={{ background: "#f9fafb" }}>
      <div className="container">
        <div className="row align-items-center justify-content-between flex-md-row-reverse flex-column-reverse">
          <div className="col-md-6">
            <div className="bg-white rounded-4 shadow-sm p-5">
              <h3 className="fw-bold text-dark mb-3">{t('service2Title')}</h3>
              <p className="text-muted mb-4">
                {t('service2Description')}
              </p>
              <a
                href="#contact"
                className="btn btn-lg px-4 py-2"
                style={{
                  background: "#22c55e",
                  color: "#fff",
                  borderRadius: "12px",
                  fontWeight: "600",
                  transition: "all 0.3s",
                }}
              >
                {t('getInTouch')} →
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div
              className="d-inline-flex justify-content-center align-items-center"
              style={{
                width: 100,
                height: 100,
                background: "#dcfce7",
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(34, 197, 94, 0.15)",
              }}
            >
              <FaPuzzlePiece size={40} color="#22c55e" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}