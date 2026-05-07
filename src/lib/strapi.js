export async function getSections() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sections?populate=*`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}