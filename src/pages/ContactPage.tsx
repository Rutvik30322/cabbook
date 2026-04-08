import { useState } from "react";
import { Link } from "wouter";
import { User, Mail, Phone, ChevronRight, CheckCircle2, UserCircle } from "lucide-react";
import executiveImage from "../assets/luxury_travel_agency_office_v2_1775632219436.png";
import journeyHero from "../assets/premium_travel_journey_contact_hero_1775632419580.png";
import SEO from "@/components/SEO";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState("Corporate");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const labelStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 700, color: "#F8FAFC", marginBottom: 6 };
  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px 10px", border: "none", borderBottom: "1.5px solid rgba(255,255,255,0.25)", fontSize: 14, outline: "none", background: "transparent", color: "#fff", fontFamily: "'Poppins', sans-serif", transition: "all 0.3s" };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fff" }}>
      <SEO 
        title="Contact Divyakshi Cabs | Booking Inquiry Vadodara - 82009 09915" 
        description="Contact Divyakshi Cabs Vadodara for taxi bookings, corporate travel, group tours or visa inquiries. Call 82009 09915 or WhatsApp. Instant 24/7 support available." 
      />
      
      {/* 1. Header Hero with Breadcrumbs & Background */}
      <section style={{ 
        background: `linear-gradient(rgba(15,23,42,0.4), rgba(15,23,42,0.4)), url(${journeyHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "70px 20px 120px", 
        textAlign: "center"
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ height: 2, width: 30, background: "linear-gradient(to right, transparent, #F59E0B)" }} />
          <span style={{ color: "#FCD34D", fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>24/7 Travel Support</span>
          <div style={{ height: 2, width: 30, background: "linear-gradient(to left, transparent, #F59E0B)" }} />
        </div>
        <div style={{ marginBottom: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 900, letterSpacing: "clamp(2px,0.4vw,5px)",
            lineHeight: 1.1, fontFamily: "'Poppins', sans-serif",
            filter: "drop-shadow(0 3px 15px rgba(245,158,11,0.4))",
          }}>DIVYAKSHI CABS</span>
          <span style={{ 
            color: "#FFFFFF", 
            letterSpacing: "4px", 
            fontSize: "clamp(10px, 3vw, 15px)", 
            fontWeight: 800, 
            marginTop: 0,
            fontFamily: "'Poppins', sans-serif",
            textShadow: "0 3px 12px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,0.9)"
          }}>UNIT OF DIVYAKSHI TOURS & TRAVELS</span>
        </div>
        <h1 style={{ color: "#fff", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 900, marginBottom: 8 }}>Contact & Booking Inquiry</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#94A3B8", fontSize: 12, fontWeight: 600 }}>
          <Link href="/" style={{ color: "#fff", opacity: 0.8, textDecoration: "none" }}>🏠 Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: "#F59E0B" }}>Contact & Inquiry</span>
        </div>
      </section>

      {/* 2. Main Form Section with Background Overlay */}
      <section style={{ 
        position: "relative",
        margin: "-110px auto 60px",
        padding: "0 20px",
        background: `linear-gradient(rgba(15,23,42,0.4), rgba(15,23,42,0.4)), url(${executiveImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        borderRadius: "60px 60px 0 0",
        boxShadow: "0 -20px 40px rgba(0,0,0,0.2)"
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "80px 0" }}>
          <div style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(25px)", borderRadius: 40, overflow: "hidden", boxShadow: "0 30px 100px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)", padding: "50px 60px" }}>
            
            <div style={{ textAlign: "center", marginBottom: 35 }}>
              <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: "#fff", marginBottom: 12, letterSpacing: "-0.5px" }}>Help us with your requirements</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Send us a message and we'll get back to you shortly.</p>
            </div>
            
            {submitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <CheckCircle2 size={54} color="#22c55e" style={{ margin: "0 auto 16px" }} />
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>Inquiry Sent to WhatsApp!</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.5 }}>Thank you! Your <b>{formType}</b> inquiry has been shared with us via WhatsApp. We'll contact you at {form.phone} shortly.</p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, background: "#fff", color: "#0F172A", padding: "12px 28px", borderRadius: 10, border: "none", fontWeight: 800, cursor: "pointer" }}>Send Another Inquiry</button>
                </div>
            ) : (
                <form onSubmit={e => { 
                  e.preventDefault(); 
                  const messageText = `Hi Divyakshi Travels, I have a ${formType} inquiry:\n\n👤 Name: ${form.name}\n✉ Email: ${form.email}\n📞 Phone: ${form.phone}\n📝 Requirements: ${form.message || "No specific details provided."}`;
                  window.open(`https://wa.me/918200909915?text=${encodeURIComponent(messageText)}`, '_blank');
                  setSubmitted(true); 
                }}>
                  <div className="input-row-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 15 }}>
                    <div>
                      <label style={labelStyle}><User size={15} color="#F59E0B" /> Name</label>
                      <input type="text" placeholder="Full Name" required style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label style={labelStyle}><Mail size={15} color="#F59E0B" /> Email</label>
                      <input type="email" placeholder="Email Address" required style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                  </div>
                  
                  <div className="input-row-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 15 }}>
                    <div>
                      <label style={labelStyle}><Phone size={15} color="#F59E0B" /> Mobile No.</label>
                      <input type="tel" placeholder="Phone Number" required style={inputStyle} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        <UserCircle size={15} color="#F59E0B" /> Type
                      </label>
                      <select 
                          value={formType} 
                          onChange={e => setFormType(e.target.value)} 
                          style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        <option value="Corporate" style={{color: "#000"}}>💼 Corporate Rental</option>
                        <option value="Other" style={{color: "#000"}}>🚗 Regular Booking</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 25 }}>
                    <label style={labelStyle}>📝 Additional Details</label>
                    <textarea 
                        placeholder="Tell us more about your needs..." 
                        style={{ ...inputStyle, paddingLeft: 0, height: 80, resize: "none" }} 
                        value={form.message} 
                        onChange={e => setForm({...form, message: e.target.value})}
                    />
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button type="submit" style={{
                      maxWidth: 300,
                      width: "100%",
                      background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
                      color: "#1a1a2e", borderRadius: 12, border: "none", padding: "16px 40px",
                      fontWeight: 900, fontSize: 16, cursor: "pointer", boxShadow: "0 8px 25px rgba(245,158,11,0.35)",
                      transition: "all 0.3s"
                    }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                      Send Inquiry Now
                    </button>
                  </div>
                </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Google Maps Section */}
      <section style={{ padding: "0 20px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "1px solid #E2E8F0" }}>
          {/* Map Header */}
          <div style={{ background: "#FFFFFF", padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, borderBottom: "1px solid #E2E8F0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: "#F59E0B" }}>location_on</span>
              </div>
              <div>
                <div style={{ color: "#0F172A", fontWeight: 800, fontSize: 15 }}>Our Office Location</div>
                <div style={{ color: "#475569", fontSize: 12 }}>414, Sakar Complex, Opp. Bansal Mall, Tarsali, Vadodara</div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=414,+Sakar+Complex,+Opp.+Bansal+Mall,+Tarsali,+Vadodara,+Gujarat+390009"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #D97706, #F59E0B)",
                color: "#1e293b", padding: "10px 20px", borderRadius: 10,
                fontWeight: 800, fontSize: 13, textDecoration: "none",
                boxShadow: "0 4px 15px rgba(245,158,11,0.3)",
                transition: "all 0.3s", whiteSpace: "nowrap"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(245,158,11,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(245,158,11,0.3)"; }}
            >
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>near_me</span>
              Get Directions
            </a>
          </div>

          {/* Embedded Map */}
          <iframe
            title="Divyakshi Cabs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.063!2d73.1889!3d22.2690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f0b4d3f1b5%3A0x0!2zMjLCsDE2JzA4LjQiTiA3M8KwMTEnMjAuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin&q=414+Sakar+Complex+Opp+Bansal+Mall+Tarsali+Vadodara+Gujarat+390009"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Global CSS for Placeholders */}
      <style>{`
        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        @media (max-width: 900px) {
          .corporate-split { grid-template-columns: 1fr !important; border-radius: 25px !important; margin-top: -20px; }
          .corporate-split > div { padding: 30px 20px !important; }
          h1 { font-size: 24px !important; }
          h2 { font-size: 18px !important; margin-bottom: 15px !important; }
          .input-row-mobile { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </div>
  );
}
