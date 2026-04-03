import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #08080F 0%, #0F0F1E 100%)", color: "#94A3B8", fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ height: 4, background: "linear-gradient(90deg, #D97706, #F59E0B, #FCD34D, #F59E0B, #D97706)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 20px 44px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36 }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <img src="/logo.jpg" alt="Logo" style={{ height: 54, width: 54, borderRadius: "50%", border: "2.5px solid #F59E0B", objectFit: "cover" }} />
            <div>
              <div style={{ color: "#F59E0B", fontWeight: 900, fontSize: 17, letterSpacing: 1.5 }}>DIVYAKSHI</div>
              <div style={{ fontSize: 9, letterSpacing: 2.5, color: "#475569", fontWeight: 600 }}>TOURS & TRAVELS</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: "#64748B", marginBottom: 16 }}>
            Unleash Your Wanderlust. Vadodara's most trusted travel partner for cabs, tours, visa services & hotel bookings.
          </p>
          {/* 5 stars */}
          <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
            {[1,2,3,4,5].map(i => (
              <span key={i} className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#F59E0B" }}>star</span>
            ))}
            <span style={{ fontSize: 12, color: "#64748B", marginLeft: 8 }}>5000+ happy customers</span>
          </div>
          {/* Social icons */}
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { icon: "language", title: "Website" },
              { icon: "thumb_up", title: "Facebook" },
              { icon: "photo_camera", title: "Instagram" },
              { icon: "play_circle", title: "YouTube" },
            ].map(s => (
              <div key={s.title} title={s.title} style={{ width: 38, height: 38, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,158,11,0.2)"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#94A3B8" }}>{s.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ color: "#F59E0B", fontWeight: 800, marginBottom: 20, fontSize: 15, letterSpacing: 0.5 }}>Quick Links</h4>
          {[
            { href: "/", label: "Home", icon: "home" },
            { href: "/services", label: "Our Services", icon: "build" },
            { href: "/packages", label: "Tour Packages", icon: "luggage" },
            { href: "/visa", label: "Visa & Immigration", icon: "article" },
            { href: "/contact", label: "Contact Us", icon: "call" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: 9, color: "#64748B", fontSize: 13.5, marginBottom: 11, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F59E0B")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748B")}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#475569" }}>{l.icon}</span>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: "#F59E0B", fontWeight: 800, marginBottom: 20, fontSize: 15, letterSpacing: 0.5 }}>Our Services</h4>
          {[
            { icon: "directions_car", label: "Taxi Rental" },
            { icon: "airport_shuttle", label: "Tempo Traveller" },
            { icon: "directions_bus", label: "Luxury Bus" },
            { icon: "hotel", label: "Hotel Bookings" },
            { icon: "travel_explore", label: "Tour Packages" },
            { icon: "article", label: "Passport Services" },
            { icon: "flight_takeoff", label: "Tourist Visa" },
            { icon: "work", label: "Work Permit" },
            { icon: "school", label: "Student Visa" },
          ].map(s => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748B", fontSize: 13, marginBottom: 9 }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 15, color: "#475569" }}>{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#F59E0B", fontWeight: 800, marginBottom: 20, fontSize: 15, letterSpacing: 0.5 }}>Contact Info</h4>
          {[
            {
              icon: "location_on", color: "#2563EB",
              content: <span>414, 4th Floor, Sakar Complex,<br />Opp. Bansal Mall, Tarsali,<br />Vadodara, Gujarat – 390009</span>,
            },
            {
              icon: "call", color: "#059669",
              content: <a href="tel:+918200909915" style={{ color: "#F59E0B", fontWeight: 700 }}>82009 09915</a>,
            },
            {
              icon: "mail", color: "#7C3AED",
              content: <a href="mailto:vijaysinh41988@gmail.com" style={{ color: "#F59E0B", wordBreak: "break-all" as const }}>vijaysinh41988@gmail.com</a>,
            },
            {
              icon: "language", color: "#D97706",
              content: <a href="http://www.divyakshitoursandtravels.in" target="_blank" rel="noreferrer" style={{ color: "#F59E0B" }}>divyakshitoursandtravels.in</a>,
            },
            {
              icon: "schedule", color: "#DC2626",
              content: <span>Mon–Sat: 9 AM – 8 PM<br />Sunday: 10 AM – 4 PM</span>,
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, background: `${item.color}18`, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: item.color }}>{item.icon}</span>
              </div>
              <div style={{ color: "#64748B", fontSize: 13, lineHeight: 1.75 }}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div style={{ fontSize: 13, color: "#475569" }}>
            © {new Date().getFullYear()} Divyakshi Tours & Travels. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "#F59E0B", fontWeight: 700 }}>🚩 Har Har Mahadev 🚩</div>
        </div>
      </div>
    </footer>
  );
}
