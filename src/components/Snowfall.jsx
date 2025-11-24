// src/components/Snowfall.jsx
import React from "react";

export default function Snowfall({ count = 80 }) {
  const flakes = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {flakes.map((i) => {
        const size = Math.random() * 4 + 3; // 3–7px
        const left = Math.random() * 100;   // 0–100 vw
        const duration = Math.random() * 10 + 10; // 10–20s
        const delay = Math.random() * -20;  // negative so some are mid-fall

        return (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${left}vw`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
