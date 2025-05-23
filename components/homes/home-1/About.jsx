import React from "react";

export default function About() {
  return (
    <div className="wg-about pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <div className="main-title">
                We are here for Entrepreneurs, Businesses,
                <br />
                and Teams
              </div>
              <br />

              <div className="sub-title mt-20" style={{ flex: 'flex-wrap' }}>
                To transform their operations from{" "}
                <strong>friction to flow</strong> through a wide range of
                <span className="tf-color"> AI-driven solutions</span>,
                <br />
                powered by our trusted partners.
              </div>
              <a href="#contact" className="tf-button get-start mx-auto mt-30">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
