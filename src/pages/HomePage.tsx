import { Link } from "wouter";
import BookingWidget from "@/components/BookingWidget";

const services = [
  { icon: "directions_car", label: "Taxi Rental", desc: "City rides, airport drops & comfortable outstation cabs", color: "#2563EB", bg: "#EFF6FF", href: "/services", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop&auto=format" },
  { icon: "airport_shuttle", label: "Tempo Traveller", desc: "Group travel for 9–16 passengers — pilgrimages & events", color: "#7C3AED", bg: "#F5F3FF", href: "/services", img: "/tempo_traveller_card.png" },
  { icon: "directions_bus", label: "Luxury Bus", desc: "Premium AC buses for weddings, corporate & tours", color: "#D97706", bg: "#FFFBEB", href: "/services", img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=500&h=300&fit=crop&auto=format" },
  { icon: "hotel", label: "Hotel Booking", desc: "Best deals across India — budget to luxury, no hidden costs", color: "#059669", bg: "#ECFDF5", href: "/services", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop&auto=format" },
  { icon: "flight", label: "Tour Packages", desc: "Curated holidays — domestic & international all-inclusive", color: "#DC2626", bg: "#FEF2F2", href: "/packages", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop&auto=format" },
  { icon: "article", label: "Visa & Passport", desc: "Full visa, passport & immigration assistance", color: "#0891B2", bg: "#ECFEFF", href: "/visa", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop&auto=format" },
];

const popularRoutes = [
  { from: "Vadodara", to: "Ahmedabad", km: "115 km", price: "₹1,800", time: "1.5 hrs", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=250&fit=crop&auto=format" },
  { from: "Vadodara", to: "Surat", km: "155 km", price: "₹2,400", time: "2.5 hrs", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop&auto=format" },
  { from: "Vadodara", to: "Statue of Unity", km: "90 km", price: "₹1,600", time: "1.5 hrs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/800px-Statue_of_Unity.jpg" },
  { from: "Vadodara", to: "Mumbai", km: "425 km", price: "₹6,500", time: "6 hrs", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&h=250&fit=crop&auto=format" },
  { from: "Vadodara", to: "Dwarka", km: "440 km", price: "₹7,200", time: "7 hrs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Dwarkadhish_Temple%2C_Dwarka%2C_Gujarat.JPG/800px-Dwarkadhish_Temple%2C_Dwarka%2C_Gujarat.JPG" },
  { from: "Vadodara", to: "Somnath", km: "480 km", price: "₹7,500", time: "8 hrs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Somnath_temple_-_Gujarat.jpg/800px-Somnath_temple_-_Gujarat.jpg" },
];

const cars = [
  {
    name: "Hatchback", models: "Swift / WagonR / i10", seats: 4, rate: "₹11/km",
    color: "#2563EB", badge: "Economy",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=300&fit=crop&auto=format",
  },
  {
    name: "Sedan", models: "Honda City / Dzire", seats: 4, rate: "₹13/km",
    color: "#7C3AED", badge: "Popular",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop&auto=format",
  },
  {
    name: "SUV / Innova", models: "Innova / Ertiga / Scorpio", seats: 7, rate: "₹16/km",
    color: "#D97706", badge: "Best for Groups",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=300&fit=crop&auto=format",
  },
  {
    name: "Tempo Traveller", models: "12 / 14 / 16 Seater", seats: 16, rate: "₹22/km",
    color: "#DC2626", badge: "Groups 10+",
    img: "/tempo_traveller_card.png",
  },
];

const destinations = [
  { name: "Statue of Unity", tag: "Day Trip", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/800px-Statue_of_Unity.jpg" },
  { name: "Goa", tag: "Beach Holiday", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=280&fit=crop&auto=format" },
  { name: "Rajasthan", tag: "Heritage Tour", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=280&fit=crop&auto=format" },
  { name: "Kerala", tag: "Nature & Backwaters", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=280&fit=crop&auto=format" },
  { name: "Shimla", tag: "Hill Station", img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=280&fit=crop&auto=format" },
  { name: "Somnath", tag: "Pilgrimage", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Somnath_temple_-_Gujarat.jpg/800px-Somnath_temple_-_Gujarat.jpg" },
  { name: "Dwarka", tag: "Pilgrimage", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Dwarkadhish_Temple%2C_Dwarka%2C_Gujarat.JPG/800px-Dwarkadhish_Temple%2C_Dwarka%2C_Gujarat.JPG" },
  { name: "Ladakh", tag: "Adventure", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=280&fit=crop&auto=format" },
];

const whyUs = [
  { icon: "verified_user", label: "100% Safe", desc: "Verified drivers, police-cleared & insured vehicles", color: "#2563EB", bg: "#EFF6FF" },
  { icon: "schedule", label: "Always On Time", desc: "Punctual pickups — never late, always there for you", color: "#7C3AED", bg: "#F5F3FF" },
  { icon: "workspace_premium", label: "10+ Years", desc: "A decade of experience & 5000+ happy customers", color: "#D97706", bg: "#FFFBEB" },
  { icon: "support_agent", label: "24/7 Support", desc: "We're always just a call or WhatsApp away", color: "#059669", bg: "#ECFDF5" },
  { icon: "currency_rupee", label: "Best Prices", desc: "No hidden charges, transparent pricing always", color: "#DC2626", bg: "#FEF2F2" },
  { icon: "star", label: "5-Star Rated", desc: "Loved by thousands — see what our customers say", color: "#0891B2", bg: "#ECFEFF" },
];

const testimonials = [
  { name: "Rajesh Patel", city: "Vadodara", text: "Excellent service! Booked a cab for Statue of Unity — driver was professional and the car was neat and clean. Highly recommended!", stars: 5 },
  { name: "Priya Shah", city: "Surat", text: "Used their Goa holiday package. Everything was perfectly arranged — hotels, transport, sightseeing. Super smooth experience!", stars: 5 },
  { name: "Amit Mehta", city: "Ahmedabad", text: "Got our Canada student visa done on time. Very knowledgeable team and stress-free process. Thank you Divyakshi!", stars: 5 },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* HERO */}
      <section className="hero-section" style={{
        background: "linear-gradient(135deg, rgba(15,12,41,0.85) 0%, rgba(15,23,42,0.75) 40%, rgba(15,52,96,0.85) 100%), url('/tempo_traveller_hero.png') center/cover",
        padding: "60px 20px 72px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 15% 50%, rgba(245,158,11,0.12) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(37,99,235,0.08) 0%, transparent 40%)" }} />
        <div style={{ position: "absolute", top: 40, right: "8%", width: 140, height: 140, border: "2px solid rgba(245,158,11,0.15)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: 20, left: "4%", width: 90, height: 90, border: "2px solid rgba(245,158,11,0.1)", borderRadius: "50%" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", color: "#FCD34D", padding: "6px 18px", borderRadius: 30, fontSize: 12, fontWeight: 700, marginBottom: 22, letterSpacing: 1 }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>star</span>
              VADODARA'S #1 TRUSTED TRAVEL PARTNER
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>star</span>
            </div>
            <h1 className="hero-title" style={{ color: "#fff", fontSize: "clamp(30px, 5.5vw, 60px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
              Book Your Perfect{" "}
              <span style={{ background: "linear-gradient(135deg, #D97706, #F59E0B, #FCD34D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Journey
              </span>
              <br />
              <span style={{ fontSize: "0.55em", color: "#94A3B8", fontWeight: 600, WebkitTextFillColor: "#94A3B8" }}>
                Taxi &nbsp;•&nbsp; Tours &nbsp;•&nbsp; Visa &nbsp;•&nbsp; Hotels
              </span>
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FCD34D 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }} className="stats-row">
            {[
              { num: "5000+", label: "Happy Customers", icon: "sentiment_very_satisfied" },
              { num: "10+", label: "Years Experience", icon: "emoji_events" },
              { num: "50+", label: "Tour Packages", icon: "luggage" },
              { num: "24/7", label: "Support Available", icon: "support_agent" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "10px 0" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 26, color: "rgba(26,26,46,0.65)", marginBottom: 4, display: "block" }}>{s.icon}</span>
                <div style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: "#1a1a2e", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(26,26,46,0.65)", letterSpacing: 0.5, marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>auto_awesome</span>
              OUR SERVICES
            </div>
            <h2 className="section-title">Everything You Need for Your Trip</h2>
            <p className="section-desc">From Vadodara and across India — we handle every detail so you can relax</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 22 }}>
            {services.map(s => (
              <Link key={s.label} href={s.href} className="card-hover" style={{
                display: "block", background: "#fff", borderRadius: 18, overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "2px solid transparent",
                textDecoration: "none", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
                {/* Image */}
                <div style={{ height: 170, overflow: "hidden", position: "relative" }}>
                  <img src={s.img} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${s.color}55, transparent)` }} />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ width: 46, height: 46, background: s.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, marginTop: -36, position: "relative", zIndex: 1, border: `3px solid #fff`, boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22, color: s.color }}>{s.icon}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 17, color: "#0F172A", marginBottom: 6 }}>{s.label}</h3>
                  <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
                    Learn More
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16 }}>arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAR FLEET */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>directions_car</span>
              OUR FLEET
            </div>
            <h2 className="section-title">Choose Your Perfect Ride</h2>
            <p className="section-desc">Well-maintained, sanitized vehicles with experienced drivers for every budget</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: 22 }}>
            {cars.map(c => (
              <div key={c.name} className="card-hover" style={{
                background: "#F8FAFC", borderRadius: 18, overflow: "hidden",
                border: "2px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "all 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.background = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#F8FAFC"; }}>
                {/* Car image */}
                <div style={{ height: 165, overflow: "hidden", position: "relative" }}>
                  <img src={c.img} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 12, right: 12, background: c.color, color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700 }}>{c.badge}</div>
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0F172A", marginBottom: 3 }}>{c.name}</h3>
                  <div style={{ color: "#64748B", fontSize: 12.5, marginBottom: 12 }}>{c.models}</div>
                  <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#F1F5F9", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#475569" }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: c.color }}>group</span>
                      {c.seats} seats
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#F1F5F9", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#475569" }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: c.color }}>ac_unit</span>
                      AC
                    </div>
                  </div>
                  <div style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)`, color: "#fff", borderRadius: 10, padding: "10px 14px", fontWeight: 800, fontSize: 15, textAlign: "center" }}>
                    Starting {c.rate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>route</span>
              POPULAR ROUTES
            </div>
            <h2 className="section-title">Most Booked Cab Routes from Vadodara</h2>
            <p className="section-desc">Reliable, affordable cabs for all these destinations — book in 60 seconds</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: 14 }}>
            {popularRoutes.map(r => (
              <div key={r.to} className="card-hover route-card" style={{
                background: "#fff", borderRadius: 18, overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1.5px solid #E2E8F0",
                display: "flex", alignItems: "stretch",
              }}>
                {/* Route image */}
                <div className="route-img" style={{ width: 100, flexShrink: 0, overflow: "hidden" }}>
                  <img src={r.img} alt={r.to} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                {/* Info */}
                <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontWeight: 800, color: "#0F172A", fontSize: 15, marginBottom: 5 }}>
                    {r.from}
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#F59E0B", margin: "0 6px", verticalAlign: "middle" }}>arrow_forward</span>
                    {r.to}
                  </div>
                  <div style={{ display: "flex", gap: 14 }}>
                    <span style={{ color: "#64748B", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 13, color: "#94A3B8" }}>route</span>
                      {r.km}
                    </span>
                    <span style={{ color: "#64748B", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 13, color: "#94A3B8" }}>schedule</span>
                      {r.time}
                    </span>
                  </div>
                </div>
                <div className="route-price" style={{ padding: "16px 18px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", borderLeft: "1px solid #F1F5F9" }}>
                  <div style={{ color: "#D97706", fontWeight: 900, fontSize: 18, lineHeight: 1 }}>{r.price}</div>
                  <div style={{ color: "#94A3B8", fontSize: 10, marginTop: 3 }}>One Way</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>explore</span>
              TOP DESTINATIONS
            </div>
            <h2 className="section-title">Popular Travel Destinations</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))", gap: 14 }}>
            {destinations.map(d => (
              <Link key={d.name} href="/packages" className="card-hover" style={{
                display: "block", borderRadius: 18, overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)", position: "relative", height: 200, textDecoration: "none",
              }}>
                <img src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 5 }}>{d.name}</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(245,158,11,0.9)", color: "#1a1a2e", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>
                    {d.tag}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "72px 20px", background: "linear-gradient(135deg, #0F172A 0%, #0F3460 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)", padding: "5px 16px", borderRadius: 30, fontSize: 11, fontWeight: 700, letterSpacing: 1.2, marginBottom: 14 }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>diamond</span>
              WHY CHOOSE US
            </div>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>The Divyakshi Difference</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {whyUs.map(w => (
              <div key={w.label} className="card-hover" style={{
                background: "rgba(255,255,255,0.05)", borderRadius: 18, padding: "28px 22px",
                textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)",
              }}>
                <div style={{ width: 60, height: 60, background: w.bg, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 28, color: w.color }}>{w.icon}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#fff", marginBottom: 8 }}>{w.label}</h3>
                <p style={{ color: "#94A3B8", fontSize: 13, lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>format_quote</span>
              TESTIMONIALS
            </div>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
            {testimonials.map(t => (
              <div key={t.name} className="card-hover" style={{
                background: "#fff", borderRadius: 18, padding: 26,
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1.5px solid #E2E8F0",
              }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#F59E0B" }}>star</span>
                  ))}
                </div>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.75, marginBottom: 18, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #D97706, #F59E0B)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontWeight: 800, fontSize: 17 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "#94A3B8", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 12 }}>location_on</span>
                      {t.city}
                    </div>
                  </div>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: "#22c55e", marginLeft: "auto" }}>verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FCD34D 100%)", padding: "60px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "rgba(255,255,255,0.08)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -50, left: -20, width: 160, height: 160, background: "rgba(255,255,255,0.06)", borderRadius: "50%" }} />
        <div style={{ position: "relative" }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 50, color: "rgba(26,26,46,0.5)", display: "block", marginBottom: 12 }}>rocket_launch</span>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, color: "#1a1a2e", marginBottom: 10 }}>Ready to Plan Your Dream Trip?</h2>
          <p style={{ color: "rgba(26,26,46,0.65)", marginBottom: 30, fontSize: 15, maxWidth: 400, margin: "0 auto 30px" }}>
            Call us or send a WhatsApp — we'll plan everything for you
          </p>
          <div className="cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 9, background: "#1a1a2e", color: "#F59E0B", padding: "14px 30px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>call</span>
              Call: 82009 09915
            </a>
            <a href="https://wa.me/918200909915?text=Hi, I want to book a cab" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 9, background: "#25d366", color: "#fff", padding: "14px 30px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
