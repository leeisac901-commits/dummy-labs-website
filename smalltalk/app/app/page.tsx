"use client";

import { useState } from "react";
import BottomNav from "../components/bottom-nav";
import PersonCard from "../components/person-card";
import RatingCard from "../components/rating-card";
import DepositModal from "../components/deposit-modal";

type Tab = "discover" | "meetups" | "bets" | "profile";

// ─── Mock data ─────────────────────────────────────────────────

const PEOPLE = [
  {
    id: "1",
    name: "Nadia",
    age: 28,
    bio: "Product designer at a fintech startup. Into ceramics, long walks through the Mission, and arguing about whether hot dogs are sandwiches.",
    rating: 4.8,
    distance: "0.3 mi",
    mutualTopics: ["Design", "Food", "SF neighborhoods"],
    avatarColor: "#7C3AED",
    avatarInitials: "N",
  },
  {
    id: "2",
    name: "Theo",
    age: 31,
    bio: "Researcher studying urban mobility. Coffee shop regular. Former competitive chess player who now only plays blitz.",
    rating: 4.6,
    distance: "0.7 mi",
    mutualTopics: ["Cities", "Chess", "Research"],
    avatarColor: "#0891B2",
    avatarInitials: "T",
  },
  {
    id: "3",
    name: "Camille",
    age: 26,
    bio: "Teaches middle school math by day. Runs a small ceramics studio on weekends. Loves anything that involves making things with your hands.",
    rating: 4.9,
    distance: "0.4 mi",
    mutualTopics: ["Education", "Making", "Ceramics"],
    avatarColor: "#059669",
    avatarInitials: "C",
  },
  {
    id: "4",
    name: "Jordan",
    age: 33,
    bio: "Software engineer who just got back from three months in Oaxaca. Still thinking about the mezcal. Now back in Hayes Valley and ready to actually meet neighbors.",
    rating: 4.4,
    distance: "1.1 mi",
    mutualTopics: ["Travel", "Tech", "Mezcal"],
    avatarColor: "#DC2626",
    avatarInitials: "J",
  },
];

const MEETUPS = [
  {
    id: "m1",
    person: "Priya K.",
    initials: "PK",
    color: "#7C3AED",
    location: "Sightglass Coffee, SoMa",
    time: "Tomorrow, 3:00 PM",
    deposit: 10,
    status: "confirmed" as const,
    rating: null,
  },
  {
    id: "m2",
    person: "Marcus T.",
    initials: "MT",
    color: "#0891B2",
    location: "Dolores Park",
    time: "Thu, Jun 26 · 11:00 AM",
    deposit: 15,
    status: "pending" as const,
    rating: null,
  },
  {
    id: "m3",
    person: "Jess L.",
    initials: "JL",
    color: "#059669",
    location: "Four Barrel Coffee",
    time: "Mon, Jun 16 · 2:00 PM",
    deposit: 10,
    status: "completed" as const,
    rating: 4.5,
  },
  {
    id: "m4",
    person: "Ravi S.",
    initials: "RS",
    color: "#D97706",
    location: "Lands End Trail",
    time: "Sat, Jun 14 · 9:00 AM",
    deposit: 5,
    status: "completed" as const,
    rating: 5.0,
  },
];

const BETS = [
  {
    id: "b1",
    type: "challenge" as const,
    title: "50 meetups by Aug 1",
    current: 34,
    target: 50,
    deadline: "Aug 1, 2026",
    totalPool: 240,
    supporters: 8,
    status: "active" as const,
  },
  {
    id: "b2",
    type: "friend-bet" as const,
    title: "Will Alex hit 100 meetups by year-end?",
    subject: "Alex R.",
    subjectInitials: "AR",
    subjectColor: "#7C3AED",
    yourBet: 20,
    betOn: "yes" as const,
    totalPool: 180,
    deadline: "Dec 31, 2026",
    status: "active" as const,
  },
  {
    id: "b3",
    type: "friend-bet" as const,
    title: "Will Dana keep a 5-week streak?",
    subject: "Dana P.",
    subjectInitials: "DP",
    subjectColor: "#0891B2",
    yourBet: 15,
    betOn: "yes" as const,
    totalPool: 95,
    deadline: "Jul 15, 2026",
    status: "active" as const,
  },
  {
    id: "b4",
    type: "challenge" as const,
    title: "Meet someone new every week for 12 weeks",
    current: 7,
    target: 12,
    deadline: "Aug 30, 2026",
    totalPool: 120,
    supporters: 5,
    status: "active" as const,
  },
];

// ─── Tab components ─────────────────────────────────────────────

function DiscoverTab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPerson, setModalPerson] = useState("");

  const person = PEOPLE[currentIndex];

  if (!person) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✨</div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", margin: "0 0 0.5rem" }}>
          That&apos;s everyone nearby
        </h3>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", margin: 0 }}>
          Check back soon — new people join every day.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h2
          style={{
            fontSize: "1.375rem",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 0.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          Nearby
        </h2>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
          {PEOPLE.length - currentIndex} people around you
        </p>
      </div>

      <PersonCard
        {...person}
        onMeetUp={() => {
          setModalPerson(person.name);
          setModalOpen(true);
        }}
      />

      {/* Progress dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.375rem",
          marginTop: "1rem",
        }}
      >
        {PEOPLE.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentIndex ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background:
                i === currentIndex
                  ? "#F5A623"
                  : i < currentIndex
                  ? "rgba(245,166,35,0.3)"
                  : "rgba(255,255,255,0.12)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>

      {modalOpen && (
        <DepositModal
          personName={modalPerson}
          onConfirm={() => {
            setModalOpen(false);
            setCurrentIndex((i) => i + 1);
          }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

function statusStyle(status: "confirmed" | "pending" | "completed") {
  if (status === "confirmed") return { bg: "rgba(34,197,94,0.1)", color: "#22C55E", border: "rgba(34,197,94,0.2)" };
  if (status === "pending") return { bg: "rgba(245,166,35,0.1)", color: "#F5A623", border: "rgba(245,166,35,0.2)" };
  return { bg: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", border: "rgba(255,255,255,0.08)" };
}

function MeetupsTab() {
  const upcoming = MEETUPS.filter((m) => m.status !== "completed");
  const past = MEETUPS.filter((m) => m.status === "completed");

  function MeetupCard(m: (typeof MEETUPS)[0]) {
    const ss = statusStyle(m.status);
    return (
      <div
        key={m.id}
        style={{
          background: "#1A1A1F",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          padding: "1.125rem",
          marginBottom: "0.75rem",
          display: "flex",
          gap: "0.875rem",
          alignItems: "flex-start",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: m.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {m.initials}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "0.25rem",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
              {m.person}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: ss.color,
                background: ss.bg,
                border: `1px solid ${ss.border}`,
                borderRadius: "20px",
                padding: "2px 8px",
                flexShrink: 0,
              }}
            >
              {m.status === "confirmed"
                ? "Confirmed"
                : m.status === "pending"
                ? "Pending"
                : "Done"}
            </span>
          </div>
          <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", marginBottom: "0.25rem" }}>
            {m.location}
          </div>
          <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
            {m.time}
          </div>
        </div>

        {/* Deposit */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontWeight: 700, fontSize: "1rem", color: "#F5A623" }}>
            ${m.deposit}
          </div>
          <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)" }}>deposit</div>
          {m.rating && (
            <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
              ★ {m.rating}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2
        style={{
          fontSize: "1.375rem",
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 1.25rem",
          letterSpacing: "-0.02em",
        }}
      >
        Your meetups
      </h2>

      {upcoming.length > 0 && (
        <>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Upcoming
          </p>
          {upcoming.map((m) => MeetupCard(m))}
        </>
      )}

      {past.length > 0 && (
        <>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textTransform: "uppercase", margin: "1.25rem 0 0.75rem" }}>
            Completed
          </p>
          {past.map((m) => MeetupCard(m))}
        </>
      )}
    </div>
  );
}

function BetsTab() {
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1.25rem" }}>
        <h2
          style={{
            fontSize: "1.375rem",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 0.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          Prediction market
        </h2>
        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
          Bet on social streaks. Win when people show up.
        </p>
      </div>

      {BETS.map((bet) => (
        <div
          key={bet.id}
          style={{
            background: "#1A1A1F",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            padding: "1.125rem",
            marginBottom: "0.875rem",
          }}
        >
          {bet.type === "challenge" ? (
            /* Your challenge */
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                <div style={{ flex: 1, marginRight: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#F5A623", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                    Your challenge
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", lineHeight: 1.3 }}>
                    {bet.title}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "#F5A623", letterSpacing: "-0.02em" }}>
                    ${bet.totalPool}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>pool</div>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
                    {bet.current} / {bet.target} meetups
                  </span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#22C55E" }}>
                    {Math.round((bet.current / bet.target) * 100)}%
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
                      width: `${(bet.current / bet.target) * 100}%`,
                      background: "linear-gradient(90deg, #22C55E, #4ADE80)",
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
                <span>Deadline: {bet.deadline}</span>
                <span>{bet.supporters} supporters</span>
              </div>
            </>
          ) : (
            /* Friend bet */
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: bet.subjectColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {bet.subjectInitials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.2rem" }}>
                    Friend bet
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#fff", lineHeight: 1.3 }}>
                    {bet.title}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: "1.125rem", color: "#F5A623" }}>
                    ${bet.totalPool}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>pool</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.625rem" }}>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.18)",
                    borderRadius: "10px",
                    padding: "0.625rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginBottom: "2px" }}>Your bet</div>
                  <div style={{ fontWeight: 700, color: "#22C55E", fontSize: "0.9375rem" }}>
                    ${bet.yourBet} YES
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "10px",
                    padding: "0.625rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginBottom: "2px" }}>Deadline</div>
                  <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                    {bet.deadline}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Create a challenge CTA */}
      <button
        style={{
          width: "100%",
          padding: "0.875rem",
          background: "rgba(245,166,35,0.08)",
          border: "1px dashed rgba(245,166,35,0.25)",
          borderRadius: "16px",
          color: "#F5A623",
          fontWeight: 600,
          fontSize: "0.9375rem",
          cursor: "pointer",
          fontFamily: "inherit",
          marginTop: "0.25rem",
        }}
      >
        + Create a challenge
      </button>
    </div>
  );
}

function ProfileTab() {
  const stats = [
    { value: "34", label: "Meetups" },
    { value: "4.8", label: "Rating" },
    { value: "7", label: "Week streak" },
    { value: "$12", label: "Avg deposit" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      {/* Profile header */}
      <div
        style={{
          background: "#1A1A1F",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          padding: "1.5rem",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F5A623, #FFD166)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "#0D0D0F",
            flexShrink: 0,
          }}
        >
          Y
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.02em" }}>
            You
          </div>
          <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
            Hayes Valley, SF
          </div>
          <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                background: "rgba(245,166,35,0.12)",
                color: "#F5A623",
                border: "1px solid rgba(245,166,35,0.2)",
                borderRadius: "20px",
                padding: "2px 8px",
              }}
            >
              7-week streak
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                background: "rgba(34,197,94,0.1)",
                color: "#22C55E",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "20px",
                padding: "2px 8px",
              }}
            >
              Verified
            </span>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.625rem",
          marginBottom: "1rem",
        }}
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: "#1A1A1F",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "14px",
              padding: "0.875rem 0.625rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "1.375rem",
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Rating card */}
      <RatingCard
        overallRating={4.8}
        totalMeetups={34}
        breakdown={{
          punctuality: 4.9,
          engagement: 4.7,
          wouldMeetAgain: 4.8,
        }}
      />

      {/* Deposit history */}
      <div
        style={{
          background: "#1A1A1F",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          padding: "1.25rem",
          marginTop: "1rem",
        }}
      >
        <h3
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: "0 0 1rem",
          }}
        >
          Deposit history
        </h3>
        {[
          { person: "Priya K.", amount: "+$10", type: "Released", color: "#22C55E" },
          { person: "Marcus T.", amount: "-$15", type: "In escrow", color: "#F5A623" },
          { person: "Jess L.", amount: "+$10", type: "Released", color: "#22C55E" },
          { person: "Ravi S.", amount: "+$5", type: "Released", color: "#22C55E" },
        ].map(({ person, amount, type, color }, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.625rem 0",
              borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>{person}</div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>{type}</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: "1rem", color }}>{amount}</div>
          </div>
        ))}
      </div>

      {/* Settings link */}
      <button
        style={{
          width: "100%",
          marginTop: "1rem",
          padding: "0.875rem",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          color: "rgba(255,255,255,0.5)",
          fontWeight: 600,
          fontSize: "0.9375rem",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Settings & account
      </button>
    </div>
  );
}

// ─── App shell ─────────────────────────────────────────────────

export default function AppPage() {
  const [activeTab, setActiveTab] = useState<Tab>("discover");

  return (
    <div
      style={{
        background: "#0D0D0F",
        minHeight: "100vh",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(13,13,15,0.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "0.875rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "7px",
              background: "#F5A623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 700,
              color: "#0D0D0F",
            }}
          >
            ST
          </span>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "-0.01em" }}>
            SmallTalk
          </span>
        </div>

        {/* Notification bell */}
        <button
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <span style={{ fontSize: "16px" }}>🔔</span>
          <span
            style={{
              position: "absolute",
              top: "6px",
              right: "6px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#F5A623",
              border: "1.5px solid #0D0D0F",
            }}
          />
        </button>
      </div>

      {/* Tab content */}
      <div style={{ paddingBottom: "80px" }}>
        {activeTab === "discover" && <DiscoverTab />}
        {activeTab === "meetups" && <MeetupsTab />}
        {activeTab === "bets" && <BetsTab />}
        {activeTab === "profile" && <ProfileTab />}
      </div>

      {/* Bottom nav */}
      <BottomNav active={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
