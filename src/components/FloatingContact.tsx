import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <style>{`
        .floating-contact-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99998;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .float-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,0.3);
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s, opacity 0.3s;
          text-decoration: none;
          color: white;
          border: none;
        }

        .float-btn:hover {
          transform: scale(1.1);
        }

        .wa-btn {
          background: #25D366;
        }
        
        .call-btn {
          background: #1a1a2e; /* Exactly matches Home CTA */
          color: #F59E0B; /* Exactly matches Home CTA */
        }

        .toggle-btn {
          background: linear-gradient(135deg, #FCD34D, #F59E0B); /* Brand Gold Gradient */
          color: #0F172A; /* Dark Navy icon */
          box-shadow: 0 8px 24px rgba(245,158,11,0.4);
        }

        /* Animation states */
        .sub-btn {
          opacity: 0;
          transform: translateY(20px) scale(0.5);
          pointer-events: none;
          position: absolute;
          bottom: 0; /* Keeps them anchored to the bottom when closed */
        }

        .sub-btn.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          position: relative;
        }
        
        .sub-btn.open:hover {
          transform: translateY(0) scale(1.1);
        }

        /* Toggle Icon Animations */
        .toggle-icon {
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .toggle-btn.open .toggle-icon {
          transform: rotate(90deg);
        }
      `}</style>

      <div className="floating-contact-container">
        <a href="https://wa.me/918200909915" target="_blank" rel="noreferrer" className={`float-btn sub-btn wa-btn ${isOpen ? 'open' : ''}`} title="WhatsApp Us">
          <WhatsAppIcon size={30} />
        </a>
        
        <a href="tel:+918200909915" className={`float-btn sub-btn call-btn ${isOpen ? 'open' : ''}`} title="Call Us">
          <span className="material-symbols-rounded icon-filled" style={{ fontSize: 30 }}>call</span>
        </a>

        <button className={`float-btn toggle-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} title="Contact Actions">
          <span className="material-symbols-rounded toggle-icon" style={{ fontSize: 34 }}>
            {isOpen ? "close" : "forum"}
          </span>
        </button>
      </div>
    </>
  );
}
