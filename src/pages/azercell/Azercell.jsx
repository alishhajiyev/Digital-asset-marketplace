import React from "react";
import Package from "../../Components/Package/Package";
import "./Azercell.css";

export default function Azercell() {
  return (
    <div id="azercell-container">
      <div id="azercell-main-section">
        <h1 id="h1-main-section">Aylıq internet paketləri</h1>
        <p id="p-main-section">
          Ehtiyacların üçün ən uyğun internet paketi seç
        </p>
      </div>
      <div id="azercell-package-lists">
        <h1 id="h1-azercell-package-list">List of packages</h1>
        <div id="package-container">
          <Package />
          <Package />
          <Package />
        </div>
      </div>
    </div>
  );
}
