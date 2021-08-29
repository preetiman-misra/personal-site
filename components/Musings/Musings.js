import PostList from "./PostList";
import Button from "../Button";

export default function Musings() {
  return (
    <>
      <div className="musings">
        <span className="heading font-prata">Musings</span>
        <span className="bar"></span>
      </div>

      {/* Posts Section */}
      <PostList />
      <Button title="MORE POSTS" />
    </>
  );
}
