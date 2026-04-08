import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth, isToday, startOfToday } from "date-fns";

const CITIES = [
  "Vadodara", "Ahmedabad", "Surat", "Rajkot", "Gandhinagar", "Anand", "Nadiad",
  "Mumbai", "Pune", "Delhi", "Jaipur", "Udaipur", "Mount Abu", "Jodhpur",
  "Dwarka", "Somnath", "Statue of Unity", "Goa", "Shirdi", "Nashik",
];

type TripType = "oneway" | "roundtrip" | "outstation" | "local" | "airport";

const tabs: { key: TripType; label: string; icon: string }[] = [
  { key: "outstation", label: "Outstation", icon: "directions_car" },
  { key: "local", label: "Local Taxi", icon: "local_taxi" },
  { key: "oneway", label: "One Way", icon: "arrow_forward" },
  { key: "roundtrip", label: "Round Trip", icon: "sync_alt" },
  { key: "airport", label: "Airport", icon: "flight" },
];

// Helper component for current month grid
function CustomDatePicker({ value, onChange, label, icon, minDate }: { value: string, onChange: (d: string) => void, label: string, icon: string, minDate?: Date }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState(value ? new Date(value) : new Date());
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const daysHeader = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const start = startOfMonth(currentView);
  const end = endOfMonth(currentView);
  
  // Padding for the grid
  const startDay = start.getDay();
  const calendarDays = [];
  
  // Previous month padding
  const prevMonth = subMonths(start, 1);
  const prevMonthEnd = endOfMonth(prevMonth);
  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push({ date: subMonths(start, 1), day: prevMonthEnd.getDate() - i, current: false });
  }

  // Current month days
  const daysInMonth = eachDayOfInterval({ start, end });
  daysInMonth.forEach(d => calendarDays.push({ date: d, day: d.getDate(), current: true }));

  const selectedDate = value ? new Date(value) : null;

  return (
    <div className="input-box custom-trigger" onClick={() => setIsOpen(!isOpen)} ref={ref}>
      <div className="icon-box"><span className="material-symbols-rounded">{icon}</span></div>
      <div className="field-content">
        <span className="field-label">{label}</span>
        <div className="field-input" style={{ display: "flex", alignItems: "center" }}>
          {value ? format(new Date(value), "dd MMM yyyy") : <span style={{ opacity: 0.5 }}>Select Date</span>}
        </div>
      </div>

      {isOpen && (
        <>
          <div className="modal-overlay" onClick={() => setIsOpen(false)} />
          <div className="calendar-popover" onClick={e => e.stopPropagation()}>
            <div className="calendar-header">
              <button type="button" className="calendar-nav-btn" onClick={() => setCurrentView(subMonths(currentView, 1))}>
                <span className="material-symbols-rounded">chevron_left</span>
              </button>
              <div className="calendar-month-title">{format(currentView, "MMMM yyyy")}</div>
              <button type="button" className="calendar-nav-btn" onClick={() => setCurrentView(addMonths(currentView, 1))}>
                <span className="material-symbols-rounded">chevron_right</span>
              </button>
            </div>
            
            <div className="calendar-grid">
              {daysHeader.map(h => <div key={h} className="calendar-day-header">{h}</div>)}
              {calendarDays.map((d, i) => {
                const finalDate = new Date(d.date.getFullYear(), d.date.getMonth(), d.day);
                const realDisabled = finalDate < (minDate || startOfToday());
                const isSelected = selectedDate && isSameDay(finalDate, selectedDate);
                const isCurrentMonth = isSameMonth(finalDate, currentView);
                const isTodayDate = isToday(finalDate);

                return (
                  <div key={i} 
                    className={`calendar-day ${realDisabled ? 'disabled' : ''} ${isSelected ? 'active' : ''} ${!isCurrentMonth ? 'different-month' : ''} ${isTodayDate ? 'today' : ''}`}
                    onClick={() => {
                      if (!realDisabled) {
                        onChange(format(finalDate, "yyyy-MM-dd"));
                        setIsOpen(false);
                      }
                    }}>
                    {d.day}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function CustomDropdown({ value, onChange, label, icon, options, placeholder = "Select City" }: { value: string, onChange: (v: string) => void, label: string, icon: string, options: string[], placeholder?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const filtered = options.filter(o => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="input-box custom-trigger" onClick={() => setIsOpen(!isOpen)} ref={ref}>
      <div className="icon-box"><span className="material-symbols-rounded">{icon}</span></div>
      <div className="field-content">
        <span className="field-label">{label}</span>
        <div className="field-input">{value || placeholder}</div>
      </div>

      {isOpen && (
        <>
          <div className="modal-overlay" onClick={() => setIsOpen(false)} />
          <div className="dropdown-popover" onClick={e => e.stopPropagation()}>
            <div className="search-wrap">
              <span className="material-symbols-rounded">search</span>
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search..." 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                className="search-input"
              />
            </div>
            <div className="options-list">
              {filtered.length > 0 ? (
                filtered.map(o => (
                  <div 
                    key={o} 
                    className={`option-item ${o === value ? 'active' : ''}`}
                    onClick={() => { onChange(o); setIsOpen(false); setSearch(""); }}
                  >
                    {o}
                    {o === value && <span className="material-symbols-rounded">check</span>}
                  </div>
                ))
              ) : (
                <div className="no-results">No results found</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const GUJARAT_LOCATIONS = [
  // Vadodara City Areas
  "Vadodara - Alkapuri", "Vadodara - Sayajigunj", "Vadodara - Fatehgunj",
  "Vadodara - Manjalpur", "Vadodara - Makarpura", "Vadodara - Gotri",
  "Vadodara - Waghodia Road", "Vadodara - Harni", "Vadodara - Nizampura",
  "Vadodara - Old Padra Road", "Vadodara - Race Course", "Vadodara - Karelibaug",
  "Vadodara - Sama", "Vadodara - Chhani", "Vadodara - Akota",
  "Vadodara Railway Station", "Vadodara Airport",
  // Major Gujarat Cities
  "Ahmedabad", "Surat", "Rajkot", "Gandhinagar", "Bhavnagar",
  "Jamnagar", "Junagadh", "Anand", "Nadiad", "Mehsana",
  "Morbi", "Surendranagar", "Bharuch", "Valsad", "Navsari",
  "Patan", "Palanpur", "Himatnagar", "Godhra", "Dahod",
  "Botad", "Amreli", "Veraval", "Porbandar", "Dwarka",
  "Somnath", "Diu", "Statue of Unity", "Saputara",
  // Ahmedabad Areas
  "Ahmedabad - Satellite", "Ahmedabad - Bopal", "Ahmedabad - SG Highway",
  "Ahmedabad - Maninagar", "Ahmedabad - Naroda", "Ahmedabad - Gota",
  "Ahmedabad - Prahlad Nagar", "Ahmedabad - Vastrapur",
  // Surat Areas
  "Surat - Adajan", "Surat - Vesu", "Surat - Pal", "Surat - Althan",
  "Surat - Athwa", "Surat - Katargam",
];

const AIRPORTS = [
  "Vadodara Airport (BDQ)",
  "Ahmedabad Airport (AMD)",
  "Mumbai Airport (BOM)",
  "Delhi Airport (DEL)",
  "Surat Airport (STV)",
  "Rajkot Airport (RAJ)",
  "Jaipur Airport (JAI)",
  "Goa Airport (GOI)",
  "Pune Airport (PNQ)",
  "Hyderabad Airport (HYD)",
];

function CustomTimePicker({ value, onChange, label, icon }: { value: string; onChange: (v: string) => void; label: string; icon: string }) {
  const timeRef = useRef<HTMLInputElement>(null);
  const display = value
    ? (() => {
        const [h, m] = value.split(":");
        const hr = parseInt(h);
        const ampm = hr >= 12 ? "PM" : "AM";
        const hr12 = hr % 12 || 12;
        return `${hr12}:${m} ${ampm}`;
      })()
    : null;

  const handleBoxClick = () => {
    if (timeRef.current) {
      try { timeRef.current.showPicker(); } catch { timeRef.current.click(); }
    }
  };

  return (
    <div className="input-box custom-trigger" onClick={handleBoxClick} style={{ cursor: "pointer" }}>
      <div className="icon-box"><span className="material-symbols-rounded">{icon}</span></div>
      <div className="field-content">
        <span className="field-label">{label}</span>
        <div className="field-input" style={{ display: "flex", alignItems: "center" }}>
          {display ?? <span style={{ opacity: 0.5 }}>Select Time</span>}
        </div>
      </div>
      <input
        ref={timeRef}
        type="time"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 }}
        tabIndex={-1}
      />
    </div>
  );
}

export default function BookingWidget() {
  const [tripType, setTripType] = useState<TripType>("outstation");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [duration, setDuration] = useState("");
  const [phone, setPhone] = useState("");
  // Airport specific
  const [airportTrip, setAirportTrip] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropAddress, setDropAddress] = useState("");
  const [airportName, setAirportName] = useState("");
  const [airportTime, setAirportTime] = useState("");
  const [, navigate] = useLocation();

  // Handle URL Params for pre-filling (e.g., from Popular Routes)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pFrom = params.get("from");
    const pTo = params.get("to");
    const pType = params.get("type");

    if (pFrom) setFrom(pFrom);
    if (pTo) setTo(pTo);
    if (pType && ["oneway", "roundtrip", "outstation", "local", "airport"].includes(pType)) {
      setTripType(pType as TripType);
    }
  }, []);

  const swap = () => { const t = from; setFrom(to); setTo(t); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tripType === "airport") {
      if (phone.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      const params = new URLSearchParams({
        from: pickupAddress || "Pickup City",
        to: dropAddress || airportName || "Airport",
        tripType: "airport",
        date: date || "",
        phone,
        airportTrip,
        airportName,
        airportTime,
      });
      navigate(`/search?${params.toString()}`);
      return;
    }
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    const params: any = { from, to: to || from, tripType, date: date || "", phone };
    if (tripType === "local") params.duration = duration;
    const searchParams = new URLSearchParams(params);
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="widget-container">
      <style>{`
        .widget-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 0px;
          font-family: 'Poppins', sans-serif;
          position: relative;
          z-index: 1000;
        }
        .tabs-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 50px;
          border: none;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tab-btn .material-symbols-rounded {
          font-size: 18px;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #FCD34D, #F59E0B);
          color: #000;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }
        .tab-btn.inactive {
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          backdrop-filter: blur(8px);
        }
        .form-border-container {
          position: relative;
          border: 1px dashed rgba(255,255,255,0.4);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .all-fields-row {
          display: grid;
          grid-template-columns: 1fr 36px 1fr 1fr 1fr;
          align-items: center;
          gap: 10px;
          width: 100%;
        }
        .airport-fields-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: stretch;
          gap: 10px;
          width: 100%;
        }
        .input-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }
        .input-box {
          flex: 1;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(15, 23, 42, 0.75);
          min-width: 0;
          position: relative;
        }
        .icon-box {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 10px;
          background: #F59E0B;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.2);
        }
        .icon-box .material-symbols-rounded {
          font-size: 20px;
        }
        .field-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          width: 100%;
          overflow: hidden;
        }
        .field-label {
          font-size: 11px;
          font-weight: 700;
          color: #F59E0B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .field-input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 0;
          width: 100%;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
        }
        .field-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        .field-input option {
          color: #000;
        }
        .field-input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
          cursor: pointer;
        }
        .swap-btn {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border-radius: 50%;
          background: #F59E0B;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: transform 0.2s;
          z-index: 2;
        }
        .swap-btn:hover {
          transform: scale(1.1);
        }
        .submit-btn-row {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .submit-btn {
          background: linear-gradient(135deg, #FCD34D, #F59E0B);
          border: none;
          border-radius: 10px;
          padding: 13px 44px;
          font-size: 16px;
          font-weight: 700;
          color: #111;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(245, 158, 11, 0.3);
          transition: transform 0.2s;
          letter-spacing: 0.5px;
        }
        .submit-btn:hover {
          transform: scale(1.05);
        }
        /* Mobile overrides */
        @media (max-width: 900px) {
          .all-fields-row {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .airport-fields-row {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .swap-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .widget-container { padding: 4px 8px; }
          .form-border-container { gap: 6px; padding: 10px 10px; border-radius: 12px; }
          .tabs-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-bottom: 6px;
          }
          .tab-btn {
            padding: 6px 4px;
            font-size: 11px;
            justify-content: center;
            gap: 4px;
            border-radius: 30px;
          }
          .tab-btn .material-symbols-rounded {
            font-size: 14px;
          }
          /* Make form rows display as 2-col grid on mobile */
          .all-fields-row {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .airport-fields-row {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .input-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            align-items: stretch;
          }
          /* Single-item rows stay full width */
          .input-row.single-item {
            grid-template-columns: 1fr;
          }
          /* hide swap button on mobile - simplify flow */
          .swap-btn {
            display: none !important;
          }
          .input-box {
            padding: 7px 10px;
            gap: 8px;
            min-height: 44px;
            border-radius: 10px;
          }
          .icon-box {
            width: 28px;
            height: 28px;
            min-width: 28px;
            border-radius: 7px;
          }
          .icon-box .material-symbols-rounded {
            font-size: 14px;
          }
          .field-label {
            font-size: 8px;
            letter-spacing: 0.3px;
            margin-bottom: 0px;
          }
          .field-input {
            font-size: 12px;
          }
          .submit-btn-row {
            margin-top: 6px;
          }
          .submit-btn {
            padding: 10px 32px;
            font-size: 14px;
            width: 100%;
            border-radius: 10px;
          }
        }
        @media (max-width: 380px) {
          .field-label { font-size: 7px; }
          .field-input { font-size: 11px; }
          .icon-box { width: 24px; height: 24px; min-width: 24px; }
          .icon-box .material-symbols-rounded { font-size: 12px; }
          .input-box { padding: 6px 8px; gap: 6px; min-height: 40px; }
        }
        
        /* Premium Calendar Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 200000;
          display: none;
        }
        @media (max-width: 768px) {
          .modal-overlay { display: block; }
        }

        /* Premium Popover Styles (Shared) */
        .dropdown-popover {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 240px;
          width: 100%;
          background: #111827;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-top: none;
          border-radius: 0 0 16px 16px;
          z-index: 200001;
          box-shadow: 0 15px 50px rgba(0,0,0,0.8);
          overflow: hidden;
          animation: drop-in-list 0.25s ease-out;
          user-select: none;
        }

        .calendar-popover {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          background: #0F172A;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-top: none;
          border-radius: 0 0 16px 16px;
          z-index: 200001;
          padding: 16px 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.8);
          animation: drop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25);
          user-select: none;
        }
        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .calendar-nav-btn {
          background: rgba(255,255,255,0.05);
          border: none;
          color: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .calendar-nav-btn:hover {
          background: rgba(245,158,11,0.2);
          color: #F59E0B;
        }
        .calendar-month-title {
          font-weight: 800;
          color: #fff;
          font-size: 18px;
          letter-spacing: 0.5px;
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
        }
        .calendar-day-header {
          text-align: center;
          font-size: 12px;
          font-weight: 800;
          color: #F59E0B;
          opacity: 0.7;
          padding-bottom: 10px;
          text-transform: uppercase;
        }
        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #E2E8F0;
          cursor: pointer;
          transition: all 0.2s;
        }
        .calendar-day:hover:not(.disabled) {
          background: rgba(245,158,11,0.15);
          color: #FCD34D;
        }
        .calendar-day.active {
          background: #F59E0B;
          color: #000;
          box-shadow: 0 5px 15px rgba(245, 158, 11, 0.4);
        }
        .calendar-day.today {
          border: 1px solid #F59E0B;
          color: #FCD34D;
        }
        .calendar-day.disabled {
          color: #334155;
          cursor: not-allowed;
          font-weight: 400;
        }
        .calendar-day.different-month {
          opacity: 0.25;
        }

        @keyframes drop-in-list {
          0% { transform: translateY(-8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          .calendar-popover, .dropdown-popover {
            position: fixed;
            top: 50% !important;
            bottom: auto !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 90vw;
            margin: 0;
            z-index: 200001 !important;
            box-shadow: 0 0 100px rgba(0,0,0,1);
            animation: modal-in 0.3s ease-out;
            border: 1px solid rgba(245, 158, 11, 0.4);
            border-radius: 24px;
          }
          .dropdown-popover { width: 85vw; max-width: 340px; }
          .calendar-popover { max-width: 300px; width: 85vw; padding: 16px; }
        }

        @keyframes drop-in {
          0% { transform: translate(-50%, -10px); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        @keyframes modal-in {
          0% { transform: translate(-50%, -45%); opacity: 0; }
          100% { transform: translate(-50%, -50%); opacity: 1; }
        }
        .search-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          position: sticky;
          top: 0;
          z-index: 2;
        }
        .search-wrap .material-symbols-rounded { 
          font-size: 22px; 
          color: #F59E0B;
          opacity: 0.9;
        }
        .search-input {
          background: none;
          border: none;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          font-family: inherit;
          width: 100%;
          outline: none;
        }
        .search-input::placeholder {
          color: #64748B;
        }
        .options-list {
          max-height: 250px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #F59E0B transparent;
        }
        .options-list::-webkit-scrollbar { width: 5px; }
        .options-list::-webkit-scrollbar-thumb { background: #F59E0B; border-radius: 10px; }
        .option-item {
          padding: 14px 20px;
          color: #CBD5E1;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s;
        }
        .option-item:hover {
          background: rgba(245,158,11,0.1);
          color: #fff;
        }
        .option-item.active {
          background: rgba(245,158,11,0.15);
          color: #F59E0B;
          font-weight: 600;
        }
        .no-results {
          padding: 20px;
          text-align: center;
          color: #64748B;
          font-size: 13px;
        }
      `}</style>

      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map(t => {
          const active = tripType === t.key;
          return (
            <button
              key={t.key}
              onClick={() => {
                setTripType(t.key);
                // Reset all fields on tab switch
                setFrom(""); setTo(""); setDate(""); setReturnDate("");
                setDuration(""); setPhone("");
                setAirportTrip(""); setPickupAddress("");
                setDropAddress(""); setAirportName(""); setAirportTime("");
              }}
              type="button"
              className={`tab-btn ${active ? 'active' : 'inactive'}`}
            >
              <span className="material-symbols-rounded">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="form-border-container">
        
        {/* Single Wide Row: From, Swap, Drop, Date, Phone — all side by side */}
        {tripType === "local" ? (
          <div className="airport-fields-row">
            <CustomDropdown
              label="Pickup City"
              icon="location_on"
              value={from}
              onChange={setFrom}
              options={CITIES}
            />
            <CustomDropdown
              label="Duration"
              icon="schedule"
              value={duration}
              onChange={setDuration}
              options={["4 Hours / 40 km", "8 Hours / 80 km", "12 Hours / 120 km", "Full Day"]}
            />
            <CustomDatePicker
              label="Trip Date"
              icon="calendar_today"
              value={date}
              onChange={setDate}
            />
            <div className="input-box" style={{ gridColumn: "1 / -1" }}>
              <div className="icon-box"><span className="material-symbols-rounded">chat</span></div>
              <div className="field-content">
                <span className="field-label">WhatsApp Number</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#F59E0B", whiteSpace: "nowrap" }}>+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }}
                    placeholder="10-digit mobile number"
                    className="field-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        ) : tripType === "roundtrip" ? (
          <div className="airport-fields-row">
            <CustomDropdown
              label="From City"
              icon="location_on"
              value={from}
              onChange={setFrom}
              options={CITIES}
            />
            <CustomDropdown
              label="Drop City"
              icon="location_on"
              value={to}
              onChange={setTo}
              options={CITIES}
              placeholder="Enter Here"
            />
            <CustomDatePicker
              label="Trip Date"
              icon="calendar_today"
              value={date}
              onChange={setDate}
            />
            <CustomDatePicker
              label="Return Date"
              icon="event"
              value={returnDate}
              onChange={setReturnDate}
              minDate={date ? new Date(date) : undefined}
            />
            <div className="input-box">
              <div className="icon-box">
                <span className="material-symbols-rounded">chat</span>
              </div>
              <div className="field-content">
                <span className="field-label">WhatsApp Number</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#F59E0B", whiteSpace: "nowrap" }}>+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }}
                    placeholder="10-digit no."
                    className="field-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

        ) : tripType === "airport" ? (
          <div className="airport-fields-row">
            {/* Trip Direction */}
            <CustomDropdown
              label="Trip Type"
              icon="flight_takeoff"
              value={airportTrip}
              onChange={setAirportTrip}
              options={["Drop to Airport", "Pick from Airport"]}
              placeholder="Select Trip"
            />
            {/* Pickup City */}
            <CustomDropdown
              label="Pickup City"
              icon="my_location"
              value={pickupAddress}
              onChange={setPickupAddress}
              options={GUJARAT_LOCATIONS}
              placeholder="Select Pickup City"
            />
            {/* Drop City */}
            <CustomDropdown
              label="Drop City"
              icon="location_on"
              value={dropAddress}
              onChange={setDropAddress}
              options={GUJARAT_LOCATIONS}
              placeholder="Select Drop City"
            />
            {/* Airport Name */}
            <CustomDropdown
              label="Airport"
              icon="flight"
              value={airportName}
              onChange={setAirportName}
              options={AIRPORTS}
              placeholder="Select Airport"
            />
            {/* Date */}
            <CustomDatePicker
              label="Pick Up Date"
              icon="calendar_today"
              value={date}
              onChange={setDate}
            />
            {/* Time */}
            <CustomTimePicker
              label="Pick Up Time"
              icon="schedule"
              value={airportTime}
              onChange={setAirportTime}
            />
            {/* WhatsApp Number */}
            <div className="input-box">
              <div className="icon-box"><span className="material-symbols-rounded">chat</span></div>
              <div className="field-content">
                <span className="field-label">WhatsApp Number</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#F59E0B", whiteSpace: "nowrap" }}>+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }}
                    placeholder="10-digit number"
                    className="field-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

        ) : (
          <div className="all-fields-row">
            <CustomDropdown
              label="From City"
              icon="location_on"
              value={from}
              onChange={setFrom}
              options={CITIES}
            />
            <button type="button" onClick={swap} className="swap-btn">
              <span className="material-symbols-rounded">swap_horiz</span>
            </button>
            <CustomDropdown
              label="Drop City"
              icon="location_on"
              value={to}
              onChange={setTo}
              options={CITIES}
              placeholder="Enter Here"
            />
            <CustomDatePicker
              label="Trip Date"
              icon="calendar_today"
              value={date}
              onChange={setDate}
            />
            <div className="input-box">
              <div className="icon-box">
                <span className="material-symbols-rounded">chat</span>
              </div>
              <div className="field-content">
                <span className="field-label">WhatsApp Number</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#F59E0B", whiteSpace: "nowrap" }}>+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }}
                    placeholder="10-digit no."
                    className="field-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="submit-btn-row">
          <button type="submit" className="submit-btn">
            🚖 Explore Cab
          </button>
        </div>

      </form>
    </div>
  );
}

