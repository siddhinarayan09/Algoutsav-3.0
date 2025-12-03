// src/components/CollegeMap.tsx
import React from "react";

const CollegeMap: React.FC = () => {
  const iframeSrc =
   "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1403.8653272933752!2d84.90132040403282!3d22.253358616828567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764753468351!5m2!1sen!2sin";

  return (
    <div
      className="mt-8 rounded-lg overflow-hidden border-2 h-64 relative"
      style={{
        borderColor: "rgba(255, 20, 20, 0.18)",
        boxShadow:
          "0 0 24px rgba(255,10,10,0.18), inset 0 0 12px rgba(255,10,10,0.05)",
        background: "#050505",
      }}
    >
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          borderRadius: 8,
          boxSizing: "border-box",
          border: "1px solid rgba(255,10,10,0.12)",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(12,0,0,0.88) 100%)",
        }}
      >
        <iframe
          title="College location"
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{
            border: 0,
            display: "block",
            filter: "grayscale(.15) contrast(1.05) brightness(.65)",
            transformOrigin: "center",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            mixBlendMode: "screen",
            background:
              "radial-gradient(1200px 300px at 10% 10%, rgba(255,0,0,0.03), transparent 6%), linear-gradient(180deg, rgba(255,0,0,0.012), rgba(0,0,0,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -100%)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="36"
            height="48"
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 6px 16px rgba(255,0,0,0.18))",
            }}
          >
            <path
              d="M12 0C7.032 0 3 4.032 3 9c0 6.75 7.5 15.75 8.04 16.35a1 1 0 0 0 1.92 0C13.5 24.75 21 15.75 21 9c0-4.968-4.032-9-9-9z"
              fill="#0b0000"
              stroke="rgba(255,10,10,0.95)"
              strokeWidth={0.9}
            />
            <circle cx="12" cy="9" r="3.6" fill="#ff2b2b" />
          </svg>
        </div>

        <div
          style={{
            position: "absolute",
            left: 14,
            top: 10,
            pointerEvents: "none",
            color: "#ff4b4b",
            fontSize: 12,
            fontWeight: 600,
            textShadow: "0 0 8px rgba(255,0,0,0.25)",
            letterSpacing: 0.6,
            opacity: 0.95,
          }}
        >
          LOCATION — NIT ROURKELA
        </div>
      </div>
    </div>
  );
};

export default CollegeMap;
