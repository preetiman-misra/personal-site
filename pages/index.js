import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <div className="main">
      {/* Header Section */}
      <div className="header">
        <div className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header__logo">
          <Image src={logo} alt="logo" width={82} height={82} quality={100} />
        </div>
      </div>

      {/* Intro Section */}
      <div className="intro"></div>
    </div>
  );
}
