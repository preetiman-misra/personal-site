import Image from "next/image";
import logo from "../public/logo.png";
import Musings from "../components/Musings/Musings";
import Artwork from "../components/Artwork/Artwork";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="header">
        <div className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header__logo">
          <Image src={logo} alt="logo" quality={100} />
        </div>
      </div>

      {/* Intro Section */}
      <div className="intro">
        <span className="font-prata">Hi,</span>
        <span className="font-prata">
          Im <span className="color-red">Preetiman Misra</span>.
        </span>
        <span className="detail">
          I am a student, writer, artist, illustrator and developer.
        </span>
      </div>

      {/* Musings Section*/}
      <Musings />

      <div className="spacer"></div>

      {/* Artwork Section */}
      <Artwork />
    </>
  );
}
