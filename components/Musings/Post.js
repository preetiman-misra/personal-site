export default function Post({ title, desc }) {
  return (
    <div className="post">
      <span className="post-title">{title}</span>
      <span className="post-desc">{desc}</span>
    </div>
  );
}
