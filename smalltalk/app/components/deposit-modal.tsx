"use client";

import { useState } from "react";

interface DepositModalProps {
  personName: string;
  onConfirm: (amount: number) => void;
  onClose: () => void;
}

const PRESETS = [5, 10, 15, 20];

export default function DepositModal({ personName, onConfirm, onClose }: DepositModalProps) {
  const [selected, setSelected] = useState<number>(10);
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    setConfirmed(true);
    setTimeout(() => {
      onConfirm(selected);
    }, 1200);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="animate-slide-up"
        style={{
          position: "relative",
          background: "#1A1A1F",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px 24px 0 0",
          padding: "1.5rem 1.5rem 2.5rem",
          maxWidth: "480px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Handle */}
        <div
          style={{
            width: "40px",
            height: "4px",
            borderRadius: "2px",
            background: "rgba(255,255,255,0.15)",
            margin: "0 auto 1.5rem",
          }}
        />

        {confirmed ? (
          /* Success state */
          <div
            className="animate-scale-in"
            style={{
              textAlign: "center",
              padding: "1rem 0 0.5rem",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(34,197,94,0.12)",
                border: "2px solid rgba(34,197,94,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                margin: "0 auto 1rem",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 0.5rem",
              }}
            >
              Request sent!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", margin: 0 }}>
              ${selected} held in escrow. {personName} will be notified.
            </p>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 0.375rem",
                letterSpacing: "-0.01em",
              }}
            >
              Set your deposit
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
                margin: "0 0 1.5rem",
                lineHeight: 1.5,
              }}
            >
              Both you and {personName} put in the same amount. No-show means they keep yours.
            </p>

            {/* Preset amounts */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.625rem",
                marginBottom: "1.25rem",
              }}
            >
              {PRESETS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelected(amount)}
                  style={{
                    padding: "0.875rem 0.5rem",
                    borderRadius: "12px",
                    border: `2px solid ${selected === amount ? "#F5A623" : "rgba(255,255,255,0.08)"}`,
                    background:
                      selected === amount
                        ? "rgba(245,166,35,0.12)"
                        : "rgba(255,255,255,0.04)",
                    color: selected === amount ? "#F5A623" : "rgba(255,255,255,0.6)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    fontFamily: "inherit",
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Info row */}
            <div
              style={{
                background: "rgba(245,166,35,0.07)",
                border: "1px solid rgba(245,166,35,0.15)",
                borderRadius: "12px",
                padding: "0.875rem 1rem",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>💡</span>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Higher deposits attract more serious people. $10 is the most common.
              </p>
            </div>

            {/* Summary */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.25rem",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem" }}>
                Your deposit
              </span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem" }}>
                ${selected}
              </span>
            </div>

            {/* Confirm button */}
            <button
              onClick={handleConfirm}
              className="btn-primary"
              style={{ width: "100%", padding: "0.875rem" }}
            >
              Hold ${selected} &amp; send request
            </button>

            <button
              onClick={onClose}
              style={{
                width: "100%",
                marginTop: "0.625rem",
                padding: "0.75rem",
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.9rem",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
