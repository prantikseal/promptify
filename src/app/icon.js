import Image from "next/image";

export default function icon() {
  return (
    <Image src="/logo.svg" alt="icon" width={50} height={50} />
  );
}