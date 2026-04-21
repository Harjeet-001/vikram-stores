// Yellow-Brown pastel background — no fireworks, soft & elegant
export default function PastelBackground() {
  const orbs = [
    { x: '5%',   y: '8%',   w: 480, h: 380, color: 'rgba(245,204,0,0.10)',  delay: '0s',    dur: '9s'  },
    { x: '88%',  y: '5%',   w: 420, h: 340, color: 'rgba(184,130,0,0.08)',  delay: '1.8s',  dur: '11s' },
    { x: '70%',  y: '50%',  w: 520, h: 420, color: 'rgba(245,204,0,0.07)',  delay: '0.6s',  dur: '8s'  },
    { x: '10%',  y: '60%',  w: 400, h: 360, color: 'rgba(139,90,0,0.06)',   delay: '2.2s',  dur: '10s' },
    { x: '45%',  y: '85%',  w: 600, h: 300, color: 'rgba(245,204,0,0.08)',  delay: '0.3s',  dur: '12s' },
    { x: '30%',  y: '20%',  w: 300, h: 280, color: 'rgba(255,235,130,0.12)',delay: '1.2s',  dur: '7s'  },
  ];

  // Tiny sparkle dots scattered across
  const dots = [
    [6,9],[14,4],[23,18],[38,7],[52,3],[64,14],[77,8],[88,3],[95,16],
    [3,32],[18,28],[33,42],[47,35],[60,28],[72,38],[84,30],[96,44],
    [9,55],[21,62],[36,58],[50,68],[63,54],[76,64],[90,58],[97,70],
    [5,78],[17,85],[30,75],[44,88],[57,80],[70,90],[82,77],[93,84],
  ].map(([x, y], i) => ({
    id: i, x, y,
    size: [2,3,2,4,2,3,2,3,4,2,3,2,4,3,2,3,2,4,3,2,3,2,4,2,3,2,4,3,2,3,2,4,2,3][i] ?? 2,
    delay: `${(i * 0.41) % 5}s`,
    dur: `${2.5 + (i * 0.31) % 3}s`,
    color: i % 4 === 0
      ? 'rgba(184,130,0,0.5)'
      : i % 4 === 1
      ? 'rgba(245,204,0,0.6)'
      : i % 4 === 2
      ? 'rgba(139,90,0,0.4)'
      : 'rgba(229,180,0,0.55)',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* ── Base gradient ── */}
      <div className="absolute inset-0" style={{
        background:
          'radial-gradient(ellipse 75% 55% at 0%   0%,   rgba(255,245,153,0.55) 0%, transparent 65%),' +
          'radial-gradient(ellipse 65% 50% at 100% 0%,   rgba(255,235,100,0.40) 0%, transparent 60%),' +
          'radial-gradient(ellipse 80% 45% at 50%  100%, rgba(255,245,153,0.35) 0%, transparent 65%),' +
          'radial-gradient(ellipse 55% 65% at 0%   70%,  rgba(255,250,200,0.45) 0%, transparent 55%),' +
          'linear-gradient(155deg, #FFFDF0 0%, #FFFBEE 35%, #FFF8E0 70%, #FFFAEE 100%)',
      }} />

      {/* ── Warm honey tint blobs ── */}
      {orbs.map((o, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: o.x, top: o.y,
          width: o.w, height: o.h,
          marginLeft: -o.w / 2, marginTop: -o.h / 2,
          background: `radial-gradient(ellipse, ${o.color} 0%, transparent 70%)`,
          animation: `floatOrb ${o.dur} ease-in-out ${o.delay} infinite`,
          filter: 'blur(2px)',
        }} />
      ))}

      {/* ── Dot grid pattern ── */}
      <div className="absolute inset-0" style={{
        backgroundImage:
          'radial-gradient(circle, rgba(184,130,0,0.18) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        opacity: 0.5,
      }} />

      {/* ── Twinkling sparkle dots ── */}
      {dots.map(d => (
        <div key={d.id} className="absolute rounded-full" style={{
          left: `${d.x}%`, top: `${d.y}%`,
          width: d.size, height: d.size,
          background: d.color,
          boxShadow: `0 0 ${d.size * 4}px ${d.color}`,
          animation: `twinkleDot ${d.dur} ease-in-out ${d.delay} infinite`,
        }} />
      ))}

      {/* ── Corner ornaments ── */}
      <svg className="absolute top-0 left-0" width="160" height="160" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 Q80 0 80 80" stroke="rgba(184,130,0,0.12)" strokeWidth="1.5" fill="none"/>
        <path d="M0 0 Q60 0 60 60" stroke="rgba(245,204,0,0.15)" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="12" r="3" fill="rgba(184,130,0,0.25)"/>
        <circle cx="28" cy="8"  r="2" fill="rgba(245,204,0,0.3)"/>
        <circle cx="8"  cy="28" r="2" fill="rgba(245,204,0,0.3)"/>
      </svg>
      <svg className="absolute top-0 right-0" width="160" height="160" viewBox="0 0 160 160" fill="none">
        <path d="M160 0 Q80 0 80 80" stroke="rgba(184,130,0,0.12)" strokeWidth="1.5" fill="none"/>
        <path d="M160 0 Q100 0 100 60" stroke="rgba(245,204,0,0.15)" strokeWidth="1" fill="none"/>
        <circle cx="148" cy="12" r="3" fill="rgba(184,130,0,0.25)"/>
        <circle cx="132" cy="8"  r="2" fill="rgba(245,204,0,0.3)"/>
        <circle cx="152" cy="28" r="2" fill="rgba(245,204,0,0.3)"/>
      </svg>
      <svg className="absolute bottom-0 left-0" width="160" height="160" viewBox="0 0 160 160" fill="none">
        <path d="M0 160 Q80 160 80 80" stroke="rgba(184,130,0,0.10)" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="148" r="3" fill="rgba(184,130,0,0.2)"/>
        <circle cx="28" cy="152" r="2" fill="rgba(245,204,0,0.25)"/>
      </svg>
      <svg className="absolute bottom-0 right-0" width="160" height="160" viewBox="0 0 160 160" fill="none">
        <path d="M160 160 Q80 160 80 80" stroke="rgba(184,130,0,0.10)" strokeWidth="1.5" fill="none"/>
        <circle cx="148" cy="148" r="3" fill="rgba(184,130,0,0.2)"/>
        <circle cx="132" cy="152" r="2" fill="rgba(245,204,0,0.25)"/>
      </svg>

      {/* ── Top accent stripe ── */}
      <div className="absolute top-0 left-0 right-0" style={{
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(184,130,0,0.4) 20%, rgba(245,204,0,0.7) 50%, rgba(184,130,0,0.4) 80%, transparent 100%)',
      }} />
    </div>
  );
}
