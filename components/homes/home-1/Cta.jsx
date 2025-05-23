import React from "react";

export default function Cta() {
  return (
    <div className="cta">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="ellipse item1" />
              <div className="ellipse item2" />
              <div className="ellipse item3" />
              <div className="ellipse item4" />
              <div className="cta-title">
                <h2>Empower your business flow.</h2>
              </div>
              <div className="cta-content">
                <p>
                  Let's chat about your specific challenges and see how Flovate can help. <br />
                  Book a free, no-obligation Discovery Call today.
                </p>
                <div className="flex gap20">
                  <a href="#" className="tf-button style-1">
                    Book Your Free Call Now <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
