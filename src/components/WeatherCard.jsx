import React from "react";
import "./styles/WeatherCard.css"

function getWeatherIcon(desc) {
  const d = desc.toLowerCase();
  if (d.includes("sunny")) return "☀️";
  if (d.includes("partly") && d.includes("cloud")) return "⛅";
  if (d.includes("cloud")) return "☁️";
  if (d.includes("rain")) return "🌧️";
  if (d.includes("storm")) return "⛈️";
  if (d.includes("snow")) return "❄️";
  if (d.includes("fog") || d.includes("mist")) return "🌫️";
  return "🌡️";
}

export default function WeatherCard({ weather }) {
  const today = weather.now;
  const nextDays = weather.forecast?.slice(1, 3) || [];

  return (
    <div className="weather-panel">
      <div className="weather-today">
        <div className="today-icon">{getWeatherIcon(today.description)}</div>
        <div className="today-temp">{today.temperature}</div>
        <div className="today-desc">{today.description}</div>

        <div className="today-details">
          <span>Pocitově: {today.feelsLike}</span>
          <span>Vítr: {today.wind}</span>
          <span>Vlhkost: {today.humidity}</span>
        </div>
      </div>

      <div className="weather-forecast-bubbles">
        {nextDays.map((day, idx) => (
          <div key={idx} className="forecast-bubble">
            <div className="bubble-icon">{getWeatherIcon(day.description)}</div>
            <div className="bubble-day">
              {new Date(day.date).toLocaleDateString("cs-CZ", { weekday: "long" })}
            </div>
            <div className="bubble-desc">{day.description}</div>
            <div className="bubble-temps">{day.minTemp} / {day.maxTemp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}