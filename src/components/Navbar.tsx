import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "build" },
  { href: "/packages", label: "Packages", icon: "luggage" },
  { href: "/one-way-cabs", label: "One-Way Cabs", icon: "directions_car" },
  { href: "/visa", label: "Visa & Passport", icon: "article" },
  { href: "/contact", label: "Contact", icon: "call" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <style>{`
        .nav-logo-title {
          background: linear-gradient(to right, #FCD34D, #F59E0B, #D97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          font-size: 19px;
          letter-spacing: 1px;
          line-height: 1.1;
          font-family: 'Poppins',sans-serif;
          filter: drop-shadow(0 2px 10px rgba(245,158,11,0.3));
          white-space: nowrap;
        }
        .nav-logo-subtitle {
          color: #F8FAFC;
          font-size: 8.5px;
          letter-spacing: 2px;
          font-weight: 700;
          font-family: 'Poppins',sans-serif;
          opacity: 0.8;
          white-space: nowrap;
        }
        .nav-logo-img {
          height: 64px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(245,158,11,0.2));
        }
        
        .nav-call-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #FCD34D, #F59E0B);
          color: #0F172A !important;
          padding: 10px 22px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 14px;
          font-family: 'Poppins',sans-serif;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(245,158,11,0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-call-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245,158,11,0.45);
        }
        @media (max-width: 1100px) {
          .nav-logo-title { font-size: 17px; letter-spacing: 0px; }
          .nav-logo-subtitle { font-size: 7.5px; letter-spacing: 1px; }
        }
        @media (max-width: 480px) {
          .nav-logo-title { font-size: 15px; letter-spacing: 0.5px; }
          .nav-logo-subtitle { font-size: 8px; letter-spacing: 2px; }
          .nav-logo-img { height: 45px; }
          .hide-mobile, .hide-on-mobile { display: none !important; }
          .hide-on-desktop { display: inline-block !important; }
        }
        @media (min-width: 481px) {
          .hide-on-desktop { display: none !important; }
        }
      `}</style>
      
      {/* Premium Top Announcement Bar */}
      <div style={{
        background: "linear-gradient(to right, #0F172A, #0f0c29)",
        borderBottom: "1px solid rgba(245,158,11,0.15)",
        padding: "7px 16px 7px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "relative", zIndex: 10000, gap: 5
      }}>

        {/* Download App — Google Play Badge style */}
        <Link href="/download-app" style={{
          display: "flex", alignItems: "center", gap: 7,
          background: "#000", border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 8, padding: "4px 10px 4px 7px",
          textDecoration: "none", flexShrink: 0, transition: "border-color 0.2s",
        }}
        onMouseEnter={(e: any) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"}
        onMouseLeave={(e: any) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"}>
          {/* Google Play colorful triangle logo */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: 20, height: 20, flexShrink: 0 }}>
            <path fill="#ea4335" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
            <path fill="#fbbc04" d="M27.2 0C17.5 4.3 10.5 14.2 10.5 26.6v458.8c0 12.4 7 22.3 16.7 26.6l2.4 1.4 257-257v-6.1L29.6-1.4 27.2 0z"/>
            <path fill="#4285f4" d="M385.4 174.2L325.3 234.3v6.1l60.1 60.1 1.4-.8 71.2-40.5c20.3-11.5 20.3-30.2 0-41.7l-71.2-40.5-1.4-.8z"/>
            <path fill="#34a853" d="M386.8 300.6L27.2 499c-9.7 4.3-16.7 14.2-16.7 26.6l258.4-257.6L386.8 300.6z"/>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{ color: "#aaa", fontSize: 8, fontFamily: "'Poppins',sans-serif", letterSpacing: 0.3 }}>GET IT ON</span>
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "'Poppins',sans-serif", whiteSpace: "nowrap" }} className="hide-mobile">Google Play</span>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, fontFamily: "'Poppins',sans-serif" }} className="hide-on-desktop">Play</span>
          </div>
        </Link>

        {/* Worldwide Packages Link (Center) */}
        <a href="https://divyakshitoursandtravels.in/" target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 500,
          fontFamily: "'Poppins', sans-serif", color: "#E2E8F0", textDecoration: "none",
          textAlign: "center", minWidth: 0, overflow: "hidden", flexShrink: 1, margin: "0 10px"
        }}
        onMouseEnter={(e: any) => e.currentTarget.style.opacity = "0.8"}
        onMouseLeave={(e: any) => e.currentTarget.style.opacity = "1"}>
          <span style={{ color: "#FCD34D", fontWeight: 700, display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 15 }}>travel_explore</span>
            <span className="hide-mobile">Worldwide Packages?</span>
            <span className="hide-on-desktop">Packages?</span>
          </span>
          <span className="hide-on-mobile" style={{ color: "#94A3B8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Visit DivyakshiToursAndTravels.in</span>
          <span className="material-symbols-rounded" style={{ fontSize: 15, color: "#FCD34D", flexShrink: 0 }}>arrow_forward</span>
        </a>

        {/* Social Links (Right) — full brand colors, 26px icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>

          {/* WhatsApp */}
          <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" title="WhatsApp"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", transition: "transform 0.2s" }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = "scale(1.18)"}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = "scale(1)"}>
            <svg viewBox="0 0 32 32" style={{ width: 26, height: 26 }} xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path fill="#fff" d="M23.5 19.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6 0-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.1-1.3-.1-.2-.2-.3-.6-.5z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/share/1Ac7amQYbk/?mibextid=wwXIfr" target="_blank" rel="noreferrer" title="Facebook"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", transition: "transform 0.2s" }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = "scale(1.18)"}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = "scale(1)"}>
            <svg viewBox="0 0 32 32" style={{ width: 26, height: 26 }} xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#1877F2"/>
              <path fill="#fff" d="M20.5 16H18v-1.8c0-.7.4-1.1 1.2-1.1H20.5V10.3S19.4 10 18.1 10c-2.5 0-4 1.5-4 4.2V16H12v3h2.1v8H17v-8h2.1l.4-3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/divyakshi_tours_and_travels?igsh=MWFhbzBrajl0YWR1ag==" target="_blank" rel="noreferrer" title="Instagram"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", transition: "transform 0.2s" }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = "scale(1.18)"}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = "scale(1)"}>
            <svg viewBox="0 0 32 32" style={{ width: 26, height: 26 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ig2" cx="25%" cy="110%" r="140%">
                  <stop offset="0%" stopColor="#fdf497"/>
                  <stop offset="20%" stopColor="#fd5949"/>
                  <stop offset="60%" stopColor="#d6249f"/>
                  <stop offset="100%" stopColor="#285AEB"/>
                </radialGradient>
              </defs>
              <circle cx="16" cy="16" r="16" fill="url(#ig2)"/>
              <rect x="9" y="9" width="14" height="14" rx="4.5" stroke="#fff" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="16" r="3.5" stroke="#fff" strokeWidth="2" fill="none"/>
              <circle cx="21" cy="11" r="1.1" fill="#fff"/>
            </svg>
          </a>

        </div>
      </div>


      <nav style={{
        position: "sticky", top: 0, zIndex: 9999,
        background: scrolled ? "rgba(15,23,42,0.85)" : "linear-gradient(to right, #0F172A, #1E293B)",
        backdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid rgba(245,158,11,0.15)" : "1px solid rgba(255,255,255,0.05)",
        boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img src="/new-logo.png" alt="Divyakshi Logo" className="nav-logo-img" />
            <div>
              <div className="nav-logo-title">DIVYAKSHI CABS</div>
              <div className="nav-logo-subtitle">UNIT OF DIVYAKSHI TOURS & TRAVELS</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {navLinks.map(l => {
              const active = location === l.href;
              return (
                <Link key={l.href} href={l.href} style={{
                  display: "flex", alignItems: "center", gap: 4, padding: "8px 10px", borderRadius: 10,
                  fontSize: 13, fontWeight: 600, fontFamily: "'Poppins',sans-serif", whiteSpace: "nowrap",
                  color: active ? "#FCD34D" : "#E2E8F0",
                  background: active ? "rgba(245,158,11,0.15)" : "transparent",
                  borderBottom: active ? "2px solid #FCD34D" : "2px solid transparent",
                  transition: "all 0.3s", textDecoration: "none",
                }}
                  onMouseEnter={(e: any) => { if (!active) { e.currentTarget.style.color = "#FCD34D"; e.currentTarget.style.background = "rgba(245,158,11,0.08)"; }}}
                  onMouseLeave={(e: any) => { if (!active) { e.currentTarget.style.color = "#E2E8F0"; e.currentTarget.style.background = "transparent"; }}}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>{l.icon}</span>
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="tel:+918200909915" className="nav-call-btn" style={{ padding: "8px 16px", fontSize: 13, whiteSpace: "nowrap" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span>
              <span className="desktop-nav">82009 09915</span>
            </a>
            {/* Hamburger */}
            <button onClick={() => setOpen(!open)} style={{
              display: "none", alignItems: "center", background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#F59E0B", borderRadius: 8, padding: "8px", cursor: "pointer",
            }} className="hamburger-btn">
              <span className="material-symbols-rounded" style={{ fontSize: 24 }}>{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: "#0d0d1f", borderTop: "1px solid rgba(245,158,11,0.15)", padding: "10px 16px 18px" }}>
            {navLinks.map(l => {
              const active = location === l.href;
              return (
                <Link key={l.href} href={l.href} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10,
                  fontSize: 14, fontWeight: 600, fontFamily: "'Poppins',sans-serif", textDecoration: "none",
                  color: active ? "#F59E0B" : "#94A3B8",
                  background: active ? "rgba(245,158,11,0.1)" : "transparent", marginBottom: 4,
                }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22 }}>{l.icon}</span>
                  {l.label}
                </Link>
              );
            })}
            
            {/* Mobile Download App Link */}
            <Link href="/download-app" style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10,
              fontSize: 14, fontWeight: 700, fontFamily: "'Poppins',sans-serif", textDecoration: "none",
              color: location === "/download-app" ? "#F59E0B" : "#FCD34D",
              background: location === "/download-app" ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.08)", 
              marginTop: 4, border: "1px dashed rgba(245,158,11,0.3)"
            }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22 }}>smartphone</span>
              Download Our App
            </Link>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, marginTop: 8, display: "flex", gap: 8 }}>
              <a href="tel:+918200909915" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e", padding: "11px", borderRadius: 10, fontWeight: 800, fontSize: 13, fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span> Call Now
              </a>
              <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "#25d366", color: "#fff", padding: "11px", borderRadius: 10, fontWeight: 800, fontSize: 13, fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>chat</span> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
