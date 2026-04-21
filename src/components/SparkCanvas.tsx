import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
  type: 'spark' | 'ember' | 'star';
}

interface Burst {
  x: number;
  y: number;
  particles: Particle[];
  done: boolean;
}

const PALETTES = [
  ['#FFD700', '#FFA500', '#FF8C00', '#FFEC8B'],
  ['#FF3CAC', '#FF6B6B', '#FF9A9E', '#FFD3A5'],
  ['#00D4AA', '#00FFC8', '#7FFFD4', '#B0FFF0'],
  ['#784BA0', '#A855F7', '#C084FC', '#E9D5FF'],
  ['#2B86C5', '#60AEFF', '#93C5FD', '#BFDBFE'],
  ['#FF6B35', '#FF9500', '#FFD700', '#FFF3B0'],
];

function createBurst(x: number, y: number, canvas: HTMLCanvasElement): Burst {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const count = 60 + Math.floor(Math.random() * 60);
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
    const speed = 1.5 + Math.random() * 5;
    const color = palette[Math.floor(Math.random() * palette.length)];
    const maxLife = 60 + Math.random() * 80;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      size: 1.5 + Math.random() * 3,
      color,
      life: 0,
      maxLife,
      trail: [],
      type: Math.random() < 0.3 ? 'ember' : Math.random() < 0.15 ? 'star' : 'spark',
    });
  }
  return { x, y, particles, done: false };
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, alpha: number) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.shadowBlur = 12;
  ctx.shadowColor = color;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const b = a + Math.PI / 5;
    if (i === 0) ctx.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
    else ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
    ctx.lineTo(x + Math.cos(b) * (r * 0.4), y + Math.sin(b) * (r * 0.4));
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let animId: number;
    const bursts: Burst[] = [];
    // Ambient floating embers
    const embers: Particle[] = [];
    let frameCount = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Seed initial ambient embers
    for (let i = 0; i < 60; i++) {
      embers.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.2 + Math.random() * 0.6),
        alpha: Math.random(),
        size: 0.8 + Math.random() * 2,
        color: PALETTES[Math.floor(Math.random() * PALETTES.length)][0],
        life: Math.random() * 120,
        maxLife: 100 + Math.random() * 140,
        trail: [],
        type: 'ember',
      });
    }

    // Scheduled burst positions (spread across screen)
    const burstSchedule: { frame: number; x: number; y: number }[] = [];
    const scheduleNextBurst = (afterFrame: number) => {
      const x = 0.15 * canvas.width + Math.random() * 0.7 * canvas.width;
      const y = 0.1 * canvas.height + Math.random() * 0.55 * canvas.height;
      burstSchedule.push({ frame: afterFrame + 80 + Math.floor(Math.random() * 120), x, y });
    };
    // Pre-schedule first few bursts
    scheduleNextBurst(30);
    scheduleNextBurst(90);
    scheduleNextBurst(160);

    const tick = () => {
      frameCount++;

      // Draw deep sky background fade (don't clear fully — leave faint trails)
      ctx.fillStyle = 'rgba(10, 5, 20, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Check burst schedule
      for (let i = burstSchedule.length - 1; i >= 0; i--) {
        if (frameCount >= burstSchedule[i].frame) {
          bursts.push(createBurst(burstSchedule[i].x, burstSchedule[i].y, canvas));
          burstSchedule.splice(i, 1);
          scheduleNextBurst(frameCount);
        }
      }

      // Draw bursts
      for (let b = bursts.length - 1; b >= 0; b--) {
        const burst = bursts[b];
        let allDead = true;

        for (let i = burst.particles.length - 1; i >= 0; i--) {
          const p = burst.particles[i];
          p.life++;
          if (p.life > p.maxLife) continue;
          allDead = false;

          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 8) p.trail.shift();

          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.06; // gravity
          p.vx *= 0.98;
          p.vy *= 0.98;
          p.alpha = Math.pow(1 - p.life / p.maxLife, 1.4);

          if (p.type === 'star') {
            drawStar(ctx, p.x, p.y, p.size * 1.8, p.color, p.alpha * 0.9);
          } else if (p.type === 'ember') {
            // Draw trail
            if (p.trail.length > 1) {
              ctx.save();
              ctx.strokeStyle = p.color;
              ctx.lineWidth = p.size * 0.7;
              ctx.lineCap = 'round';
              ctx.beginPath();
              p.trail.forEach((pt, idx) => {
                ctx.globalAlpha = (idx / p.trail.length) * p.alpha * 0.5;
                if (idx === 0) ctx.moveTo(pt.x, pt.y);
                else ctx.lineTo(pt.x, pt.y);
              });
              ctx.stroke();
              ctx.restore();
            }
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 14;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } else {
            // spark — draw streak
            ctx.save();
            ctx.globalAlpha = p.alpha * 0.85;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = p.size * 0.6;
            ctx.lineCap = 'round';
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.moveTo(p.x - p.vx * 3, p.y - p.vy * 3);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
            // bright head
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#fff';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }

        if (allDead) bursts.splice(b, 1);
      }

      // Draw ambient embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.x += e.vx + Math.sin(e.life * 0.04) * 0.3;
        e.y += e.vy;
        e.life++;

        if (e.life > e.maxLife || e.y < -20) {
          // respawn
          e.x = Math.random() * canvas.width;
          e.y = canvas.height + 10;
          e.vy = -(0.3 + Math.random() * 0.7);
          e.vx = (Math.random() - 0.5) * 0.5;
          e.life = 0;
          e.maxLife = 100 + Math.random() * 160;
          e.color = PALETTES[Math.floor(Math.random() * PALETTES.length)][Math.floor(Math.random() * 4)];
          e.size = 0.8 + Math.random() * 2;
        }

        const progress = e.life / e.maxLife;
        const a = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

        ctx.save();
        ctx.globalAlpha = a * 0.6;
        ctx.fillStyle = e.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = e.color;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

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
    />
  );
}
