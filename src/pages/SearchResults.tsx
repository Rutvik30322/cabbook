import { useSearch, Link } from "wouter";
import { useState, useEffect } from "react";

import wagonR from "../assets/Wagon R.png";
import etios from "../assets/Toyota Etios.png";
import ertiga from "../assets/Eritga.png";
import innova from "../assets/Toyota Innova.png";
import innovaCrysta from "../assets/Innova Crysta.png";
import tempo from "../assets/Tempo Traveler.png";
import paymentQR from "../assets/WhatsApp Image 2026-04-05 at 4.47.58 AM.jpeg";

const CAR_OPTIONS = [
  {
    id: 1, type: "AC HATCHBACK", models: "Swift, WagonR, i10 or Similar",
    seats: 4, bags: 2,
    img: wagonR,
    ratePerKm: 11, basePrice: 800,
    features: ["AC", "4-Passengers", "2-Luggage", "Sanitise cab"],
    highlights: ["Swift, WagonR, i10 or Similar"],
    color: "#F59E0B", badge: "Most Economical",
    discount: 20, kmsIncluded: 250, limitRate: 12.9
  },
  {
    id: 2, type: "AC SEDAN", models: "Swift Dzire, Hyundai Aura, Honda Amaze or Similar",
    seats: 4, bags: 4,
    img: etios,
    ratePerKm: 13, basePrice: 1000,
    features: ["AC", "4-Passengers", "4-Luggage", "Sanitise cab"],
    highlights: ["Swift Dzire, Hyundai Aura, Honda Amaze or Similar"],
    color: "#F59E0B", badge: "Top Rated",
    discount: 20, kmsIncluded: 250, limitRate: 12.9
  },
  {
    id: 3, type: "AC SUV", models: "Ertiga, or Similar",
    seats: 6, bags: 6,
    img: ertiga,
    ratePerKm: 16, basePrice: 1400,
    features: ["AC", "6-Passengers", "6-Luggage", "Sanitise cab"],
    highlights: ["Ertiga, or Similar"],
    color: "#F59E0B", badge: "Spacious",
    discount: 20, kmsIncluded: 250, limitRate: 13.5
  },
  {
    id: 4, type: "AC INNOVA", models: "Innova or Marazzo or Similar",
    seats: 7, bags: 6,
    img: innova,
    ratePerKm: 20, basePrice: 1800,
    features: ["AC", "7-Passengers", "6-Luggage", "Sanitise cab"],
    highlights: ["Innova or Marazzo or Similar"],
    color: "#F59E0B", badge: "Premium SUV",
    discount: 20, kmsIncluded: 250, limitRate: 16.0
  },
  {
    id: 6, type: "INNOVA CRYSTA", models: "Innova Crysta or Similar",
    seats: 7, bags: 6,
    img: innovaCrysta,
    ratePerKm: 26, basePrice: 2200,
    features: ["AC", "7-Passengers", "6-Luggage", "Sanitise cab"],
    highlights: ["Innova Crysta or Similar"],
    color: "#F59E0B", badge: "Luxury Choice",
    discount: 20, kmsIncluded: 250, limitRate: 20.0
  },
  {
    id: 5, type: "TEMPO TRAVELLER", models: "12 / 14 / 16 Seater Traveller",
    seats: 16, bags: 10,
    img: tempo,
    ratePerKm: 28, basePrice: 2400,
    features: ["AC", "16-Passengers", "10-Luggage", "Sanitise cab"],
    highlights: ["12 / 14 / 16 Seater Traveller"],
    color: "#F59E0B", badge: "Large Group",
    discount: 20, kmsIncluded: 300, limitRate: 25.0
  },
];

export default function SearchResults() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const from = params.get("from") || "Vadodara";
  const to = params.get("to") || "Destination";
  const date = params.get("date") || "";
  const phone = params.get("phone") || "";
  const tripType = params.get("tripType") || "oneway";

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState<number | null>(null);
  
  // Booking Modal States
  const [showBookingModal, setShowBookingModal] = useState<any>(null);
  const [bookingStep, setBookingStep] = useState<'details' | 'payment' | 'success'>('details');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Load existing customer data
  useEffect(() => {
    const savedName = localStorage.getItem('divyakshi_customer_name');
    const savedPhone = localStorage.getItem('divyakshi_customer_phone');
    if (savedName) setCustomerName(savedName);
    if (savedPhone) setCustomerPhone(savedPhone);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('divyakshi_customer_name', customerName);
    localStorage.setItem('divyakshi_customer_phone', customerPhone || phone);
    setBookingStep('payment');
  };

  const tripLabel: Record<string, string> = {
    oneway: "One Way", roundtrip: "Round Trip",
    outstation: "Outstation", local: "Local/Hourly",
  };

  const estKm: Record<string, number> = {
    Ahmedabad: 115, Surat: 155, Mumbai: 425, Delhi: 1100, Goa: 530,
    Jaipur: 780, Rajkot: 220, Pune: 390, Dwarka: 440, Somnath: 220,
    "Statue of Unity": 90, Shirdi: 360, Nashik: 310,
  };
  const km = estKm[to] || 200;

  const getPrice = (car: typeof CAR_OPTIONS[0]) => {
    const base = Math.max(car.basePrice, car.ratePerKm * km);
    return Math.round(base / 50) * 50;
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>
      <style>{`
        .res-container { maxWidth: 1200px; margin: 0 auto; padding: 32px 20px; }
        .car-card-grid { display: grid; grid-template-columns: 280px 1fr; min-height: 220px; transition: all 0.3s; }
        .details-inner-grid { display: grid; grid-template-columns: 1fr auto; gap: 40px; }
        .summary-section { text-align: right; display: flex; flex-direction: column; align-items: flex-end; width: 280px; }
        .book-btn { width: 160px; padding: 12px; border-radius: 10px; border: none; background: linear-gradient(to right, #FCD34D, #F59E0B); color: #000; fontWeight: 800; fontSize: 13.5px; cursor: pointer; boxShadow: 0 4px 15px rgba(245,158,11,0.25); transition: all 0.3s; }
        .book-btn:hover { transform: translateY(-2px); boxShadow: 0 8px 25px rgba(245,158,11,0.4); }

        @media (max-width: 860px) {
          .car-card-grid { grid-template-columns: 1fr; }
          .details-inner-grid { grid-template-columns: 1fr; gap: 24px; }
          .summary-section { text-align: left; align-items: flex-start; border-top: 1px dashed #E2E8F0; padding-top: 20px; }
          .book-btn { width: 100%; padding: 14px; fontSize: 15px; }
          .res-container { padding: 20px 16px; }
        }

        @media (max-width: 640px) {
          .help-banner { flex-direction: column; text-align: center; }
          .help-banner div { width: 100%; justify-content: center; }
        }

        @media (max-width: 480px) {
           .car-card-grid img { width: 100% !important; max-width: 300px; margin: 0 auto; }
        }

        @keyframes pop-up {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Search summary bar */}
      <div style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)", padding: "18px 20px", borderBottom: "1px solid rgba(245,158,11,0.2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 16px" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#F59E0B" }}>trip_origin</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{from}</span>
            </div>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 22, color: "#F59E0B" }}>arrow_forward</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 16px" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#22c55e" }}>location_on</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{to}</span>
            </div>
            {date && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 14px" }}>
                <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#94A3B8" }}>calendar_today</span>
                <span style={{ color: "#94A3B8", fontSize: 13 }}>{date}</span>
              </div>
            )}
            <div style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, border: "1px solid rgba(245,158,11,0.3)" }}>
              {tripLabel[tripType]} · ~{km} km
            </div>
          </div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748B", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.color = "#F59E0B"}
            onMouseLeave={e => e.currentTarget.style.color = "#64748B"}>
            <span className="material-symbols-rounded" style={{ fontSize: 16 }}>edit</span>
            Modify Search
          </Link>
        </div>
      </div>

      {/* Results */}
      <div className="res-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", marginBottom: 4 }}>
              {CAR_OPTIONS.length} Cabs Available
            </h1>
            <p style={{ color: "#64748B", fontSize: 14 }}>Select a cab and confirm your booking</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 10, padding: "8px 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}>
            <span className="material-symbols-rounded icon-filled" style={{ fontSize: 16, color: "#059669" }}>verified</span>
            <span style={{ color: "#047857", fontSize: 12, fontWeight: 700 }}>All cabs verified & insured</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {CAR_OPTIONS.map(car => {
            const rawPrice = getPrice(car);
            const isDiscounted = car.discount > 0;
            const originalPrice = isDiscounted ? Math.round(rawPrice / (1 - car.discount/100)) : rawPrice;
            const finalPrice = rawPrice;
            
            const isSelected = selectedId === car.id;
            const isConfirmed = confirmed === car.id;

            return (
              <div key={car.id} style={{
                background: "#fff", borderRadius: 12, overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                border: isSelected ? `2.5px solid #F59E0B` : "1px solid #E2E8F0",
                transition: "all 0.3s",
                position: "relative",
                marginBottom: 10
              }}>
                <div className="car-card-grid">

                  {/* Car image */}
                  <div style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
                    <img
                      src={car.img}
                      alt={car.type}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  {/* Details */}
                  <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div className="details-inner-grid">
                      
                      {/* Left Side Details */}
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                           <h3 style={{ fontWeight: 800, fontSize: 20, color: "#0F172A", margin: 0 }}>{car.type}</h3>
                           <span style={{ background: "#84CC16", color: "#fff", fontSize: 10, padding: "2px 6px", borderRadius: 3, fontWeight: 700 }}>Or Similar</span>
                        </div>
                        
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: 14 }}>
                           <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 12.5 }}>
                              <span className="material-symbols-rounded" style={{ fontSize: 16, color: "#64748B" }}>ac_unit</span> AC
                           </div>
                           <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 12.5 }}>
                              <span className="material-symbols-rounded" style={{ fontSize: 16, color: "#64748B" }}>group</span> {car.seats}-Passengers
                           </div>
                           <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 12.5 }}>
                              <span className="material-symbols-rounded" style={{ fontSize: 16, color: "#64748B" }}>luggage</span> {car.bags}-Luggage
                           </div>
                           <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 12.5 }}>
                              <span className="material-symbols-rounded" style={{ fontSize: 16, color: "#64748B" }}>cleaning_services</span> Sanitise cab
                           </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748B", fontSize: 12.5 }}>
                           <span className="material-symbols-rounded" style={{ fontSize: 16 }}>directions_car</span>
                           {car.models}
                        </div>
                      </div>

                      {/* Right Side Summary */}
                      <div className="summary-section">
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                           <span style={{ background: "#F59E0B", color: "#fff", fontSize: 11, padding: "2px 6px", borderRadius: 3, fontWeight: 800 }}>5.00</span>
                         <span style={{ color: "#64748B", fontSize: 11 }}>(100 Reviews)</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 12.5, marginBottom: 6 }}>
                           <span className="material-symbols-rounded" style={{ fontSize: 18, color: "#F59E0B" }}>pets</span>
                           Top Rated Cabs & Chauffeurs
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#059669", fontSize: 12.5, marginBottom: 12, fontWeight: 600 }}>
                           <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18, color: "#10B981" }}>verified</span>
                           Including Toll Tax, State Tax
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6, marginBottom: 4 }}>
                           <span style={{ background: "#22c55e", color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: 4, fontWeight: 800 }}>20% OFF</span>
                           <span style={{ color: "#94A3B8", textDecoration: "line-through", fontSize: 13 }}>₹{originalPrice.toLocaleString()}</span>
                        </div>
                        <div style={{ fontWeight: 900, fontSize: 30, color: "#15803d", lineHeight: 1, marginBottom: 6 }}>₹{finalPrice.toLocaleString()}</div>
                        
                        <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#2563EB", fontSize: 12, fontWeight: 700, cursor: "pointer", marginBottom: 16 }}>
                           <span className="material-symbols-rounded" style={{ fontSize: 16 }}>info</span>
                           Fare Summary
                        </div>

                        <button
                          className="book-btn"
                          onClick={() => { 
                            setShowBookingModal(car);
                            setBookingStep('details');
                          }}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need help */}
        <div className="help-banner" style={{ marginTop: 40, background: "linear-gradient(135deg, #0F172A, #1E293B)", borderRadius: 20, padding: "28px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Need Help Choosing?</div>
            <div style={{ color: "#94A3B8", fontSize: 13 }}>Our travel expert will suggest the best cab for your needs</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="tel:+918200909915" style={{ display: "flex", alignItems: "center", gap: 7, background: "linear-gradient(135deg, #D97706, #F59E0B)", color: "#1a1a2e", padding: "11px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>call</span> 82009 09915
            </a>
            <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 7, background: "#25d366", color: "#fff", padding: "11px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 18 }}>chat</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Booking Modal Overlay */}
      {showBookingModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
          zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'
        }}>
          <div style={{
            background: '#fff', width: '100%', maxWidth: 440, borderRadius: 28, overflow: 'hidden',
            boxShadow: '0 25px 70px rgba(0,0,0,0.6)', animation: 'pop-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25)',
            maxHeight: '90vh', display: 'flex', flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{ background: '#0F172A', padding: '24px 24px', color: '#fff', position: 'relative', flexShrink: 0 }}>
              <button 
                onClick={() => setShowBookingModal(null)}
                style={{ position: 'absolute', right: 16, top: 20, background: 'rgba(255,255,255,0.05)', border: 'none', color: '#94A3B8', cursor: 'pointer', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-rounded" style={{ fontSize: 18 }}>close</span>
              </button>
              <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 4, paddingRight: 30 }}>
                {bookingStep === 'details' ? 'Complete Booking' : 'Secure Payment'}
              </h2>
              <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>
                {showBookingModal.type} · {from} to {to}
              </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
              {/* Step 1: Customer Details */}
              {bookingStep === 'details' && (
                <form onSubmit={handleBookingSubmit} style={{ padding: '24px 24px 32px' }}>
                  {localStorage.getItem('divyakshi_customer_name') && (
                    <div style={{ background: '#F0FDF4', color: '#166534', padding: '12px 16px', borderRadius: 14, fontSize: 13, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #DCFCE7' }}>
                      <span className="material-symbols-rounded" style={{ fontSize: 20, color: '#22c55e' }}>verified</span>
                      Welcome back, {customerName}!
                    </div>
                  )}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 900, color: '#64748B', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                    <input 
                      required type="text" value={customerName} onChange={e => setCustomerName(e.target.value)}
                      placeholder="Enter your name"
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 14, border: '2.5px solid #F1F5F9', outline: 'none', fontSize: 15, fontWeight: 600, background: '#F8FAFC' }}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 900, color: '#64748B', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp Number</label>
                    <input 
                      required type="tel" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      style={{ width: '100%', padding: '14px 18px', borderRadius: 14, border: '2.5px solid #F1F5F9', outline: 'none', fontSize: 15, fontWeight: 600, background: '#F8FAFC' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '18px', borderRadius: 16, border: 'none',
                    background: 'linear-gradient(135deg, #0F172A, #1E293B)', color: '#fff',
                    fontWeight: 800, fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                    boxShadow: '0 10px 25px rgba(15,23,42,0.2)'
                  }}>
                    Proceed to Pay ₹{getPrice(showBookingModal).toLocaleString()}
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </button>
                </form>
              )}

              {/* Step 2: Payment & QR */}
              {bookingStep === 'payment' && (
                <div style={{ padding: '24px 24px 32px', textAlign: 'center' }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ color: '#059669', fontSize: 12, fontWeight: 900, marginBottom: 16, letterSpacing: '1px' }}>SCAN TO PAY INSTANTLY</div>
                    <div style={{ 
                      background: '#fff', padding: 12, borderRadius: 24, border: '1.5px solid #F1F5F9', 
                      display: 'inline-block', boxShadow: '0 15px 40px rgba(0,0,0,0.06)'
                    }}>
                      <img 
                        src={paymentQR}
                        alt="Official Payment QR"
                        style={{ width: 180, height: 180, display: 'block', objectFit: 'contain' }}
                      />
                    </div>
                  </div>

                  <div style={{ fontSize: 13, color: '#1E40AF', fontWeight: 600, margin: '0 0 20px', lineHeight: 1.5, background: '#EFF6FF', padding: '12px 16px', borderRadius: 14, border: '1px solid #DBEAFE', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="material-symbols-rounded" style={{ fontSize: 20, color: '#3B82F6' }}>info</span>
                    <span>Pay the amount, then click <b>'I Have Completed Payment'</b> to share your details.</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                     <a 
                       href={`upi://pay?pa=vijaysinh41988@oksbi&pn=Divyakshi%20Travels&am=${getPrice(showBookingModal)}&cu=INR&tn=Booking%20for%20${customerName}`}
                       style={{
                         display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                         width: '100%', padding: '18px', borderRadius: 16, border: 'none',
                         background: '#4285F4', color: '#fff', fontWeight: 800, fontSize: 16, textDecoration: 'none',
                         boxShadow: '0 8px 25px rgba(66,133,244,0.3)'
                       }}>
                       <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg" alt="GPay" style={{ width: 45, height: 18, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                       Open Google Pay App
                     </a>

                     <button 
                       onClick={() => {
                         alert("Payment Notified! One last step: Please send your details via WhatsApp AND call us for immediate driver confirmation.");
                         setBookingStep('success');
                       }}
                       style={{
                         width: '100%', padding: '18px', borderRadius: 16, border: 'none',
                         background: 'linear-gradient(135deg, #059669, #10B981)', color: '#fff',
                         fontWeight: 800, fontSize: 16, cursor: 'pointer',
                         boxShadow: '0 8px 25px rgba(16,185,129,0.3)'
                       }}>
                       I Have Completed Payment
                     </button>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: '14px 18px', borderRadius: 16, textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #F1F5F9' }}>
                     <div>
                       <div style={{ fontSize: 9, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 2 }}>Amount to Pay</div>
                       <div style={{ fontSize: 20, fontWeight: 900, color: '#0F172A' }}>₹{getPrice(showBookingModal).toLocaleString()}</div>
                     </div>
                     <div style={{ textAlign: 'right' }}>
                       <div style={{ fontSize: 9, fontWeight: 900, color: '#94A3B8', textTransform: 'uppercase', marginBottom: 2 }}>Recipient</div>
                       <div style={{ fontSize: 11, fontWeight: 800, color: '#475569' }}>vijaysinh41988@oksbi</div>
                     </div>
                  </div>

                  <button 
                    onClick={() => setBookingStep('details')}
                    style={{ marginTop: 24, background: 'none', border: 'none', color: '#64748B', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
                    ← Go Back to Details
                  </button>
                </div>
              )}

              {/* Step 3: Success Confirmation */}
              {bookingStep === 'success' && (
                <div style={{ padding: '48px 30px', textAlign: 'center' }}>
                  <div style={{ 
                    width: 72, height: 72, background: '#F0FDF4', borderRadius: '50%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                    border: '4px solid #DCFCE7'
                  }}>
                    <span className="material-symbols-rounded" style={{ fontSize: 40, color: '#22c55e' }}>check_circle</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 900, color: '#0F172A', marginBottom: 12 }}>Last Step: Confirm Booking</h3>
                  <p style={{ color: '#64748B', fontSize: 14, marginBottom: 32, lineHeight: 1.6, padding: '0 10px' }}>
                    Great! Now please <b>Send WhatsApp message</b> and <b>Call us</b> to immediately confirm your driver and cab.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <a 
                      href={`https://wa.me/918200909915?text=${encodeURIComponent(`Hi, I've paid ₹${getPrice(showBookingModal)} for my ${showBookingModal.type} booking from ${from} to ${to}. Please confirm my cab. WhatsApp: ${customerPhone}.`)}`}
                      target="_blank" rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        width: '100%', padding: '18px', borderRadius: 16, border: 'none',
                        background: '#25d366', color: '#fff', fontWeight: 800, fontSize: 16, textDecoration: 'none',
                        boxShadow: '0 10px 30px rgba(37,211,102,0.3)'
                      }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>chat</span>
                      1. Message on WhatsApp
                    </a>

                    <a 
                      href="tel:+918200909915"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        width: '100%', padding: '18px', borderRadius: 16, border: 'none',
                        background: 'linear-gradient(135deg, #0F172A, #1E293B)', color: '#fff', fontWeight: 800, fontSize: 16, textDecoration: 'none',
                        boxShadow: '0 10px 30px rgba(15,23,42,0.2)'
                      }}>
                      <span className="material-symbols-rounded icon-filled" style={{ fontSize: 20 }}>call</span>
                      2. Call to Confirm Now
                    </a>
                  </div>

                  <button 
                    onClick={() => setShowBookingModal(null)}
                    style={{ marginTop: 24, background: 'none', border: 'none', color: '#64748B', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
                    Close and Return
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
