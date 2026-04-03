import { useSearch, Link } from "wouter";
import { useState } from "react";

const CAR_OPTIONS = [
  {
    id: 1, type: "Hatchback", models: "Swift / WagonR / i10",
    seats: 4, bags: 2,
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=350&fit=crop&auto=format",
    ratePerKm: 11, basePrice: 800,
    features: ["AC", "Music System", "Neat & Clean"],
    highlights: ["Best for 1–3 pax", "Most economical"],
    color: "#2563EB", badge: "Best Value",
  },
  {
    id: 2, type: "Sedan", models: "Honda City / Dzire / Etios",
    seats: 4, bags: 3,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=350&fit=crop&auto=format",
    ratePerKm: 13, basePrice: 1000,
    features: ["AC", "Large Boot", "Comfortable Ride"],
    highlights: ["Perfect for families", "Spacious & comfortable"],
    color: "#7C3AED", badge: "Popular Choice",
  },
  {
    id: 3, type: "SUV / MUV", models: "Innova / Ertiga / Scorpio",
    seats: 7, bags: 5,
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=350&fit=crop&auto=format",
    ratePerKm: 16, basePrice: 1400,
    features: ["AC", "7 Seats", "Ample Luggage Space"],
    highlights: ["Ideal for groups", "Maximum comfort"],
    color: "#D97706", badge: "Most Booked",
  },
  {
    id: 4, type: "Luxury Sedan", models: "Toyota Camry / Honda Accord",
    seats: 4, bags: 4,
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=350&fit=crop&auto=format",
    ratePerKm: 22, basePrice: 2000,
    features: ["Premium AC", "Leather Seats", "WiFi Available"],
    highlights: ["Premium experience", "Corporate travel"],
    color: "#059669", badge: "Premium",
  },
  {
    id: 5, type: "Tempo Traveller", models: "12 / 14 / 16 Seater",
    seats: 16, bags: 10,
    img: "https://images.unsplash.com/photo-1570461226513-e08b58a52a6f?w=600&h=350&fit=crop&auto=format",
    ratePerKm: 22, basePrice: 2400,
    features: ["AC", "16 Seats", "Group Travel Specialist"],
    highlights: ["Perfect for groups 10+", "All-India permit"],
    color: "#DC2626", badge: "Group Travel",
  },
];

export default function SearchResults() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const from = params.get("from") || "Vadodara";
  const to = params.get("to") || "Destination";
  const date = params.get("date") || "";
  const phone = params.get("phone") || "";
  const tripType = params.get("tripType") || "oneway";

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState<number | null>(null);

  const tripLabel: Record<string, string> = {
    oneway: "One Way", roundtrip: "Round Trip",
    outstation: "Outstation", local: "Local/Hourly",
  };

  const estKm: Record<string, number> = {
    Ahmedabad: 115, Surat: 155, Mumbai: 425, Delhi: 1100, Goa: 530,
    Jaipur: 780, Rajkot: 220, Pune: 390, Dwarka: 440, Somnath: 220,
    "Statue of Unity": 90, Shirdi: 360, Nashik: 310,
  };
  const km = estKm[to] || 200;

  const getPrice = (car: typeof CAR_OPTIONS[0]) => {
    const base = Math.max(car.basePrice, car.ratePerKm * km);
    return Math.round(base / 50) * 50;
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>

      {/* Search summary bar */}
      <div style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)", padding: "18px 20px", borderBottom: "1px solid rgba(245,158,11,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 16px" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#F59E0B" }}>trip_origin</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{from}</span>
            </div>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22, color: "#F59E0B" }}>arrow_forward</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 16px" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#22c55e" }}>location_on</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{to}</span>
            </div>
            {date && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 14px" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#94A3B8" }}>calendar_today</span>
                <span style={{ color: "#94A3B8", fontSize: 13 }}>{date}</span>
              </div>
            )}
            <div style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, border: "1px solid rgba(245,158,11,0.3)" }}>
              {tripLabel[tripType]} · ~{km} km
            </div>
          </div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748B", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.color = "#F59E0B"}
            onMouseLeave={e => e.currentTarget.style.color = "#64748B"}>
            <span className="material-symbols-rounded" style={{ fontSize: 16 }}>edit</span>
            Modify Search
          </Link>
        </div>
      </div>

      {/* Results */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", marginBottom: 4 }}>
              {CAR_OPTIONS.length} Cabs Available
            </h1>
            <p style={{ color: "#64748B", fontSize: 14 }}>Select a cab and confirm your booking</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 10, padding: "8px 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#059669" }}>verified</span>
            <span style={{ color: "#047857", fontSize: 12, fontWeight: 700 }}>All cabs verified & insured</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {CAR_OPTIONS.map(car => {
            const price = getPrice(car);
            const isSelected = selectedId === car.id;
            const isConfirmed = confirmed === car.id;

            return (
              <div key={car.id} style={{
                background: "#fff", borderRadius: 18, overflow: "hidden",
                boxShadow: isSelected ? `0 8px 32px ${car.color}30` : "0 4px 16px rgba(0,0,0,0.07)",
                border: isSelected ? `2px solid ${car.color}` : "2px solid #E2E8F0",
                transition: "all 0.3s",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", minHeight: 200 }} className="car-card-grid">

                  {/* Car image */}
                  <div style={{ position: "relative", overflow: "hidden", minHeight: 180 }}>
                    <img
                      src={car.img}
                      alt={car.type}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 180 }}
                      onError={e => { e.currentTarget.style.display = "none"; }}
                    />
                    {/* Badge */}
                    <div style={{ position: "absolute", top: 14, left: 14, background: car.color, color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700 }}>
                      {car.badge}
                    </div>
                  </div>

                  {/* Details */}
                  <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      {/* Title row */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                        <div>
                          <h3 style={{ fontWeight: 900, fontSize: 20, color: "#0F172A", marginBottom: 2 }}>{car.type}</h3>
                          <div style={{ color: "#64748B", fontSize: 13 }}>{car.models}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontWeight: 900, fontSize: 28, color: car.color, lineHeight: 1 }}>₹{price.toLocaleString()}</div>
                          <div style={{ color: "#94A3B8", fontSize: 11, marginTop: 3 }}>One Way • All Inclusive</div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div style={{ display: "flex", gap: 20, marginBottom: 12, flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#475569", fontSize: 13 }}>
                          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: car.color }}>group</span>
                          {car.seats} Seater
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#475569", fontSize: 13 }}>
                          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: car.color }}>luggage</span>
                          {car.bags} Bags
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#475569", fontSize: 13 }}>
                          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: car.color }}>ac_unit</span>
                          Air Conditioned
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#475569", fontSize: 13 }}>
                          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#22c55e" }}>verified_user</span>
                          Insured
                        </div>
                      </div>

                      {/* Features */}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                        {car.highlights.map(h => (
                          <span key={h} style={{ background: `${car.color}12`, color: car.color, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Inclusions */}
                      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        {["Fuel Included", "Driver Allowance", "State Tax", "Toll Charges*"].map((inc, i) => (
                          <div key={inc} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: i < 3 ? "#047857" : "#94A3B8" }}>
                            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: i < 3 ? "#22c55e" : "#CBD5E1" }}>{i < 3 ? "check_circle" : "info"}</span>
                            {inc}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: 18, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                      {isConfirmed ? (
                        <div style={{ flex: 1, background: "#F0FDF4", border: "2px solid #22c55e", borderRadius: 12, padding: "12px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 24, color: "#22c55e" }}>check_circle</span>
                          <div>
                            <div style={{ fontWeight: 800, color: "#166534", fontSize: 14 }}>Booking Request Sent!</div>
                            <div style={{ color: "#475569", fontSize: 12 }}>Our team will call {phone} within 30 mins</div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => { setSelectedId(car.id); setConfirmed(car.id); }}
                            style={{
                              flex: 1, padding: "13px 24px", borderRadius: 12, border: "none",
                              background: `linear-gradient(135deg, ${car.color}, ${car.color}dd)`,
                              color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer",
                              fontFamily: "'Poppins',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                              boxShadow: `0 6px 20px ${car.color}40`,
                            }}>
                            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>check_circle</span>
                            Book This Cab — ₹{price.toLocaleString()}
                          </button>
                          <a
                            href={`https://wa.me/918200909915?text=Hi, I want to book a ${car.type} from ${from} to ${to} on ${date}. Quote: ₹${price}`}
                            target="_blank" rel="noreferrer"
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "#25d366", color: "#fff", padding: "13px 18px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>chat</span>
                            WhatsApp
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need help */}
        <div style={{ marginTop: 40, background: "linear-gradient(135deg, #0F172A, #1E293B)", borderRadius: 20, padding: "28px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Need Help Choosing?</div>
            <div style={{ color: "#94A3B8", fontSize: 13 }}>Our travel expert will suggest the best cab for your needs</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 7, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e", padding: "11px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span> 82009 09915
            </a>
            <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, background: "#25d366", color: "#fff", padding: "11px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
