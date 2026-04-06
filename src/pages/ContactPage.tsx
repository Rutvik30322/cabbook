import { useState } from "react";
import { Link } from "wouter";
import { User, Mail, Phone, ChevronRight, CheckCircle2, UserCircle } from "lucide-react";
import executiveImage from "../assets/executive_travel_corporate_1775444530170.png";
import SEO from "@/components/SEO";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState("Corporate");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const labelStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 700, color: "#475569", marginBottom: 6 };
  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px 14px", border: "none", borderBottom: "1.5px solid #E2E8F0", fontSize: 14, outline: "none", background: "transparent", color: "#1e293b", fontFamily: "'Poppins', sans-serif", transition: "all 0.3s" };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fff" }}>
      <SEO 
        title="Contact Divyakshi Cabs | Booking Inquiry Vadodara - 82009 09915" 
        description="Contact Divyakshi Cabs Vadodara for taxi bookings, corporate travel, group tours or visa inquiries. Call 82009 09915 or WhatsApp. Instant 24/7 support available." 
      />
      
      {/* 1. Header Hero with Breadcrumbs & Background */}
      <section style={{ 
        background: `linear-gradient(rgba(15,23,42,0.88), rgba(15,23,42,0.88)), url(${executiveImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "48px 20px 90px", 
        textAlign: "center"
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <div style={{ height: 2, width: 30, background: "linear-gradient(to right, transparent, #F59E0B)" }} />
          <span style={{ color: "#FCD34D", fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Contact & Inquiry</span>
          <div style={{ height: 2, width: 30, background: "linear-gradient(to left, transparent, #F59E0B)" }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 900, letterSpacing: "clamp(2px,0.4vw,5px)",
            lineHeight: 1, fontFamily: "'Poppins', sans-serif",
            filter: "drop-shadow(0 3px 15px rgba(245,158,11,0.4))",
          }}>DIVYAKSHI CABS</span>
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
        margin: "-35px auto 60px",
        padding: "0 20px",
        background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${executiveImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "50px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)", borderRadius: 40, overflow: "hidden", boxShadow: "0 30px 100px rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,1)" }} className="corporate-split">
            
            {/* Left Form */}
            <div style={{ padding: "35px 40px" }}>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", marginBottom: 20, letterSpacing: "-0.5px" }}>Help us with your requirements</h2>
              
              {submitted ? (
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <CheckCircle2 size={54} color="#22c55e" style={{ margin: "0 auto 16px" }} />
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: "#166534", marginBottom: 8 }}>Inquiry Sent to WhatsApp!</h3>
                    <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.5 }}>Thank you! Your <b>{formType}</b> inquiry has been shared with us via WhatsApp. We'll contact you at {form.phone} shortly.</p>
                    <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, background: "#0F172A", color: "#fff", padding: "12px 28px", borderRadius: 10, border: "none", fontWeight: 800, cursor: "pointer" }}>Send Another Inquiry</button>
                  </div>
              ) : (
                  <form onSubmit={e => { 
                    e.preventDefault(); 
                    const messageText = `Hi Divyakshi Travels, I have a ${formType} inquiry:\n\n👤 Name: ${form.name}\n✉ Email: ${form.email}\n📞 Phone: ${form.phone}\n📝 Requirements: ${form.message || "No specific details provided."}`;
                    window.open(`https://wa.me/918200909915?text=${encodeURIComponent(messageText)}`, '_blank');
                    setSubmitted(true); 
                  }}>
                    <div className="input-row-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15, marginBottom: 12 }}>
                      <div>
                        <label style={labelStyle}><User size={15} color="#F59E0B" /> Name</label>
                        <input type="text" placeholder="Full Name" required style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div>
                        <label style={labelStyle}><Mail size={15} color="#F59E0B" /> Email</label>
                        <input type="email" placeholder="Email Address" required style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    
                    <div className="input-row-mobile" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15, marginBottom: 12 }}>
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
                            style={{ ...inputStyle, cursor: "pointer", paddingLeft: 0 }}
                        >
                          <option value="Corporate">💼 Corporate Rental</option>
                          <option value="Other">🚗 Regular Booking</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>📝 Additional Details</label>
                      <textarea 
                          placeholder="Tell us more about your needs..." 
                          style={{ ...inputStyle, paddingLeft: 0, height: 50, resize: "none" }} 
                          value={form.message} 
                          onChange={e => setForm({...form, message: e.target.value})}
                      />
                    </div>

                    <button type="submit" style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
                      color: "#1a1a2e", borderRadius: 12, border: "none", padding: "14px 30px",
                      fontWeight: 900, fontSize: 15, cursor: "pointer", boxShadow: "0 8px 20px rgba(245,158,11,0.25)",
                      transition: "all 0.3s"
                    }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                      Send Inquiry Now
                    </button>
                  </form>
              )}
            </div>

            {/* Right Image/Text Overlay */}
            <div style={{ 
                position: "relative",
                backgroundImage: `linear-gradient(rgba(15,23,42,0.5), rgba(15,23,42,0.5)), url(${executiveImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "40px",
                color: "#fff",
                textAlign: "center"
            }}>
               <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12, letterSpacing: "-1px" }}>
                 PREMIUM TRAVEL.<br />
                 <span style={{ color: "#F59E0B" }}>WITHOUT COMPROMISE.</span>
               </h2>
               <p style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                 Executive service for every journey.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Only Overrides */}
      <style>{`
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
