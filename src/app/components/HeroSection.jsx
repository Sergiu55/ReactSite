"use client";

import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("oneway");
  const [findStay, setFindStay] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 380px;
          background-color: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        /* Background image - visible pe dreapta, întunecat pe stânga */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          opacity: 1;
        }

        /* Gradient peste imagine ca textul să fie lizibil */
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(10,10,10,0.75) 0%,
            rgba(10,10,10,0.3) 50%,
            rgba(10,10,10,0.0) 100%
          );
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 960px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 28px 0;
          letter-spacing: -0.02em;
        }

        .hero-tabs {
          display: inline-flex;
          background: rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 4px;
          gap: 2px;
          margin-bottom: 16px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .hero-tab {
          padding: 7px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.55);
          transition: all 0.2s ease;
          white-space: nowrap;
          font-family: inherit;
        }

        .hero-tab:hover { color: rgba(255,255,255,0.85); }

        .hero-tab.active {
          background: #fff;
          color: #f5a500;
          font-weight: 600;
        }

        .hero-search-row {
          display: flex;
          align-items: stretch;
          width: 100%;
          max-width: 760px;
          margin-bottom: 14px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }

        .hero-input {
          flex: 1;
          height: 52px;
          background: #ffffff;
          border: none;
          padding: 0 20px;
          font-size: 14px;
          color: #333;
          outline: none;
          font-family: inherit;
          min-width: 0;
        }

        .hero-input::placeholder { color: #aaa; }

        .hero-date-btn {
          width: 52px;
          height: 52px;
          background: #ffffff;
          border: none;
          border-left: 1px solid #e5e5e5;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s;
        }

        .hero-date-btn:hover { background: #f5f5f5; }

        .hero-search-btn {
          height: 52px;
          padding: 0 26px;
          background: #f5a500;
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s;
          white-space: nowrap;
          font-family: inherit;
          flex-shrink: 0;
        }

        .hero-search-btn:hover { background: #e09600; }

        .hero-checkbox-row {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }

        .hero-checkbox {
          width: 16px;
          height: 16px;
          border-radius: 3px;
          background: #f5a500;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-checkbox-label {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }

        /* Secțiunea albă de dedesubt */
        .below-hero {
          background: #ffffff;
          min-height: 0;
          width: 100%;
        }

        @media (max-width: 600px) {
          .hero { height: auto; padding: 48px 0; }
          .hero-search-row { flex-wrap: wrap; }
          .hero-input { border-radius: 6px 6px 0 0; }
          .hero-search-btn { flex: 1; justify-content: center; border-radius: 0 0 6px 6px; }
        }
      `}</style>

      <section className="hero">
        {/* 
          Pune imaginea "rn_main_page_bg.webp" în folderul /public
          și src-ul de mai jos devine "/rn_main_page_bg.webp"
        */}
        <div className="hero-bg">
          <img src="/navbarfix.png" alt="" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <h1 className="hero-title">
            The Easiest Way<br />
            to Book Train Tickets
          </h1>

          <div className="hero-tabs">
            <button className={`hero-tab ${activeTab === "oneway" ? "active" : ""}`} onClick={() => setActiveTab("oneway")}>
              One Way
            </button>
            <button className={`hero-tab ${activeTab === "roundtrip" ? "active" : ""}`} onClick={() => setActiveTab("roundtrip")}>
              Round Trip
            </button>
            <button className={`hero-tab ${activeTab === "group" ? "active" : ""}`} onClick={() => setActiveTab("group")}>
              Group booking
            </button>
          </div>

          <div className="hero-search-row">
            <input
              className="hero-input"
              type="text"
              placeholder="From → To (e.g. Paris → London)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="hero-date-btn" title="Pick date">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </button>
            <button className="hero-search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              Search trains
            </button>
          </div>

          <div className="hero-checkbox-row" onClick={() => setFindStay(!findStay)}>
            <div className="hero-checkbox">
              {findStay && (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5">
                  <path d="M2 6l3 3 5-5"/>
                </svg>
              )}
            </div>
            <span className="hero-checkbox-label">Find stay for your trip</span>
          </div>
        </div>
      </section>

      {/* Secțiunea albă de dedesubt — adaugă conținut aici */}
      {/* <div className="below-hero"> */}
      {/*   conținut viitor */}
      {/* </div> */}
    </>
  );
}