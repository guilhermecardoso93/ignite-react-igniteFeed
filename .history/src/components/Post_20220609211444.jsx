export function Post(props) {
  return (
    <>
      <h1>Post</h1>
      <p><strong>{props.author}</strong></p>
      <p>{props.content}</p>
    </>
  );
}
