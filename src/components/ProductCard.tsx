import { motion } from 'framer-motion';
import { Plus, Minus, CheckCircle } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
  onSet: (qty: number) => void;
}

const TAG_COLORS: Record<string, string> = {
  Bestseller: 'linear-gradient(90deg,#FFD700,#FF9500)',
  Popular: 'linear-gradient(90deg,#FF6B35,#FF3CAC)',
  Premium: 'linear-gradient(90deg,#784BA0,#2B86C5)',
  Loud: 'linear-gradient(90deg,#FF3CAC,#FF6B35)',
  New: 'linear-gradient(90deg,#00D4AA,#2B86C5)',
};

export default function ProductCard({ product, quantity, onAdd, onRemove, onSet }: ProductCardProps) {
  const isInCart = quantity > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(25,15,50,0.95), rgba(15,8,35,0.98))',
        border: isInCart ? '1.5px solid rgba(255,215,0,0.5)' : '1.5px solid rgba(255,255,255,0.08)',
        boxShadow: isInCart
          ? '0 8px 32px rgba(255,180,0,0.18), 0 2px 8px rgba(0,0,0,0.4)'
          : '0 4px 24px rgba(0,0,0,0.4)',
        transition: 'border 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Tag */}
      {product.tag && (
        <div
          className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-xs font-bold text-black"
          style={{ background: TAG_COLORS[product.tag] || '#FFD700' }}
        >
          {product.tag}
        </div>
      )}

      {/* In-cart glow indicator */}
      {isInCart && (
        <div className="absolute top-3 right-3 z-10">
          <CheckCircle size={20} style={{ color: '#FFD700' }} />
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '180px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,5,20,0.8) 0%, transparent 50%)' }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Category pill */}
        <span className="self-start text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ color: '#FF9500', background: 'rgba(255,149,0,0.12)' }}>
          {product.category}
        </span>

        <h3 className="font-bold text-base leading-snug" style={{ color: '#fff', fontFamily: 'Georgia, serif' }}>
          {product.name}
        </h3>

        {/* Price + Stock */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-black" style={{ color: '#FFD700' }}>₹{product.price}</span>
          <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full" style={{ color: '#00D4AA', background: 'rgba(0,212,170,0.12)' }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#00D4AA' }} />
            In Stock
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={onRemove}
            disabled={quantity === 0}
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-30"
            style={{ background: quantity > 0 ? 'rgba(255,107,53,0.2)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,107,53,0.4)', color: '#FF6B35' }}
          >
            <Minus size={14} />
          </button>

          <input
            type="number"
            min={0}
            max={999}
            value={quantity}
            onChange={e => {
              const v = parseInt(e.target.value);
              onSet(isNaN(v) || v < 0 ? 0 : v);
            }}
            className="flex-1 text-center font-bold text-base rounded-lg h-9 outline-none"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}
          />

          <button
            onClick={onAdd}
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all duration-200 hover:scale-110"
            style={{ background: 'linear-gradient(135deg,#FFD700,#FF6B35)', color: '#0a0514' }}
          >
            <Plus size={14} />
          </button>
        </div>

        {/* Per-item total */}
        {isInCart && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-center text-sm font-semibold pt-1"
            style={{ color: '#FFD700', borderTop: '1px solid rgba(255,215,0,0.15)' }}
          >
            Subtotal: ₹{product.price * quantity}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
