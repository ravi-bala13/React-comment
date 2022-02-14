import React, { useEffect, useState } from "react";
import "./Comments.css";
import ReplyForm from "./ReplyForm";
// import Process from "./Process";

function Process({ comment }) {
  const [replies, setReplies] = useState([]);
  const [flag, setFlag] = useState(false);
  // console.log("replies:", replies);

  const getReplies = (id) => {
    setReplies(comment.replies);
  };

  const addReplies = (id) => {
    setFlag(true);
  };

  return (
    <div className="comment">
      <div className="each-comment">
        {comment.author} {comment.points} points {comment.timestamp}
        <h3> {comment.body} </h3>
        <div className="buttons">
          <p onClick={() => addReplies(comment.id)}>Reply</p>
          <p onClick={() => getReplies(comment.id)}>Showmore</p>
          <p>Givepoints</p>
          <p>Share</p>
          <p>Report</p>
        </div>
        {flag ? (
          <ReplyForm
            id={comment.id}
            author={comment.author}
            handleFlag={() => setFlag(false)}
          />
        ) : null}
        {replies && (
          <div className="replies">
            {replies.map((reply) => (
              <Process
                comment={reply}
                // getReplies={getReplies}
                // replies={[]}
                key={reply.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Process;
