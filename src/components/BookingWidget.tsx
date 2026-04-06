import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth, isToday, startOfToday } from "date-fns";

const CITIES = [
  "Vadodara", "Ahmedabad", "Surat", "Rajkot", "Gandhinagar", "Anand", "Nadiad",
  "Mumbai", "Pune", "Delhi", "Jaipur", "Udaipur", "Mount Abu", "Jodhpur",
  "Dwarka", "Somnath", "Statue of Unity", "Goa", "Shirdi", "Nashik",
];

type TripType = "oneway" | "roundtrip" | "outstation" | "local";

const tabs: { key: TripType; label: string; icon: string }[] = [
  { key: "outstation", label: "Outstation", icon: "directions_car" },
  { key: "local", label: "Local Taxi", icon: "local_taxi" },
  { key: "oneway", label: "One Way", icon: "arrow_forward" },
  { key: "roundtrip", label: "Round Trip", icon: "sync_alt" },
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

export default function BookingWidget() {
  const [tripType, setTripType] = useState<TripType>("outstation");
  const [from, setFrom] = useState("Vadodara");
  const [to, setTo] = useState("Dwarka");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [duration, setDuration] = useState("8 Hours / 80 km");
  const [phone, setPhone] = useState("");
  const [, navigate] = useLocation();

  // Handle URL Params for pre-filling (e.g., from Popular Routes)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pFrom = params.get("from");
    const pTo = params.get("to");
    const pType = params.get("type");

    if (pFrom) setFrom(pFrom);
    if (pTo) setTo(pTo);
    if (pType && ["oneway", "roundtrip", "outstation", "local"].includes(pType)) {
      setTripType(pType as TripType);
    }
  }, []);

  const swap = () => { const t = from; setFrom(to); setTo(t); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          max-width: 1050px;
          margin: 0 auto;
          padding: 10px 20px;
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
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
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
          margin-top: 14px;
        }
        .submit-btn {
          background: linear-gradient(135deg, #FCD34D, #F59E0B);
          border: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-size: 16px;
          font-weight: 700;
          color: #111;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(245, 158, 11, 0.3);
          transition: transform 0.2s;
        }
        .submit-btn:hover {
          transform: scale(1.05);
        }
        /* Mobile overrides */
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
          z-index: 99998;
          display: none;
        }
        @media (max-width: 768px) {
          .modal-overlay { display: block; }
        }

        /* Premium Popover Styles (Shared) */
        .dropdown-popover {
          position: absolute;
          bottom: 100%;
          left: 0;
          width: 100%;
          background: #111827;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-bottom: none;
          border-radius: 12px 12px 0 0;
          z-index: 10000;
          box-shadow: 0 -15px 50px rgba(0,0,0,0.8);
          overflow: hidden;
          animation: pop-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25);
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
          z-index: 99999;
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

        .dropdown-popover {
          min-width: 240px;
          border-radius: 16px 16px 0 0;
          overflow: hidden;
          animation: pop-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25);
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
            <button key={t.key} onClick={() => setTripType(t.key)} type="button" className={`tab-btn ${active ? 'active' : 'inactive'}`}>
              <span className="material-symbols-rounded">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="form-border-container">
        
        {/* Top Row: From / To */}
        <div className="input-row">
          {tripType === "local" ? (
             <CustomDropdown
               label="Pickup City"
               icon="location_on"
               value={from}
               onChange={setFrom}
               options={CITIES}
             />
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Middle Row: Date fields */}
        <div className="input-row">
           {tripType === "local" ? (
             <>
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
             </>
           ) : (
             <>
                <CustomDatePicker
                  label="Trip Date"
                  icon="calendar_today"
                  value={date}
                  onChange={setDate}
                />

                 {tripType === "roundtrip" && (
                   <CustomDatePicker
                     label="Return Date"
                     icon="event"
                     value={returnDate}
                     onChange={setReturnDate}
                     minDate={date ? new Date(date) : undefined}
                   />
                 )}
             </>
           )}
        </div>

        {/* Phone Row: always full-width */}
        <div className="input-row single-item">
           <div className="input-box">
             <div className="icon-box">
                <span className="material-symbols-rounded">chat</span>
             </div>
             <div className="field-content">
               <span className="field-label">Enter WhatsApp Number</span>
               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1.1 }}>
                   <span style={{ fontSize: 11, fontWeight: 800, color: "#fff" }}>IN</span>
                   <span style={{ fontSize: 13, fontWeight: 900, color: "#fff" }}>+91</span>
                 </div>
                 <input 
                    type="tel" 
                    value={phone} 
                    onChange={e => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhone(val);
                    }} 
                    placeholder="Your 10-digit number" 
                    className="field-input" 
                    required 
                  />
               </div>
             </div>
           </div>
        </div>

        {/* Submit Button */}
        <div className="submit-btn-row">
          <button type="submit" className="submit-btn">
            Explore Cab
          </button>
        </div>

      </form>
    </div>
  );
}

