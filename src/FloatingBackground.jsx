import { useState } from "react";

const floatingItems = ["💖", "🎂", "🎈", "💕", "🧁", "💝"];

export default function FloatingBackground() {
  const [particles] = useState(() =>
    [...Array(40)].map((_, i) => ({
      id: i,
      item:
        floatingItems[Math.floor(Math.random() * floatingItems.length)],
      left: `${Math.random() * 100}%`,
      size: `${20 + Math.random() * 30}px`,
      duration: `${6 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
     <span
  key={particle.id}
  className="absolute animate-float opacity-70"
  style={{
    left: particle.left,
    fontSize: particle.size,
    animationDuration: particle.duration,
    animationDelay: particle.delay,
    transform: "translateY(110vh)", // 👈 important fix
  }}
>
  {particle.item}
</span>
      ))}
    </div>
  );
}