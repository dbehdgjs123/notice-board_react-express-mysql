import React, { useState } from "react";
import "./styles/writepage.scss";
function Wrtiepage() {
  const [inputfield, setInputfield] = useState({
    writer: "",
    title: "",
    mainText: "",
  });
  const { writer, title, mainText } = inputfield;
  const onChangeHandler = (e) => {
    console.log(inputfield);
    setInputfield({
      ...inputfield,
      [e.target.name]: e.target.value,
    });
  };
  const onUpload = (e) => {
    e.preventDefault();
    //액션
  };
  return (
    <div className="write-container">
      <div className="write-title">글쓰기</div>
      <form type="submit">
        <label>
          작성자{" "}
          <input
            type="text"
            name="writer"
            value={writer}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          글제목{" "}
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          글 내용
          <textarea
            type="text"
            name="mainText"
            value={mainText}
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit" onClick={onUpload}>
          업로드
        </button>
      </form>
    </div>
  );
}

export default Wrtiepage;
