import { Link } from "wouter";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SEO from "@/components/SEO";
import taxiImage from "../assets/premium_taxi_fleet.png";
import busImage from "../assets/luxury_bus.png";
import hotelImage from "../assets/Luxury Rambagh Palace Jaipur India _ Royal Palace Hotel for Foreign Tourists.jpg";
import tourImage from "../assets/Neon7 Tour & Travel Agency – Best Travel Packages in Indore, MP.jpg";
import visaImage from "../assets/download.jpg";
import hatchbackImg from "../assets/Wagon R.png";
import sedanImg from "../assets/Toyota Etios.png";
import suvImg from "../assets/Innova Crysta.png";
import tempoImg from "../assets/Tempo Traveler.png";
import ertigaImg from "../assets/Eritga.png";
import toyotaInnovaImg from "../assets/Toyota Innova.png";
import ahmedabadImg from "../assets/_Ahmedabad_ A Reflection of Heritage and Harmony_.jpg";
import suratImg from "../assets/Ahmedabad.jpg";
import souImg from "../assets/Statue of Unity.jpg";
import mumbaiImg from "../assets/Mumbai _333.jpg";
import dwarkaImg from "../assets/The Magnificent Dwarkadhish Temple.jpg";
import somnathImg from "../assets/16 Best Places to Visit in Dwarka, Things to Do & Sightseeing.jpg";
import chardhamImg from "../assets/chardham.png";
import himachalImg from "../assets/Himachal.png";

const services = [
  { icon: "directions_car", label: "Local Taxi", desc: "City rides, airport drops & comfortable outstation cabs", color: "#2563EB", bg: "#EFF6FF", href: "/services", img: taxiImage },
  { icon: "airport_shuttle", label: "Tempo Traveller", desc: "Group travel for 9–16 passengers — pilgrimages & events", color: "#7C3AED", bg: "#F5F3FF", href: "/services", img: "/tempo_traveller_card.png" },
  { icon: "directions_bus", label: "Luxury Bus", desc: "Premium AC buses for weddings, corporate & tours", color: "#D97706", bg: "#FFFBEB", href: "/services", img: busImage },
  { icon: "hotel", label: "Hotel Booking", desc: "Best deals across India — budget to luxury, no hidden costs", color: "#059669", bg: "#ECFDF5", href: "/services", img: hotelImage },
  { icon: "travel_explore", label: "Tour Packages", desc: "Curated holidays — domestic & international all-inclusive", color: "#DC2626", bg: "#FEF2F2", href: "/packages", img: tourImage },
  { icon: "article", label: "Visa & Passport", desc: "Full visa, passport & immigration assistance", color: "#0891B2", bg: "#ECFEFF", href: "/services", img: visaImage },
];

const popularRoutes = [
  { from: "Vadodara", to: "Ahmedabad", km: "115 km", price: "₹1,800", time: "1.5 hrs", img: ahmedabadImg, pos: "center" },
  { from: "Vadodara", to: "Surat", km: "155 km", price: "₹2,400", time: "2.5 hrs", img: suratImg, pos: "center" },
  { from: "Vadodara", to: "Statue of Unity", km: "90 km", price: "₹1,600", time: "1.5 hrs", img: souImg, pos: "top" },
  { from: "Vadodara", to: "Mumbai", km: "425 km", price: "₹6,500", time: "6 hrs", img: mumbaiImg, pos: "center" },
  { from: "Vadodara", to: "Dwarka", km: "440 km", price: "₹7,200", time: "7 hrs", img: dwarkaImg, pos: "top" },
  { from: "Vadodara", to: "Somnath", km: "480 km", price: "₹7,500", time: "8 hrs", img: somnathImg, pos: "top" },
];

const cars = [
  {
    name: "Hatchback", models: "Swift / WagonR / i10", seats: 4, rate: "₹10/km",
    color: "#2563EB", badge: "Economy",
    img: hatchbackImg,
  },
  {
    name: "Sedan", models: "Dzire / Etios / Amaze", seats: 4, rate: "₹12/km",
    color: "#7C3AED", badge: "Popular",
    img: sedanImg,
  },
  {
    name: "SUV (Ertiga)", models: "Ertiga / Scorpio / Bolero", seats: 7, rate: "₹13/km",
    color: "#059669", badge: "Extra Value",
    img: ertigaImg,
  },
  {
    name: "Premium SUV", models: "Toyota Innova / Advanced", seats: 7, rate: "₹15/km",
    color: "#0891B2", badge: "Executive",
    img: toyotaInnovaImg,
  },
  {
    name: "Innova Crysta", models: "Luxury / Group / Premium", seats: 7, rate: "₹19/km",
    color: "#D97706", badge: "Premium",
    img: suvImg,
  },
  {
    name: "Tempo Traveller", models: "12 / 14 / 16 Seater", seats: 16, rate: "₹22/km",
    color: "#DC2626", badge: "Groups 10+",
    img: tempoImg,
  },
];

const destinations = [
  { name: "Statue of Unity", tag: "Day Trip", img: souImg },
  { name: "Goa", tag: "Beach Holiday", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=280&fit=crop&auto=format" },
  { name: "Rajasthan", tag: "Heritage Tour", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=280&fit=crop&auto=format" },
  { name: "Kerala", tag: "Nature & Backwaters", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=280&fit=crop&auto=format" },
  { name: "Himachal", tag: "Hill Station", img: himachalImg },
  { name: "Somnath", tag: "Pilgrimage", img: somnathImg },
  { name: "Dwarka", tag: "Pilgrimage", img: dwarkaImg },
  { name: "Chardham", tag: "Pilgrimage", img: chardhamImg },
  { name: "Ladakh", tag: "Adventure", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=280&fit=crop&auto=format" },
  { name: "Nepal", tag: "International", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=280&fit=crop&auto=format" },
];

const whyUs = [
  { icon: "verified_user", label: "100% Safe", desc: "Verified drivers, police-cleared & insured vehicles", color: "#2563EB", bg: "#EFF6FF" },
  { icon: "schedule", label: "Always On Time", desc: "Punctual pickups — never late, always there for you", color: "#7C3AED", bg: "#F5F3FF" },
  { icon: "workspace_premium", label: "10+ Years", desc: "A decade of experience & 5000+ happy customers", color: "#D97706", bg: "#FFFBEB" },
  { icon: "support_agent", label: "24/7 Support", desc: "We're always just a call or WhatsApp away", color: "#059669", bg: "#ECFDF5" },
  { icon: "currency_rupee", label: "Best Prices", desc: "No hidden charges, transparent pricing always", color: "#DC2626", bg: "#FEF2F2" },
  { icon: "star", label: "5-Star Rated", desc: "Loved by thousands — see what our customers say", color: "#0891B2", bg: "#ECFEFF" },
];

const testimonials = [
  { name: "Rajesh Patel", city: "Vadodara", text: "Excellent service! Booked a cab for Statue of Unity — driver was professional and the car was neat and clean. Highly recommended!", stars: 5 },
  { name: "Priya Shah", city: "Surat", text: "Used their Goa holiday package. Everything was perfectly arranged — hotels, transport, sightseeing. Super smooth experience!", stars: 5 },
  { name: "Amit Mehta", city: "Ahmedabad", text: "Got our Canada student visa done on time. Very knowledgeable team and stress-free process. Thank you Divyakshi!", stars: 5 },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SEO 
        title="Best Taxi & Tour Service in Vadodara" 
        description="Book affordable taxi, luxury tours, visa assistance & hotels in Vadodara. Divyakshi Tours & Travels is your #1 trusted travel partner for one-way cabs and group tours." 
      />

      <style>{`
        .hero-section {
          padding: 14px 40px 16px;
          min-height: 88vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-attachment: scroll;
        }
        .hero-title-container {
          margin-bottom: 2px;
        }
        .hero-badge {
          margin-bottom: 6px;
          padding: 4px 14px;
        }
        .hero-tagline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .hero-tagline span {
          font-size: clamp(9px, 1.4vw, 13px);
          letter-spacing: 3px;
          white-space: nowrap;
        }
        .hero-brand-name {
          font-size: clamp(30px, 7vw, 78px);
          letter-spacing: clamp(1px, 0.5vw, 6px);
        }
        .hero-subtitle {
          font-size: clamp(13px, 2.2vw, 22px);
          margin-top: 4px;
          margin-bottom: 0;
          line-height: 1.4;
        }
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 75vh;
            padding: 14px 20px 16px;
          }
        }
        @media (max-width: 480px) {
          .hero-section {
            padding: 10px 10px 4px;
            min-height: auto;
          }
          .hero-tagline span {
            font-size: 9px;
            letter-spacing: 2px;
          }
          .hero-tagline > div {
            width: 20px !important;
          }
          .hero-brand-name {
            font-size: clamp(26px, 9vw, 44px);
            letter-spacing: 2px;
          }
          .hero-badge {
            margin-bottom: 4px;
            font-size: 10px !important;
            padding: 3px 10px;
          }
          .hero-subtitle {
            font-size: 12px;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-section" style={{
        background: "linear-gradient(to bottom, rgba(5,5,15,0.22) 0%, rgba(5,5,15,0.08) 45%, rgba(5,5,15,0.25) 100%), url('/hero_banner.png') center center / cover no-repeat",
        position: "relative", overflow: "visible"
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 15% 50%, rgba(245,158,11,0.12) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(37,99,235,0.08) 0%, transparent 40%)" }} />
        <div style={{ position: "absolute", top: 40, right: "8%", width: 140, height: 140, border: "2px solid rgba(245,158,11,0.15)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: 20, left: "4%", width: 90, height: 90, border: "2px solid rgba(245,158,11,0.1)", borderRadius: "50%" }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
          <div className="hero-title-container" style={{ textAlign: "center" }}>
            {/* Service Name — like divyakshicabs.in */}
            <div className="hero-tagline">
              <div style={{ height: 2, width: 40, background: "linear-gradient(to right, transparent, #F59E0B)" }} />
              <span style={{
                color: "#FCD34D", fontWeight: 700,
                textTransform: "uppercase", fontFamily: "'Poppins', sans-serif",
                textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,1)",
              }}>Vadodara's #1 Cab Service</span>
              <div style={{ height: 2, width: 40, background: "linear-gradient(to left, transparent, #F59E0B)" }} />
            </div>

            {/* Big Service Brand Name */}
            <div style={{ marginBottom: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="hero-brand-name" style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
                lineHeight: 1.1,
                fontFamily: "'Poppins', sans-serif",
                filter: "drop-shadow(0 2px 16px rgba(0,0,0,0.95)) drop-shadow(0 6px 24px rgba(245,158,11,0.5))",
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

            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(10,10,20,0.60)", border: "1px solid rgba(245,158,11,0.55)", color: "#FCD34D", borderRadius: 30, fontSize: 12, fontWeight: 700, letterSpacing: 1, backdropFilter: "blur(6px)", textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>verified</span>
              Taxi &nbsp;•&nbsp; Tours &nbsp;•&nbsp; Visa &nbsp;•&nbsp; Hotels
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>verified</span>
            </div>

            <h1 className="hero-subtitle" style={{ color: "#F1F5F9", fontWeight: 600, lineHeight: 1.4, marginBottom: 0, textShadow: "0 2px 12px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,1)" }}>
              Book Your Perfect Ride from{" "}
              <span style={{ color: "#FBBF24", fontWeight: 800, textShadow: "0 2px 12px rgba(0,0,0,0.95)" }}>Vadodara</span>
              {" "}|{" "}
              <span style={{ color: "#86EFAC", fontWeight: 700, textShadow: "0 2px 12px rgba(0,0,0,0.95)" }}>All India Service</span>
              {" "}— Fast, Safe & Affordable
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "linear-gradient(to right, #D97706 0%, #F59E0B 40%, #FCD34D 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }} className="stats-row">
            {[
              { num: "5000+", label: "Happy Customers", icon: "sentiment_very_satisfied" },
              { num: "10+", label: "Years Experience", icon: "emoji_events" },
              { num: "50+", label: "Tour Packages", icon: "luggage" },
              { num: "24/7", label: "Support Available", icon: "support_agent" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "10px 0" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 26, color: "#0F172A", marginBottom: 6, display: "block" }}>{s.icon}</span>
                <div style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 900, color: "#0F172A", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0F172A", letterSpacing: 0.5, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>auto_awesome</span>
              OUR SERVICES
            </div>
            <h1 className="section-title">Best Travel Services in Vadodara</h1>
            <p className="section-desc">From Vadodara and across India — we handle every detail so you can relax</p>
          </div>
          <style>{`
            .services-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            .service-card-img {
              height: 240px;
            }
            @media (max-width: 1024px) {
              .services-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
              }
              .service-card-img {
                height: 200px;
              }
            }
            @media (max-width: 640px) {
              .services-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div className="services-grid">
            {services.map(s => (
              <Link key={s.label} href={s.href} className="card-hover" style={{
                display: "block", background: "#fff", borderRadius: 24, overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #F1F5F9",
                textDecoration: "none", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.color;
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${s.color}15`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#F1F5F9";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
                }}>
                {/* Image */}
                <div className="service-card-img" style={{ overflow: "hidden", position: "relative" }}>
                  <img src={s.img} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent 60%)` }} />
                  <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, zIndex: 2 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.95)", padding: "4px 12px", borderRadius: 20, color: s.color, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5, backdropFilter: "blur(4px)" }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>{s.icon}</span>
                      {s.label.split(' ')[0]}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <h3 style={{ fontWeight: 800, fontSize: 20, color: "#0F172A", marginBottom: 10 }}>{s.label}</h3>
                  <p style={{ color: "#64748B", fontSize: 14, lineHeight: 1.7, marginBottom: 20, height: "3.4em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: s.color, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                      Explore Service
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>arrow_forward</span>
                    </span>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: s.color }}>{s.icon}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAR FLEET */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>directions_car</span>
              OUR FLEET
            </div>
            <h2 className="section-title">Choose Your Perfect Ride</h2>
            <p className="section-desc">Well-maintained, sanitized vehicles with experienced drivers for every budget</p>
          </div>
          <style>{`
            .fleet-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            .fleet-card-img-container {
              height: 200px;
            }
            @media (max-width: 1024px) {
              .fleet-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
              }
              .fleet-card-img-container {
                height: 180px;
              }
            }
            @media (max-width: 640px) {
              .fleet-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div className="fleet-grid">
            {cars.map(c => (
              <div key={c.name} className="card-hover" style={{
                background: "#fff", borderRadius: 24, overflow: "hidden",
                border: "1px solid #F1F5F9", boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
                onMouseEnter={e => { 
                  e.currentTarget.style.borderColor = c.color; 
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${c.color}15`;
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.borderColor = "#F1F5F9"; 
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
                }}>
                {/* Car image */}
                <div className="fleet-card-img-container" style={{ 
                  overflow: "hidden", 
                  position: "relative", 
                  background: "linear-gradient(135deg, #FFFFFF, #F8FAFC)", 
                  height: 210,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img src={c.img} alt={`Divyakshi Travels ${c.name} Taxi Vadodara - ${c.models}`} style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain", 
                    display: "block", 
                    transition: "all 0.5s ease",
                    transform: "scale(1.1)" // Safely zoom while using contain to fill more space
                  }} 
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.2)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1.1)")}
                  />
                  <div style={{ position: "absolute", top: 16, right: 16, background: c.color, color: "#fff", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 800, zIndex: 2, textTransform: "uppercase", letterSpacing: "0.5px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>{c.badge}</div>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <h3 style={{ fontWeight: 800, fontSize: 22, color: "#0F172A", marginBottom: 6 }}>{c.name}</h3>
                  <div style={{ color: "#64748B", fontSize: 14, marginBottom: 18, fontWeight: 500 }}>{c.models}</div>
                  <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F1F5F9", borderRadius: 12, padding: "6px 14px", fontSize: 13, color: "#475569", fontWeight: 600 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: c.color }}>group</span>
                      {c.seats} seats
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F1F5F9", borderRadius: 12, padding: "6px 14px", fontSize: 13, color: "#475569", fontWeight: 600 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: c.color }}>ac_unit</span>
                      AC
                    </div>
                  </div>
                  <div style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}dd)`, color: "#fff", borderRadius: 14, padding: "14px", fontWeight: 900, fontSize: 17, textAlign: "center", boxShadow: `0 8px 20px ${c.color}33`, letterSpacing: "0.5px" }}>
                    Starting {c.rate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>route</span>
              POPULAR ROUTES
            </div>
            <h2 className="section-title">Most Booked Cab Routes from Vadodara</h2>
            <p className="section-desc">Reliable, affordable cabs for all these destinations — book in 60 seconds</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: 14 }}>
            {popularRoutes.map(r => (
              <div key={r.to} className="card-hover" style={{
                background: "#fff", borderRadius: 18, overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: "1.5px solid #E2E8F0",
                display: "flex", flexDirection: "column", transition: "all 0.3s"
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#F59E0B"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#E2E8F0"}>
                {/* Route image */}
                <div style={{ height: 210, overflow: "hidden", position: "relative" }}>
                  <img src={r.img} alt={r.to} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: r.pos || "center", display: "block", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                {/* Info */}
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 18 }}>
                    <h3 style={{ fontWeight: 800, color: "#0F172A", fontSize: 18, display: "flex", alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
                      {r.from}
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: "#F59E0B", margin: "0 10px" }}>arrow_forward</span>
                      {r.to}
                    </h3>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ color: "#64748B", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                        <span className="material-symbols-rounded" style={{ fontSize: 18, color: "#94A3B8" }}>route</span>
                        {r.km}
                      </span>
                      <span style={{ color: "#64748B", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                        <span className="material-symbols-rounded" style={{ fontSize: 18, color: "#94A3B8" }}>schedule</span>
                        {r.time}
                      </span>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    <button onClick={() => { 
                      const msg = encodeURIComponent(`Hello! I'm looking for a cab from Vadodara to ${r.to}.`);
                      window.open(`https://wa.me/918200909915?text=${msg}`, '_blank');
                    }} style={{
                      display: "flex", alignItems: "center", gap: 6, padding: "10px 18px",
                      borderRadius: 10, fontWeight: 700, fontSize: 13, border: "none",
                      background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e",
                      cursor: "pointer", fontFamily: "'Poppins', sans-serif", width: "100%", justifyContent: "center"
                    }}>
                      <WhatsAppIcon size={16} />
                      Enquire on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>explore</span>
              TOP DESTINATIONS
            </div>
            <h2 className="section-title">Popular Travel Destinations</h2>
          </div>
          <style>{`
            .dest-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 16px;
            }
            .dest-card {
              height: 220px;
            }
            @media (max-width: 1100px) {
              .dest-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }
            @media (max-width: 768px) {
              .dest-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 480px) {
              .dest-grid {
                grid-template-columns: 1fr;
              }
              .dest-card {
                height: 180px;
              }
            }
          `}</style>
          <div className="dest-grid">
            {destinations.map(d => (
              <Link key={d.name} href="/packages" style={{
                display: "block", borderRadius: 20, overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)", position: "relative", 
                textDecoration: "none", transition: "all 0.4s ease",
              }} className="card-hover dest-card">
                <img src={d.img} alt={d.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} 
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.15)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, zIndex: 2 }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 6, letterSpacing: "0.3px", textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>{d.name}</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#fff", borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {d.tag}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "72px 20px", background: "linear-gradient(135deg, #0F172A 0%, #0F3460 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)", padding: "5px 16px", borderRadius: 30, fontSize: 11, fontWeight: 700, letterSpacing: 1.2, marginBottom: 14 }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>diamond</span>
              WHY CHOOSE US
            </div>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>The Divyakshi Difference</h2>
          </div>
          <style>{`
            .why-grid {
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              gap: 16px;
            }
            @media (max-width: 1200px) {
              .why-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
              }
            }
            @media (max-width: 768px) {
              .why-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 480px) {
              .why-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div className="why-grid">
            {whyUs.map(w => (
              <div key={w.label} className="card-hover" style={{
                background: "rgba(255,255,255,0.05)", borderRadius: 20, padding: "24px 16px",
                textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)",
                transition: "all 0.3s ease", display: "flex", flexDirection: "column", alignItems: "center"
              }}>
                <div style={{ width: 54, height: 54, background: w.bg, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: `0 8px 16px rgba(0,0,0,0.2)` }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 24, color: w.color }}>{w.icon}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 15, color: "#fff", marginBottom: 8, letterSpacing: "0.5px" }}>{w.label}</h3>
                <p style={{ color: "#94A3B8", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>format_quote</span>
              TESTIMONIALS
            </div>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
            {testimonials.map(t => (
              <div key={t.name} className="card-hover" style={{
                background: "#fff", borderRadius: 18, padding: 26,
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1.5px solid #E2E8F0",
              }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#F59E0B" }}>star</span>
                  ))}
                </div>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.75, marginBottom: 18, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #D97706, #F59E0B)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontWeight: 800, fontSize: 17 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "#94A3B8", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 12 }}>location_on</span>
                      {t.city}
                    </div>
                  </div>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, color: "#22c55e", marginLeft: "auto" }}>verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        background: "linear-gradient(to right, rgba(217,119,6,0.9) 0%, rgba(245,158,11,0.85) 40%, rgba(252,211,77,0.9) 100%), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&fit=crop&auto=format') center/cover", 
        padding: "60px 20px", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.1)" }} />
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "rgba(255,255,255,0.1)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -50, left: -20, width: 160, height: 160, background: "rgba(255,255,255,0.08)", borderRadius: "50%" }} />
        <div style={{ position: "relative" }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 50, color: "#0F172A", display: "block", marginBottom: 12 }}>rocket_launch</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, color: "#0F172A", marginBottom: 10 }}>Ready to Plan Your Dream Trip?</h2>
          <p style={{ color: "#0F172A", fontWeight: 600, marginBottom: 30, fontSize: 16, maxWidth: 400, margin: "0 auto 30px" }}>
            Call us or send a WhatsApp — we'll plan everything for you
          </p>
          <div className="cta-btns" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#1a1a2e", color: "#F59E0B", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", letterSpacing: "0.5px" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20, display: "block" }}>call</span>
              <span style={{ display: "block", paddingTop: 1 }}>Call: 82009 09915</span>
            </a>
            <a href="https://wa.me/918200909915?text=Hi, I want to book a cab" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25d366", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 15px rgba(37,211,102,0.4)", letterSpacing: "0.5px" }}>
              <WhatsAppIcon size={20} />
              <span style={{ display: "block", paddingTop: 1 }}>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
