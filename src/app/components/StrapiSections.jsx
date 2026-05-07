import { getSections } from "../../lib/strapi";

export default async function StrapiSections() {
  const sections = await getSections();

  if (!sections || sections.length === 0) return null;

  const banner = sections[0];
  const card1 = sections[1];
  const card2 = sections[2];

  const getImageUrl = (section) => {
    const url = section?.image?.formats?.large?.url || section?.image?.url;
    return url || null;
  };

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 48px" }}>

      
      {banner && (
        <div style={{
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          minHeight: 180,
          marginBottom: 24,
          backgroundImage: `url(${getImageUrl(banner)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "32px 40px",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", borderRadius: 12 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.4 }}>
              {banner.Title}<br />{banner.description}
            </p>
          </div>
        </div>
      )}

      
      <div style={{ display: "flex", gap: 16 }}>
        {[card1, card2].map((card, i) => card && (
          <div key={i} style={{
            flex: i === 0 ? 2 : 1,
            borderRadius: 12,
            overflow: "hidden",
            position: "relative",
            minHeight: 320,
            backgroundImage: `url(${getImageUrl(card)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: 24, zIndex: 1 }}>
              {i === 0 && <div style={{ width: 4, height: 36, background: "#f5a500", borderRadius: 2, marginBottom: 12 }} />}
              <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{card.Title}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.7 }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}