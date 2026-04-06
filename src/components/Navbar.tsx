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
          font-size: 25px;
          letter-spacing: 2px;
          line-height: 1.1;
          font-family: 'Poppins',sans-serif;
          filter: drop-shadow(0 2px 10px rgba(245,158,11,0.3));
        }
        .nav-logo-subtitle {
          color: #F8FAFC;
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 700;
          font-family: 'Poppins',sans-serif;
          opacity: 0.8;
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
        @media (max-width: 480px) {
          .nav-logo-title { font-size: 17px; letter-spacing: 1px; }
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
        padding: "8px 16px 8px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "relative", zIndex: 10000, gap: 5
      }}>
        {/* Download App Link (Left) */}
        <Link href="/download-app" style={{
          display: "flex", alignItems: "center", gap: 6,
          color: "#FFFFFF", fontSize: 13, fontWeight: 700, textDecoration: "none",
          fontFamily: "'Poppins', sans-serif", flexShrink: 0,
          opacity: 0.9
        }}
        onMouseEnter={(e: any) => { e.currentTarget.style.color = "#FCD34D"; e.currentTarget.style.opacity = "1"; }}
        onMouseLeave={(e: any) => { e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.opacity = "0.9"; }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16 }}>smartphone</span>
          <span className="hide-mobile">Download App</span>
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

        {/* Social Links (Right) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, paddingRight: 10 }}>
          <a href="https://www.facebook.com/share/1Ac7amQYbk/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{
            display: "flex", alignItems: "center", color: "#E2E8F0", textDecoration: "none", transition: "color 0.3s"
          }}
          onMouseEnter={(e: any) => e.currentTarget.style.color = "#4267B2"}
          onMouseLeave={(e: any) => e.currentTarget.style.color = "#E2E8F0"}>
            <svg style={{ width: 17, height: 17, fill: "currentColor" }} viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/divyakshi_tours_and_travels?igsh=MWFhbzBrajl0YWR1ag==" target="_blank" rel="noreferrer" style={{
            display: "flex", alignItems: "center", color: "#E2E8F0", textDecoration: "none", transition: "color 0.3s"
          }}
          onMouseEnter={(e: any) => e.currentTarget.style.color = "#E1306C"}
          onMouseLeave={(e: any) => e.currentTarget.style.color = "#E2E8F0"}>
            <svg style={{ width: 17, height: 17, fill: "currentColor" }} viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
              <div className="nav-logo-title">DIVYAKSHI</div>
              <div className="nav-logo-subtitle">TOURS & TRAVELS</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map(l => {
              const active = location === l.href;
              return (
                <Link key={l.href} href={l.href} style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 10,
                  fontSize: 14, fontWeight: 600, fontFamily: "'Poppins',sans-serif",
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
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="tel:+918200909915" className="nav-call-btn">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>call</span>
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
