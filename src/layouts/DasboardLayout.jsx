import React from "react";
import "./DashboardLayout.css";

export default function DashboardLayout({ time, children }) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>{time}</h1>
      </header>

      <main className="dashboard-grid">
        {children}
      </main>
    </div>
  );
}
