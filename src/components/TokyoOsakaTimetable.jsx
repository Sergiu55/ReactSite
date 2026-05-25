"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const timetableData = [
  {
    period: "Morning departures",
    icon: "🌅",
    fastestTrip: "2 hrs 22 min",
    longestTrip: "3 hrs 10 min",
    earliest: "06:00",
    latest: "11:45",
    departures: 18,
  },
  {
    period: "Afternoon departures",
    icon: "☀️",
    fastestTrip: "2 hrs 22 min",
    longestTrip: "3 hrs 5 min",
    earliest: "12:00",
    latest: "17:50",
    departures: 20,
  },
  {
    period: "Evening departures",
    icon: "🌆",
    fastestTrip: "2 hrs 30 min",
    longestTrip: "3 hrs 15 min",
    earliest: "18:00",
    latest: "20:30",
    departures: 10,
  },
  {
    period: "Night departures",
    icon: "🌙",
    fastestTrip: "2 hrs 45 min",
    longestTrip: "3 hrs 0 min",
    earliest: "21:00",
    latest: "21:30",
    departures: 3,
  },
];

function StatCell({ label, value }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: 80 }}>
      <Typography
        sx={{
          color: "#f5a623",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </Typography>
      <Typography sx={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>
        {value}
      </Typography>
    </Box>
  );
}

export default function TokyoOsakaTimetable({ from = "Tokyo", to = "Osaka" }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <>
      {/* ── Timetable ── */}
      <Box sx={{ bgcolor: "#1a1a1a", width: "100%", py: 6, px: { xs: 2, md: 6 } }}>
        <Box sx={{ maxWidth: 960, mx: "auto" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 22, md: 28 },
              fontWeight: 600,
              textAlign: "center",
              mb: 4,
              letterSpacing: "0.01em",
            }}
          >
            {from} to {to} Train Timetable
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {timetableData.map((row, idx) => (
              <Box
                key={idx}
                onMouseEnter={() => setHoveredRow(idx)}
                onMouseLeave={() => setHoveredRow(null)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  bgcolor: hoveredRow === idx ? "#333" : "#2a2a2a",
                  borderRadius: 2.5,
                  px: 3,
                  py: 2.5,
                  transition: "background-color 0.2s ease",
                  cursor: "default",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, minWidth: 180, flex: "0 0 180px" }}>
                  <Typography sx={{ fontSize: 20 }}>{row.icon}</Typography>
                  <Typography sx={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                    {row.period}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flex: 1, gap: 3, flexWrap: "wrap" }}>
                  <StatCell label="Fastest trip" value={row.fastestTrip} />
                  <StatCell label="Longest trip" value={row.longestTrip} />
                  <StatCell label="Earliest" value={row.earliest} />
                  <StatCell label="Latest" value={row.latest} />
                  <StatCell label="Departures" value={row.departures} />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#f5a623",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 14,
                    px: 2.5,
                    py: 1.5,
                    borderRadius: 1.5,
                    textTransform: "none",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    "&:hover": { bgcolor: "#e09510", transform: "scale(1.03)" },
                    transition: "background-color 0.2s ease, transform 0.1s ease",
                  }}
                >
                  Check prices
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Train Info Section ── */}
      <Box sx={{ width: "100%", py: 8, px: { xs: 2, md: 6 }, bgcolor: "#fff" }}>
        <Box sx={{ maxWidth: 960, mx: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 32 },
              fontWeight: 700,
              color: "#111",
              textAlign: "center",
              mb: 5,
            }}
          >
            {from} to {to} Train Information
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
              alignItems: "flex-start",
            }}
          >
            {/* Text */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9, mb: 2 }}>
                The {from} to {to} train route is one of the most iconic and heavily traveled
                rail corridors in the world. Served by Japan's legendary Shinkansen (bullet
                train), this journey connects Japan's two largest cities in as little as
                2 hours and 22 minutes — making it faster and more convenient than flying
                when you factor in airport transfers and check-in times.
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9, mb: 2 }}>
                The Nozomi is the fastest Shinkansen service on this route, followed by the
                Hikari and Kodama, which make more stops along the way. Whether you are
                traveling for business or leisure, the Shinkansen offers an incredibly smooth,
                punctual, and comfortable experience with stunning views of Mount Fuji on
                clear days.
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9, mb: 2 }}>
                Trains depart from Tokyo Station or Shinagawa Station and arrive at Shin-Osaka
                Station, which is directly connected to the Osaka metro network. With over
                50 departures per day, you are never far from the next train.
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9 }}>
                Book your {from} to {to} Shinkansen tickets in advance through Rail.Way for
                the best prices and guaranteed seat reservations. The Japan Rail Pass is also
                valid on Hikari and Kodama services for unlimited travel.
              </Typography>
            </Box>

            {/* YouTube Video */}
            <Box
              sx={{
                flex: "0 0 340px",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              }}
            >
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/cWiEq5mPTh4"
                title="Tokyo to Osaka by Shinkansen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  width: "100%",
                  height: 260,
                  border: "none",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
