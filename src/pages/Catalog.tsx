import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Plus, Minus, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { products, categories, type CategoryId } from '../data/products';

interface CatalogProps {
  cart: Record<string, number>;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onSet: (id: string, qty: number) => void;
  onCartOpen: () => void;
}

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Bestseller: { bg: 'rgba(245,204,0,0.15)',  text: '#F5CC00' },
  Popular:    { bg: 'rgba(255,160,64,0.15)', text: '#FFA040' },
  Premium:    { bg: 'rgba(180,120,255,0.15)',text: '#C084FC' },
  Loud:       { bg: 'rgba(255,100,60,0.15)', text: '#FF8060' },
  New:        { bg: 'rgba(74,222,128,0.15)', text: '#4ADE80' },
};

function QtyControl({ qty, onAdd, onRemove, onSet }: { qty: number; onAdd: () => void; onRemove: () => void; onSet: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      <button onClick={onRemove} disabled={qty === 0}
        className="w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all disabled:opacity-30"
        style={{ background: qty > 0 ? 'rgba(245,204,0,0.12)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,204,0,0.25)', color: '#D4A800' }}>
        <Minus size={11} />
      </button>
      <input type="number" min={0} max={999} value={qty}
        onChange={e => { const v = parseInt(e.target.value); onSet(isNaN(v) || v < 0 ? 0 : v); }}
        className="w-12 text-center text-sm font-bold rounded-lg h-7 outline-none"
        style={{ background: qty > 0 ? 'rgba(245,204,0,0.08)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,204,0,0.18)', color: '#F5E6C8' }} />
      <button onClick={onAdd}
        className="w-7 h-7 rounded-full flex items-center justify-center font-bold transition-all hover:scale-110"
        style={{ background: 'linear-gradient(135deg,#7A5000,#B88200)', color: '#FFF8DC', boxShadow: '0 2px 8px rgba(139,94,0,0.4)' }}>
        <Plus size={11} />
      </button>
    </div>
  );
}

function CategorySection({ label, emoji, image, prods, cart, onAdd, onRemove, onSet }: {
  catId: string; label: string; emoji: string; image: string;
  prods: typeof products; cart: Record<string, number>;
  onAdd: (id: string) => void; onRemove: (id: string) => void; onSet: (id: string, qty: number) => void;
}) {
  const [open, setOpen] = useState(true);
  const subtotal = prods.reduce((s, p) => s + p.price * (cart[p.id] || 0), 0);
  const itemsInCart = prods.filter(p => (cart[p.id] || 0) > 0).length;

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden mb-4"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(245,204,0,0.12)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}>

      {/* Header */}
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all hover:bg-white/5"
        style={{ borderBottom: open ? '1px solid rgba(245,204,0,0.08)' : 'none' }}>
        <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0"
          style={{ border: '1px solid rgba(245,204,0,0.15)' }}>
          <img src={image} alt={label} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <span>{emoji}</span>
          <span className="font-black text-base" style={{ color: '#F5CC00', fontFamily: "'Playfair Display',serif" }}>{label}</span>
          <span className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(245,204,0,0.1)', color: 'rgba(245,220,160,0.6)' }}>{prods.length} items</span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {itemsInCart > 0 && (
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} style={{ color: '#F5CC00' }} />
              <span className="text-xs font-bold" style={{ color: '#F5CC00' }}>₹{subtotal.toFixed(0)}</span>
            </div>
          )}
          {open
            ? <ChevronUp size={16} style={{ color: 'rgba(245,204,0,0.4)' }} />
            : <ChevronDown size={16} style={{ color: 'rgba(245,204,0,0.4)' }} />}
        </div>
      </button>

      {/* Table */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }} style={{ overflow: 'hidden' }}>

            {/* Table Header */}
            <div className="grid items-center px-4 py-2 text-xs font-bold uppercase tracking-widest"
              style={{
                gridTemplateColumns: '2.4rem 1fr 5.5rem 7rem 5.5rem',
                color: 'rgba(245,204,0,0.45)',
                borderBottom: '1px solid rgba(245,204,0,0.07)',
                background: 'rgba(245,204,0,0.03)',
              }}>
              <span />
              <span>Product</span>
              <span className="text-right">Rate (₹)</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Amount (₹)</span>
            </div>

            {/* Rows */}
            {prods.map((p, idx) => {
              const qty = cart[p.id] || 0;
              return (
                <motion.div key={p.id} layout
                  className="grid items-center px-4 py-2.5 gap-x-2 transition-colors"
                  style={{
                    gridTemplateColumns: '2.4rem 1fr 5.5rem 7rem 5.5rem',
                    borderBottom: idx < prods.length - 1 ? '1px solid rgba(245,204,0,0.05)' : 'none',
                    background: qty > 0 ? 'rgba(245,204,0,0.05)' : 'transparent',
                  }}>
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ border: '1px solid rgba(245,204,0,0.12)' }}>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-sm font-semibold" style={{ color: qty > 0 ? '#F5E6C8' : 'rgba(245,230,200,0.8)' }}>{p.name}</span>
                      {p.tag && (
                        <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0"
                          style={{ background: TAG_COLORS[p.tag]?.bg, color: TAG_COLORS[p.tag]?.text }}>{p.tag}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#4ADE80' }} />
                      <span className="text-xs" style={{ color: '#4ADE80' }}>In Stock</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold" style={{ color: '#D4A800' }}>{p.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-center">
                    <QtyControl qty={qty} onAdd={() => onAdd(p.id)} onRemove={() => onRemove(p.id)} onSet={n => onSet(p.id, n)} />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold" style={{ color: qty > 0 ? '#F5CC00' : 'rgba(245,204,0,0.2)' }}>
                      {qty > 0 ? (p.price * qty).toFixed(2) : '—'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Catalog({ cart, onAdd, onRemove, onSet, onCartOpen }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [search, setSearch] = useState('');

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const grandTotal  = products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);

  const filtered = useMemo(() => products.filter(p => {
    const matchCat    = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  }), [activeCategory, search]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof products>();
    filtered.forEach(p => { if (!map.has(p.category)) map.set(p.category, []); map.get(p.category)!.push(p); });
    return map;
  }, [filtered]);

  const catMeta = useMemo(() => {
    const m: Record<string, { label: string; emoji: string; image: string }> = {};
    categories.forEach(c => { if (c.id !== 'all') m[c.id] = { label: c.label, emoji: c.emoji, image: c.image }; });
    return m;
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-36 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 pt-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-2" style={{ fontFamily: "'Playfair Display',serif", color: '#F5E6C8' }}>
            Our <span style={{ background: 'linear-gradient(90deg,#8B5E00,#D4A800,#F5CC00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Products</span>
          </h1>
          <p className="text-sm" style={{ color: 'rgba(245,220,160,0.5)' }}>Select items, set quantity, then confirm order via WhatsApp</p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-5">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(245,204,0,0.4)' }} />
          <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,204,0,0.18)', color: '#F5E6C8', backdropFilter: 'blur(8px)' }} />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id as CategoryId | 'all')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: activeCategory === cat.id
                  ? 'linear-gradient(135deg,#7A5000,#B88200)'
                  : 'rgba(255,255,255,0.06)',
                color: activeCategory === cat.id ? '#FFF8DC' : 'rgba(245,220,160,0.6)',
                border: activeCategory === cat.id ? '1px solid rgba(245,204,0,0.35)' : '1px solid rgba(245,204,0,0.12)',
                boxShadow: activeCategory === cat.id ? '0 3px 12px rgba(139,94,0,0.4)' : 'none',
                transform: activeCategory === cat.id ? 'scale(1.05)' : 'scale(1)',
              }}>
              <span>{cat.emoji}</span><span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Sections */}
        {grouped.size === 0
          ? <div className="text-center py-20" style={{ color: 'rgba(245,220,160,0.4)' }}>No products found.</div>
          : Array.from(grouped.entries()).map(([catId, prods]) => (
            <CategorySection key={catId} catId={catId}
              label={catMeta[catId]?.label ?? catId}
              emoji={catMeta[catId]?.emoji ?? '🎆'}
              image={catMeta[catId]?.image ?? '/images/fancy.jpg'}
              prods={prods} cart={cart} onAdd={onAdd} onRemove={onRemove} onSet={onSet} />
          ))
        }
      </div>

      {/* Sticky Cart Bar */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2"
            style={{ background: 'linear-gradient(to top,rgba(15,6,0,1) 55%,transparent)' }}>
            <button onClick={onCartOpen}
              className="max-w-2xl mx-auto flex items-center justify-between px-5 py-4 rounded-2xl w-full transition-all hover:scale-[1.01]"
              style={{
                background: 'linear-gradient(135deg,rgba(60,30,0,0.97),rgba(90,50,0,0.95))',
                border: '1px solid rgba(245,204,0,0.25)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(12px)',
              }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(245,204,0,0.12)', border: '1px solid rgba(245,204,0,0.2)' }}>
                  <ShoppingCart size={17} style={{ color: '#F5CC00' }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'rgba(245,204,0,0.55)' }}>{totalItems} item{totalItems !== 1 ? 's' : ''} in cart</p>
                  <p className="text-lg font-black" style={{ color: '#F5CC00' }}>₹{grandTotal.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm"
                style={{ background: 'linear-gradient(135deg,#8B5E00,#D4A800)', color: '#FFF8DC', border: '1px solid rgba(245,204,0,0.3)' }}>
                View Cart →
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}