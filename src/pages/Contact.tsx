import { motion } from 'framer-motion';
import { Heart, Award, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years in Business', value: '15+' },
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Product Varieties', value: '100+' },
    { label: 'Based In', value: 'Sivakasi' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ backgroundColor: '#ffed99' }}>
      <div className="max-w-4xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ background: 'rgba(139,94,0,0.1)', border: '1px solid rgba(139,94,0,0.2)', color: '#5C3A00' }}>
            About Us
          </span>
          
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="relative">
              {/* Glow and Circle removed */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <img src="/images/vikram-logo.png" alt="Vikram Crackers" className="w-full h-full object-contain" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black"
                style={{ fontFamily: "'Playfair Display',serif", color: '#5C3A00' }}>Vikram Crackers</h1>
              <p className="text-base mt-1" style={{ color: '#8B6A30' }}>Sivakasi's Trusted Fireworks Brand</p>
            </div>
          </div>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#3D2200' }}>
            Welcome to <strong style={{ color: '#5C3A00' }}>Vikram Crackers</strong> — light up your Diwali celebrations
            with magic that only we can bring! From the gentle glow of sparklers in little hands to the breathtaking
            aerial displays that make everyone stop and look up in wonder.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-14"
          style={{ height: 300, boxShadow: '0 8px 40px rgba(92,58,0,0.12)' }}>
          <img src="/images/about-bg.jpg" alt="Vikram Crackers" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(44,26,0,0.7) 0%,transparent 60%)' }} />
          <div className="absolute inset-0 flex items-center px-8">
            <div className="max-w-xs">
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Playfair Display',serif", color: '#F5CC00' }}>Lighting Up Every Festivity</h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Part of your cherished celebrations for 15+ years.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl"
              style={{ background: '#fff', border: '1px solid rgba(139,94,0,0.1)', boxShadow: '0 4px 12px rgba(92,58,0,0.05)' }}>
              <div className="text-2xl font-black mb-1" style={{ color: '#5C3A00' }}>{s.value}</div>
              <div className="text-xs font-medium" style={{ color: '#8B6A30' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contact/Find Us Card */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{ background: '#fff', border: '1px solid rgba(139,94,0,0.12)', boxShadow: '0 10px 30px rgba(92,58,0,0.08)' }}>
          <div className="px-6 pt-5 pb-3"
            style={{ background: 'rgba(139,94,0,0.03)', borderBottom: '1px solid rgba(139,94,0,0.08)' }}>
            <h2 className="font-black text-xl" style={{ fontFamily: "'Playfair Display',serif", color: '#5C3A00' }}>Find Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-6 py-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(139,94,0,0.08)' }}>
                  <MapPin size={16} style={{ color: '#5C3A00' }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#8B6A30' }}>Address</p>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: '#2C1A00' }}>
                    Vikram Crackers<br />2/304, Rathinapuri Nagar,<br />Meenampatti, Sivakasi – 626123
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 flex flex-col gap-3" style={{ borderLeft: '1px solid rgba(139,94,0,0.08)' }}>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8B6A30' }}>Direct Contact</p>
              {[
                { icon: Phone, val: '9150903031' },
                { icon: Mail, val: 'vikramcrackersdm@gmail.com' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <c.icon size={14} style={{ color: '#5C3A00' }} />
                  <span className="text-sm font-medium" style={{ color: '#3D2200' }}>{c.val}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 px-6 py-4" style={{ borderTop: '1px solid rgba(139,94,0,0.08)' }}>
            <a href="tel:+919442573184"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:bg-orange-50"
              style={{ border: '1px solid rgba(139,94,0,0.2)', color: '#5C3A00' }}>
              <Phone size={15} /> Call Now
            </a>
            <a href="https://wa.me/919150903031" target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: '#25D366', color: '#fff' }}>
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}