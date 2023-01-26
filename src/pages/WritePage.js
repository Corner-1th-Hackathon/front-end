import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../css/WritePage.css";

function WritePage() {
  const navigate = useNavigate();
  const name = useRef();
  const date = useRef();
  const letter = useRef();
  const image = useRef();
  const tag = useRef();
  const address = useRef();
  return (
    <div className="write-page">
      <div className="write-page-form">
        <div className="write-page-wrapper">
          <div className="write-title">Name</div>
          <div className="write-value-wrapper">
            <input type="text" name="username" ref={name} id="write-name" />
          </div>
        </div>

        <div className="write-page-wrapper">
          <div className="write-title">Date</div>
          <div className="write-value-wrapper">
            <input
              type="date"
              name="date"
              id="write-date"
              ref={date}
              max="2023-12-31"
              min="2023-01-01"
            />
          </div>
        </div>

        <div className="write-page-wrapper">
          <div className="write-title">Content</div>
          <div className="write-value-wrapper">
            <textarea
              type="text"
              name="content"
              id="write-content"
              ref={letter}
            />
          </div>
        </div>

        <div className="write-page-wrapper">
          <div className="write-title">Tag</div>
          <div className="write-value-wrapper">
            <textarea
              type="text"
              name="tag"
              id="write-tag"
              ref={tag}
            />
          </div>
        </div>
        
        <div className="write-page-wrapper">
          <div className="write-title">Address</div>
          <div className="write-value-wrapper">
            <textarea type="text" name="address" id="write-address" ref={address} />
          </div>
        </div>

        <div className="write-page-wrapper">
          <div className="write-title">Image</div>
          <div className="write-value-wrapper">
            <input
              type="file"
              ref={image}
              name="image"
              id="write-image"
              alt="사진"
            />
          </div>
        </div>
      </div>

      <div className="write-btn-wrapper">
        <button
          className="write-send-btn"
          type="button"
          onClick={() => {
            const form = new FormData();
            form.append("name", name.current.value);
            form.append("date", date.current.value);
            form.append("letter", letter.current.value);
            form.append("image", image.current.files[0]);
            form.append("tag", tag.current.value);

            fetch("/insert", {
              method: "post",
              encType: "multipart/form-data",
              body: form,
            }).then(() => {
              navigate("/jan");
            });
          }}
        >
          Send
        </button>
        <button
          className="write-cancel-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default WritePage;
