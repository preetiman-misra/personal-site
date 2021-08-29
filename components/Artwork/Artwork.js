import WorkList from "./WorkList";

export default function Artwork() {
  return (
    <>
      <div className="artwork">
        <span className="heading font-prata">Artwork</span>
        <span className="bar"></span>
      </div>

      {/* Work List */}
      <WorkList />
    </>
  );
}
