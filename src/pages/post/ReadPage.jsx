import React, {useCallback} from "react";
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";

const ReadPage = () => {
  const {tno} = useParams();
  const navigate = useNavigate();

  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams("size")) : 12;

  const queryStr = createSearchParams({page, size}).toString();

  const moveToModify = useCallback(
    tno => {
      navigate({pathname: `/post/modify/${tno}`, search: queryStr});
    },
    [tno, page, size]
  );

  const moveToList = useCallback(() => {
    navigate({pathname: `/post/list`, search: queryStr});
  }, [page, size]);

  return (
    <div className="text-3xl font-extrabold">
      나...중에 꾸밀께 {tno}
      <div>
        <button onClick={() => moveToModify({tno})}>수정</button>
        <button onClick={() => moveToList()}>목록</button>
      </div>
    </div>
  );
};

export default ReadPage;
