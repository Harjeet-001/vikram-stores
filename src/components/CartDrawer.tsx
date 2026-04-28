import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Trash2 } from 'lucide-react';
import type { Product } from '../data/products';

interface CartItem { product: Product; quantity: number; }
interface CartDrawerProps {
  open: boolean; onClose: () => void;
  items: CartItem[]; onRemoveItem: (id: string) => void; onWhatsApp: () => void;
}

export default function CartDrawer({ open, onClose, items, onRemoveItem, onWhatsApp }: CartDrawerProps) {
  const grandTotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }} />

          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col w-full max-w-md"
            style={{
              background: 'linear-gradient(160deg,#2A1200 0%,#1E0A00 100%)',
              borderLeft: '1px solid rgba(245,204,0,0.15)',
              boxShadow: '-8px 0 50px rgba(0,0,0,0.6)',
            }}>

            {/* Header */}
            <div className="flex items-center justify-between p-5"
              style={{ borderBottom: '1px solid rgba(245,204,0,0.12)', background: 'rgba(245,204,0,0.05)' }}>
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} style={{ color: '#F5CC00' }} />
                <h2 className="font-black text-lg" style={{ color: '#F5CC00', fontFamily: "'Playfair Display',serif" }}>Your Cart</h2>
                {items.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(245,204,0,0.15)', color: '#F5CC00' }}>
                    {items.reduce((s, i) => s + i.quantity, 0)} items
                  </span>
                )}
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(245,204,0,0.1)', color: '#F5CC00', border: '1px solid rgba(245,204,0,0.2)' }}>
                <X size={16} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
                  <ShoppingBag size={52} style={{ color: 'rgba(245,204,0,0.15)' }} />
                  <p className="text-center text-sm" style={{ color: 'rgba(245,220,160,0.5)' }}>Cart is empty.<br />Add items from the catalog.</p>
                </div>
              ) : items.map(({ product, quantity }) => (
                <motion.div key={product.id} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,204,0,0.1)' }}>
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: '#F5E6C8' }}>{product.name}</p>
                    <p className="text-xs" style={{ color: 'rgba(245,220,160,0.55)' }}>{quantity} × ₹{product.price.toFixed(2)}</p>
                    <p className="text-sm font-bold" style={{ color: '#F5CC00' }}>₹{(product.price * quantity).toFixed(2)}</p>
                  </div>
                  <button onClick={() => onRemoveItem(product.id)}
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,100,0,0.12)', color: '#FF8C42' }}>
                    <Trash2 size={14} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 flex flex-col gap-4"
                style={{ borderTop: '1px solid rgba(245,204,0,0.1)', background: 'rgba(245,204,0,0.04)' }}>
                <div className="rounded-2xl p-4 flex flex-col gap-1.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,204,0,0.12)' }}>
                  <p className="text-xs font-bold mb-1" style={{ color: 'rgba(245,220,160,0.5)' }}>Order Summary</p>
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex justify-between text-sm">
                      <span className="truncate flex-1 mr-2" style={{ color: 'rgba(245,220,160,0.65)' }}>{product.name}</span>
                      <span style={{ color: 'rgba(245,220,160,0.55)', whiteSpace: 'nowrap' }}>{quantity} × ₹{product.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-black text-base pt-2 mt-1"
                    style={{ borderTop: '1px solid rgba(245,204,0,0.15)', color: '#F5CC00' }}>
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={onWhatsApp}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-black text-base transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff', boxShadow: '0 4px 24px rgba(37,211,102,0.3)' }}>
                  <MessageCircle size={20} /> Confirm Order via WhatsApp
                </button>
                <p className="text-center text-xs" style={{ color: 'rgba(245,220,160,0.4)' }}>You'll be redirected to WhatsApp to confirm</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}