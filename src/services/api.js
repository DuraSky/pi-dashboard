export async function getData() {
  const res = await fetch("http://192.168.100.38:3000/data"); // uprav IP dle potřeby
  if (!res.ok) throw new Error("Chyba při načítání dat ze serveru");
  return await res.json();
}
