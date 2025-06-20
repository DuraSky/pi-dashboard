import React from "react";
import "./styles/PcStatus.css";

export default function PcStatus({ pc }) {
  const { cpu, gpu, ram, drives } = pc;

  return (
    <div className="pc-panel">
      <div className="pc-cpu-block">
        <div className="cpu-overview">
          <div className="cpu-icon">🧠</div>
          <div className="cpu-main">
            <div className="cpu-load">{parseFloat(cpu.totalLoad).toFixed(1)}%</div>
            <div className="cpu-desc">CPU Load</div>
            <div className="cpu-temp">{parseFloat(cpu.temp).toFixed(1)} °C</div>
          </div>
        </div>

        <div className="cpu-cores">
          {Object.entries(cpu.coreLoads).map(([core, load]) => (
            <div key={core} className="core-bubble">
              <div className="core-label">{core.replace("Core ", "🧩 ")}</div>
              <div className="core-load">{parseFloat(load).toFixed(0)}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pc-bubbles">
        <div className="bubble">
          <div className="icon">🎮</div>
          <div className="label">GPU</div>
          <div className="value">{parseFloat(gpu.load).toFixed(0)}%</div>
          <div className="desc">Teplota: {parseFloat(gpu.temp).toFixed(1)}°C</div>
        </div>

        <div className="bubble">
          <div className="icon">💾</div>
          <div className="label">RAM</div>
          <div className="value">{parseFloat(ram.load).toFixed(0)}%</div>
        </div>

        {Object.entries(drives).map(([label, d]) => (
          <div key={label} className="bubble">
            <div className="icon">💽</div>
            <div className="label">{label}</div>
            <div className="value">{parseFloat(d.usedPercent).toFixed(0)}%</div>
            <div className="desc">{d.usedGB} GB z {d.total} GB</div>
          </div>
        ))}
      </div>
    </div>
  );
}
