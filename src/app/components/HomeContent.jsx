"use client";

import { Box, Typography } from "@mui/material";

export default function HomeContent() {
  return (
    <Box sx={{ bgcolor: "#fff", width: "100%" }}>

      {/* SECTION 1 — Text full width */}
<Box
  sx={{
    maxWidth: 960,
    mx: "auto",
    px: { xs: 2, md: 3 },
    pt: 4,
    pb: 4,
    borderBottom: "1px solid #e5e5e5",
  }}
>
  <Typography sx={{ fontSize: 14, color: "#555", lineHeight: 1.9 }}>
  Rail.Way is a reservation service for booking train tickets online. It is not a rail
  carrier, does not own or operate any trains, and does not represent an official
  website of any railway company. It is a commercial business that makes it easier for
  you to book train tickets online. Rail.Way offers the best prices for train tickets
  across Europe, Asia, and the Americas. Book your journey in minutes and enjoy a
  seamless travel experience from start to finish. Our platform is trusted by millions
  of travelers worldwide. Whether you are planning a short trip or a long adventure,
  Rail.Way has everything you need to make your journey comfortable and affordable.
</Typography>
</Box>

      {/* SECTION 2 — Banner cu poză + text */}
      <Box sx={{ maxWidth: 960, mx: "auto", px: { xs: 2, md: 3 }, pb: 6 }}>
        <Box
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            minHeight: 200,
            bgcolor: "#222",
            display: "flex",
            alignItems: "center",
            px: { xs: 3, md: 5 },
            // Pozele
            backgroundImage: "url('/firstback.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography sx={{ fontSize: { xs: 17, md: 22 }, fontWeight: 700, color: "#fff", lineHeight: 1.5 }}>
              Our free app for every step of your journey <br />
              travel planning has never been easier!
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* SECTION 3 — 2 carduri cu poze */}
      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          px: { xs: 2, md: 3 },
          pb: 6,
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Card mare stanga */}
        <Box
          sx={{
            flex: 2,
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            minHeight: 320,
            bgcolor: "#333",
            // Poza
            backgroundImage: "url('/secondback.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.45)" }} />
          <Box sx={{ position: "absolute", bottom: 0, left: 0, p: 3, zIndex: 1 }}>
            <Box sx={{ width: 4, height: 36, bgcolor: "#f5a500", borderRadius: 1, mb: 1.5 }} />
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#fff", mb: 1 }}>
              Earn Cash with Every Trip!
            </Typography>
            <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 400 }}>
              Book your train tickets and stack up rewards. Your cash activates automatically
              once you've completed your journey — then use it to slash the cost of your next adventure.
            </Typography>
          </Box>
        </Box>

        {/* Card mic dreapta */}
        <Box
          sx={{
            flex: 1,
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            minHeight: 320,
            bgcolor: "#1a1a2e",
            // Poza
            backgroundImage: "url('/thirdback.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }} />
          <Box sx={{ position: "absolute", bottom: 0, left: 0, p: 3, zIndex: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#fff", mb: 1 }}>
              Fast and Modern
            </Typography>
            <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
              Amazing high-speed rail networks span Europe and Asia. There is no better way
              to travel than on these lightning-fast trains.
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}
