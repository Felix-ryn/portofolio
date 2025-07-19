import Image from "next/image";

export default function UI1() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "3rem auto",
        padding: "2.5rem 2rem",
        background: "#ffffff", // biru muda soft
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
        <span style={{ color: "#AFD3E2" }}>UI Mobile</span> - Ayomasak
      </h2>
      <Image
        src="/images/ayomasak.jpg"
        alt="UI 1"
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
        <strong>Ayomasak</strong> adalah aplikasi mobile yang membantu pengguna
        menemukan berbagai resep masakan dengan mudah. UI aplikasi ini dirancang
        agar intuitif dan user-friendly, sehingga pengguna dapat mencari resep,
        melihat detail bahan dan langkah memasak, serta menyimpan resep favorit
        mereka.
      </p>
      <p style={{ fontSize: "1rem", color: "#1e293b" }}>
        Dengan tampilan yang bersih dan navigasi yang sederhana, Ayomasak cocok
        digunakan oleh semua kalangan, baik pemula maupun yang sudah mahir
        memasak.
      </p>
    </div>
  );
}