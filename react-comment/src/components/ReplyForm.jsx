import React, { useState } from "react";
import "./Comments.css";

function ReplyForm({ id, author, handleFlag }) {
  //   console.log("author:", author);
  //   console.log("id:", id);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleFlag();

    const details = {
      id: id,
      author: author,
      body: text,
      timestamp: new Date().toString(),
      points: "1",
      replies: [],
    };
    console.log("details:", details);
    // fetch("http://localhost:3001/comments",{
    //     method: POST,
    //     body:
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data:", data);
    //     setComments(data);
    //   });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your reply"
        />
        <button className="comment-form-button">Submit</button>
      </form>
    </div>
  );
}

export default ReplyForm;
