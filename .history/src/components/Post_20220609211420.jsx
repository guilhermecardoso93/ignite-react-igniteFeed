export function Post(props) {
  return (
    <>
      <h1>Post</h1>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </>
  );
}
