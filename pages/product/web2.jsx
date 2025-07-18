import Image from "next/image";

export default function ProductWeb2() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Produk 2</h2>
      <Image src="/images/hotel.jpg" alt="Produk 2" width={300} height={200} />
      <p>Ini adalah penjelasan singkat tentang website resepsionis hotel.</p>
    </div>
  );
}