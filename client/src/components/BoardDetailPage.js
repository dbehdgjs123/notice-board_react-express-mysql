import React from "react";
import "./styles/boarddetailpage.scss";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
function BoardDetailPage({ match }) {
  useEffect(() => {
    //라우터의 match를 사용하여 주소 값의 id 부분을 알아낸 다음 그 값으로 서버에 요청을 보낸다.
    Axios.get(`/api/posts/${match.params.id}`).then(({ data }) =>
      setText({
        title: data[0].title,
        writer: data[0].writer,
        date: data[0].createdDate,
        maintext: data[0].maintext,
      })
    );
  }, [match.params.id]);

  const [text, setText] = useState({
    title: "",
    writer: "",
    date: "",
    maintext: "",
  });

  const { title, writer, date, maintext } = text;

  return (
    <div className="board-detail-conatiner">
      <div className="detail-title">
        <h1>{title ? title : "Loading..."}</h1>
        <div className="detail-subtitle">
          <div className="detail-subtitle-writer">
            글쓴이: {writer ? writer : "Loading..."}
          </div>
          <div className="detail-subtitle-date">
            Date: {date ? date : "Loading..."}
          </div>
        </div>
      </div>
      <div className="detail-main">{maintext ? maintext : "Loading..."}</div>
    </div>
  );
}

export default BoardDetailPage;
