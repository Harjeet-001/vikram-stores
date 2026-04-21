import { motion } from 'framer-motion';
import { Heart, Award, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years in Business', value: '15+' },
    { label: 'Happy Customers',   value: '50,000+' },
    { label: 'Product Varieties', value: '100+' },
    { label: 'Based In',          value: 'Sivakasi' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ background: 'rgba(184,130,0,0.1)', border: '1px solid rgba(184,130,0,0.25)', color: '#7A5000' }}>
            About Us
          </span>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(245,204,0,0.2)', filter: 'blur(24px)', transform: 'scale(1.5)' }} />
              <div className="relative w-28 h-28 rounded-full bg-white p-2"
                style={{ boxShadow: '0 8px 32px rgba(184,130,0,0.22)' }}>
                <img src="/images/vikram-logo.svg" alt="Vikram Crackers" className="w-full h-full object-contain" />
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
            aerial displays that make everyone stop and look up in wonder — we supply according to your needs.
          </p>
          <p className="text-base max-w-2xl mx-auto mt-4 leading-relaxed" style={{ color: '#8B6A30' }}>
            This Diwali, choose fireworks made with care, passion, and generations of expertise.
            Because your celebrations deserve nothing less than the best from us.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-14"
          style={{ height: 300, boxShadow: '0 8px 40px rgba(92,58,0,0.15)' }}>
          <img src="/images/about-bg.jpg" alt="Vikram Crackers" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,rgba(44,26,0,0.78) 0%,transparent 60%)' }} />
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg,transparent,rgba(245,204,0,0.5),transparent)' }} />
          <div className="absolute inset-0 flex items-center px-8">
            <div className="max-w-xs">
              <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "'Playfair Display',serif", color: '#F5CC00' }}>Lighting Up Every Festivity</h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>From Diwali to New Year, part of your cherished celebrations for 15+ years.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-5 rounded-2xl"
              style={{ background: '#fff', border: '1px solid rgba(184,130,0,0.14)', boxShadow: '0 2px 12px rgba(92,58,0,0.07)' }}>
              <div className="text-2xl font-black mb-1" style={{ color: '#5C3A00' }}>{s.value}</div>
              <div className="text-xs" style={{ color: '#8B6A30' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { icon: Heart,  title: 'Customer First',  desc: 'Every decision puts our customers and their safety at the heart of it.' },
            { icon: Award,  title: 'Quality Assured', desc: 'All products are BIS certified, sourced directly from Sivakasi manufacturers.' },
            { icon: MapPin, title: 'Local Roots',     desc: 'Proudly based in Sivakasi — the fireworks capital of India — since 2009.' },
          ].map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl"
              style={{ background: '#fff', border: '1px solid rgba(184,130,0,0.14)', boxShadow: '0 2px 12px rgba(92,58,0,0.07)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg,rgba(245,204,0,0.15),rgba(184,130,0,0.12))' }}>
                <v.icon size={20} style={{ color: '#7A5000' }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#2C1A00' }}>{v.title}</h3>
              <p className="text-sm" style={{ color: '#8B6A30' }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Card */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{ background: '#fff', border: '1px solid rgba(184,130,0,0.15)', boxShadow: '0 4px 24px rgba(92,58,0,0.08)' }}>
          <div className="px-6 pt-5 pb-3"
            style={{ background: 'linear-gradient(135deg,rgba(245,204,0,0.08),rgba(184,130,0,0.05))', borderBottom: '1px solid rgba(184,130,0,0.1)' }}>
            <h2 className="font-black text-xl" style={{ fontFamily: "'Playfair Display',serif", color: '#5C3A00' }}>Find Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-6 py-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(184,130,0,0.1)' }}>
                  <MapPin size={16} style={{ color: '#7A5000' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#8B6A30' }}>Address</p>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: '#2C1A00' }}>
                    Vikram Crackers<br />2/304, Rathinapuri Nagar,<br />Meenampatti, Sivakasi – 626123<br />Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-5 flex flex-col gap-2.5" style={{ borderLeft: '1px solid rgba(184,130,0,0.1)' }}>
              <p className="text-xs font-semibold" style={{ color: '#8B6A30' }}>Contact</p>
              {[
                { icon: Phone, val: '94425-73184' },
                { icon: Phone, val: '98422-19323' },
                { icon: Phone, val: '94865-31318' },
                { icon: Mail,  val: 'ayngarankandasamy@gmail.com' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <c.icon size={14} style={{ color: '#7A5000', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: '#3D2200' }}>{c.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 px-6 py-4"
            style={{ borderTop: '1px solid rgba(184,130,0,0.1)', background: 'rgba(245,204,0,0.03)' }}>
            <a href="tel:+919442573184"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: 'rgba(184,130,0,0.1)', border: '1px solid rgba(184,130,0,0.25)', color: '#5C3A00' }}>
              <Phone size={15} /> Call Now
            </a>
            <a href="https://wa.me/919442573184?text=Hi%20Vikram%20Crackers!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff', boxShadow: '0 3px 14px rgba(37,211,102,0.25)' }}>
              <MessageCircle size={15} /> WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
