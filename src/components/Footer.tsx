import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(to bottom, #0F172A, #0B1120)", color: "#94A3B8", fontFamily: "'Poppins', sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Decorative Glows */}
      <div style={{ position: "absolute", top: -100, left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -150, right: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      
      {/* High-contrast Gold Top Border */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #D97706 0%, #F59E0B 50%, #FCD34D 100%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px 50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, position: "relative", zIndex: 1 }}>

        {/* Brand Container */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", padding: "6px 8px", borderRadius: "12px", border: "1px solid rgba(245,158,11,0.2)", flexShrink: 0 }}>
              <img src="/new-logo.png" alt="Divyakshi Logo" style={{ height: 52, objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ background: "linear-gradient(to right, #FCD34D, #F59E0B, #D97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, fontSize: 18, letterSpacing: 0.5, filter: "drop-shadow(0 2px 10px rgba(245,158,11,0.3))", lineHeight: 1.1, whiteSpace: "nowrap" }}>DIVYAKSHI CABS</div>
              <div style={{ color: "#F8FAFC", fontSize: 7.5, letterSpacing: 1.5, fontWeight: 700, opacity: 0.8, whiteSpace: "nowrap", marginTop: 2 }}>UNIT OF DIVYAKSHI TOURS & TRAVELS</div>
            </div>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.8, color: "#94A3B8", marginBottom: 22 }}>
            Unleash Your Wanderlust. Vadodara's most trusted travel partner for luxury cabs, guided tours, and stress-free visa services.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { 
                icon: <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>language</span>, 
                title: "Website", url: "https://divyakshitoursandtravels.in/", color: "#FCD34D" 
              },
              { 
                icon: (
                  <svg style={{ width: 18, height: 18, fill: "currentColor" }} viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ), 
                title: "Facebook", url: "https://www.facebook.com/share/1Ac7amQYbk/?mibextid=wwXIfr", color: "#4267B2" 
              },
              { 
                icon: (
                  <svg style={{ width: 18, height: 18, fill: "currentColor" }} viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259 0.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                ), 
                title: "Instagram", url: "https://www.instagram.com/divyakshi_tours_and_travels?igsh=MWFhbzBrajl0YWR1ag==", color: "#E1306C" 
              },
            ].map(s => (
              <a key={s.title} href={s.url} target="_blank" rel="noreferrer" title={s.title} style={{ width: 40, height: 40, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.background = `${s.color}20`; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <span style={{ color: "#94A3B8", transition: "color 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }} onMouseEnter={e => e.currentTarget.style.color = s.color} onMouseLeave={e => e.currentTarget.style.color = "#94A3B8"}>{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 800, marginBottom: 24, fontSize: 16, letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 12 }}>
            Quick Links
            <div style={{ height: 2, flex: 1, background: "linear-gradient(90deg, #F59E0B, transparent)" }} />
          </h4>
          {[
            { href: "/", label: "Home", icon: "chevron_right" },
            { href: "/services", label: "Our Services", icon: "chevron_right" },
            { href: "/packages", label: "Tour Packages", icon: "chevron_right" },
            { href: "/visa", label: "Visa & Immigration", icon: "chevron_right" },
            { href: "/contact", label: "Contact Us", icon: "chevron_right" },
          ].map(l => (
            <div key={l.href}>
              <Link href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#94A3B8", fontSize: 14, marginBottom: 14, transition: "all 0.3s", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#FCD34D"; e.currentTarget.style.transform = "translateX(6px)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#F59E0B", opacity: 0.8 }}>{l.icon}</span>
                {l.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 800, marginBottom: 24, fontSize: 16, letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 12 }}>
            Our Services
            <div style={{ height: 2, flex: 1, background: "linear-gradient(90deg, #F59E0B, transparent)" }} />
          </h4>
          {[
            { icon: "directions_car", label: "Taxi Rental" },
            { icon: "airport_shuttle", label: "Tempo Traveller" },
            { icon: "directions_bus", label: "Luxury Bus" },
            { icon: "hotel", label: "Hotel Bookings" },
            { icon: "travel_explore", label: "Tour Packages" },
            { icon: "article", label: "Passport Services" },
            { icon: "flight_takeoff", label: "Tourist Visa" },
            { icon: "school", label: "Student Visa" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#94A3B8", fontSize: 14, marginBottom: 14, cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateX(5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#64748B", transition: "color 0.3s" }}>{s.icon}</span>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 800, marginBottom: 24, fontSize: 16, letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 12 }}>
            Contact Us
            <div style={{ height: 2, flex: 1, background: "linear-gradient(90deg, #F59E0B, transparent)" }} />
          </h4>
          {[
            {
              icon: "location_on",
              content: (
                <a 
                  href="https://www.google.com/maps?q=414,+Sakar+Complex,+Opp.+Bansal+Mall,+Tarsali,+Vadodara,+Gujarat+390009" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "inherit"}
                >
                  414, 4th Floor, Sakar Complex,<br />Opp. Bansal Mall, Tarsali,<br />Vadodara, Gujarat – 390009
                </a>
              ),
            },
            {
              icon: "call",
              content: <a href="tel:+918200909915" style={{ color: "#F59E0B", fontWeight: 700, transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color="#FCD34D"} onMouseLeave={e => e.currentTarget.style.color="#F59E0B"}>+91 82009 09915</a>,
            },
            {
              icon: "mail",
              content: <a href="mailto:vijaysinh41988@gmail.com" style={{ color: "#94A3B8", wordBreak: "break-all" as const, transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color="#fff"} onMouseLeave={e => e.currentTarget.style.color="#94A3B8"}>vijaysinh41988@gmail.com</a>,
            },
            {
              icon: "schedule",
              content: <span>Mon–Sat: 9 AM – 8 PM<br />Sunday: 10 AM – 6 PM</span>,
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,158,11,0.15)"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"; e.currentTarget.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "scale(1)"; }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#F59E0B" }}>{item.icon}</span>
              </div>
              <div style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.6, flex: 1 }}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>
            © {new Date().getFullYear()} Divyakshi Tours & Travels. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "#F59E0B", fontWeight: 800, display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ color: "#DC2626" }}>🚩</span> 
            Har Har Mahadev 
            <span style={{ color: "#DC2626" }}>🚩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
