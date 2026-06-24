interface RatingBreakdown {
  punctuality: number;
  engagement: number;
  wouldMeetAgain: number;
}

interface RatingCardProps {
  overallRating: number;
  totalMeetups: number;
  breakdown: RatingBreakdown;
}

function RatingBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ marginBottom: "0.875rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "6px",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          {label}
        </span>
        <span style={{ fontSize: "0.875rem", color: "#F5A623", fontWeight: 700 }}>
          {value.toFixed(1)}
        </span>
      </div>
      <div
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg, #F5A623, #FFD166)",
            borderRadius: "3px",
            transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function RatingCard({ overallRating, totalMeetups, breakdown }: RatingCardProps) {
  const stars = Math.round(overallRating);
  return (
    <div
      style={{
        background: "#1A1A1F",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "1.25rem",
      }}
    >
      <h3
        style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          margin: "0 0 1rem 0",
        }}
      >
        Your rating
      </h3>

      {/* Overall score */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.25rem",
          paddingBottom: "1.25rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(245,166,35,0.12)",
            border: "2px solid rgba(245,166,35,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.375rem",
              fontWeight: 800,
              color: "#F5A623",
              letterSpacing: "-0.02em",
            }}
          >
            {overallRating.toFixed(1)}
          </span>
        </div>
        <div>
          <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill={s <= stars ? "#F5A623" : "rgba(255,255,255,0.15)"}
              >
                <path d="M6 1l1.236 2.506 2.764.401-2 1.949.472 2.751L6 7.254l-2.472 1.353.472-2.751-2-1.949 2.764-.401z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
            Based on {totalMeetups} meetups
          </span>
        </div>
      </div>

      {/* Breakdown */}
      <RatingBar label="Punctuality" value={breakdown.punctuality} />
      <RatingBar label="Engagement" value={breakdown.engagement} />
      <RatingBar label="Would meet again" value={breakdown.wouldMeetAgain} />
    </div>
  );
}
