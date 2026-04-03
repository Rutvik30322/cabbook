import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "build" },
  { href: "/packages", label: "Packages", icon: "luggage" },
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
    <nav style={{
      position: "sticky", top: 0, zIndex: 9999,
      background: scrolled ? "rgba(10,10,26,0.98)" : "#0a0a1a",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(245,158,11,0.2)",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div>
            <img src="/logo.jpg" alt="Divyakshi" style={{ height: 48, width: 48, borderRadius: "8px", objectFit: "contain", display: "block" }} />
          </div>
          <div>
            <div style={{ color: "#F59E0B", fontWeight: 900, fontSize: 17, letterSpacing: 1.5, lineHeight: 1, fontFamily: "'Poppins',sans-serif" }}>DIVYAKSHI</div>
            <div style={{ color: "#475569", fontSize: 9, letterSpacing: 2.5, fontWeight: 600, fontFamily: "'Poppins',sans-serif" }}>TOURS & TRAVELS</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navLinks.map(l => {
            const active = location === l.href;
            return (
              <Link key={l.href} href={l.href} style={{
                display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8,
                fontSize: 13, fontWeight: 600, fontFamily: "'Poppins',sans-serif",
                color: active ? "#F59E0B" : "#94A3B8",
                background: active ? "rgba(245,158,11,0.12)" : "transparent",
                borderBottom: active ? "2px solid #F59E0B" : "2px solid transparent",
                transition: "all 0.2s", textDecoration: "none",
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "#F59E0B"; e.currentTarget.style.background = "rgba(245,158,11,0.06)"; }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.background = "transparent"; }}}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>{l.icon}</span>
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="tel:+918200909915" style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "linear-gradient(135deg, #D97706, #F59E0B, #FCD34D)",
            color: "#1a1a2e", padding: "9px 18px", borderRadius: 8, fontWeight: 800, fontSize: 13,
            fontFamily: "'Poppins',sans-serif", textDecoration: "none",
          }}>
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
  );
}
