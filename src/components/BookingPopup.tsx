import { useState, useEffect } from "react";

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      window.location.href = `tel:+918200909915`;
      setIsOpen(false);
    } else {
      alert("Please enter a valid mobile number.");
    }
  };

  return (
    <>
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(5px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.4s ease-out;
        }

        .popup-modal {
          background: #ffffff;
          border-radius: 20px;
          width: 100%;
          max-width: 720px;
          position: relative;
          padding: 32px 36px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .popup-close {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #FCD34D, #F59E0B);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(245,158,11,0.4);
          border: 3px solid #fff;
          transition: transform 0.2s;
        }
        .popup-close:hover {
          transform: scale(1.1);
        }

        .popup-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .popup-avatar {
          width: 64px;
          height: 64px;
          background: #115E59;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .popup-title-area {
          flex: 1;
        }
        
        .popup-title-top {
          font-family: 'Poppins', sans-serif;
          color: #475569;
          font-size: 16px;
          font-weight: 500;
        }
        
        .popup-title-bottom {
          font-family: 'Poppins', sans-serif;
          color: #0F172A;
          font-size: 24px;
          font-weight: 800;
          line-height: 1.2;
        }

        .popup-agent-box {
          background: #F1F5F9;
          padding: 10px 18px;
          border-radius: 12px;
          text-align: right;
        }

        .popup-bullets {
          display: flex;
          gap: 20px;
          margin-bottom: 26px;
          font-family: 'Poppins', sans-serif;
          color: #475569;
          font-size: 15px;
        }

        .popup-bullet {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .popup-form {
          display: flex;
          gap: 12px;
        }

        .popup-input-wrapper {
          flex: 1;
          display: flex;
          border: 1px solid #CBD5E1;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
        }

        .popup-prefix {
          background: #F1F5F9;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          color: #0F172A;
          font-weight: 600;
          border-right: 1px solid #CBD5E1;
        }

        .popup-input {
          flex: 1;
          border: none;
          padding: 14px 16px;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          outline: none;
          color: #0F172A;
        }
        .popup-input::placeholder {
          color: #94A3B8;
        }

        .popup-submit {
          background: linear-gradient(to right, #FCD34D, #F59E0B);
          color: #0F172A;
          border: none;
          padding: 0 32px;
          border-radius: 12px;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(245,158,11,0.3);
          transition: all 0.3s;
        }
        .popup-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(245,158,11,0.4);
        }

        @media (max-width: 640px) {
          .popup-modal { padding: 24px 20px; border-radius: 16px; }
          .popup-header { flex-direction: column; text-align: center; gap: 12px; }
          .popup-agent-box { text-align: center; width: 100%; margin-top: 8px; }
          .popup-bullets { flex-direction: column; gap: 10px; }
          .popup-form { flex-direction: column; }
          .popup-submit { padding: 16px; width: 100%; }
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <div className="popup-overlay" onClick={() => setIsOpen(false)}>
        <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
          <div className="popup-close" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>close</span>
          </div>

          <div className="popup-header">
            <div className="popup-avatar">
              <span className="material-symbols-rounded icon-filled" style={{ fontSize: 36, color: "#fff" }}>support_agent</span>
            </div>
            <div className="popup-title-area">
              <div className="popup-title-top">Clear your doubts &</div>
              <div className="popup-title-bottom">Get Booking Assistance</div>
            </div>
            <div className="popup-agent-box">
              <div style={{ color: "#64748B", fontSize: 13, fontWeight: 500 }}>Talk to our agent</div>
              <div style={{ color: "#F59E0B", fontSize: 22, fontWeight: 900, letterSpacing: 0.5 }}>82009 09915</div>
            </div>
          </div>

          <div className="popup-bullets">
            <div className="popup-bullet">
              <span className="material-symbols-rounded icon-filled" style={{ color: "#10B981", fontSize: 20 }}>check_circle</span>
              Get a personalised route plan
            </div>
            <div className="popup-bullet">
              <span className="material-symbols-rounded icon-filled" style={{ color: "#10B981", fontSize: 20 }}>check_circle</span>
              Learn about pricing for your travel
            </div>
          </div>

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="popup-input-wrapper">
              <div className="popup-prefix">
                🇮🇳 +91 <span className="material-symbols-rounded" style={{ fontSize: 16, color: "#64748B" }}>arrow_drop_down</span>
              </div>
              <input 
                type="tel" 
                className="popup-input" 
                placeholder="Mobile No." 
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
                required
              />
            </div>
            <button type="submit" className="popup-submit">
              Schedule a call
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
