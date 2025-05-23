import React from "react";
import { FaCogs, FaPuzzlePiece, FaChalkboardTeacher } from "react-icons/fa";

export default function ServicesOverview() {
  return (
    <section className="py-130" style={{ background: "#f9fafb", marginTop: "100px" }}>
      <div className="themesflat-container">
        <div className="heading-section text-center wow fadeInUp ">
          <div className="main-title py-5">
            Practical Solutions for Your <br />
            <span className="animation-text">SME</span>
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
              <h5 className="fw-bold mb-3">AI Solutions: Automate & Optimize</h5>
              <p className="text-muted">
                We streamline your day-to-day processes and use smart AI to cut out
                repetitive work, saving you time and effort.
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
                  background: "#dcfce7",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(34, 197, 94, 0.15)",
                }}
              >
                <FaPuzzlePiece size={32} color="#22c55e" />
              </div>
              <h5 className="fw-bold mb-3">Build & Integrate</h5>
              <p className="text-muted">
                We connect the software you already use (or should use!) and build simple
                custom tools to fill the gaps, making everything work together seamlessly.
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
                  background: "#fff7ed",
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(245, 158, 11, 0.15)",
                }}
              >
                <FaChalkboardTeacher size={32} color="#f59e0b" />
              </div>
              <h5 className="fw-bold mb-3">E-Learning Setup</h5>
              <p className="text-muted">
                We help you create effective online training portals for your team or
                customers using user-friendly platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
