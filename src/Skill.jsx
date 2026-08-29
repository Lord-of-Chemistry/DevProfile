import "./App.css";
import SkillCard from "./SkillCard.jsx";

function Skill() {
  return (
    <section className="skill" id="skill">
      <h1>Skills</h1>
      <p>Tools I use to turn my imaginations to reality</p>
      <div className="skill-cards">
        <SkillCard
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML"
          lang="HTML"
          purpose="Building structure"
        />
        <SkillCard
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS"
          lang="CSS"
          purpose="Styling & layouts"
        />
        <SkillCard
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          lang="JavaScript"
          purpose="Logic & interaction"
        />
        <SkillCard
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
          lang="React"
          purpose="Building interfaces"
        />
        <SkillCard
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          alt="Git"
          lang="Git"
          purpose="Version control"
        />
        <SkillCard
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="GitHub"
          lang="GitHub"
          purpose="Code & collaboration"
        />
      </div>
    </section>
  );
}

export default Skill;
