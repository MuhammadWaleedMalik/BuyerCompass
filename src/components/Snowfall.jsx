// src/components/Snowfall.jsx
import React from "react";

const SNOW_CHARS = [];

export default function Snowfall({ count = 80 }) {
  const flakes = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {flakes.map((i) => {
        const size = Math.random() * 1.2 + 0.8; // flake size multiplier
        const left = Math.random() * 100; // 0–100vw
        const duration = Math.random() * 10 + 10; // 10–20s
        const delay = Math.random() * -20; // start at different times
        const char = SNOW_CHARS[i % SNOW_CHARS.length];

        return (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${left}vw`,
              fontSize: `${size * 12}px`, // visual size of flakes
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
