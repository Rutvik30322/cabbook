import { useState } from "react";
import souImg from "../assets/Statue of Unity.jpg";
import somnathImg from "../assets/16 Best Places to Visit in Dwarka, Things to Do & Sightseeing.jpg";
import rajasthanImg from "../assets/Luxury Rambagh Palace Jaipur India _ Royal Palace Hotel for Foreign Tourists.jpg";
import chardhamImg from "../assets/chardham.jpg";
import himachalImg from "../assets/Himachal.png";
import SEO from "@/components/SEO";

const packages = [
  {
    id: 1, badge: "Best Seller", badgeColor: "#F59E0B",
    name: "Statue of Unity Day Trip", location: "Kevadia, Gujarat", duration: "1 Day",
    price: "₹2,499", per: "per person", category: "Gujarat", rating: 4.9, bookings: "200+",
    img: souImg,
    inclusions: ["AC taxi from Vadodara", "Statue of Unity entry", "Tent City visit", "Guided tour", "Return transfer"],
  },
  {
    id: 2, badge: "Popular", badgeColor: "#7C3AED",
    name: "Dwarka & Somnath Pilgrimage", location: "Gujarat", duration: "3 Days / 2 Nights",
    price: "₹6,999", per: "per person", category: "Gujarat", rating: 4.8, bookings: "150+",
    img: somnathImg,
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
    img: rajasthanImg,
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
  {
    id: 9, badge: "Divine 🙏", badgeColor: "#F59E0B",
    name: "Chardham Yatra Spiritual Tour", location: "Yamunotri, Gangotri, Kedarnath, Badrinath", duration: "10 Days / 9 Nights",
    price: "₹24,499", per: "per person", category: "North India", rating: 4.9, bookings: "110+",
    img: chardhamImg,
    inclusions: ["AC vehicle from Haridwar", "9 nights stays", "All meals included", "VIP Darshan assistance", "Medical support"],
  },
  {
    id: 10, badge: "Hill Station", badgeColor: "#059669",
    name: "Himachal Scenic Highlights", location: "Shimla, Manali, Kasol", duration: "6 Days / 5 Nights",
    price: "₹15,499", per: "per person", category: "North India", rating: 4.8, bookings: "180+",
    img: himachalImg,
    inclusions: ["AC Tempo Traveller", "5 nights luxury hotels", "Solang Valley tour", "Breakfast & Dinner", "Personalized guide"],
  },
  {
    id: 11, badge: "International", badgeColor: "#7C3AED",
    name: "Nepal Himalayan Discovery", location: "Kathmandu, Pokhara, Nagarkot", duration: "6 Days / 5 Nights",
    price: "₹21,999", per: "per person", category: "International", rating: 4.7, bookings: "70+",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&h=420&fit=crop&auto=format",
    inclusions: ["Return flights", "5 nights 4-star hotel", "Pashupatinath Temple", "Boating in Pokhara", "Tour manager"],
  },
];

const categories = ["All", "Gujarat", "North India", "South India", "International"];

export default function PackagesPage() {
  const [cat, setCat] = useState("All");

  const filtered = cat === "All" ? packages : packages.filter(p => p.category === cat);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SEO 
        title="Best Tour Packages from Vadodara - Gujarat & International" 
        description="Book affordable and curated tour packages from Vadodara. From Statue of Unity to Bali and Dubai — we offer the best travel deals and custom itineraries." 
      />
      {/* Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, rgba(15,12,41,0.92) 0%, rgba(15,23,42,0.85) 50%, rgba(15,52,96,0.92) 100%), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&fit=crop&auto=format') center/cover", 
        padding: "32px 20px", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div className="section-badge" style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)", marginBottom: 12 }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>luggage</span>
            TOUR PACKAGES
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, marginBottom: 8 }}>Curated Holiday Packages</h1>
          <p style={{ color: "#94A3B8", maxWidth: 460, margin: "0 auto", fontSize: 14, lineHeight: 1.5 }}>
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
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.4s" }}
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
                  <button onClick={() => { 
                    const msg = encodeURIComponent(`Hello! I'm interested in the ${p.name} package from Divyakshi Travels.`);
                    window.open(`https://wa.me/918200909915?text=${msg}`, '_blank');
                  }} style={{
                    display: "flex", alignItems: "center", gap: 6, padding: "10px 18px",
                    borderRadius: 10, fontWeight: 700, fontSize: 13, border: "none",
                    background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e",
                    cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                  }}>
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16 }}>chat</span>
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom package CTA */}
      <section style={{ 
        background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,52,96,0.88) 100%), url('https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1600&fit=crop&auto=format') center/cover", 
        padding: "56px 20px", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,158,11,0.05)" }} />
        <div style={{ position: "relative" }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 50, color: "#FCD34D", display: "block", marginBottom: 14 }}>travel_explore</span>
          <h2 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, marginBottom: 8 }}>Custom Package? Let Us Design It!</h2>
          <p style={{ color: "#94A3B8", marginBottom: 26, fontSize: 14, maxWidth: 400, margin: "0 auto 26px" }}>
            Tell us your destination, budget & dates — we'll craft the perfect itinerary just for you
          </p>
          <a href="https://wa.me/918200909915?text=Hi, I'm interested in a custom tour package" target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e", padding: "13px 28px", borderRadius: 12, fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>chat</span>
            Get Custom Quote on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
