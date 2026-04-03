const services = [
  {
    icon: "directions_car", color: "#2563EB", bg: "#EFF6FF",
    title: "Taxi Rental",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=350&fit=crop&auto=format",
    desc: "Book reliable, comfortable taxis for local rides, airport transfers, and outstation trips.",
    features: ["AC & Non-AC options", "Airport pickup & drop", "24/7 availability", "Sanitized vehicles", "Online booking"],
    price: "Starting ₹11/km",
  },
  {
    icon: "airport_shuttle", color: "#7C3AED", bg: "#F5F3FF",
    title: "Tempo Traveller",
    img: "https://images.unsplash.com/photo-1570461226513-e08b58a52a6f?w=600&h=350&fit=crop&auto=format",
    desc: "Perfect for group travel, family outings, corporate trips, and pilgrimages with ample luggage space.",
    features: ["9, 12, 14, 16 seater", "All-India permit", "Pilgrimage tours", "Corporate travel", "Wedding transport"],
    price: "Starting ₹22/km",
  },
  {
    icon: "directions_bus", color: "#D97706", bg: "#FFFBEB",
    title: "Luxury Bus Rental",
    img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=600&h=350&fit=crop&auto=format",
    desc: "Premium luxury buses for weddings, corporate events, school trips, and large group travel.",
    features: ["20–50 seater", "AC & entertainment", "School tours", "Wedding events", "Corporate outings"],
    price: "Call for pricing",
  },
  {
    icon: "hotel", color: "#059669", bg: "#ECFDF5",
    title: "Hotel Bookings",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop&auto=format",
    desc: "Best hotel deals handpicked for you — from budget stays to luxury resorts across India.",
    features: ["Budget to Luxury", "Pan-India coverage", "Honeymoon packages", "Group discounts", "Best price guarantee"],
    price: "Best price guaranteed",
  },
  {
    icon: "travel_explore", color: "#DC2626", bg: "#FEF2F2",
    title: "Tour Packages",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=350&fit=crop&auto=format",
    desc: "All-inclusive holiday packages covering sightseeing, accommodation, meals, and transfers.",
    features: ["Domestic & international", "Customizable itineraries", "Hotel + transfers", "Experienced guides", "Family packages"],
    price: "From ₹4,999/person",
  },
  {
    icon: "flight", color: "#0891B2", bg: "#ECFEFF",
    title: "Flight Bookings",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=350&fit=crop&auto=format",
    desc: "Book domestic and international flights at the best fares with group booking rates.",
    features: ["Domestic & international", "Group booking rates", "Combo deals", "Check-in assistance", "Best fare guarantee"],
    price: "Best fares guaranteed",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0F0C29, #0F172A, #0F3460)", padding: "64px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div className="section-badge" style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>auto_awesome</span>
            OUR SERVICES
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 900, marginBottom: 14 }}>Travel Services We Offer</h1>
          <p style={{ color: "#94A3B8", maxWidth: 480, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
            From taxi rentals to visa assistance — we've got every travel need covered
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 26 }}>
          {services.map(s => (
            <div key={s.title} className="card-hover" style={{
              background: "#fff", borderRadius: 20, overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "2px solid transparent",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
              {/* Image */}
              <div style={{ height: 190, overflow: "hidden", position: "relative" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${s.color}60, transparent 60%)` }} />
                <div style={{ position: "absolute", bottom: 14, right: 14, background: s.color, color: "#fff", borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 700 }}>
                  {s.price}
                </div>
              </div>

              <div style={{ padding: "22px 24px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 52, height: 52, background: s.bg, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginTop: -46, position: "relative", zIndex: 1, border: "3px solid #fff", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 24, color: s.color }}>{s.icon}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: 19, color: "#0F172A" }}>{s.title}</h3>
                </div>
                <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 11, color: "#94A3B8", letterSpacing: 0.8, marginBottom: 10 }}>WHAT'S INCLUDED</div>
                  {s.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#475569", marginBottom: 7 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 15, color: s.color }}>check_circle</span>
                      {f}
                    </div>
                  ))}
                </div>
                <a href="tel:+918200909915" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20,
                  padding: "11px", borderRadius: 10, fontWeight: 700, fontSize: 14,
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, color: "#fff", textDecoration: "none",
                }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 17 }}>call</span>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div className="section-badge">
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>bolt</span>
            HOW IT WORKS
          </div>
          <h2 className="section-title">Book in 3 Easy Steps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 30, marginTop: 48 }}>
            {[
              { step: "01", icon: "smartphone", title: "Contact Us", desc: "Call, WhatsApp, or fill the booking form with your travel details" },
              { step: "02", icon: "price_check", title: "Get Quotes", desc: "Receive instant quotes and choose the best option for your budget" },
              { step: "03", icon: "check_circle", title: "Confirmed!", desc: "Get your booking confirmed with driver details & travel itinerary" },
            ].map(s => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div style={{ width: 70, height: 70, background: "linear-gradient(135deg, #D97706, #F59E0B)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", boxShadow: "0 8px 24px rgba(217,119,6,0.35)" }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 30, color: "#fff" }}>{s.icon}</span>
                </div>
                <div style={{ fontWeight: 900, color: "#D97706", fontSize: 13, letterSpacing: 1, marginBottom: 7 }}>STEP {s.step}</div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0F172A", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #D97706, #F59E0B)", padding: "52px 20px", textAlign: "center" }}>
        <span className="material-symbols-rounded icon-filled" style={{ fontSize: 44, color: "rgba(26,26,46,0.5)", display: "block", marginBottom: 10 }}>handshake</span>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: "#1a1a2e", marginBottom: 8 }}>Need a Custom Quote?</h2>
        <p style={{ color: "rgba(26,26,46,0.6)", marginBottom: 24, fontSize: 14 }}>Tell us your requirements — we'll give you the best price instantly</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 8, background: "#1a1a2e", color: "#F59E0B", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span>
            82009 09915
          </a>
          <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>chat</span>
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
