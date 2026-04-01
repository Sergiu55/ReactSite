"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "European Trains", href: "#" },
  { label: "Asia & Oceania", href: "#" },
  { label: "Americas Trains", href: "#" },
  { label: "Middle East & Africa", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background-color: #0a0a0a;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          height: 56px;
          display: flex;
          align-items: center;
          padding: 0 24px;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
        }
        .navbar-logo {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #ffffff;
          text-decoration: none;
          text-transform: uppercase;
          margin-right: 36px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .navbar-logo span { opacity: 0.5; }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 6px 12px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .navbar-links a:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .navbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          margin-left: auto;
        }
        .navbar-tickets {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
        }
        .navbar-tickets:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .navbar-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.15); }
        .navbar-currency {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.75);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
          user-select: none;
        }
        .navbar-currency:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 56px; left: 0; right: 0;
          background: #0a0a0a;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 12px 16px 20px;
          z-index: 999;
          flex-direction: column;
          gap: 2px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 12px;
          border-radius: 4px;
          transition: background 0.15s;
        }
        .mobile-menu a:hover { background: rgba(255,255,255,0.07); color: #fff; }
        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .navbar-right { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            RAIL<span>.</span>WAY
          </Link>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <Link href="#" className="navbar-tickets">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 0 0 4v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4V9z"/>
              </svg>
              My Tickets
            </Link>
            <div className="navbar-divider" />
            <div className="navbar-currency">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              $ USD
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="#" onClick={() => setMenuOpen(false)}>My Tickets</Link>
      </div>
    </>
  );
}