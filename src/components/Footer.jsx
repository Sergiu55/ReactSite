"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

const footerLinks = [
  { label: "Trains from Tokyo to Osaka", href: "/trains/tokyo-osaka" },
  { label: "Trains from Chisinau to Balti", href: "/trains/chisinau-balti" },
  { label: "Trains from Balti to Iasi", href: "/trains/balti-iasi" },
  { label: "Trains from Iasi to Balti", href: "/trains/iasi-balti" },
  { label: "Trains from Balti to Bucuresti", href: "/trains/balti-bucuresti" },
  { label: "Trains from Bucuresti to Balti", href: "/trains/bucuresti-balti" },
  { label: "Trains from Balti to Odessa", href: "/trains/balti-odessa" },
  { label: "Trains from Odessa to Balti", href: "/trains/odessa-balti" },
  { label: "Trains from Balti to Kiev", href: "/trains/balti-kiev" },
  { label: "Trains from Kiev to Balti", href: "/trains/kiev-balti" },
  { label: "Trains from Balti to Moscova", href: "/trains/balti-moscova" },
  { label: "Trains from Moscova to Balti", href: "/trains/moscova-balti" },
  { label: "Trains from Balti to Cluj", href: "/trains/balti-cluj" },
  { label: "Trains from Cluj to Balti", href: "/trains/cluj-balti" },
  { label: "Trains from Balti to Timisoara", href: "/trains/balti-timisoara" },
  { label: "Trains from Timisoara to Balti", href: "/trains/timisoara-balti" },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0a0a0a", width: "100%" }}>

      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 1.5,
        }}
      >
        {footerLinks.map((link, i) => (
          <Typography
            key={i}
            component={Link}
            href={link.href}
            sx={{
              fontSize: 12,
              color: i >= 12 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)",
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": { color: "#f5a623" },
              transition: "color 0.15s",
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Box>

      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#fff", mb: 0.5 }}>
            Rail.Way SRL (OC 1451)
          </Typography>
          <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            Str. Independentei 1, Balti, Moldova, MD-3100
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#fff", mb: 0.5 }}>
            Rail.Way SRL (1885055)
          </Typography>
          <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            Str. Stefan cel Mare 10, Balti, Moldova, MD-3100
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: { md: "flex-end" }, gap: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 2,
              px: 2,
              py: 0.8,
              cursor: "pointer",
              "&:hover": { borderColor: "rgba(255,255,255,0.4)" },
            }}
          >
            <Typography sx={{ fontSize: 13, color: "#fff" }}>🌐 English</Typography>
            <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>∨</Typography>
          </Box>
          <Typography
            sx={{
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              cursor: "pointer",
              "&:hover": { color: "#fff" },
            }}
          >
            Customer Support
          </Typography>
        </Box>
      </Box>

      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: 2.5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>
          Rail.Way ©
        </Typography>
        <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
          All Rights Reserved © 2026
        </Typography>
        <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)", flex: 1, textAlign: { md: "right" } }}>
          Rail.Way is a reservation service for booking train tickets online. Rail.Way is not a rail carrier and does not own or operate any trains.
        </Typography>
      </Box>

    </Box>
  );
}
