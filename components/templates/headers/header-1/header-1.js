export default function Header1({ content }) {
  let { global, attributes } = { ...content };
  return (
    <header>
      <h4>{global.name}</h4>
      <h3>{attributes.heading}</h3>
    </header>
  );
}
