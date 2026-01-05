import { useState } from "react";

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

export function CommentBox({ onPost }: CommentBoxProps) {
  const [comment, setComment] = useState("");

  const handlePost = () => {
    onPost(comment);
    setComment("");
  };

  return (
    <div>
      <input
        placeholder="Write comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}
