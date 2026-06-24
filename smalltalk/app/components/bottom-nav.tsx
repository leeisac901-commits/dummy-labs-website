"use client";

type Tab = "discover" | "meetups" | "bets" | "profile";

interface BottomNavProps {
  active: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "discover", label: "Discover", icon: "⚡" },
  { id: "meetups", label: "Meetups", icon: "📅" },
  { id: "bets", label: "Bets", icon: "🎯" },
  { id: "profile", label: "Profile", icon: "👤" },
];

export default function BottomNav({ active, onTabChange }: BottomNavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "rgba(13,13,15,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
                padding: "0.75rem 0.5rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.15s",
                position: "relative",
              }}
            >
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "32px",
                    height: "2px",
                    borderRadius: "0 0 2px 2px",
                    background: "#F5A623",
                  }}
                />
              )}
              <span style={{ fontSize: "20px", lineHeight: 1 }}>{tab.icon}</span>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#F5A623" : "rgba(255,255,255,0.4)",
                  fontFamily: "inherit",
                  transition: "color 0.15s",
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
