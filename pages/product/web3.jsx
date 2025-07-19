import Image from "next/image";

export default function ProductWeb3() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "3rem auto",
        padding: "2.5rem 2rem",
        background: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(30, 64, 175, 0.08)",
        textAlign: "center",
        border: "1px solid #e3eafc",
      }}
    >
      <h2
        style={{
          marginBottom: "1.5rem",
          color: "#1a202c",
          fontWeight: 700,
        }}
      >
        <span style={{ color: "#AFD3E2" }}>Website Toko Bangunan</span>
      </h2>
      <Image
        src="/images/tokobangunan.jpg"
        alt="Website Toko Bangunan"
        width={300}
        height={200}
        style={{
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(59,130,246,0.10)",
          marginBottom: "1.5rem",
          border: "2px solid #e0e7ff",
        }}
      />
      <p
        style={{
          fontSize: "1.1rem",
          color: "#1e293b",
          background: "#ffffff",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        <strong>Website Toko Bangunan</strong> adalah aplikasi berbasis web yang
        memudahkan pengelolaan stok barang, transaksi penjualan, dan laporan
        keuangan untuk toko bangunan. Sistem ini membantu pemilik toko dalam
        mencatat penjualan, mengatur inventaris, serta memantau perkembangan
        bisnis secara real-time dengan tampilan yang modern dan mudah digunakan.
      </p>
      <p style={{ fontSize: "1rem", color: "#1e293b" }}>
        Dengan fitur pencarian produk, pengelolaan supplier, dan laporan
        penjualan, website toko bangunan ini sangat cocok untuk meningkatkan
        efisiensi dan akurasi operasional toko bangunan.
      </p>
    </div>
  );
}