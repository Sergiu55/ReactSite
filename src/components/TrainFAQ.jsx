"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqs = [
  {
    question: "How far is Chisinau to Balti by train?",
    answer:
      "The distance from Chisinau to Balti by train is approximately 130 kilometres (around 81 miles). The train route goes through the heart of Moldova, passing through several towns and villages along the way.",
  },
  {
    question: "How long is the Chisinau to Balti train journey?",
    answer:
      "The fastest Chisinau to Balti train journey takes approximately 2 hours and 39 minutes. Some services take longer depending on the number of stops, with the slowest journey taking around 3 hours and 13 minutes.",
  },
  {
    question: "Which train station in Chisinau should I use?",
    answer:
      "All trains from Chisinau to Balti depart from Chisinau Central Railway Station (Gara Feroviară Chișinău), located in the city center at Alecu Russo Street. The station is well connected by public transport and taxi services.",
  },
  {
    question: "What is the name of the train station in Balti?",
    answer:
      "The main train station in Balti is Bălți-Slobozia station. It is located in the southern part of the city. From the station you can take a local bus or taxi to reach the city center, which is about 3–4 km away.",
  },
  {
    question: "How much do Chisinau to Balti train tickets cost?",
    answer:
      "Chisinau to Balti train tickets are very affordable. Prices typically start from around 30–60 MDL (Moldovan Leu) for a standard seat. Prices may vary depending on the train type, travel class, and how far in advance you book.",
  },
  {
    question: "How many trains run from Chisinau to Balti per day?",
    answer:
      "There are up to 39 departures per day from Chisinau to Balti spread across morning, afternoon, evening, and night time slots. Morning and afternoon periods each have 14 departures, making it easy to find a convenient time to travel.",
  },
  {
    question: "What are the different travel classes on the Chisinau to Balti train?",
    answer:
      "Trains on the Chisinau to Balti route are operated by Calea Ferată din Moldova (CFM) and typically offer standard class seating. Some services may have reserved and unreserved seating options. It is recommended to book in advance to secure your preferred seat.",
  },
  {
    question: "Can I buy Chisinau to Balti train tickets on the day?",
    answer:
      "Yes, you can usually buy tickets on the day of travel at Chisinau Central Station ticket counters. However, to guarantee your seat and get the best price, it is recommended to book in advance through Rail.Way.",
  },
  {
    question: "What is the best time to travel from Chisinau to Balti by train?",
    answer:
      "Morning departures (06:30–11:39) are generally the most popular and offer the most choice with 14 trains. If you prefer a quieter journey, evening trains (18:00–20:09) with 9 departures are a good option. Night trains (22:00–22:09) are available for late travelers.",
  },
  {
    question: "What are the best tips for booking Chisinau to Balti train tickets?",
    answer:
      "Book as early as possible to secure the best prices and your preferred seat. Use Rail.Way for a simple and fast booking process. Check the timetable above for the fastest services and choose morning or afternoon departures for the most flexibility.",
  },
];

export default function TrainFAQ({ from = "Chisinau", to = "Balti" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <Box sx={{ width: "100%", bgcolor: "#f5f5f5", py: 8, px: { xs: 2, md: 6 } }}>
      <Box sx={{ maxWidth: 960, mx: "auto" }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 30 },
            fontWeight: 700,
            color: "#111",
            textAlign: "center",
            mb: 5,
          }}
        >
          Popular questions about {from} to {to} Trains
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, idx) => (
            <Box
              key={idx}
              sx={{
                borderBottom: "1px solid #ddd",
                "&:first-of-type": { borderTop: "1px solid #ddd" },
              }}
            >
              <Box
                onClick={() => toggle(idx)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2.5,
                  cursor: "pointer",
                  "&:hover": { "& .faq-question": { color: "#f5a623" } },
                }}
              >
                <Typography
                  className="faq-question"
                  sx={{
                    fontSize: { xs: 14, md: 15 },
                    fontWeight: 500,
                    color: openIndex === idx ? "#f5a623" : "#111",
                    transition: "color 0.2s",
                    pr: 2,
                  }}
                >
                  {faq.question}
                </Typography>
                {openIndex === idx ? (
                  <KeyboardArrowUpIcon sx={{ color: "#f5a623", flexShrink: 0 }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ color: "#f5a623", flexShrink: 0 }} />
                )}
              </Box>

              {openIndex === idx && (
                <Box sx={{ pb: 2.5, pr: 4 }}>
                  <Typography sx={{ fontSize: 13, color: "#555", lineHeight: 1.9 }}>
                    {faq.answer}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
