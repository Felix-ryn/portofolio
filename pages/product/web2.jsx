import Image from "next/image";

export default function ProductWeb2() {
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
        <span style={{ color: "#AFD3E2" }}>Website Resepsionis</span> Hotel
      </h2>
      <Image
        src="/images/hotel.jpg"
        alt="Website Resepsionis Hotel"
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
        <strong>Website Resepsionis Hotel</strong> adalah aplikasi berbasis web
        yang dirancang untuk membantu staf resepsionis dalam mengelola proses
        check-in dan check-out tamu, pemesanan kamar, serta pencatatan data tamu
        secara efisien. Sistem ini memudahkan pengelolaan reservasi, penjadwalan
        kamar, dan pelaporan harian dengan tampilan yang modern dan mudah
        digunakan.
      </p>
      <p style={{ fontSize: "1rem", color: "#1e293b" }}>
        Dengan fitur pencarian tamu, pengelolaan pembayaran, dan notifikasi
        otomatis, website resepsionis hotel membantu meningkatkan pelayanan
        kepada tamu dan efisiensi operasional hotel.
      </p>
    </div>
  );
}