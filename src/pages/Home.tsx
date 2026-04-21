import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Shield, Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface HomeProps { setPage: (p: string) => void; }

const CARD_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(245,204,0,0.12)',
  backdropFilter: 'blur(8px)',
};

export default function Home({ setPage }: HomeProps) {
  const features = [
    { icon: Star,     title: 'Premium Quality',  desc: 'Sourced directly from certified Sivakasi manufacturers.' },
    { icon: Zap,      title: 'Fast Delivery',     desc: 'Same-day delivery for orders placed before 2 PM.' },
    { icon: Shield,   title: 'Safe & Certified', desc: 'BIS certified, safety-compliant products only.' },
    { icon: Sparkles, title: '100+ Varieties',   desc: 'Sparklers, rockets, bombs, fancy & much more.' },
  ];

  const categories = [
    { label: 'Sparklers',    emoji: '✨', desc: 'Electric & colour sparklers', img: '/images/prod/sparkler-color.jpg' },
    { label: 'Rockets',      emoji: '🚀', desc: 'Sky-high aerial rockets',     img: '/images/prod/rockets.jpg' },
    { label: 'Atom Bombs',   emoji: '💥', desc: 'Loud & powerful crackers',    img: '/images/prod/atom-bomb.jpg' },
    { label: 'Fancy / Cake', emoji: '🎆', desc: 'Multi-shot aerial displays',  img: '/images/prod/multishot.jpg' },
  ];

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

        {/* Radial hero glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 40%, rgba(184,130,0,0.12) 0%, transparent 70%),' +
            'radial-gradient(ellipse 30% 30% at 20% 25%, rgba(139,94,0,0.10) 0%, transparent 60%)',
        }} />

        {/* Concentric rings */}
        {[680, 500, 340].map((size, i) => (
          <div key={size} className="absolute pointer-events-none rounded-full" style={{
            width: size, height: size,
            border: `1px solid rgba(245,204,0,${0.07 - i * 0.02})`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -54%)',
          }} />
        ))}

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: 'rgba(245,204,0,0.1)', border: '1px solid rgba(245,204,0,0.25)', color: '#F5CC00' }}>
            <Sparkles size={13} /> Diwali 2025 Collection is Live!
          </motion.div>

          {/* Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05 }} className="flex justify-center mb-6">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(245,204,0,0.18)', filter: 'blur(28px)', transform: 'scale(1.5)' }} />
              {/* Pulse ring */}
              <div className="absolute -inset-2 rounded-full"
                style={{ border: '1.5px solid rgba(245,204,0,0.2)', animation: 'pulseGold 2.8s ease-in-out infinite' }} />
              {/* Logo circle */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: '#2A1200',
                  border: '2px solid rgba(245,204,0,0.35)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 4px rgba(245,204,0,0.08)',
                }}>
                <img src="/images/vikram-logo.svg" alt="Vikram Crackers" className="w-full h-full object-contain p-2" />
              </div>
            </div>
          </motion.div>

          {/* Welcome */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="text-lg font-medium" style={{ color: 'rgba(245,220,160,0.6)', fontFamily: "'Playfair Display',serif" }}>Welcome to</span>
          </motion.div>

          {/* Brand name */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.14 }}
            className="text-5xl sm:text-7xl font-black leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
            <span style={{ color: '#F5E6C8' }}>Vikram</span>
            <span className="block" style={{
              background: 'linear-gradient(90deg,#8B5E00,#D4A800,#F5CC00,#D4A800,#8B5E00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'shimmer 4s linear infinite',
            }}>Crackers</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-base sm:text-lg mb-8 max-w-xl mx-auto"
            style={{ color: 'rgba(245,220,160,0.65)' }}>
            Premium fireworks from Sivakasi — sparklers, rockets, bombs &amp; fancy items.
            Order easily via WhatsApp!
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button onClick={() => setPage('catalog')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-base transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg,#8B5E00,#B88200,#D4A800)',
                color: '#FFF8DC',
                boxShadow: '0 6px 28px rgba(139,94,0,0.45)',
                border: '1px solid rgba(245,204,0,0.3)',
                animation: 'pulseGold 2.8s ease-in-out infinite',
              }}>
              🎆 Shop Now <ArrowRight size={16} />
            </button>
            <a href="https://wa.me/919150903031?text=Hi%20Vikram%20Crackers!" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff', boxShadow: '0 6px 24px rgba(37,211,102,0.25)' }}>
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </motion.div>

          {/* Phone numbers */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-5">
            {['94425-73184'].map(n => (
              <a key={n} href={`tel:+91${n.replace(/-/g,'')}`}
                className="flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: 'rgba(245,220,160,0.55)' }}>
                <Phone size={13} style={{ color: '#D4A800' }} /> {n}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: 'linear-gradient(90deg,transparent,rgba(245,204,0,0.2),transparent)' }} />

      {/* ── Categories ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-4xl font-black mb-2"
            style={{ fontFamily: "'Playfair Display',serif", color: '#F5E6C8' }}>Shop by Category</h2>
          <p className="text-sm" style={{ color: 'rgba(245,220,160,0.5)' }}>100+ varieties across all categories</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.button key={cat.label}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.09 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setPage('catalog')}
              className="relative overflow-hidden rounded-2xl text-left group"
              style={{ height: 200, boxShadow: '0 4px 24px rgba(0,0,0,0.4)', border: '1px solid rgba(245,204,0,0.1)' }}>
              <img src={cat.img} alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(15,5,0,0.9) 0%,rgba(15,5,0,0.2) 60%,transparent 100%)' }} />
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(245,204,0,0.5),transparent)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xl mb-1">{cat.emoji}</div>
                <h3 className="font-black text-white text-base leading-tight">{cat.label}</h3>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(245,204,0,0.65)' }}>{cat.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-14 px-4" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-10"
            style={{ fontFamily: "'Playfair Display',serif", color: '#F5E6C8' }}>Why Vikram Crackers?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl text-center" style={CARD_STYLE}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'rgba(245,204,0,0.1)', border: '1px solid rgba(245,204,0,0.15)' }}>
                  <f.icon size={22} style={{ color: '#D4A800' }} />
                </div>
                <h3 className="font-bold text-sm mb-1.5" style={{ color: '#F5E6C8' }}>{f.title}</h3>
                <p className="text-xs" style={{ color: 'rgba(245,220,160,0.55)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg,rgba(60,30,0,0.9),rgba(90,50,0,0.85))',
            border: '1px solid rgba(245,204,0,0.2)',
            boxShadow: '0 12px 50px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(12px)',
          }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(245,204,0,0.08) 0%, transparent 70%)',
          }} />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(245,204,0,0.5),transparent)' }} />
          <h2 className="relative text-3xl font-black mb-3"
            style={{ fontFamily: "'Playfair Display',serif", color: '#F5CC00' }}>Ready to Celebrate? 🎉</h2>
          <p className="relative text-base mb-7" style={{ color: 'rgba(245,220,160,0.65)' }}>Browse our full catalog and place your order via WhatsApp in seconds.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setPage('catalog')}
              className="relative px-8 py-3.5 rounded-2xl font-black text-base transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#8B5E00,#D4A800)', color: '#FFF8DC', boxShadow: '0 4px 20px rgba(184,130,0,0.4)', border: '1px solid rgba(245,204,0,0.3)' }}>
              🛒 Browse Products
            </button>
            <a href="https://wa.me/919150903031" target="_blank" rel="noreferrer"
              className="relative px-8 py-3.5 rounded-2xl font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ background: 'rgba(37,211,102,0.15)', border: '1.5px solid rgba(37,211,102,0.35)', color: '#4ADE80' }}>
              <MessageCircle size={18} /> WhatsApp Order
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
