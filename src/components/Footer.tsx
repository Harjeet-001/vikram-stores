import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps { setPage: (p: string) => void; }

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer style={{
      background: 'linear-gradient(135deg,#0E0600 0%,#1A0A00 100%)',
      borderTop: '1px solid rgba(245,204,0,0.15)',
    }}>
      {/* Gold top stripe */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,rgba(245,204,0,0.6),rgba(184,130,0,0.8),rgba(245,204,0,0.6),transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: '1px solid rgba(245,204,0,0.25)', background: '#2A1200', boxShadow: '0 0 14px rgba(245,204,0,0.2)' }}>
                <img src="/images/vikram-logo.png" alt="Vikram Crackers" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg" style={{ fontFamily: "'Playfair Display',serif", color: '#F5CC00' }}>Vikram</span>
                <span className="font-black text-base" style={{ fontFamily: "'Playfair Display',serif", color: 'rgba(245,204,0,0.6)' }}>Crackers</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,220,160,0.45)' }}>
              Premium quality fireworks from Sivakasi. Lighting up your celebrations since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4" style={{ color: '#F5CC00' }}>Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[['home','Home'],['catalog','Products'],['about','About Us'],['contact','Contact']].map(([id,label]) => (
                <button key={id} onClick={() => setPage(id)}
                  className="text-left text-sm transition-all hover:translate-x-1 duration-200"
                  style={{ color: 'rgba(245,220,160,0.5)' }}>{label}</button>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-sm mb-4" style={{ color: '#F5CC00' }}>Our Location</h4>
            <div className="flex items-start gap-2">
              <MapPin size={14} style={{ color: '#F5CC00', flexShrink: 0, marginTop: 2 }} />
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,220,160,0.5)' }}>
                2/304, Rathinapuri Nagar,<br />Meenampatti, Sivakasi – 626123<br />Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4" style={{ color: '#F5CC00' }}>Contact Us</h4>
            <div className="flex flex-col gap-2.5">
              {/* UPDATED PHONE NUMBER */}
              <a href="tel:+919487336663"
                className="flex items-center gap-2 text-sm transition-all hover:translate-x-1 duration-200"
                style={{ color: 'rgba(245,220,160,0.5)' }}>
                <Phone size={12} style={{ color: '#F5CC00' }} /> 94873-36663
              </a>

              {/* UPDATED WHATSAPP ORDER NUMBER */}
              <a href="https://wa.me/919150903031" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm transition-all hover:translate-x-1 duration-200"
                style={{ color: 'rgba(245,220,160,0.5)' }}>
                <MessageCircle size={12} style={{ color: '#25D366' }} /> WhatsApp Order
              </a>

              {/* UPDATED EMAIL ID */}
              <a href="mailto:vikramcrackersdm@gmail.com"
                className="flex items-center gap-2 text-sm transition-all hover:translate-x-1 duration-200"
                style={{ color: 'rgba(245,220,160,0.5)', wordBreak: 'break-all' }}>
                <Mail size={12} style={{ color: '#F5CC00' }} /> vikramcrackersdm@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6"
          style={{ borderTop: '1px solid rgba(245,204,0,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(245,220,160,0.3)' }}>© 2025 Vikram Crackers. All rights reserved.</p>
          <p className="text-xs mt-2 sm:mt-0" style={{ color: 'rgba(245,220,160,0.3)' }}>Celebrate Responsibly 🎆 | Sivakasi, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}