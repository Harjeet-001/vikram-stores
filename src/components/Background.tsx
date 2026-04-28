import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  width: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  tail: { x: number; y: number }[];
  glowColor: string;
  sparkle: boolean;
}

// Rich festive colour palette — warm golds, corals, teals, lavenders, rose
const COLORS = [
  { stroke: '#F5CC00', glow: 'rgba(245,204,0,0.8)' },
  { stroke: '#FFB347', glow: 'rgba(255,179,71,0.8)' },
  { stroke: '#FF6B9D', glow: 'rgba(255,107,157,0.8)' },
  { stroke: '#A78BFA', glow: 'rgba(167,139,250,0.8)' },
  { stroke: '#34D399', glow: 'rgba(52,211,153,0.8)' },
  { stroke: '#60A5FA', glow: 'rgba(96,165,250,0.8)' },
  { stroke: '#FB923C', glow: 'rgba(251,146,60,0.8)' },
  { stroke: '#F472B6', glow: 'rgba(244,114,182,0.8)' },
  { stroke: '#FBBF24', glow: 'rgba(251,191,36,0.8)' },
  { stroke: '#38BDF8', glow: 'rgba(56,189,248,0.8)' },
];

function createStar(canvasW: number, canvasH: number): Star {
  // Spawn from top or left edges, travel diagonally down-right or across
  const fromTop = Math.random() > 0.35;
  const x = fromTop ? Math.random() * canvasW : -20;
  const y = fromTop ? -20 : Math.random() * canvasH * 0.6;

  // Angle: mostly diagonal downward, varied
  const angle = fromTop
    ? (Math.PI / 4) + (Math.random() - 0.5) * (Math.PI / 3)   // 15°–75° from horizontal
    : (Math.random() - 0.5) * (Math.PI / 4);                    // nearly horizontal

  const speed = 4 + Math.random() * 9;
  const col = COLORS[Math.floor(Math.random() * COLORS.length)];
  const maxLife = 55 + Math.random() * 70;

  return {
    x, y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    length: 80 + Math.random() * 160,
    width: 1.5 + Math.random() * 2.5,
    color: col.stroke,
    glowColor: col.glow,
    alpha: 0,
    life: 0,
    maxLife,
    tail: [],
    sparkle: Math.random() > 0.5,
  };
}

// Static twinkling background stars (fixed positions, drawn once)
const BG_STARS = Array.from({ length: 110 }, (_, i) => ({
  x: ((i * 173.3 + 57) % 1000) / 10,
  y: ((i * 97.1  + 13) % 1000) / 10,
  r: i % 7 === 0 ? 1.6 : i % 4 === 0 ? 1.1 : 0.7,
  alpha: 0.2 + (i % 5) * 0.12,
  twinkleSpeed: 1500 + (i % 7) * 400,
  phase: (i * 0.83) % (Math.PI * 2),
}));

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animId: number;
    const shootingStars: Star[] = [];
    let frame = 0;
    let lastSpawn = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawnInterval = () => 40 + Math.random() * 60; // frames between spawns

    const tick = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      // ── Background: deep dark brown sky ──────────────────────────────
      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createLinearGradient(0, 0, W * 0.3, H);
      bg.addColorStop(0,   '#1A0900');
      bg.addColorStop(0.4, '#200D00');
      bg.addColorStop(0.7, '#1C0A00');
      bg.addColorStop(1,   '#150700');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Warm amber radial bloom bottom-center
      const bloom = ctx.createRadialGradient(W * 0.5, H, 0, W * 0.5, H, H * 0.65);
      bloom.addColorStop(0,   'rgba(100,45,0,0.32)');
      bloom.addColorStop(0.5, 'rgba(60,22,0,0.18)');
      bloom.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, W, H);

      // Top-left warm bloom
      const tl = ctx.createRadialGradient(W * 0.1, H * 0.05, 0, W * 0.1, H * 0.05, W * 0.45);
      tl.addColorStop(0,   'rgba(80,35,0,0.28)');
      tl.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = tl;
      ctx.fillRect(0, 0, W, H);

      // Dot grid
      ctx.fillStyle = 'rgba(245,204,0,0.055)';
      const gs = 40;
      for (let gx = 0; gx < W; gx += gs) {
        for (let gy = 0; gy < H; gy += gs) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Static twinkling background stars ────────────────────────────
      const t = performance.now();
      for (const s of BG_STARS) {
        const tw = 0.35 + 0.65 * Math.abs(Math.sin(t / s.twinkleSpeed + s.phase));
        const a  = s.alpha * tw;
        const sx = (s.x / 100) * W;
        const sy = (s.y / 100) * H;

        ctx.save();
        ctx.globalAlpha = a;
        if (s.r > 1.2) {
          // Gold star with glow
          ctx.shadowBlur  = 8;
          ctx.shadowColor = 'rgba(245,204,0,0.9)';
          ctx.fillStyle   = '#F5CC00';
        } else {
          ctx.fillStyle = 'rgba(255,240,200,0.85)';
        }
        ctx.beginPath();
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── Spawn new shooting stars ──────────────────────────────────────
      if (frame - lastSpawn > spawnInterval()) {
        shootingStars.push(createStar(W, H));
        // Occasionally spawn 2 at once for a burst feel
        if (Math.random() > 0.72) shootingStars.push(createStar(W, H));
        lastSpawn = frame;
      }

      // ── Draw & update shooting stars ─────────────────────────────────
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life++;

        // Record tail positions
        s.tail.push({ x: s.x, y: s.y });
        if (s.tail.length > 28) s.tail.shift();

        // Move
        s.x += s.vx;
        s.y += s.vy;

        // Alpha: fade in first 20% then fade out last 30%
        const prog = s.life / s.maxLife;
        if (prog < 0.2)       s.alpha = prog / 0.2;
        else if (prog > 0.7)  s.alpha = 1 - (prog - 0.7) / 0.3;
        else                  s.alpha = 1;

        // Remove if off-screen or done
        if (
          s.life > s.maxLife ||
          s.x > W + 200 || s.y > H + 200 ||
          s.x < -200   || s.y < -200
        ) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.save();

        // ── Tail gradient ──
        if (s.tail.length > 1) {
          const tailStart = s.tail[0];
          const tailEnd   = s.tail[s.tail.length - 1];
          const tailGrad  = ctx.createLinearGradient(tailStart.x, tailStart.y, tailEnd.x, tailEnd.y);
          tailGrad.addColorStop(0,   'rgba(0,0,0,0)');
          tailGrad.addColorStop(0.4, s.glowColor.replace('0.8)', '0.15)'));
          tailGrad.addColorStop(1,   s.glowColor.replace('0.8)', `${s.alpha * 0.7})`));

          ctx.strokeStyle = tailGrad;
          ctx.lineWidth   = s.width * 1.8;
          ctx.lineCap     = 'round';
          ctx.lineJoin    = 'round';
          ctx.shadowBlur  = 18;
          ctx.shadowColor = s.glowColor;
          ctx.globalAlpha = s.alpha * 0.6;
          ctx.beginPath();
          s.tail.forEach((pt, idx) => {
            if (idx === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          });
          ctx.stroke();
        }

        // ── Main streak ──
        const dx = -s.vx / Math.hypot(s.vx, s.vy);
        const dy = -s.vy / Math.hypot(s.vx, s.vy);
        const streakGrad = ctx.createLinearGradient(
          s.x + dx * s.length, s.y + dy * s.length,
          s.x, s.y
        );
        streakGrad.addColorStop(0, 'rgba(0,0,0,0)');
        streakGrad.addColorStop(0.6, s.glowColor.replace('0.8)', `${s.alpha * 0.5})`));
        streakGrad.addColorStop(1, s.glowColor.replace('0.8)', `${s.alpha})`));

        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = streakGrad;
        ctx.lineWidth   = s.width;
        ctx.lineCap     = 'round';
        ctx.shadowBlur  = 24;
        ctx.shadowColor = s.glowColor;
        ctx.beginPath();
        ctx.moveTo(s.x + dx * s.length, s.y + dy * s.length);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // ── Bright head ──
        const headGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.width * 4);
        headGrad.addColorStop(0,   '#ffffff');
        headGrad.addColorStop(0.3, s.color);
        headGrad.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.globalAlpha = s.alpha * 0.95;
        ctx.fillStyle   = headGrad;
        ctx.shadowBlur  = 30;
        ctx.shadowColor = s.glowColor;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.width * 4, 0, Math.PI * 2);
        ctx.fill();

        // ── Sparkle mini-dots around head ──
        if (s.sparkle && s.alpha > 0.5) {
          const sparkCount = 4;
          for (let k = 0; k < sparkCount; k++) {
            const sa  = (Math.PI * 2 * k) / sparkCount + frame * 0.08;
            const sr  = s.width * (3 + Math.sin(frame * 0.15 + k) * 2);
            const sx2 = s.x + Math.cos(sa) * sr;
            const sy2 = s.y + Math.sin(sa) * sr;
            ctx.globalAlpha = s.alpha * 0.55;
            ctx.fillStyle   = s.color;
            ctx.shadowBlur  = 10;
            ctx.shadowColor = s.glowColor;
            ctx.beginPath();
            ctx.arc(sx2, sy2, s.width * 0.7, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }

      // ── Top gold accent line ──────────────────────────────────────────
      const topLine = ctx.createLinearGradient(0, 0, W, 0);
      topLine.addColorStop(0,    'rgba(0,0,0,0)');
      topLine.addColorStop(0.3,  'rgba(245,204,0,0.4)');
      topLine.addColorStop(0.5,  'rgba(245,204,0,0.7)');
      topLine.addColorStop(0.7,  'rgba(245,204,0,0.4)');
      topLine.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = topLine;
      ctx.fillRect(0, 0, W, 2);

      animId = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
}