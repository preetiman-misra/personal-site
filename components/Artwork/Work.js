import Image from "next/image";

export default function Work({ src, title }) {
  return (
    <div className="work">
      <Image src={src} alt={title} />
    </div>
  );
}
