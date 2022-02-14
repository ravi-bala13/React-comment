import React, { useEffect, useState } from "react";
import "./Comments.css";
import Process from "./Process";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    fetch("http://localhost:3001/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setComments(data);
      });
  };

  return (
    <div className="container">
      <h1>React comments</h1>
      {comments.map((comment) => (
        <Process
          comment={comment}
          // getReplies={getReplies}
          // replies={replies}
          key={comment.id}
        />
      ))}
    </div>
  );
}

export default Comments;
