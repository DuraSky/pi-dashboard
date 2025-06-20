import React, { useEffect, useState } from "react";
import "./styles/Clock.css"

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      {now.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </div>
  );
}
