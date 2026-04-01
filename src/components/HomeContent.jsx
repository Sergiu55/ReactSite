"use client";

import { Box, Typography } from "@mui/material";
import {
  wrapperSx,
  descriptionBoxSx,
  descriptionTextSx,
  bannerWrapperSx,
  bannerBoxSx,
  bannerOverlaySx,
  bannerContentSx,
  bannerTitleSx,
  cardsWrapperSx,
  cardLeftSx,
  cardOverlaySx,
  cardContentSx,
  cardAccentSx,
  cardTitleSx,
  cardTextSx,
  cardRightSx,
  cardRightOverlaySx,
  cardRightTextSx,
} from "./HomeContent.styles";

export default function HomeContent() {
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
        <Box sx={bannerBoxSx}>
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
        <Box sx={cardLeftSx}>
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

        <Box sx={cardRightSx}>
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
    </Box>
  );
}
