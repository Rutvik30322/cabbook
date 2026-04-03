import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f0c29, #1a1a2e, #0f3460)", padding: "64px 1.25rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212,160,23,0.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)", color: "#F5C842", padding: "5px 16px", borderRadius: 30, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 18 }}>
            💬 GET IN TOUCH
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 900, marginBottom: 14 }}>Contact Us</h1>
          <p style={{ color: "#94a3b8", maxWidth: 440, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
            We're here to help you plan the perfect journey — reach out anytime
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 1.25rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40 }} className="contact-grid">

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1e293b", marginBottom: 4 }}>Our Contact Details</h2>
              <p style={{ color: "#64748b", fontSize: 14, marginBottom: 6 }}>Visit us, call us, or send a WhatsApp — we're always available.</p>

              {[
                {
                  Icon: MapPin, color: "#3b82f6", bg: "#eff6ff",
                  title: "Office Address",
                  content: ["414, 4th Floor, Sakar Complex,", "Opposite Bansal Mall,", "Danteshwar Tarsali Road,", "Tarsali, Vadodara — 390009"]
                },
                {
                  Icon: Phone, color: "#10b981", bg: "#ecfdf5",
                  title: "Phone & WhatsApp",
                  content: ["82009 09915"]
                },
                {
                  Icon: Mail, color: "#8b5cf6", bg: "#f5f3ff",
                  title: "Email Address",
                  content: ["vijaysinh41988@gmail.com"]
                },
                {
                  Icon: Globe, color: "#f59e0b", bg: "#fffbeb",
                  title: "Website",
                  content: ["www.divyakshitoursandtravels.in"]
                },
                {
                  Icon: Clock, color: "#ef4444", bg: "#fef2f2",
                  title: "Business Hours",
                  content: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 4:00 PM", "📞 Emergency: 24/7"]
                },
              ].map(item => {
                const Icon = item.Icon;
                return (
                  <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1.5px solid #e2e8f0" }}>
                    <div style={{ width: 46, height: 46, background: item.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} color={item.color} strokeWidth={2} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#1e293b", fontSize: 14, marginBottom: 4 }}>{item.title}</div>
                      {item.content.map((line, i) => (
                        <div key={i} style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>{line}</div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Quick Actions */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
                <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e", padding: "12px 10px", borderRadius: 12, fontWeight: 700, fontSize: 13 }}>
                  <Phone size={15} /> Call Now
                </a>
                <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "#25d366", color: "#fff", padding: "12px 10px", borderRadius: 12, fontWeight: 700, fontSize: 13 }}>
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1e293b", marginBottom: 24 }}>Send Us a Message</h2>

              {submitted ? (
                <div style={{ background: "#f0fdf4", border: "2px solid #22c55e", borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
                  <CheckCircle2 size={60} color="#22c55e" style={{ margin: "0 auto 16px" }} />
                  <h3 style={{ color: "#166534", fontWeight: 900, fontSize: 20, marginBottom: 8 }}>Message Sent Successfully!</h3>
                  <p style={{ color: "#475569", fontSize: 14 }}>
                    Thank you <strong>{form.name}</strong>! We'll contact you at <strong>{form.phone}</strong> very soon.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }}
                    style={{ marginTop: 20, background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e", padding: "10px 24px", borderRadius: 10, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>👤 Full Name *</label>
                        <input type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} required
                          onFocus={e => (e.target.style.borderColor = "#D4A017")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                      </div>
                      <div>
                        <label style={labelStyle}>📲 Phone Number *</label>
                        <input type="tel" placeholder="Mobile number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} required
                          onFocus={e => (e.target.style.borderColor = "#D4A017")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>✉ Email (Optional)</label>
                      <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "#D4A017")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>📌 Subject *</label>
                      <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={inputStyle} required>
                        <option value="">Select a subject</option>
                        <option>Taxi / Cab Booking</option>
                        <option>Tour Package Enquiry</option>
                        <option>Visa & Passport Assistance</option>
                        <option>Hotel Booking</option>
                        <option>Corporate Travel</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>💬 Your Message *</label>
                      <textarea rows={4} placeholder="Describe your travel requirements — destination, dates, passengers, budget..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: "vertical" as const }}
                        required onFocus={e => (e.target.style.borderColor = "#D4A017")} onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
                    </div>
                    <button type="submit" style={{
                      width: "100%", padding: 14, borderRadius: 12, border: "none",
                      background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e",
                      fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    }}>
                      <Send size={16} /> Send Message
                    </button>
                    <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 12, marginTop: 12 }}>
                      🔒 We reply within 2 hours on business days
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map area */}
      <section style={{ padding: "0 1.25rem 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)", borderRadius: 20, padding: "40px 32px", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗺</div>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 20, marginBottom: 6 }}>Find Us in Vadodara</h3>
            <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 20 }}>
              Sakar Complex, Tarsali Danteshwar Road, Tarsali, Vadodara, Gujarat
            </p>
            <a href="https://maps.google.com/?q=Tarsali+Danteshwar+Road+Vadodara+Gujarat" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e", padding: "11px 24px", borderRadius: 10, fontWeight: 700, fontSize: 13 }}>
              <MapPin size={15} /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 6 };
const inputStyle: React.CSSProperties = { width: "100%", padding: "11px 14px", border: "2px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", background: "#f8fafc", color: "#1e293b", fontFamily: "'Poppins', sans-serif", transition: "border-color 0.2s" };
