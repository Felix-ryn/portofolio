import Image from "next/image";

export default function ProductWeb1() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Produk 1</h2>
      <Image src="/images/kasir.jpg" alt="Produk 1" width={300} height={200} />
      <p>Ini adalah penjelasan singkat tentang website kasir.</p>
    </div>
  );
}