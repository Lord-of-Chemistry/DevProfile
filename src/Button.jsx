
function Button({ name, href = "#" }) {
  return (
    <a className="button" href={href}>
      {name}
      <span>↗</span>
    </a>
  );
}

export default Button;
