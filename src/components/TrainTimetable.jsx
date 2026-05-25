"use client";

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const timetableData = [
  {
    period: "Morning departures",
    icon: "🌅",
    fastestTrip: "2 hrs 39 min",
    longestTrip: "3 hrs 13 min",
    earliest: "06:30",
    latest: "11:39",
    departures: 14,
  },
  {
    period: "Afternoon departures",
    icon: "☀️",
    fastestTrip: "2 hrs 39 min",
    longestTrip: "6 hrs 9 min",
    earliest: "12:00",
    latest: "17:39",
    departures: 14,
  },
  {
    period: "Evening departures",
    icon: "🌆",
    fastestTrip: "2 hrs 39 min",
    longestTrip: "5 hrs 0 min",
    earliest: "18:00",
    latest: "20:09",
    departures: 9,
  },
  {
    period: "Night departures",
    icon: "🌙",
    fastestTrip: "3 hrs 4 min",
    longestTrip: "3 hrs 13 min",
    earliest: "22:00",
    latest: "22:09",
    departures: 2,
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

export default function TrainTimetable({ from = "Chisinau", to = "Balti" }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <>
      {/* ── Timetable – full width black background ── */}
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    minWidth: 180,
                    flex: "0 0 180px",
                  }}
                >
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
                    "&:hover": {
                      bgcolor: "#e09510",
                      transform: "scale(1.03)",
                    },
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
                One of the best ways to travel from {from} to {to} is by train. The journey
                connects these two major Moldovan cities with reliable and comfortable rail
                services operated by Calea Ferată din Moldova (CFM).
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9, mb: 2 }}>
                The {from} to {to} train journey takes approximately 2 hours and 39 minutes
                on the fastest services. Whether you are a first-time visitor or a regular
                commuter, this comprehensive guide covers everything you need to know about
                the {from} to {to} route — from train times and ticket prices to station
                details and onboard amenities.
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9, mb: 2 }}>
                The train travels through the heart of the Moldovan countryside, passing
                charming villages and scenic landscapes as you head north. It is a comfortable
                experience that offers one of the most affordable and practical ways to travel
                between the two cities.
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.9 }}>
                Planning your trip in advance and booking through Rail.Way makes the whole
                process straightforward, with seats available up to several months ahead of
                your travel date. Rail.Way offers the best prices and a seamless booking
                experience from start to finish.
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
                src="https://www.youtube.com/embed/uc2J2spN5Rg"
                title="A Ride That's Worth a Whole Journey | Rail Ninja"
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
