import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Background from './components/Background';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import { products } from './data/products';

const WHATSAPP_NUMBER = '919150903031';
const MIN_PURCHASE = 3000;

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart      = (id: string) => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = (id: string) => setCart(c => {
    const qty = (c[id] || 0) - 1;
    if (qty <= 0) { const n = { ...c }; delete n[id]; return n; }
    return { ...c, [id]: qty };
  });
  const setQty     = (id: string, qty: number) => setCart(c => {
    if (qty <= 0) { const n = { ...c }; delete n[id]; return n; }
    return { ...c, [id]: qty };
  });
  const removeItem = (id: string) => setCart(c => { const n = { ...c }; delete n[id]; return n; });

  const cartItems  = products.filter(p => (cart[p.id] || 0) > 0).map(p => ({ product: p, quantity: cart[p.id] }));
  const cartCount  = cartItems.reduce((s, i) => s + i.quantity, 0);
  const grandTotal = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const handleWhatsApp = () => {
    if (cartItems.length === 0) return;

    // Minimum purchase validation
    if (grandTotal < MIN_PURCHASE) {
      alert(`⚠️ Minimum Order Required: ₹${MIN_PURCHASE}\n\nYour current total is ₹${grandTotal.toFixed(2)}. Please add items worth ₹${(MIN_PURCHASE - grandTotal).toFixed(2)} more to proceed.`);
      return;
    }

    const lines = cartItems.map(i =>
      `- ${i.product.name}: ${i.quantity} x ₹${i.product.price.toFixed(2)} = ₹${(i.product.price * i.quantity).toFixed(2)}`
    );
    const message =
      `🎆 *Order from Vikram Crackers*%0A%0A` +
      lines.map(l => encodeURIComponent(l)).join('%0A') +
      `%0A%0A*Total Amount: ₹${grandTotal.toFixed(2)}*%0A%0APlease confirm my order. Thank you!`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setCartOpen(false); // Close drawer only after successful validation
  };

  const navigate = (p: string) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const pages: Record<string, React.ReactElement> = {
    home:    <Home setPage={navigate} />,
    catalog: <Catalog cart={cart} onAdd={addToCart} onRemove={removeFromCart} onSet={setQty} onCartOpen={() => setCartOpen(true)} />,
    about:   <About />,
    contact: <Contact />,
  };

  return (
    <div className="relative" style={{ minHeight: '100vh', background: '#1E0E00', color: '#F5E6C8' }}>
      <Background />

      <Navbar currentPage={page} setPage={navigate} cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <AnimatePresence mode="wait">
        <motion.main key={page}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }} className="relative z-10">
          {pages[page] || pages.home}
        </motion.main>
      </AnimatePresence>

      <div className="relative z-10">
        <Footer setPage={navigate} />
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)}
        items={cartItems} onRemoveItem={removeItem}
        onWhatsApp={handleWhatsApp} />
    </div>
  );
}