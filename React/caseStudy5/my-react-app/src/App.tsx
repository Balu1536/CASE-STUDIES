import { CommentBox } from "./components/CommentBox";

function App() {
  const handlePost = (comment: string) => {
    alert(comment);
  };

  return (
    <div>
      <h1>NewsFleet</h1>
      <CommentBox onPost={handlePost} />
    </div>
  );
}

export default App;
