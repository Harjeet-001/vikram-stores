import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  setPage: (p: string) => void;
  cartCount: number;
  onCartOpen: () => void;
}

export default function Navbar({ currentPage, setPage, cartCount, onCartOpen }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: 'home',    label: 'Home' },
    { id: 'catalog', label: 'Products' },
    { id: 'about',   label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];
  const navigate = (id: string) => { setPage(id); setMenuOpen(false); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(22,10,0,0.82)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(245,204,0,0.15)',
      boxShadow: '0 2px 30px rgba(0,0,0,0.5)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => navigate('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
              style={{ boxShadow: '0 0 14px rgba(245,204,0,0.3)', border: '1px solid rgba(245,204,0,0.2)' }}>
              <img src="/images/vikram-logo.svg" alt="Vikram Crackers"
                className="w-full h-full object-contain" style={{ background: '#2A1200' }} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg tracking-tight"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", color: '#F5CC00', lineHeight: 1 }}>Vikram</span>
              <span className="font-black text-base tracking-tight"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", color: 'rgba(245,204,0,0.65)', lineHeight: 1 }}>Crackers</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button key={l.id} onClick={() => navigate(l.id)}
                className="text-sm font-semibold tracking-wide transition-all duration-200 relative pb-0.5"
                style={{ color: currentPage === l.id ? '#F5CC00' : 'rgba(245,220,160,0.65)' }}>
                {l.label}
                {currentPage === l.id && (
                  <motion.div layoutId="nav-ind" className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#8B5E00,#F5CC00,#8B5E00)' }} />
                )}
              </button>
            ))}
          </div>

          {/* Cart */}
          <div className="flex items-center gap-3">
            <button onClick={onCartOpen}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg,#8B5E00,#B88200)',
                color: '#FFF8DC',
                boxShadow: '0 3px 16px rgba(139,94,0,0.45)',
                border: '1px solid rgba(245,204,0,0.3)',
              }}>
              <ShoppingCart size={15} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs flex items-center justify-center font-black"
                  style={{ background: '#F5CC00', color: '#2A1200' }}>{cartCount}</span>
              )}
            </button>
            <button className="md:hidden" style={{ color: '#F5CC00' }} onClick={() => setMenuOpen(v => !v)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="md:hidden px-4 pb-4 flex flex-col gap-1"
            style={{ background: 'rgba(22,10,0,0.97)', borderTop: '1px solid rgba(245,204,0,0.1)' }}>
            {links.map(l => (
              <button key={l.id} onClick={() => navigate(l.id)}
                className="text-left py-3 px-3 rounded-xl font-semibold text-sm"
                style={{
                  color: currentPage === l.id ? '#F5CC00' : 'rgba(245,220,160,0.65)',
                  background: currentPage === l.id ? 'rgba(245,204,0,0.08)' : 'transparent',
                }}>{l.label}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
