"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqs = [
  {
    question: "How far is Tokyo to Osaka by train?",
    answer:
      "The distance from Tokyo to Osaka by Shinkansen is approximately 515 kilometres (around 320 miles). Despite this distance, the Nozomi bullet train covers it in just 2 hours and 22 minutes, making it one of the fastest long-distance rail journeys in the world.",
  },
  {
    question: "How long is the Tokyo to Osaka train journey?",
    answer:
      "The fastest Tokyo to Osaka train journey takes approximately 2 hours and 22 minutes on the Nozomi Shinkansen. The Hikari service takes around 2 hours 52 minutes, and the Kodama, which stops at every station, takes approximately 4 hours.",
  },
  {
    question: "Which train station in Tokyo should I use?",
    answer:
      "Most Shinkansen services to Osaka depart from Tokyo Station, located in the heart of the city. Shinagawa Station is also a major departure point and can be more convenient if you are staying in southern Tokyo. Both stations are well connected by metro and JR lines.",
  },
  {
    question: "What is the name of the train station in Osaka?",
    answer:
      "Shinkansen trains from Tokyo arrive at Shin-Osaka Station, which is different from Osaka Station. Shin-Osaka is located in northern Osaka and is directly connected to the Osaka Metro Midosuji Line, making it easy to reach any part of the city.",
  },
  {
    question: "How much do Tokyo to Osaka Shinkansen tickets cost?",
    answer:
      "A reserved seat on the Nozomi from Tokyo to Osaka costs approximately ¥13,870 (around $90–95 USD) one way. Unreserved seats on Hikari and Kodama services are slightly cheaper. The Japan Rail Pass offers unlimited travel on Hikari and Kodama for a fixed price and can be excellent value for multi-city trips.",
  },
  {
    question: "What is the difference between Nozomi, Hikari, and Kodama?",
    answer:
      "The Nozomi is the fastest Shinkansen, stopping only at major stations including Shinagawa, Nagoya, Kyoto, and Shin-Osaka. The Hikari makes a few more stops and is covered by the Japan Rail Pass. The Kodama stops at every station along the Tokaido Shinkansen line and is the slowest but most affordable option.",
  },
  {
    question: "Can I see Mount Fuji from the Tokyo to Osaka train?",
    answer:
      "Yes! On a clear day you can see Mount Fuji from the right side of the train (seat D or E) when traveling from Tokyo to Osaka. The best views are approximately 40–50 minutes after departing Tokyo, around the Shin-Fuji area. Morning trains on clear winter days offer the best visibility.",
  },
  {
    question: "Can I buy Tokyo to Osaka Shinkansen tickets on the day?",
    answer:
      "Yes, unreserved tickets for Hikari and Kodama services can be purchased on the day at station ticket machines or counters. However, for Nozomi services and reserved seats, booking in advance through Rail.Way is strongly recommended, especially during peak travel seasons like Golden Week and New Year.",
  },
  {
    question: "Is the Japan Rail Pass valid on the Tokyo to Osaka route?",
    answer:
      "The Japan Rail Pass is valid on Hikari and Kodama Shinkansen services between Tokyo and Osaka but NOT on the Nozomi or Mizuho services. If you plan to travel multiple times between cities, the JR Pass can offer excellent value. Book it through Rail.Way before you arrive in Japan.",
  },
  {
    question: "What are the best tips for booking Tokyo to Osaka train tickets?",
    answer:
      "Book as early as possible for reserved seats, especially during Japanese national holidays. Choose the Nozomi for the fastest journey or Hikari if you have a Japan Rail Pass. Sit on the right side (seats D/E) for Mount Fuji views. Use Rail.Way for a simple and fast booking process with guaranteed seat confirmation.",
  },
];

export default function TokyoOsakaFAQ({ from = "Tokyo", to = "Osaka" }) {
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

        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  "&:hover .faq-question": { color: "#f5a623" },
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
