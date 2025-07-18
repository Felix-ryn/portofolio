import Image from "next/image";

export default function ProductWeb3() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Produk 3</h2>
      <Image src="/images/tokobangunan.jpg" alt="Produk 3" width={300} height={200} />
      <p>Ini adalah penjelasan singkat tentang website toko bangunan.</p>
    </div>
  );
}