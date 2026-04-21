import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let id = 0;
    const spawn = () => {
      const newStar: Star = {
        id: id++,
        x: 5 + Math.random() * 60,
        y: 2 + Math.random() * 35,
        delay: 0,
        duration: 0.8 + Math.random() * 0.8,
      };
      setStars(s => [...s.slice(-6), newStar]);
    };

    spawn();
    const interval = setInterval(spawn, 2200 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: '2px',
            height: '2px',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)',
            animation: `shootingStar ${s.duration}s ease-out forwards`,
          }}
        />
      ))}
    </div>
  );
}
