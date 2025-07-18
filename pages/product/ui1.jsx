import Image from "next/image";

export default function UI1() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>UI 1</h2>
      <Image src="/images/ayomasak.jpg" alt="UI 1" width={300} height={200} />
      <p>Ini adalah penjelasan singkat tentang UI aplikasi ayomasak.</p>
    </div>
  );
}