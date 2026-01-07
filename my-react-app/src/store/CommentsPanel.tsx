import React from "react"
import { useDesignHubStore } from "./DesignHubStore";

export default function CommentsPanel({ fileId }:{fileId:string}) {
  const comments = useDesignHubStore((s) => s.comments);
  const addComment = useDesignHubStore((s) => s.addComment);


 const filteredComments = comments.filter((c) => c.fileId === fileId);
  return (
    <div>
      <ul>
        {filteredComments.map((c) => (
          <li key={c.id}>{c.author}: {c.text}</li>
        ))}
      </ul>
      <button onClick={() => addComment({ id: Date.now().toString(), fileId, author: 'Alex', text: 'Hello!' })}>
        Add Comment
      </button>
    </div>
  );
}

