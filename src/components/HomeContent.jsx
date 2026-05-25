"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  wrapperSx,
  descriptionBoxSx,
  descriptionTextSx,
  bannerWrapperSx,
  bannerOverlaySx,
  bannerContentSx,
  bannerTitleSx,
  cardsWrapperSx,
  cardOverlaySx,
  cardContentSx,
  cardAccentSx,
  cardTitleSx,
  cardTextSx,
  cardRightOverlaySx,
  cardRightTextSx,
} from "./HomeContent.styles";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function HomeContent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/articles?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Strapi data:", JSON.stringify(data.data));
        setArticles(data.data || []);
      });
  }, []);

  const getImage = (article) => {
    const slides = article?.Slides;
    if (!slides) return "";
    const slide = Array.isArray(slides) ? slides[0] : slides;
    const url = slide?.url || slide?.formats?.medium?.url || slide?.formats?.large?.url;
    return url || "";
  };

  const banner = articles.find((a) => a.Title?.includes("free app"));
  const cardLeft = articles.find((a) => a.Title?.includes("Earn Cash"));
  const cardRight = articles.find((a) => a.Title?.includes("Fast"));

  const bannerImg = getImage(banner);
  const cardLeftImg = getImage(cardLeft);
  const cardRightImg = getImage(cardRight);

  return (
    <Box sx={wrapperSx}>
      <Box sx={descriptionBoxSx}>
        <Typography sx={descriptionTextSx}>
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

      <Box sx={bannerWrapperSx}>
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
            backgroundImage: bannerImg ? `url('${bannerImg}')` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={bannerOverlaySx} />
          <Box sx={bannerContentSx}>
            <Typography sx={bannerTitleSx}>
              Our free app for every step of your journey <br />
              travel planning has never been easier!
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={cardsWrapperSx}>
        <Box
          sx={{
            flex: 2,
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            minHeight: 320,
            bgcolor: "#333",
            backgroundImage: cardLeftImg ? `url('${cardLeftImg}')` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={cardOverlaySx} />
          <Box sx={cardContentSx}>
            <Box sx={cardAccentSx} />
            <Typography sx={cardTitleSx}>Earn Cash with Every Trip!</Typography>
            <Typography sx={cardTextSx}>
              Book your train tickets and stack up rewards. Your cash activates automatically
              once you've completed your journey — then use it to slash the cost of your next adventure.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            minHeight: 320,
            bgcolor: "#1a1a2e",
            backgroundImage: cardRightImg ? `url('${cardRightImg}')` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={cardRightOverlaySx} />
          <Box sx={cardContentSx}>
            <Typography sx={cardTitleSx}>Fast and Modern</Typography>
            <Typography sx={cardRightTextSx}>
              Amazing high-speed rail networks span Europe and Asia. There is no better way
              to travel than on these lightning-fast trains.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", overflow: "hidden", pt: 4, pb: 8, px: { xs: 2, md: 3 } }}>
        <Typography
          sx={{
            position: "absolute",
            bottom: -70,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: 60, md: 120 },
            fontWeight: 900,
            color: "rgba(0,0,0,0.08)",
            whiteSpace: "nowrap",
            userSelect: "none",
            letterSpacing: "0.05em",
          }}
        >
          RAIL.WAY
        </Typography>
        <Box sx={{ maxWidth: 960, mx: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 36 },
              fontWeight: 700,
              color: "#111",
              mb: 3,
              lineHeight: 1.2,
              maxWidth: 700,
            }}
          >
            The Most Convenient Way to Book Train Tickets Online
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "#444",
              mb: 6,
              maxWidth: 420,
              lineHeight: 1.6,
              pl: 2,
              borderLeft: "3px solid #f5a500",
            }}
          >
            Rail.Way is a global independent online reservation service agency for train tickets
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.9 }}>
              Our goal is to help you choose the most comfortable trains and to see the types of seats so you can make a better choice for your trip.
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.9 }}>
              We do not own or operate any of the trains or rail stations but provide top quality agency services to our customers.
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.9 }}>
              Rail.Way offers you the easiest way to book train tickets online across the world, including Europe, Asia, Australia, the Americas.
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.9 }}>
              Rail.Way also has a real human support service, so you can utilize our advice and make changes to your plans if needed.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
