"use client";

import { useState } from "react";
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Typography, Divider, useMediaQuery, useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const navLinks = [
  {
    label: "European Trains",
    submenu: {
      title: "European Trains",
      items: [
        {
          name: "Moldova",
          routes: [
            { label: "Chisinau - Balti", href: "/trains/chisinau-balti" },
            { label: "Balti - Chisinau", href: "/trains/balti-chisinau" },
            { label: "Chisinau - Tiraspol", href: "/trains/chisinau-tiraspol" },
          ],
        },
        {
          name: "Romania",
          routes: ["Bucuresti - Cluj", "Cluj - Bucuresti", "Bucuresti - Timisoara"],
        },
        {
          name: "Russia",
          routes: ["Moscova - Sankt Petersburg", "Sankt Petersburg - Moscova", "Moscova - Kazan"],
        },
        {
          name: "Ukraine",
          routes: ["Kiev - Lviv", "Lviv - Kiev", "Kiev - Odessa"],
        },
        {
          name: "Germany",
          routes: ["Berlin - Munich", "Munich - Berlin", "Berlin - Hamburg"],
        },
      ],
    },
  },
  {
    label: "Asia & Oceania",
    submenu: {
      title: "Asia & Oceania",
      items: [
        {
          name: "Japan",
          routes: [
            { label: "Tokyo - Osaka", href: "/trains/tokyo-osaka" },
            { label: "Osaka - Tokyo", href: "/trains/osaka-tokyo" },
            { label: "Tokyo - Kyoto", href: "/trains/tokyo-kyoto" },
          ],
        },
        { name: "China", routes: ["Beijing - Shanghai", "Shanghai - Beijing", "Beijing - Guangzhou"] },
        { name: "India", routes: ["Mumbai - Delhi", "Delhi - Mumbai", "Mumbai - Bangalore"] },
        { name: "Australia", routes: ["Sydney - Melbourne", "Melbourne - Sydney", "Sydney - Brisbane"] },
        { name: "Thailand", routes: ["Bangkok - Chiang Mai", "Chiang Mai - Bangkok", "Bangkok - Pattaya"] },
      ],
    },
  },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeCountry, setActiveCountry] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (link) => {
    if (link.submenu) {
      setActiveMenu(link.label);
      setActiveSubmenu(link.submenu);
      setActiveCountry(link.submenu.items[0]);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
    setActiveCountry(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "#0a0a0a",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          height: 56,
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 960,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
            minHeight: "56px !important",
          }}
        >
          <Typography
            component={Link}
            href="/"
            onClick={handleClose}
            sx={{
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.12em",
              color: "#fff",
              textDecoration: "none",
              textTransform: "uppercase",
              mr: 4,
              flexShrink: 0,
              "& span": { opacity: 0.5 },
            }}
          >
            RAIL<span>.</span>WAY
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 0.5, flex: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={() => activeMenu === link.label ? handleClose() : handleMenuOpen(link)}
                  sx={{
                    color: activeMenu === link.label ? "#f5a500" : "rgba(255,255,255,0.75)",
                    fontSize: 13,
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: 1,
                    px: 1.5,
                    "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.07)" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              <>
                <Button
                  component={Link}
                  href="#"
                  startIcon={<ConfirmationNumberOutlinedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 13,
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: 1,
                    "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.07)" },
                  }}
                >
                  My Tickets
                </Button>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.15)", mx: 0.5 }} />
                <Button
                  startIcon={<LanguageIcon sx={{ fontSize: 16 }} />}
                  endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 13,
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: 1,
                    "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.07)" },
                  }}
                >
                  $ USD
                </Button>
              </>
            )}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "rgba(255,255,255,0.8)" }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mega Menu */}
      {activeMenu && activeSubmenu && (
        <>
          <Box onClick={handleClose} sx={{ position: "fixed", inset: 0, zIndex: 998 }} />
          <Box
            sx={{
              position: "fixed",
              top: 56,
              left: 0,
              right: 0,
              zIndex: 999,
              bgcolor: "#111",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Coloana 1 — Menu principal */}
            <Box sx={{ width: 260, borderRight: "1px solid rgba(255,255,255,0.08)", p: 3 }}>
              <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.4)", mb: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Menu
              </Typography>
              {navLinks.map((link) => (
                <Box
                  key={link.label}
                  onClick={() => handleMenuOpen(link)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 1.2, px: 1,
                    borderRadius: 1,
                    cursor: "pointer",
                    color: activeMenu === link.label ? "#f5a500" : "rgba(255,255,255,0.75)",
                    "&:hover": { color: "#f5a500" },
                    transition: "color 0.15s",
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: activeMenu === link.label ? 600 : 400 }}>
                    {link.label}
                  </Typography>
                  <ArrowForwardIcon sx={{ fontSize: 16, color: activeMenu === link.label ? "#f5a500" : "rgba(255,255,255,0.3)" }} />
                </Box>
              ))}
            </Box>

            {/* Coloana 2 — Tari */}
            <Box sx={{ width: 240, borderRight: "1px solid rgba(255,255,255,0.08)", p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                  {activeSubmenu.title}
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: 14, color: "#f5a500" }} />
              </Box>
              {activeSubmenu.items.map((country, i) => (
                <Box
                  key={i}
                  onClick={() => setActiveCountry(country)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 1, px: 1,
                    borderRadius: 1,
                    cursor: "pointer",
                    color: activeCountry?.name === country.name ? "#f5a500" : "rgba(255,255,255,0.75)",
                    "&:hover": { color: "#f5a500" },
                    transition: "color 0.15s",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>{country.name}</Typography>
                  <ArrowForwardIcon sx={{ fontSize: 14, opacity: 0.4 }} />
                </Box>
              ))}
            </Box>

            {/* Coloana 3 — Rute */}
            {activeCountry && (
              <Box sx={{ flex: 1, p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    Trains in {activeCountry.name}
                  </Typography>
                  <ArrowForwardIcon sx={{ fontSize: 14, color: "#f5a500" }} />
                </Box>
                {activeCountry.routes.map((route, i) => {
                  const routeLabel = typeof route === "string" ? route : route.label;
                  const routeHref = typeof route === "string" ? "#" : route.href;
                  return (
                    <Link
                      key={i}
                      href={routeHref}
                      onClick={handleClose}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          py: 1, px: 1,
                          borderRadius: 1,
                          cursor: "pointer",
                          color: i === 0 ? "#f5a500" : "rgba(255,255,255,0.75)",
                          "&:hover": { color: "#f5a500" },
                          transition: "color 0.15s",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <Typography sx={{ fontSize: 13 }}>{routeLabel}</Typography>
                        <ArrowForwardIcon sx={{ fontSize: 14, opacity: 0.4 }} />
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            )}
          </Box>
        </>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "#0a0a0a", width: 280 } }}
      >
        <List sx={{ pt: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => setDrawerOpen(false)}
                sx={{ color: "rgba(255,255,255,0.75)", "&:hover": { color: "#fff" } }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: 14 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 1 }} />
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "rgba(255,255,255,0.75)" }}>
              <ConfirmationNumberOutlinedIcon sx={{ mr: 1, fontSize: 18 }} />
              <ListItemText primary="My Tickets" primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}