export default function Article({ title, children }) {
  return (
    <article className="container">
      <header>
        <h1>{title}</h1>
      </header>
      <div>{children}</div>
    </article>
  );
}
