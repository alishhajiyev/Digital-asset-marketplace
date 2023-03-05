import React from "react";

export default function Package() {
  return (
    <div className="packages">
      <div className="package-background">
        <h3 className="megabytes">500MB</h3>
      </div>
      <div className="package-info">
        <div className="package-info-section">
          <div className="package-info-section-div">
          <i class="fa-brands fa-instagram package-icon"></i>
            <p className="package-duration">~8 saat</p>
            <p className="package-name">Sosial şəbəkələr</p>
          </div>
          <div className="package-info-section-div">
            <p className="package-duration">~23 saat</p>
            <p className="package-name">Mesajlaşma</p>
          </div>
          <div className="package-info-section-div">
            <p className="package-duration">~75 saat</p>
            <p className="package-name">Musiqi</p>
          </div>

        </div>
      <button id="package-button">20❤️</button>
      </div>
    </div>
  );
}
