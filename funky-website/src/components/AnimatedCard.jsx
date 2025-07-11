export default function AnimatedCard({ title, content }) {
  return (
    <div className="funky-card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}