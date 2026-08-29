import "./App.css";

function SkillCard({ src, alt, lang, purpose }) {
  return (
    <div className="skill-card">
      <img src={src} alt={alt} />
      <p>{lang}</p>
      <p>{purpose}</p>
    </div>
  );
}

export default SkillCard;
