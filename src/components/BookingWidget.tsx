import { useState } from "react";
import { useLocation } from "wouter";

const CITIES = [
  "Vadodara", "Ahmedabad", "Surat", "Rajkot", "Gandhinagar", "Anand", "Nadiad",
  "Mumbai", "Pune", "Delhi", "Jaipur", "Udaipur", "Mount Abu", "Jodhpur",
  "Dwarka", "Somnath", "Statue of Unity", "Goa", "Shirdi", "Nashik",
];

type TripType = "oneway" | "roundtrip" | "outstation" | "local";

const tabs: { key: TripType; label: string; icon: string; color: string; bg: string }[] = [
  { key: "oneway", label: "One Way", icon: "arrow_forward", color: "#2563EB", bg: "#EFF6FF" },
  { key: "roundtrip", label: "Round Trip", icon: "sync_alt", color: "#7C3AED", bg: "#F5F3FF" },
  { key: "outstation", label: "Outstation", icon: "directions_car", color: "#D97706", bg: "#FFFBEB" },
  { key: "local", label: "Local/Hourly", icon: "schedule", color: "#059669", bg: "#ECFDF5" },
];

export default function BookingWidget() {
  const [tripType, setTripType] = useState<TripType>("oneway");
  const [from, setFrom] = useState("Vadodara");
  const [to, setTo] = useState("Dwarka");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [phone, setPhone] = useState("");
  const [, navigate] = useLocation();

  const swap = () => { const t = from; setFrom(to); setTo(t); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ from, to: to || from, tripType, date, phone });
    navigate(`/search?${params.toString()}`);
  };

  const activeTab = tabs.find(t => t.key === tripType)!;

  return (
    <div style={{
      background: "#fff", borderRadius: 20, padding: "clamp(16px,4vw,26px) clamp(14px,4vw,28px)",
      boxShadow: "0 24px 80px rgba(0,0,0,0.22)", maxWidth: 900, width: "100%",
      position: "relative", overflow: "hidden",
    }}>
      {/* Corner accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${activeTab.color}, ${activeTab.color}99)` }} />

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto" }} className="booking-tabs">
        {tabs.map(t => {
          const active = tripType === t.key;
          return (
            <button key={t.key} onClick={() => setTripType(t.key)} style={{
              display: "flex", alignItems: "center", gap: 7, padding: "9px 18px",
              borderRadius: 10, border: `2px solid ${active ? t.color : "#E2E8F0"}`,
              background: active ? t.color : "#F8FAFC",
              color: active ? "#fff" : "#64748B",
              fontWeight: 700, fontSize: 13, cursor: "pointer",
              whiteSpace: "nowrap", transition: "all 0.2s",
              fontFamily: "'Poppins',sans-serif",
            }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        {tripType === "local" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>location_on</span> Pickup City</label>
              <select value={from} onChange={e => setFrom(e.target.value)} style={inputStyle} required>
                {CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>schedule</span> Duration</label>
              <select style={inputStyle}>
                {["4 Hours / 40 km", "8 Hours / 80 km", "12 Hours / 120 km", "Full Day"].map(h => <option key={h}>{h}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>calendar_today</span> Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inputStyle} required min={new Date().toISOString().split("T")[0]} />
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "end", marginBottom: 16 }} className="from-to-grid">
            <div>
              <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>trip_origin</span> From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} style={inputStyle} required>
                {CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <button type="button" onClick={swap} className="swap-btn" style={{
              width: 40, height: 40, borderRadius: "50%", border: "2px solid #E2E8F0",
              background: "#F8FAFC", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 2, transition: "all 0.2s", color: "#64748B",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#F59E0B"; e.currentTarget.style.color = "#F59E0B"; e.currentTarget.style.background = "#FFFBEB"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.color = "#64748B"; e.currentTarget.style.background = "#F8FAFC"; }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>swap_horiz</span>
            </button>
            <div>
              <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>location_on</span> To</label>
              <select value={to} onChange={e => setTo(e.target.value)} style={inputStyle} required>
                <option value="" disabled>Select destination...</option>
                {CITIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: tripType === "roundtrip" ? "repeat(3, 1fr)" : "repeat(2, 1fr)", gap: 14, marginBottom: 20 }} className="from-to-grid">
          <div>
            <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>calendar_today</span> Pickup Date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inputStyle} required min={new Date().toISOString().split("T")[0]} />
          </div>
          {tripType === "roundtrip" && (
            <div>
              <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>event</span> Return Date</label>
              <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} style={inputStyle} required min={date} />
            </div>
          )}
          <div>
            <label style={labelStyle}><span className="material-symbols-rounded icon-filled" style={{ fontSize: 14, color: activeTab.color }}>smartphone</span> Your Phone</label>
            <input type="tel" placeholder="Mobile number" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} required />
          </div>
        </div>

        <button type="submit" className="search-btn" style={{
          width: "100%", padding: "14px", borderRadius: 12, border: "none",
          background: "linear-gradient(135deg, #D97706, #F59E0B, #FCD34D)",
          color: "#1a1a2e", fontWeight: 900, fontSize: 16, cursor: "pointer",
          fontFamily: "'Poppins',sans-serif", letterSpacing: 0.3,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          boxShadow: "0 8px 24px rgba(245,158,11,0.35)", transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.05)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22 }}>search</span>
          <span className="btn-long-text">Search Cabs & Get Best Quotes</span>
          <span className="btn-short-text" style={{ display: "none" }}>Search Cabs</span>
        </button>
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 5,
  fontSize: 11, fontWeight: 700, color: "#64748B",
  marginBottom: 6, letterSpacing: 0.3, textTransform: "uppercase" as const,
};
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px", border: "2px solid #E2E8F0", borderRadius: 10,
  fontSize: 14, outline: "none", background: "#F8FAFC", color: "#1E293B",
  fontFamily: "'Poppins',sans-serif", transition: "border-color 0.2s",
};
