import { Post } from "./components/Post";

export function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Post 
        author='Diego' 
        content='lorem asndandoanodnaondo'
      />
      <Post 
        author='Guilherme' 
        content='lsdfilsnfinsifi'
      />
      <Post />
      <Post />
    </>
  );
}


