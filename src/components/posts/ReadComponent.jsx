import {useEffect, useState} from "react"
import {findOne} from "../../api/postApi"
import 클리퍼스 from "../../imgs/클리퍼스.jpg"
import useCustomMove from "../../hooks/useCustomMove"

const initState = {
  pno: 0,
  title: "",
  content: "",
  goodCount: 0,
  viewCount: 0,
  createDate: null,
  modifyDate: null,
}

const ReadComponent = ({pno}) => {
  const [post, setPost] = useState(initState)
  const {moveToList, moveToModify} = useCustomMove()

  useEffect(() => {
    findOne(33).then(data => {
      setPost(data)
    })
  }, [pno])

  return (
    <div>
      {/* main image section */}
      <div className="h-[600px] border border-black flex justify-center">
        <img src={클리퍼스} alt="main pic" className="h-full " />
      </div>

      {/* content section */}
      <div className="w-[1200px] mx-auto items-center">
        <div className="text-center text-3xl font-extrabold">{post.title}</div>
        <div>생성일시{post.createdDate}</div>
        <div>{post.content}</div>
        <div>
          좋아요
          {post.goodCount}
        </div>
        <div>
          조회수
          {post.viewCount}
        </div>
      </div>

      {/* 목록, 수정, 삭제 버튼 */}
      <div className="">
        <button className="rounded p-4 m-2 text-xl text-white bg-blue-400" onClick={() => moveToList()}>
          목록으로
        </button>
        <button className="rounded p-4 m-2 text-xl text-white bg-purple-400" onClick={() => moveToModify(pno)}>
          수정으로
        </button>
      </div>
    </div>
  )
}

export default ReadComponent
