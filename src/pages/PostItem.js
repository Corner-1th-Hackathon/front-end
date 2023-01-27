import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

function PostItem({ post_code, name, date, image }) {
  let loading = false;
  const url = `http://localhost/static/images/${image}`;
  if (loading) {
    return <div>loading</div>;
  } else {
    let img = "";
    if (image !== "-") {
      img = `<img src=${url} width='100px' height='100px'/><br />`;
    } else {
      img = "[게시물 이미지 미등록]<br />";
    }
    return (
      <div style={{ margin: "5px" }}>
        <Link to={`/detail/${post_code}`}>
          <span dangerouslySetInnerHTML={{ __html: img }}></span>
        </Link>
        <span className="jan-post-items">
          닉네임 : {name}
          <br />
          날짜: {date}
        </span>
        <br />
        <br />
      </div>
    );
  }
}

export default PostItem;
