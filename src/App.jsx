import React, { useEffect, useState } from "react";
import { getData } from "./services/api";
import PcStatus from "./components/PcStatus";
import WeatherCard from "./components/WeatherCard";
import "./components/styles/App.css"

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const d = await getData();
        setData(d);
      } catch (e) {
        console.error("❌ Chyba při načítání dat:", e.message);
      }
    };
    load();
    const interval = setInterval(load, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <p style={{ textAlign: "center" }}>⏳ Načítání dat z Raspberry...</p>;

  return (
    <div className="dashboard">
      <div className="dashboard-time">{data.pc.time}</div>
      <div className="dashboard-grid">
        <div className="panel">
          <PcStatus pc={data.pc} />
        </div>
        <div className="panel">
          <WeatherCard weather={data.weather} />
        </div>
      </div>
    </div>
  );
}
