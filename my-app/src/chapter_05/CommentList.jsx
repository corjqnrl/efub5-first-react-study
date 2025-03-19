import React from "react";
import Comment from "./Comment";
/*
function CommentList(props) {
  return (
    <div>
      <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."} />
      <Comment name={"김남우"} comment={"안녕하세요."} />
    </div>
  );
}
*/

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요~!",
  },
  {
    name: "이재용",
    comment: "저도 리액트 배우고 싶어요!!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;