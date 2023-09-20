import Image from "next/image";
import WLogo from "@/assets/images/logo.svg";

export default function Logo() {
  return (
    <Image src={WLogo} alt="Logo W" height={28} priority />
  )
}
