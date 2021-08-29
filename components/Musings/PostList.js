import Post from "./Post";

const posts = [
  {
    id: 1,
    title: "Stories from childhood",
    desc: "In this post I talk about the quirks of growing up in an Indian household, along with little anecdotes from my childhood.",
  },
  {
    id: 2,
    title: "My Tryst with Music",
    desc: "Music has always been an integral part of my life. So in this post I take you through how music has affected me as a person and made me who I am.",
  },
];
export default function PostList() {
  return (
    <div className="postList">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} desc={post.desc} />
      ))}
    </div>
  );
}
