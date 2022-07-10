export default function Cover1({ content }) {
  let { attributes, collections } = { ...content };
  let greetings = [];
  if (collections && collections["greetings"]) {
    greetings = collections["greetings"].items;
  }
  return (
    <section>
      <h1>{attributes.heading}</h1>
      {greetings.map((greeting, i) => (<p key={i}>{greeting.attributes.label}</p>))}
    </section>
  );
}
