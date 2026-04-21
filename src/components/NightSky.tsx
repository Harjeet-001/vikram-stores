export default function NightSky() {
  // Static twinkling stars via CSS
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.5 + Math.random() * 1.5,
    delay: Math.random() * 4,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(30,10,80,0.9) 0%, transparent 60%),' +
            'radial-gradient(ellipse at 80% 20%, rgba(80,10,50,0.7) 0%, transparent 55%),' +
            'radial-gradient(ellipse at 60% 80%, rgba(10,30,80,0.7) 0%, transparent 50%),' +
            'linear-gradient(160deg, #06011a 0%, #0a0514 40%, #050215 100%)',
        }}
      />

      {/* Nebula clouds */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 30% at 15% 25%, rgba(120,60,200,0.12) 0%, transparent 100%),' +
            'radial-gradient(ellipse 50% 25% at 85% 70%, rgba(200,80,60,0.10) 0%, transparent 100%),' +
            'radial-gradient(ellipse 70% 20% at 50% 10%, rgba(60,120,200,0.08) 0%, transparent 100%)',
        }}
      />

      {/* Twinkling stars */}
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.size > 1.2 ? '#FFD700' : '#fff',
            boxShadow: s.size > 1.2 ? `0 0 ${s.size * 3}px rgba(255,215,0,0.8)` : `0 0 ${s.size * 2}px rgba(255,255,255,0.6)`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '35%',
          background:
            'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(255,100,20,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
