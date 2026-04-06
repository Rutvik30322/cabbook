import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

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
    navigate(`/?from=Vadodara&to=${city}&type=oneway`);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      
      {/* 1. Header Hero */}
      <section style={{ 
        background: "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&fit=crop&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, #FCD34D, #F59E0B)" }} />
        <div style={{ textTransform: "uppercase", letterSpacing: 4, fontSize: 13, fontWeight: 800, color: "#F59E0B", marginBottom: 12 }}>
          THIS IS DIVYAKSHI TOURS & TRAVELS
        </div>
        <h1 style={{ fontSize: "clamp(26px, 6vw, 48px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
          Book One-Way Cabs for<br />
          <span style={{ color: "#FCD34D" }}>One-Way Travels</span>
        </h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 14, fontWeight: 600 }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <span className="material-symbols-rounded" style={{ fontSize: 18 }}>home</span> Home
          </Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: "#FCD34D" }}>One-Way Cabs</span>
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
                Cab in {city}
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
