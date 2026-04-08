import taxiImage from "../assets/premium_taxi_fleet.png";
import busImage from "../assets/luxury_bus.png";
import hotelImage from "../assets/Luxury Rambagh Palace Jaipur India _ Royal Palace Hotel for Foreign Tourists.jpg";
import tourImage from "../assets/Neon7 Tour & Travel Agency – Best Travel Packages in Indore, MP.jpg";
import visaImage from "../assets/download.jpg";
import flightTrainImg from "../assets/flight_train_banner.png";
import SEO from "@/components/SEO";

const services = [
  {
    icon: "directions_car", color: "#2563EB", bg: "#EFF6FF",
    title: "Local & Outstation Taxi",
    img: taxiImage,
    desc: "Book reliable, comfortable taxis for local rides, airport transfers, and outstation trips.",
    features: ["Sedan/Premium Sedan","SUV/Premium SUV","AC & Non-AC options", "Airport pickup & drop", "24/7 availability", "Sanitized vehicles", "Online booking"],
    price: "Starting ₹11/km",
  },
  {
    icon: "airport_shuttle", color: "#7C3AED", bg: "#F5F3FF",
    title: "Tempo Traveller",
    img: "/tempo_traveller_card.png",
    desc: "Perfect for group travel, family outings, corporate trips, and pilgrimages with ample luggage space.",
    features: ["10, 12, 14, 17, 20, 25 seater", "All-India permit", "Pilgrimage tours", "Corporate travel", "Wedding transport"],
    price: "Starting ₹22/km",
  },
  {
    icon: "directions_bus", color: "#D97706", bg: "#FFFBEB",
    title: "Luxury Bus Rental",
    img: busImage,
    desc: "Premium luxury buses for weddings, corporate events, school trips, and large group travel.",
    features: ["20–56 seater - Sleeper", "AC - Non AC & entertainment", "School tours", "Wedding events", "Corporate tours","Pilgrimage tours"],
    price: "Starting ₹45/km",
  },
  {
    icon: "hotel", color: "#059669", bg: "#ECFDF5",
    title: "Hotel Bookings",
    img: hotelImage,
    desc: "Best hotel deals handpicked for you — from budget stays to luxury resorts across India.(3,4,5 Star Hotels)",
    features: ["Budget to Luxury", "Pan-India coverage", "Honeymoon packages", "Group discounts", "Best price guarantee"],
    price: "Best price guaranteed",
  },
  {
    icon: "travel_explore", color: "#DC2626", bg: "#FEF2F2",
    title: "Tour Packages",
    img: tourImage,
    desc: "All-inclusive holiday packages covering sightseeing, accommodation, meals, and transfers.",
    features: ["Domestic & international", "Customizable itineraries", "Hotel + transfers", "Experienced guides", "Family packages"],
    price: "From ₹4,999/person",
  },
  {
    icon: "article", color: "#0891B2", bg: "#ECFEFF",
    title: "Visa & Passport",
    img: visaImage,
    desc: "Full visa, passport, and immigration assistance for domestic and international travel.",
    features: ["Passport services","Visa assistance", "Document verification", "Fast-track processing", "Immigration support","Work Permit","Student Visa"],
    price: "Best service guaranteed",
  },
];

import React, { useState } from "react";
export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SEO 
        title="Taxi, Bus Rental, Hotel & Visa Services in Vadodara | Divyakshi Cabs" 
        description="Divyakshi Cabs Vadodara: Book local taxis, outstation cabs, luxury bus rentals, hotel packages, tour packages & visa assistance. Trusted by 5000+ customers. Call 82009 09915." 
      />
      {/* Hero */}
      <section style={{ 
        background: "linear-gradient(135deg, rgba(15,12,41,0.92) 0%, rgba(15,23,42,0.85) 50%, rgba(15,52,96,0.92) 100%), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&fit=crop&auto=format') center/cover", 
        padding: "40px 20px", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative" }}>
          {/* DIVYAKSHI CABS Brand Name */}
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
          <div className="section-badge" style={{ background: "rgba(245,158,11,0.15)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.3)", marginBottom: 10, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>auto_awesome</span>
            OUR SERVICES
          </div>
          <h1 style={{ color: "#CBD5E1", fontSize: "clamp(15px, 2vw, 20px)", fontWeight: 500, marginBottom: 6, marginTop: 4 }}>Taxi • Bus • Hotels • Tour Packages • Visa — All Under One Roof</h1>
          <p style={{ color: "#94A3B8", maxWidth: 480, margin: "0 auto", fontSize: 13, lineHeight: 1.5 }}>
            From taxi rentals to visa assistance — we've got every travel need covered in Vadodara
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "72px 20px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 26 }}>
          {services.map((s, index) => (
            <React.Fragment key={s.title}>
              {index === 3 && (
                <div style={{
                  gridColumn: "1 / -1",
                  background: "#1E293B",
                  borderRadius: 20,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                  {/* Professional Custom Background Image */}
                  <div style={{ position: "absolute", inset: 0 }}>
                    <div style={{ width: "100%", height: "100%", backgroundImage: `url(${flightTrainImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  </div>
                  {/* Overlay Gradient to blend text securely without hiding the airplane on the left */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.5) 50%, transparent 100%)" }} />

                  <div style={{ position: "relative", zIndex: 1, padding: "30px 40px", maxWidth: 650 }}>
                    <div className="section-badge" style={{ background: "rgba(59,130,246,0.2)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.3)", marginBottom: 10, display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 12px", fontSize: 11 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 13 }}>confirmation_number</span>
                      TICKETING SERVICES
                    </div>
                    <h3 style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 8 }}>
                      Flight & Train Booking
                    </h3>
                    <p style={{ color: "#E2E8F0", fontSize: 14, lineHeight: 1.5, marginBottom: 18, maxWidth: 500 }}>
                      Fast and secure ticket booking for domestic/international flights and IRCTC trains. Travel hassle-free.
                    </p>
                    <a href="https://wa.me/918200909915?text=Hi%20Divyakshi%20Travels,%20I%20want%20to%20book%20Flight/Train%20tickets." target="_blank" rel="noreferrer" style={{
                      display: "inline-flex", alignItems: "center", gap: 8, background: "#F59E0B", color: "#0F172A", padding: "10px 24px", borderRadius: 10, fontWeight: 800, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 15px rgba(245,158,11,0.3)", transition: "transform 0.2s"
                    }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>confirmation_number</span>
                      Book Tickets Now
                    </a>
                  </div>
                </div>
              )}
            <div className="card-hover" style={{
              background: "#fff", borderRadius: 20, overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "2px solid transparent",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = s.color)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
              {/* Image Container - Proper Cinematic Style */}
              <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
                <img 
                  src={s.img} 
                  alt={s.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} 
                />
                
                {/* Subtle dark vignette for text readability */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.8), transparent 50%)" }} />
                
                <div style={{ position: "absolute", bottom: 16, right: 16, background: s.color, color: "#fff", borderRadius: 8, padding: "6px 16px", fontSize: 13, fontWeight: 800, boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
                  {s.price}
                </div>
              </div>

              <div style={{ padding: "26px 24px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 56, height: 56, background: s.bg, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginTop: -54, position: "relative", zIndex: 1, border: "4px solid #fff", boxShadow: "0 6px 15px rgba(0,0,0,0.15)" }}>
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 26, color: s.color }}>{s.icon}</span>
                  </div>
                  <h3 style={{ fontWeight: 900, fontSize: 20, color: "#0F172A", letterSpacing: "-0.5px" }}>{s.title}</h3>
                </div>
                <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 11, color: "#94A3B8", letterSpacing: 0.8, marginBottom: 10 }}>WHAT'S INCLUDED</div>
                  {s.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#475569", marginBottom: 7 }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 15, color: s.color }}>check_circle</span>
                      {f}
                    </div>
                  ))}
                </div>
                  <a 
                    href={`https://wa.me/918200909915?text=${encodeURIComponent(`Hi Divyakshi Travels, I'm interested in your ${s.title} service. Please provide more details.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20,
                      padding: "11px", borderRadius: 10, fontWeight: 800, fontSize: 13.5,
                      background: "#25D366", color: "#fff", textDecoration: "none",
                      boxShadow: "0 4px 12px rgba(37,211,102,0.25)",
                      transition: "transform 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>chat</span>
                    Book on WhatsApp
                  </a>
              </div>
            </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "72px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div className="section-badge">
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 14 }}>bolt</span>
            HOW IT WORKS
          </div>
          <h2 className="section-title">Book in 3 Easy Steps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 30, marginTop: 48 }}>
            {[
              { step: "01", icon: "smartphone", title: "Contact Us", desc: "Call, WhatsApp, or fill the booking form with your travel details" },
              { step: "02", icon: "price_check", title: "Get Quotes", desc: "Receive instant quotes and choose the best option for your budget" },
              { step: "03", icon: "check_circle", title: "Confirmed!", desc: "Get your booking confirmed with driver details & travel itinerary" },
            ].map(s => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div style={{ width: 70, height: 70, background: "linear-gradient(135deg, #D97706, #F59E0B)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", boxShadow: "0 8px 24px rgba(217,119,6,0.35)" }}>
                  <span className="material-symbols-rounded icon-filled" style={{ fontSize: 30, color: "#fff" }}>{s.icon}</span>
                </div>
                <div style={{ fontWeight: 900, color: "#D97706", fontSize: 13, letterSpacing: 1, marginBottom: 7 }}>STEP {s.step}</div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0F172A", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#64748B", fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        background: "linear-gradient(135deg, rgba(217,119,6,0.92) 0%, rgba(245,158,11,0.85) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&fit=crop&auto=format') center/cover", 
        padding: "52px 20px", textAlign: "center", position: "relative", overflow: "hidden" 
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.1)" }} />
        <div style={{ position: "relative" }}>
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 44, color: "rgba(26,26,46,0.3)", display: "block", marginBottom: 10 }}>handshake</span>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: "#1a1a2e", marginBottom: 8 }}>Need a Custom Quote?</h2>
          <p style={{ color: "rgba(26,26,46,0.6)", marginBottom: 24, fontSize: 14 }}>Tell us your requirements — we'll give you the best price instantly</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 8, background: "#1a1a2e", color: "#F59E0B", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span>
              82009 09915
            </a>
            <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, background: "#25d366", color: "#fff", padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
