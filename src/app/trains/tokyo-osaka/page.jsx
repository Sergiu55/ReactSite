import HeroSection from "../../../components/HeroSection";
import TokyoOsakaTimetable from "../../../components/TokyoOsakaTimetable";
import TokyoOsakaFAQ from "../../../components/TokyoOsakaFAQ";

export default function TokyoOsaka() {
  return (
    <main>
      <HeroSection
        title={"Tokyo to Osaka"}
        bgImage="/tokyo.webp"
      />

      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "48px 24px",
        borderBottom: "1px solid #e5e5e5",
      }}>
        <p style={{
          fontSize: 14,
          color: "#555",
          lineHeight: 1.9,
          margin: 0,
        }}>
          Rail.Way is a reservation service for booking train tickets online. It is not a rail
          carrier, does not own or operate any trains, and does not represent an official
          website of any railway company. It is a commercial business that makes it easier for
          you to book train tickets online. Rail.Way offers the best prices for Shinkansen
          tickets across Japan. Book your journey in minutes and enjoy a seamless travel
          experience from start to finish. Our platform is trusted by millions of travelers
          worldwide. Whether you are planning a short trip or a long adventure, Rail.Way has
          everything you need to make your journey comfortable and affordable.
        </p>
      </div>

      <TokyoOsakaTimetable from="Tokyo" to="Osaka" />
      <TokyoOsakaFAQ from="Tokyo" to="Osaka" />
    </main>
  );
}
