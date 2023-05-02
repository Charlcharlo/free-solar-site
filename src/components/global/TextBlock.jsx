export default function TextBlock(props) {
  return (
    <div className="text-block">
      <h1 className="title">{props.title}</h1>
      <p className="paragraph">{props.body}</p>
    </div>
  );
}
