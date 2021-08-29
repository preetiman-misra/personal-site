import Work from "./Work";
import babyInBushes from "../../public/art/babyInBushes.jpeg";
import crazyHair from "../../public/art/crazyHair.jpeg";
import raccoon from "../../public/art/raccoon.jpeg";

const images = [
  {
    id: 1,
    src: babyInBushes,
    title: "Baby in Bushes",
  },
  {
    id: 2,
    src: crazyHair,
    title: "Crazy Hair",
  },
  {
    id: 3,
    src: raccoon,
    title: "Raccoon Drinking Coffee",
  },
];

export default function WorkList() {
  return (
    <div className="workList">
      {images.map((image) => (
        <Work key={image.id} src={image.src} title={image.title} />
      ))}
    </div>
  );
}
