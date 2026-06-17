import React, { useState } from 'react';

export default function Landing({ onNavigate }) {
  // Simulator State for the new B2B Command Hub Landing page
  const [apparelLine, setApparelLine] = useState('techwear');
  const [orderVolume, setOrderVolume] = useState(100);

  const getPricePerItem = () => {
    let base = 250000;
    if (apparelLine === 'urban') base = 150000;
    if (apparelLine === 'classic') base = 350000;
    
    // bulk discount
    if (orderVolume >= 500) return base * 0.8;
    if (orderVolume >= 200) return base * 0.9;
    return base;
  };

  const formattedTotal = new Intl.NumberFormat('uz-UZ').format(getPricePerItem() * orderVolume);

  return (
    <div id="landing-page" className="landing-layout-v2">
      {/* SYSTEM TERMINAL HEADER */}
      <header className="futuristic-header">
        <div className="header-glass-container">
          <div className="brand-logo">
            <span className="flow-icon"><i className="fa-solid fa-terminal"></i></span>
            <span className="brand-name">Moda<span>Flow</span></span>
            <span className="atelier-tag">B2B CONSOLE</span>
          </div>
          <nav className="header-nav-links">
            <a href="#simulator" className="nav-link">Kalkulyator</a>
            <a href="#telemetry" className="nav-link">Tizim holati</a>
            <a href="#vouchers" className="nav-link">Voucherlar</a>
          </nav>
          <div className="header-cta-group">
            <button className="btn btn-secondary btn-glow-border" onClick={() => onNavigate('login')}>Kirish [SYS_IN]</button>
            <button className="btn btn-accent btn-cyber-glow" onClick={() => onNavigate('register')}>Ro'yxatdan o'tish</button>
          </div>
        </div>
      </header>

      {/* NEW B2B COMMAND INTERACTION HERO */}
      <section className="immersive-hero">
        <div className="hero-grid-overlay"></div>
        <div className="hero-content-wrapper">
          <div className="hero-tag-glow">// PROTOCOL 2026 // ON-DEMAND LOGISTICS</div>
          <h1 className="hero-massive-title">
            ULGURJI BUYURTMALAR<br />
            <span>AVTOMATLASHTIRILGAN TIZIMI</span>
          </h1>
          <p className="hero-immersive-desc">
            ModaFlow B2B platformasi - kiyim-kechak brendlari, ulgurji xaridorlar va fabrikalar o'rtasidagi to'g'ridan-to'g'ri integratsiya. Murakkab buyurtmalarni 3 ta tugma bilan yuboring va real vaqtda kuzating.
          </p>
          <div className="hero-action-buttons">
            <button className="btn btn-accent btn-large btn-cyber-glow" onClick={() => onNavigate('login')}>
              Konsolni ochish <i className="fa-solid fa-power-off"></i>
            </button>
            <a href="#simulator" className="btn btn-outline btn-large">
              Narxlarni hisoblash
            </a>
          </div>
        </div>

        {/* Dynamic Interactive Panel replaces the static images */}
        <div className="hero-visual-collage" style={{ flex: 1 }}>
          <div className="collage-card card-cyan" style={{ width: '100%', maxWidth: '380px' }}>
            <span className="card-label">[TIZIM MONITORINGI]</span>
            <span className="card-val" style={{ fontSize: '1rem', color: '#00f0ff', fontFamily: 'monospace' }}>
              ✓ Server online: localhost:3000<br />
              ✓ Ma'lumotlar bazasi: SQLite<br />
              ✓ Xavfsiz shifrlash: TLS 1.3
            </span>
          </div>
          <div className="collage-card card-purple" style={{ width: '100%', maxWidth: '380px' }}>
            <span className="card-label">[BUYURTMA STATISTIKASI]</span>
            <span className="card-val" style={{ fontSize: '1rem', color: '#ff007f', fontFamily: 'monospace' }}>
              ✦ Jami buyurtmalar: 1,489 ta<br />
              ✦ Yuklangan modellar: 500+ xil<br />
              ✦ Eksport liniyalari: MDH & Yevropa
            </span>
          </div>
        </div>
      </section>

      {/* DYNAMIC B2B CALCULATOR & CONFIGURATOR */}
      <section id="simulator" className="experience-selector-section" style={{ borderBottom: '1px solid rgba(255,0,127,0.1)' }}>
        <div className="container-narrow">
          <div className="section-title-left">
            <span className="neon-text-span">// INTELLIGENT B2B PRICING SIMULATOR</span>
            <h2>Buyurtma Parametrlari Simulyatori</h2>
            <p>Quyidagi interaktiv kalkulyatorda kiyim liniyasi va kerakli miqdorni tanlab, ulgurji narxni hisoblab ko'ring.</p>
          </div>

          <div className="collage-card" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', background: 'rgba(23, 11, 48, 0.7)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {/* Left Configs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>1. Kiyim Liniyasini tanlang:</label>
                  <select 
                    value={apparelLine} 
                    onChange={(e) => setApparelLine(e.target.value)}
                    style={{ width: '100%', padding: '12px', background: '#090412', border: '1px solid var(--line)', color: '#fff', borderRadius: '8px' }}
                  >
                    <option value="techwear">Oversized Techwear Liniyasi</option>
                    <option value="urban">Urban Streetwear Liniyasi</option>
                    <option value="classic">Klassik & Rasmiy kiyimlar</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>
                    2. Buyurtma Miqdori: <span style={{ color: '#00f0ff' }}>{orderVolume} ta kiyim</span>
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="1000" 
                    step="50" 
                    value={orderVolume} 
                    onChange={(e) => setOrderVolume(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span>Min: 50 ta</span>
                    <span>Hajm chegirmasi: 200+ (10%), 500+ (20%)</span>
                    <span>Max: 1000 ta</span>
                  </div>
                </div>
              </div>

              {/* Right Output Console */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#090412', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255, 0, 127, 0.2)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Donasi uchun narx</span>
                <h3 style={{ fontSize: '1.8rem', color: '#00f0ff', margin: '10px 0' }}>
                  {new Intl.NumberFormat('uz-UZ').format(getPricePerItem())} UZS
                </h3>
                <hr style={{ width: '100%', border: '0', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '15px 0' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Jami hisoblangan summa</span>
                <h2 style={{ fontSize: '2.5rem', color: '#ff007f', fontWeight: 'bold', textShadow: '0 0 10px rgba(255,0,127,0.3)' }}>
                  {formattedTotal} UZS
                </h2>
                <button className="btn btn-accent btn-block mt-3 btn-cyber-glow" onClick={() => onNavigate('login')}>
                  Buyurtmani Rasmiylashtirish <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM LOGS & TELEMETRY */}
      <section id="telemetry" className="tech-benefits-section" style={{ background: '#090412' }}>
        <div className="container-narrow">
          <div className="section-title-left" style={{ margin: '0 auto 60px auto', textAlign: 'center' }}>
            <span className="neon-text-span">// SYSTEM LIVE TELEMETRY</span>
            <h2>Haqiqiy Vaqt Rejimidagi Tizim Holati</h2>
            <p>Quyida platformaning joriy yuklanishi va buyurtmalarni qayta ishlash tezligi ko'rsatilgan.</p>
          </div>

          <div className="tech-benefits-grid">
            <div className="tech-benefit-item">
              <div className="tech-icon-glow"><i className="fa-solid fa-gauge-high"></i></div>
              <h3>99.9% Javob Tezligi</h3>
              <p>Platformamiz har qanday yirik tranzaksiyalar oqimida ham barqaror ishlaydi va so'rovlarga 0.2 soniyada javob beradi.</p>
            </div>
            <div className="tech-benefit-item">
              <div className="tech-icon-glow"><i className="fa-solid fa-truck-moving"></i></div>
              <h3>Avtomatlashtirilgan Kuryer</h3>
              <p>Omborga integratsiya qilingan aqlli marshrut tizimi shartnoma tasdiqlanishi bilan yukni jo'natishga tayyorlaydi.</p>
            </div>
            <div className="tech-benefit-item">
              <div className="tech-icon-glow"><i className="fa-solid fa-code-merge"></i></div>
              <h3>Tizim Integratsiyasi</h3>
              <p>O'zingizning buxgalteriya (1C yoki boshqa ERP) tizimlaringizni API orqali ModaFlow ga oson ulashing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOLOGRAPHIC VIP VOUCHERS */}
      <section id="vouchers" className="holographic-coupons-section">
        <div className="container-narrow">
          <div className="holographic-card-wrapper">
            <div className="holo-promo-text">
              <span className="holo-badge">TIZIM VOUCHERLARI</span>
              <h2>Eksklyuziv Promo-kodlar</h2>
              <p>Ushbu maxsus kodlarni buyurtma jarayonida qo'llash orqali jami summadan chegirmalar oling.</p>
            </div>
            <div className="holo-tickets-row">
              <div className="holo-ticket">
                <div className="holo-circle-left"></div>
                <div className="holo-circle-right"></div>
                <div className="holo-ticket-main">
                  <h4>10% CHEGIRMA</h4>
                  <p>Kod: MODAFLOW10</p>
                  <span className="holo-code">MODAFLOW10</span>
                </div>
              </div>
              <div className="holo-ticket gold-holo">
                <div className="holo-circle-left"></div>
                <div className="holo-circle-right"></div>
                <div className="holo-ticket-main">
                  <h4>15% CHEGIRMA</h4>
                  <p>Kod: SPRING15</p>
                  <span className="holo-code">SPRING15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER PANEL */}
      <section className="futuristic-cta-section">
        <div className="cta-glass-box">
          <h2>ModaFlow B2B Ekotizimiga Qo'shiling</h2>
          <p>Ulgurji xaridlarni boshqarish uchun eng qulay va tezkor konsolni hozirroq yoqing.</p>
          <div className="cta-btn-wrap">
            <button className="btn btn-accent btn-large btn-cyber-glow" onClick={() => onNavigate('register')}>
              Ulanish [SYS_ON] <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="futuristic-footer">
        <div className="footer-content-wrap">
          <div className="footer-brand-info">
            <div className="brand-logo">
              <i className="fa-solid fa-terminal"></i>
              <span>Moda<span>Flow</span></span>
            </div>
            <p>Avtomatlashtirilgan ulgurji savdo platformasi va kiyim-kechak B2B boshqaruv markazi.</p>
          </div>
          <div className="footer-copyright">
            <p>© 2026 ModaFlow Atelier Corp. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
