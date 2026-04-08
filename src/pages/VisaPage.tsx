import { useState } from "react";
import { FileText, Briefcase, GraduationCap, Globe, Building, BookOpen, Clock, Check, Phone, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const visaServices = [
  {
    Icon: BookOpen, color: "#3b82f6", bg: "#eff6ff", emoji: "📘",
    title: "Passport Services",
    desc: "New passport applications, renewal, Tatkal passports & lost passport replacement — complete guidance.",
    time: "7–15 working days",
    docs: ["Birth certificate / Aadhaar card", "Address proof (utility bill)", "Photographs (2×2 inch, white background)", "Existing passport for renewals"],
  },
  {
    Icon: Globe, color: "#8b5cf6", bg: "#f5f3ff", emoji: "🛂",
    title: "Tourist Visa",
    desc: "Tourist visa assistance for USA, UK, Canada, Schengen, Australia, Dubai, Thailand, Singapore & more.",
    time: "5–21 working days",
    docs: ["Valid passport (min. 6 months validity)", "Bank statements (3 months)", "ITR / Salary slips", "Passport-size photographs"],
  },
  {
    Icon: Briefcase, color: "#f59e0b", bg: "#fffbeb", emoji: "💼",
    title: "Work Permit",
    desc: "Work permit processing for Canada, Australia, UK, Germany, Gulf countries & other destinations.",
    time: "30–90 working days",
    docs: ["Educational certificates", "Work experience letters", "Skills assessment documents", "IELTS/PTE/OET score cards"],
  },
  {
    Icon: GraduationCap, color: "#10b981", bg: "#ecfdf5", emoji: "🎓",
    title: "Student Visa",
    desc: "Student visa for UK, USA, Canada, Australia, New Zealand, Germany & top European destinations.",
    time: "15–45 working days",
    docs: ["University acceptance letter", "Financial proof (bank balance)", "English proficiency test scores", "Medical examination report"],
  },
  {
    Icon: FileText, color: "#ef4444", bg: "#fef2f2", emoji: "🌍",
    title: "Immigration / PR",
    desc: "Permanent residency services for Canada (Express Entry), Australia, & other immigration pathways.",
    time: "6–24 months",
    docs: ["Educational credential assessment", "IELTS/PTE / CELPIP scores", "Work experience proof", "Police clearance certificate"],
  },
  {
    Icon: Building, color: "#06b6d4", bg: "#ecfeff", emoji: "🏢",
    title: "Business Visa",
    desc: "Business visa for trade visits, conferences & corporate travel to international destinations.",
    time: "5–15 working days",
    docs: ["Company invitation letter", "Business registration proof", "Bank statements (3 months)", "Travel itinerary"],
  },
];

const countries = [
  { name: "USA", flag: "🇺🇸", type: "Tourist / B1/B2", time: "15–21 days", color: "#3b82f6" },
  { name: "UK", flag: "🇬🇧", type: "Tourist / Work / Student", time: "15–20 days", color: "#8b5cf6" },
  { name: "Canada", flag: "🇨🇦", type: "Tourist / Work / PR", time: "20–45 days", color: "#ef4444" },
  { name: "Australia", flag: "🇦🇺", type: "Tourist / Work / Student", time: "15–30 days", color: "#f59e0b" },
  { name: "Schengen", flag: "🇪🇺", type: "Tourist / Business", time: "10–15 days", color: "#3b82f6" },
  { name: "Dubai / UAE", flag: "🇦🇪", type: "Tourist / Work", time: "3–7 days", color: "#10b981" },
  { name: "Thailand", flag: "🇹🇭", type: "Tourist", time: "3–5 days", color: "#f59e0b" },
  { name: "Singapore", flag: "🇸🇬", type: "Tourist / Business", time: "5–7 days", color: "#06b6d4" },
];

export default function VisaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", country: "" });

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SEO 
        title="Visa & Passport Services Vadodara | Divyakshi Cabs - Tourist, Work, Student Visa" 
        description="Divyakshi Cabs Vadodara offers expert visa & passport assistance: tourist visa, work permit, student visa, PR & business visa for USA, UK, Canada, Dubai & more. Call 82009 09915." 
      />
      {/* Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, rgba(15,12,41,0.92) 0%, rgba(15,23,42,0.85) 50%, rgba(15,52,96,0.92) 100%), url('https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=1600&fit=crop&auto=format') center/cover", 
        padding: "40px 1.25rem", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(212,160,23,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ height: 2, width: 30, background: "linear-gradient(to right, transparent, #F59E0B)" }} />
            <span style={{ color: "#FCD34D", fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Visa & Immigration</span>
            <div style={{ height: 2, width: 30, background: "linear-gradient(to left, transparent, #F59E0B)" }} />
          </div>
          <div style={{ marginBottom: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, letterSpacing: "clamp(2px,0.4vw,5px)",
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)", color: "#F5C842", padding: "4px 14px", borderRadius: 30, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
            Passport • Tourist Visa • Work Permit • Student Visa
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 900, marginBottom: 8, marginTop: 4, textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
            Visa, Passport & Immigration Services — Vadodara
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", maxWidth: 480, margin: "0 auto", fontSize: 13.5, lineHeight: 1.5, fontWeight: 600, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
            Expert guidance for all your international travel documents — passport to PR
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "72px 1.25rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900, color: "#1e293b", marginBottom: 12 }}>Our Visa & Immigration Services</h2>
            <p style={{ color: "#64748b", fontSize: 15 }}>Complete assistance from document preparation to approval</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
            {visaServices.map(s => {
              const { Icon } = s;
              return (
                <div key={s.title} className="hover-card" style={{
                  background: "#fff", borderRadius: 20, overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "2px solid transparent",
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
                  <div style={{ height: 5, background: s.color }} />
                  <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                      <div style={{ width: 52, height: 52, background: s.bg, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={24} color={s.color} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 800, fontSize: 17, color: "#1e293b", lineHeight: 1 }}>{s.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, color: s.color, fontSize: 11, fontWeight: 700, marginTop: 6 }}>
                          <Clock size={10} /> {s.time}
                        </div>
                      </div>
                    </div>
                    <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 14 }}>
                      <div style={{ fontWeight: 700, fontSize: 11, color: "#94a3b8", letterSpacing: 0.5, marginBottom: 8 }}>DOCUMENTS NEEDED</div>
                      {s.docs.map(d => (
                        <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12.5, color: "#475569", marginBottom: 6 }}>
                          <Check size={13} color={s.color} strokeWidth={3} style={{ marginTop: 2, flexShrink: 0 }} /> {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section style={{ padding: "72px 1.25rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(212,160,23,0.1)", color: "#b45309", border: "1px solid rgba(212,160,23,0.25)", padding: "5px 16px", borderRadius: 30, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 14 }}>
              🌍 POPULAR DESTINATIONS
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 900, color: "#1e293b" }}>Countries We Process Visas For</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {countries.map(c => (
              <div key={c.name} className="hover-card" style={{
                background: "#f8fafc", borderRadius: 16, padding: "20px 18px",
                border: `2px solid transparent`, boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.background = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = "#f8fafc"; }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{c.flag}</div>
                <div style={{ fontWeight: 800, color: "#1e293b", fontSize: 16, marginBottom: 4 }}>{c.name}</div>
                <div style={{ color: "#64748b", fontSize: 11.5, marginBottom: 8 }}>{c.type}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: `${c.color}15`, color: c.color, borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>
                  <Clock size={10} /> {c.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "72px 1.25rem", background: "linear-gradient(135deg, #f8fafc, #f0f7ff)" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🎯</div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 900, color: "#1e293b", marginBottom: 8 }}>Get Free Visa Consultation</h2>
            <p style={{ color: "#64748b", fontSize: 14 }}>Fill in your details — our expert will call within 2 hours</p>
          </div>

          {submitted ? (
            <div style={{ background: "#f0fdf4", border: "2px solid #22c55e", borderRadius: 20, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
              <h3 style={{ color: "#166534", fontWeight: 900, fontSize: 20, marginBottom: 8 }}>Enquiry Received!</h3>
              <p style={{ color: "#475569", fontSize: 14 }}>Our visa expert will contact <strong>{form.name}</strong> at <strong>{form.phone}</strong> within 2 hours.</p>
              <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e", padding: "10px 24px", borderRadius: 10, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>
                Submit Another
              </button>
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 8px 40px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
              <form onSubmit={e => { 
                e.preventDefault(); 
                const msg = encodeURIComponent(`Hi! My name is ${form.name}. I'm looking for ${form.service} assistance for ${form.country}. My contact number is ${form.phone}. Please guide me.`);
                window.open(`https://wa.me/918200909915?text=${msg}`, '_blank');
                setSubmitted(true); 
              }}>
                {[
                  { label: "👤 Full Name", key: "name", type: "text", placeholder: "Enter your full name" },
                  { label: "📲 Phone Number", key: "phone", type: "tel", placeholder: "Your mobile number" },
                ].map(f => (
                  <div key={f.key} style={{ marginBottom: 18 }}>
                    <label style={labelStyle}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} style={inputStyle} required />
                  </div>
                ))}
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>📋 Service Required</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={inputStyle} required>
                    <option value="">Select service type</option>
                    <option>Passport (New / Renewal / Tatkal)</option>
                    <option>Tourist Visa</option>
                    <option>Work Permit</option>
                    <option>Student Visa</option>
                    <option>Immigration / PR</option>
                    <option>Business Visa</option>
                  </select>
                </div>
                <div style={{ marginBottom: 26 }}>
                  <label style={labelStyle}>🌍 Destination Country</label>
                  <input type="text" placeholder="e.g. USA, UK, Canada, Australia..." value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} style={inputStyle} required />
                </div>
                <button type="submit" style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e", fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "'Poppins', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Phone size={16} /> Get Free Consultation
                </button>
                <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 12, marginTop: 12 }}>🔒 Your information is 100% secure and confidential</p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,52,96,0.88) 100%), url('https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=1600&fit=crop&auto=format') center/cover", 
        padding: "52px 1.25rem", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(212,160,23,0.05)" }} />
        <div style={{ position: "relative" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, marginBottom: 8 }}>Prefer to Talk Directly?</h2>
          <p style={{ color: "#94a3b8", marginBottom: 24, fontSize: 14 }}>Call or WhatsApp — our visa expert is available Mon–Sat, 9 AM–8 PM</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #D4A017, #F5C842)", color: "#1a1a2e", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <Phone size={15} /> 82009 09915
            </a>
            <a href="https://wa.me/918200909915?text=Hi, I need visa assistance" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 6 };
const inputStyle: React.CSSProperties = { width: "100%", padding: "11px 14px", border: "2px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", background: "#f8fafc", color: "#1e293b", fontFamily: "'Poppins', sans-serif", transition: "border-color 0.2s" };
