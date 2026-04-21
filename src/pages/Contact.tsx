import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

// This is your WhatsApp Booking Number
const WHATSAPP_NUMBER = '9150903031'; 

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleWhatsApp = () => {
    if (!form.name || !form.message) return;
    const text = `Hi Vikram Crackers!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const info = [
    { icon: Phone,         label: 'Enquiry Call', value: '94873-36663' },
    { icon: MessageCircle, label: 'WhatsApp',     value: '91509-03031' },
    { icon: Mail,          label: 'Email',        value: 'vikramcrackersdm@gmail.com' },
    { icon: MapPin,        label: 'Address',      value: '2/304, Rathinapuri Nagar, Meenampatti, Sivakasi – 626123' },
    { icon: Clock,         label: 'Hours',        value: 'Mon–Sat: 9 AM – 8 PM' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-3" style={{ fontFamily: "'Playfair Display',serif", color: '#1A0A00' }}>
            Contact <span style={{ color: '#D4420A' }}>Us</span>
          </h1>
          <p style={{ color: '#7C5A3A' }}>We're just a call or WhatsApp message away.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl"
              style={{ background: '#fff', border: '1px solid rgba(212,66,10,0.1)', boxShadow: '0 2px 16px rgba(212,66,10,0.07)' }}>
              <h2 className="font-black text-lg mb-5" style={{ color: '#D4420A', fontFamily: "'Playfair Display',serif" }}>Vikram Crackers</h2>
              <div className="flex flex-col gap-4">
                {info.map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,66,10,0.07)' }}>
                      <item.icon size={15} style={{ color: '#D4420A' }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#7C5A3A' }}>{item.label}</p>
                      <p className="text-sm font-semibold" style={{ color: '#1A0A00' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vikram%20Crackers!%20I%20have%20a%20question.`}
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff', boxShadow: '0 4px 18px rgba(37,211,102,0.28)' }}>
              <MessageCircle size={20} /> WhatsApp Us Now
            </a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl"
            style={{ background: '#fff', border: '1px solid rgba(212,66,10,0.1)', boxShadow: '0 2px 16px rgba(212,66,10,0.07)' }}>
            <h2 className="font-black text-lg mb-6" style={{ color: '#1A0A00', fontFamily: "'Playfair Display',serif" }}>Send a Message</h2>
            <div className="flex flex-col gap-4">
              {[
                { key: 'name',    label: 'Your Name *',   type: 'text', placeholder: 'e.g. Rahul Sharma' },
                { key: 'phone',   label: 'Phone Number',  type: 'tel',  placeholder: '+91 XXXXX XXXXX' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#7C5A3A' }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    value={(form as Record<string,string>)[f.key]}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: '#FFF8F0', border: '1px solid rgba(212,66,10,0.15)', color: '#1A0A00' }} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: '#7C5A3A' }}>Message *</label>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Type your message or enquiry here..." rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: '#FFF8F0', border: '1px solid rgba(212,66,10,0.15)', color: '#1A0A00' }} />
              </div>
              <button onClick={handleWhatsApp} disabled={!form.name || !form.message}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff' }}>
                <Send size={16} /> Send via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}