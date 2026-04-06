import { Smartphone, Download, Apple, Globe, ShieldCheck, Zap, History, Headphones } from "lucide-react";
import SEO from "@/components/SEO";

export default function DownloadAppPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#0F172A", minHeight: "100vh", color: "#F8FAFC" }}>
      <SEO
        title="Download Divyakshi Cabs App | Vadodara Taxi Booking App - Coming 2026"
        description="Download the Divyakshi Cabs app for one-tap taxi booking from Vadodara. Real-time tracking, trip history & 24/7 support. Available for Android & iOS. Coming 2026!"
      />
      {/* Hero Section */}
      <section style={{ 
        position: "relative",
        padding: "100px 20px",
        textAlign: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,0.85) 100%)"
      }}>
        {/* Animated Glow */}
        <div style={{ 
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600, background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
          zIndex: 0
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <img src="/new-logo.png" alt="Divyakshi Travels" style={{ height: 120, marginBottom: 32, filter: "drop-shadow(0 0 20px rgba(245,158,11,0.3))" }} />
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.1)", color: "#FCD34D", padding: "6px 16px", borderRadius: 30, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, marginBottom: 20 }}>
            <Zap size={14} /> NEW APP COMING SOON
          </div>
          
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, marginBottom: 24, lineHeight: 1.1 }}>
            Divyakshi Travels <br/>
            <span style={{ background: "linear-gradient(to right, #FCD34D, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Now in Your Pocket
            </span>
          </h1>
          
          <p style={{ fontSize: 18, color: "#94A3B8", marginBottom: 40, lineHeight: 1.6 }}>
            Experience the future of travel booking. Direct one-tap bookings, real-time tracking, and exclusive app-only deals — all coming soon to your smartphone.
          </p>

          {/* Platform Badges */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <div style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 28px", borderRadius: 16,
              display: "flex", alignItems: "center", gap: 12, opacity: 0.7
            }}>
              <Download size={24} color="#FCD34D" />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, fontWeight: 500 }}>GET IT ON</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>Google Play</div>
              </div>
            </div>
            
            <div style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 28px", borderRadius: 16,
              display: "flex", alignItems: "center", gap: 12, opacity: 0.7
            }}>
              <Apple size={24} color="#FCD34D" />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, fontWeight: 500 }}>COMING TO</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>App Store</div>
              </div>
            </div>
          </div>
          
          <div style={{ color: "#FCD34D", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
            <Globe size={16} /> 2026 Release Schedule
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "80px 20px", background: "#0F172A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Smart Features for Smart Travel</h2>
            <div style={{ width: 60, height: 4, background: "#F59E0B", margin: "0 auto", borderRadius: 2 }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {[
              { icon: Zap, title: "One-Tap Booking", desc: "No more long forms. Confirm your favorite routes and cars in seconds with our optimized flow." },
              { icon: Smartphone, title: "Live Tracking", desc: "Watch your cab arrive in real-time. Share your trip status with family for 100% peace of mind." },
              { icon: History, title: "Easy Trip History", desc: "Access all your previous bookings, invoices, and regular routes in one secure digital dashboard." },
              { icon: ShieldCheck, title: "Secure Payments", desc: "Fast and safe transactions with multiple payment options — all within the secure app environment." },
              { icon: Headphones, title: "Priority Support", desc: "24/7 dedicated support team available just a tap away inside the application." },
              { icon: Globe, title: "All Services in One", desc: "Book taxis, buses, hotels, and track your visa applications across the entire Divyakshi platform." }
            ].map((f, i) => (
              <div key={i} style={{ 
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", 
                padding: 32, borderRadius: 24, transition: "transform 0.3s"
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <div style={{ 
                  width: 56, height: 56, background: "rgba(245,158,11,0.1)", borderRadius: 16,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20
                }}>
                  <f.icon size={28} color="#F59E0B" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: "#94A3B8", lineHeight: 1.6, fontSize: 14 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Tuned */}
      <section style={{ 
        padding: "80px 20px", 
        background: "linear-gradient(to bottom, #0F172A, #0a0a0a)",
        textAlign: "center"
      }}>
        <div style={{ 
          maxWidth: 700, margin: "0 auto", padding: "60px 40px", 
          background: "linear-gradient(135deg, rgba(245,158,11,0.05), rgba(0,0,0,0))",
          borderRadius: 32, border: "1px solid rgba(245,158,11,0.1)"
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Ready to Travel Smarter?</h2>
          <p style={{ color: "#94A3B8", marginBottom: 32 }}>We're working hard to perfect the app. Stay tuned on our website for the official launch announcement!</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
             <div style={{ color: "#FCD34D", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                <ShieldCheck size={16} /> Verified Security
             </div>
             <div style={{ color: "#FCD34D", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                <Zap size={16} /> Swift Performance
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
