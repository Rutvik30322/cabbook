import { useState } from "react";

const packages = [
  {
    id: 1, badge: "Best Seller", badgeColor: "#F59E0B",
    name: "Statue of Unity Day Trip", location: "Kevadia, Gujarat", duration: "1 Day",
    price: "₹2,499", per: "per person", category: "Gujarat", rating: 4.9, bookings: "200+",
    img: "https://images.unsplash.com/photo-1582647508711-8e59e35e2380?w=700&h=420&fit=crop&auto=format",
    inclusions: ["AC taxi from Vadodara", "Statue of Unity entry", "Tent City visit", "Guided tour", "Return transfer"],
  },
  {
    id: 2, badge: "Popular", badgeColor: "#7C3AED",
    name: "Dwarka & Somnath Pilgrimage", location: "Gujarat", duration: "3 Days / 2 Nights",
    price: "₹6,999", per: "per person", category: "Gujarat", rating: 4.8, bookings: "150+",
    img: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=700&h=420&fit=crop&auto=format",
    inclusions: ["AC vehicle", "2 nights hotel", "Dwarka & Somnath darshan", "Breakfast", "All transfers"],
  },
  {
    id: 3, badge: "Trending", badgeColor: "#2563EB",
    name: "Goa Beach Holiday", location: "Goa", duration: "4 Days / 3 Nights",
    price: "₹9,999", per: "per person", category: "South India", rating: 4.9, bookings: "300+",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&h=420&fit=crop&auto=format",
    inclusions: ["Flight/cab transfers", "3 nights hotel", "North & South Goa", "Breakfast", "Water sports"],
  },
  {
    id: 4, badge: "Premium", badgeColor: "#D97706",
    name: "Rajasthan Royal Tour", location: "Jaipur, Udaipur, Jodhpur", duration: "6 Days / 5 Nights",
    price: "₹14,999", per: "per person", category: "North India", rating: 4.9, bookings: "120+",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=700&h=420&fit=crop&auto=format",
    inclusions: ["AC tempo traveller", "5 nights hotels", "City sightseeing", "Camel safari", "Breakfast & dinner"],
  },
  {
    id: 5, badge: "New", badgeColor: "#059669",
    name: "Kerala Backwaters Tour", location: "Munnar, Alleppey, Kovalam", duration: "5 Days / 4 Nights",
    price: "₹12,999", per: "per person", category: "South India", rating: 4.8, bookings: "80+",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&h=420&fit=crop&auto=format",
    inclusions: ["Flights from Vadodara", "4 nights hotel + houseboat", "Tea garden", "Backwater cruise", "Transfers"],
  },
  {
    id: 6, badge: "Honeymoon ❤️", badgeColor: "#EC4899",
    name: "Shimla-Manali Honeymoon", location: "Himachal Pradesh", duration: "7 Days / 6 Nights",
    price: "₹18,999", per: "per couple", category: "North India", rating: 5.0, bookings: "90+",
    img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=700&h=420&fit=crop&auto=format",
    inclusions: ["Train/flight transfers", "6 nights hotels", "Rohtang pass", "Mall road", "Candlelight dinner"],
  },
  {
    id: 7, badge: "International", badgeColor: "#0891B2",
    name: "Dubai Tour Package", location: "UAE", duration: "5 Days / 4 Nights",
    price: "₹29,999", per: "per person", category: "International", rating: 4.9, bookings: "60+",
    img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=700&h=420&fit=crop&auto=format",
    inclusions: ["Return flights", "4 nights hotel", "Desert safari", "Burj Khalifa", "City tour"],
  },
  {
    id: 8, badge: "Adventure", badgeColor: "#DC2626",
    name: "Ladakh Bike & Road Trip", location: "Leh, Nubra, Pangong", duration: "8 Days / 7 Nights",
    price: "₹22,999", per: "per person", category: "North India", rating: 4.8, bookings: "45+",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&h=420&fit=crop&auto=format",
    inclusions: ["Flight to Leh", "7 nights stays", "Royal Enfield bike", "Guided tour", "Permits included"],
  },
];

const categories = ["All", "Gujarat", "North India", "South India", "International"];

export default function PackagesPage() {
  const [cat, setCat] = useState("All");
  const [enquired, setEnquired] = useState<number | null>(null);

  const filtered = cat === "All" ? packages : packages.filter(p => p.category === cat);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0F0C29, #0F172A, #0F3460)", padding: "64px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div className="section-badge" style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>luggage</span>
            TOUR PACKAGES
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 900, marginBottom: 14 }}>Curated Holiday Packages</h1>
          <p style={{ color: "#94A3B8", maxWidth: 460, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
            Handpicked destinations, expert guides & completely hassle-free planning
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: "28px 20px 0", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: "9px 22px", borderRadius: 30, fontWeight: 700, fontSize: 13, cursor: "pointer",
              border: "2px solid", borderColor: cat === c ? "#F59E0B" : "#E2E8F0",
              background: cat === c ? "linear-gradient(135deg, #D97706, #F59E0B)" : "#fff",
              color: cat === c ? "#1a1a2e" : "#64748B", fontFamily: "'Poppins', sans-serif",
              transition: "all 0.2s",
            }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "28px 20px 72px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {filtered.map(p => (
            <div key={p.id} className="card-hover" style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              {/* Image */}
              <div style={{ height: 210, overflow: "hidden", position: "relative" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                <div style={{ position: "absolute", top: 14, right: 14, background: p.badgeColor, color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700 }}>
                  {p.badge}
                </div>
                <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(0,0,0,0.5)", color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 12 }}>group</span>
                  {p.bookings} booked
                </div>
              </div>

              <div style={{ padding: "20px 22px 22px" }}>
                {/* Location + duration */}
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: "#64748B", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 13, color: "#94A3B8" }}>location_on</span>
                    {p.location}
                  </span>
                  <span style={{ color: "#64748B", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 13, color: "#94A3B8" }}>schedule</span>
                    {p.duration}
                  </span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#0F172A", marginBottom: 10 }}>{p.name}</h3>

                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                  <div style={{ display: "flex", gap: 1 }}>
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: i <= Math.floor(p.rating) ? "#F59E0B" : "#E2E8F0" }}>star</span>
                    ))}
                  </div>
                  <span style={{ fontWeight: 700, color: "#0F172A", fontSize: 12 }}>{p.rating}</span>
                </div>

                {/* Inclusions */}
                <div style={{ marginBottom: 18 }}>
                  {p.inclusions.slice(0, 4).map(inc => (
                    <div key={inc} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "#475569", marginBottom: 5 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: "#22c55e" }}>check_circle</span>
                      {inc}
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid #F1F5F9" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 24, color: "#D97706", lineHeight: 1 }}>{p.price}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{p.per}</div>
                  </div>
                  {enquired === p.id ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#22c55e", fontWeight: 700, fontSize: 13 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>check_circle</span> Sent!
                    </div>
                  ) : (
                    <button onClick={() => { setEnquired(p.id); setTimeout(() => setEnquired(null), 3000); }} style={{
                      display: "flex", alignItems: "center", gap: 6, padding: "10px 18px",
                      borderRadius: 10, fontWeight: 700, fontSize: 13, border: "none",
                      background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e",
                      cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                    }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16 }}>chat</span>
                      Enquire Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom package CTA */}
      <section style={{ background: "linear-gradient(135deg, #0F172A, #0F3460)", padding: "56px 20px", textAlign: "center" }}>
        <span className="material-symbols-rounded icon-filled" style={{ fontSize: 50, color: "#F59E0B", display: "block", marginBottom: 14 }}>travel_explore</span>
        <h2 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, marginBottom: 8 }}>Custom Package? Let Us Design It!</h2>
        <p style={{ color: "#94A3B8", marginBottom: 26, fontSize: 14, maxWidth: 400, margin: "0 auto 26px" }}>
          Tell us your destination, budget & dates — we'll craft the perfect itinerary just for you
        </p>
        <a href="https://wa.me/918200909915?text=Hi, I'm interested in a custom tour package" target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e", padding: "13px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>chat</span>
          Get Custom Quote on WhatsApp
        </a>
      </section>
    </div>
  );
}
