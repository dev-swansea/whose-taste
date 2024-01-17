import React from "react";
import {Link} from "react-router-dom";

const BasicHeader = () => {
  return (
    <div className="relative">
      <header className="flex justify-center items-center bg-teal-400 p-5">
        <h1 className="text-2xl text-center">
          <Link to="/">Whose taste</Link>
        </h1>

        <div className="absolute right-10">
          {/* 글을 쓰는거 먼저 해보겠다
           <button className="mx-5 cursor-pointer">로그인</button>
          <button className="mx-5 cursor-pointer">회원가입</button> 
          */}
          <ul>
            <li>
              <Link to={"/write"}>글쓰기</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default BasicHeader;
