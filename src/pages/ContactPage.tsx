import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState("Corporate Rental");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    color: "#475569",
    marginBottom: 6,
  };
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "2px solid #E2E8F0",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    background: "#fff",
    color: "#1E293B",
    fontFamily: "'Poppins', sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SEO
        title="Contact Divyakshi Cabs | Booking Inquiry Vadodara - 82009 09915"
        description="Contact Divyakshi Cabs Vadodara for taxi bookings, corporate travel, group tours or visa inquiries. Call 82009 09915 or WhatsApp. Instant 24/7 support available."
      />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, rgba(15,12,41,0.92) 0%, rgba(15,23,42,0.85) 50%, rgba(15,52,96,0.92) 100%), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&fit=crop&auto=format') center/cover",
        padding: "42px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ height: 2, width: 30, background: "linear-gradient(to right, transparent, #F59E0B)" }} />
            <span style={{ color: "#FCD34D", fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>24/7 Travel Support</span>
            <div style={{ height: 2, width: 30, background: "linear-gradient(to left, transparent, #F59E0B)" }} />
          </div>

          <div style={{ marginBottom: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, letterSpacing: "clamp(2px,0.4vw,5px)",
              lineHeight: 1.1, filter: "drop-shadow(0 3px 15px rgba(245,158,11,0.4))",
            }}>DIVYAKSHI CABS</span>
            <span style={{
              color: "#FFFFFF", letterSpacing: "4px",
              fontSize: "clamp(10px, 3vw, 15px)", fontWeight: 800, marginTop: 0,
              textShadow: "0 3px 12px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,0.9)",
            }}>UNIT OF DIVYAKSHI TOURS &amp; TRAVELS</span>
          </div>

          <div className="section-badge" style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)", marginBottom: 10, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>contact_support</span>
            CONTACT &amp; BOOKING INQUIRY
          </div>

          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 900, marginBottom: 8, marginTop: 4, textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
            Get In Touch — We're Ready to Help
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", maxWidth: 480, margin: "0 auto 12px", fontSize: 13.5, lineHeight: 1.5, fontWeight: 600, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
            Reach out for bookings, queries, or corporate enquiries — we respond fast
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#94A3B8", fontSize: 12, fontWeight: 600 }}>
            <Link href="/" style={{ color: "#fff", opacity: 0.8, textDecoration: "none" }}>🏠 Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: "#F59E0B" }}>Contact &amp; Inquiry</span>
          </div>
        </div>
      </section>

      {/* ── MAIN: IMAGE + FORM SPLIT ── */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div
          className="contact-split-grid"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.13)",
            border: "1px solid #E2E8F0",
          }}
        >
          {/* LEFT — Attractive Image Panel */}
          <div style={{ position: "relative", minHeight: 580, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&fit=crop&auto=format"
              alt="Premium travel experience"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Dark gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.75) 100%)" }} />

            {/* Floating content over image */}
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px 36px" }}>
              {/* Stats row */}
              <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                {[
                  { num: "5000+", label: "Happy Customers" },
                  { num: "24/7", label: "Support" },
                  { num: "10+", label: "Years Experience" },
                ].map(s => (
                  <div key={s.num} style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 14, padding: "12px 16px", textAlign: "center", flex: 1 }}>
                    <div style={{ color: "#FCD34D", fontWeight: 900, fontSize: 18, lineHeight: 1 }}>{s.num}</div>
                    <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 10, fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <h2 style={{ color: "#fff", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, lineHeight: 1.3, marginBottom: 12 }}>
                Your Journey,<br />Our Responsibility
              </h2>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13.5, lineHeight: 1.7, marginBottom: 20 }}>
                From airport transfers to cross-country road trips — Divyakshi Cabs provides safe, comfortable, and affordable travel across India.
              </p>

              {/* Quick contact chips */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, padding: "11px 16px", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(245,158,11,0.3)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"}
                >
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: "#FCD34D" }}>call</span>
                  <div>
                    <div style={{ color: "#FCD34D", fontWeight: 800, fontSize: 13, lineHeight: 1 }}>82009 09915</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Call us anytime</div>
                  </div>
                </a>
                <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(37,211,102,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(37,211,102,0.35)", borderRadius: 12, padding: "11px 16px", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.35)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.2)"}
                >
                  <WhatsAppIcon size={20} color="#25D366" />
                  <div>
                    <div style={{ color: "#25D366", fontWeight: 800, fontSize: 13, lineHeight: 1 }}>WhatsApp</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Quick replies guaranteed</div>
                  </div>
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: "11px 16px" }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: "#FCD34D" }}>location_on</span>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 12, lineHeight: 1.3 }}>414, Sakar Complex, Opp. Bansal Mall</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 11 }}>Tarsali, Vadodara</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Inquiry Form */}
          <div style={{ background: "#fff", padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: 26 }}>
              <div className="section-badge" style={{ marginBottom: 10 }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>edit_note</span>
                SEND INQUIRY
              </div>
              <h2 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 900, color: "#0F172A", marginBottom: 6 }}>
                Help Us With Your Requirements
              </h2>
              <p style={{ color: "#64748B", fontSize: 13.5 }}>
                Send us a message and we'll get back to you shortly.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <CheckCircle2 size={56} color="#22c55e" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", marginBottom: 8 }}>Inquiry Sent!</h3>
                <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.6 }}>
                  Thank you! Your <strong>{formType}</strong> inquiry has been forwarded via WhatsApp. We'll contact you at <strong>{form.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: 20, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#fff", padding: "11px 28px", borderRadius: 10, border: "none", fontWeight: 800, cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={e => {
                e.preventDefault();
                const text = `Hi Divyakshi Travels, I have a ${formType} inquiry:\n\n👤 Name: ${form.name}\n✉ Email: ${form.email}\n📞 Phone: ${form.phone}\n📝 Requirements: ${form.message || "No specific details provided."}`;
                window.open(`https://wa.me/918200909915?text=${encodeURIComponent(text)}`, "_blank");
                setSubmitted(true);
              }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-grid-mobile">
                  <div>
                    <label style={labelStyle}>👤 Full Name</label>
                    <input type="text" placeholder="Your full name" required style={inputStyle} value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={e => e.currentTarget.style.borderColor = "#F59E0B"}
                      onBlur={e => e.currentTarget.style.borderColor = "#E2E8F0"} />
                  </div>
                  <div>
                    <label style={labelStyle}>📲 Phone Number</label>
                    <input type="tel" placeholder="Mobile number" required style={inputStyle} value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={e => e.currentTarget.style.borderColor = "#F59E0B"}
                      onBlur={e => e.currentTarget.style.borderColor = "#E2E8F0"} />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>✉ Email Address</label>
                  <input type="email" placeholder="Your email address" style={inputStyle} value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={e => e.currentTarget.style.borderColor = "#F59E0B"}
                    onBlur={e => e.currentTarget.style.borderColor = "#E2E8F0"} />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>💼 Inquiry Type</label>
                  <select value={formType} onChange={e => setFormType(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={e => e.currentTarget.style.borderColor = "#F59E0B"}
                    onBlur={e => e.currentTarget.style.borderColor = "#E2E8F0"}>
                    <option>💼 Corporate Rental</option>
                    <option>🚗 Regular Booking</option>
                    <option>✈ Airport Transfer</option>
                    <option>🚌 Bus / Tempo Traveller</option>
                    <option>🌍 Tour Package</option>
                    <option>🛂 Visa / Passport</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>📝 Additional Details</label>
                  <textarea
                    placeholder="Tell us about your travel needs, dates, destinations..."
                    style={{ ...inputStyle, height: 100, resize: "none" }}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => e.currentTarget.style.borderColor = "#F59E0B"}
                    onBlur={e => e.currentTarget.style.borderColor = "#E2E8F0"}
                  />
                </div>

                <button type="submit" style={{
                  width: "100%", padding: "14px", borderRadius: 12, border: "none",
                  background: "linear-gradient(135deg, #D97706, #F59E0B, #FCD34D)",
                  color: "#1a1a2e", fontWeight: 800, fontSize: 15,
                  cursor: "pointer", fontFamily: "'Poppins', sans-serif",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: "0 6px 20px rgba(245,158,11,0.4)", transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(245,158,11,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(245,158,11,0.4)"; }}>
                  <WhatsAppIcon size={18} />
                  Send Inquiry via WhatsApp
                </button>
                <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 12, marginTop: 12 }}>
                  🔒 Your information is 100% secure and confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section style={{ padding: "0 20px 72px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.10)", border: "1px solid #E2E8F0" }}>
          <div style={{ background: "#fff", padding: "16px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, borderBottom: "1px solid #E2E8F0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, background: "#FFFBEB", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22, color: "#D97706" }}>location_on</span>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#0F172A" }}>Our Office Location</div>
                <div style={{ color: "#64748B", fontSize: 12 }}>414, Sakar Complex, Opp. Bansal Mall, Tarsali, Vadodara</div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=414,+Sakar+Complex,+Opp.+Bansal+Mall,+Tarsali,+Vadodara,+Gujarat+390009"
              target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#fff", padding: "9px 18px", borderRadius: 9, fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 4px 12px rgba(245,158,11,0.3)" }}
            >
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16 }}>near_me</span>
              Get Directions
            </a>
          </div>
          <iframe
            title="Divyakshi Cabs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.063!2d73.1889!3d22.2690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f0b4d3f1b5%3A0x0!2zMjLCsDE2JzA4LjQiTiA3M8KwMTEnMjAuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin&q=414+Sakar+Complex+Opp+Bansal+Mall+Tarsali+Vadodara+Gujarat+390009"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{
        background: "linear-gradient(135deg, rgba(217,119,6,0.92) 0%, rgba(245,158,11,0.85) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&fit=crop&auto=format') center/cover",
        padding: "52px 20px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.1)" }} />
        <div style={{ position: "relative" }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 44, color: "rgba(26,26,46,0.3)", display: "block", marginBottom: 10 }}>handshake</span>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: "#1a1a2e", marginBottom: 8 }}>Ready to Book? Let's Connect!</h2>
          <p style={{ color: "rgba(26,26,46,0.65)", marginBottom: 24, fontSize: 14 }}>Call or WhatsApp — we'll get you the best deal instantly</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 8, background: "#1a1a2e", color: "#F59E0B", padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span>
              82009 09915
            </a>
            <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "13px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-split-grid { grid-template-columns: 1fr !important; }
          .form-grid-mobile { grid-template-columns: 1fr !important; }
          .contact-split-grid > div:first-child { min-height: 320px !important; }
        }
        @media (max-width: 480px) {
          .contact-split-grid > div:last-child { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  );
}
