import Image from "next/image";

export default function ProductWeb1() {
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
        <span style={{ color: "#AFD3E2" }}>Website Kasir</span>
      </h2>
      <Image
        src="/images/kasir.jpg"
        alt="Website Kasir"
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
        <strong>Website Kasir Restroan</strong> adalah aplikasi berbasis web yang dirancang khusus untuk membantu operasional restoran dalam mengelola transaksi penjualan, stok bahan makanan, dan laporan keuangan secara efisien.
        Dengan sistem ini, kasir dapat mencatat pesanan pelanggan, mengelola menu dan harga, serta memantau pendapatan harian dengan tampilan yang sederhana dan mudah digunakan.
      </p>
      <p style={{ fontSize: "1rem", color: "#1e293b" }}>
        Aplikasi ini juga mendukung fitur pencatatan pembayaran, pengelolaan diskon, dan laporan penjualan per periode.
        Antarmuka yang ramah pengguna membuat proses transaksi di restoran menjadi lebih cepat dan akurat, sehingga membantu meningkatkan pelayanan dan efisiensi bisnis restoran.
      </p>
    </div>
  );
}