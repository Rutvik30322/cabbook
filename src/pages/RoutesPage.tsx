import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const popularRoutes = [
  "Ahmedabad", "Surat", "Mumbai", "Rajkot", "Bhavnagar", "Junagadh", 
  "Jamnagar", "Gandhinagar", "Anand", "Nadiad", "Mount Abu", "Udaipur",
  "Somnath", "Dwarka", "Shirdi", "Pune", "Nasik", "Statue of Unity",
  "Saputara", "Daman", "Diu", "Amreli", "Mehsana", "Palanpur",
  "Bhuj", "Gandhidham", "Morbi", "Surendranagar", "Botad", "Veraval",
  "Porbandar", "Dhoraji", "Gondal", "Jetpur", "Ankleshwar", "Bharuch",
  "Vapi", "Valsad", "Navsari", "Billimora"
];

export default function RoutesPage() {
  const [, navigate] = useLocation();

  const handleRouteClick = (city: string) => {
    // Defaulting 'From' to Vadodara as it's the business base
    navigate(`/?from=&to=${city}&type=oneway`);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <SEO 
        title="Popular Cab Routes from Vadodara | Divyakshi Cabs - Ahmedabad, Mumbai, Surat" 
        description="Divyakshi Cabs offers popular one-way cab routes from Vadodara to Ahmedabad, Mumbai, Surat, Rajkot, Somnath, Dwarka & 30+ cities. Affordable fares. Book now!" 
      />
      
      {/* 1. Header Hero */}
      <section style={{ 
        background: "linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&fit=crop&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, #FCD34D, #F59E0B)" }} />
        {/* DIVYAKSHI CABS brand name */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <div style={{ height: 2, width: 30, background: "linear-gradient(to right, transparent, #F59E0B)" }} />
          <span style={{ color: "#FCD34D", fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Vadodara's #1 Cab Service</span>
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
        <h1 style={{ fontSize: "clamp(20px, 3.5vw, 32px)", fontWeight: 900, marginBottom: 12, lineHeight: 1.2, color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
          Book Popular Routes from <span style={{ color: "#FCD34D" }}>Vadodara</span>
        </h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 14, fontWeight: 600 }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <span className="material-symbols-rounded" style={{ fontSize: 18 }}>home</span> Home
          </Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: "#FCD34D" }}>Popular Routes</span>
        </div>
      </section>

      {/* 2. Routes Grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "16px" 
        }}>
          {popularRoutes.sort().map(city => (
            <button 
              key={city}
              onClick={() => handleRouteClick(city)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 24px",
                background: "linear-gradient(to right, #FCD34D, #F59E0B)",
                border: "none",
                borderRadius: "50px 12px 12px 50px", // Rounded left like screenshot
                color: "#1e293b",
                fontWeight: 700,
                fontSize: 15,
                textAlign: "left",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(245, 158, 11, 0.2)",
                transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(245, 158, 11, 0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(245, 158, 11, 0.2)";
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                Cab to {city}
              </span>
              <ArrowRight size={18} strokeWidth={3} />
            </button>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          section { padding: 40px 15px !important; }
          button { padding: 12px 20px !important; font-size: 14px !important; }
        }
      `}</style>
    </div>
  );
}
