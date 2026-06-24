"use client";

interface PersonCardProps {
  name: string;
  age: number;
  bio: string;
  rating: number;
  distance: string;
  mutualTopics: string[];
  avatarColor: string;
  avatarInitials: string;
  onMeetUp: () => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={star <= Math.round(rating) ? "#F5A623" : "rgba(255,255,255,0.2)"}
        >
          <path d="M6 1l1.236 2.506 2.764.401-2 1.949.472 2.751L6 7.254l-2.472 1.353.472-2.751-2-1.949 2.764-.401z" />
        </svg>
      ))}
    </span>
  );
}

export default function PersonCard({
  name,
  age,
  bio,
  rating,
  distance,
  mutualTopics,
  avatarColor,
  avatarInitials,
  onMeetUp,
}: PersonCardProps) {
  return (
    <div
      style={{
        background: "#1A1A1F",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Avatar section */}
      <div
        style={{
          height: "180px",
          background: `linear-gradient(135deg, ${avatarColor}33 0%, ${avatarColor}11 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: avatarColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#0D0D0F",
            border: "3px solid rgba(255,255,255,0.1)",
          }}
        >
          {avatarInitials}
        </div>
        {/* Distance badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(13,13,15,0.8)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "4px 10px",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span style={{ fontSize: "10px" }}>📍</span>
          {distance}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.625rem" }}>
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {name}, {age}
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(245,166,35,0.12)",
              border: "1px solid rgba(245,166,35,0.2)",
              borderRadius: "20px",
              padding: "4px 10px",
            }}
          >
            <StarRating rating={rating} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#F5A623" }}>
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.55,
            margin: "0 0 1rem 0",
          }}
        >
          {bio}
        </p>

        {/* Topics */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.125rem" }}>
          {mutualTopics.map((topic) => (
            <span
              key={topic}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
              }}
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.625rem" }}>
          <button
            style={{
              flex: 1,
              padding: "0.625rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              color: "rgba(255,255,255,0.5)",
              fontSize: "1.25rem",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            title="Skip"
          >
            ✕
          </button>
          <button
            onClick={onMeetUp}
            style={{
              flex: 3,
              padding: "0.625rem",
              background: "#F5A623",
              border: "none",
              borderRadius: "12px",
              color: "#0D0D0F",
              fontSize: "0.9375rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "opacity 0.15s",
              boxShadow: "0 0 20px rgba(245,166,35,0.3)",
            }}
          >
            Meet up? →
          </button>
        </div>
      </div>
    </div>
  );
}
