import React, {useEffect, useState} from "react"
import useCustomMove from "../../hooks/useCustomMove"
import {findList} from "../../api/postApi"
import clippers from "../../imgs/클리퍼스.jpg"
import duck from "../../imgs/오리.jpeg"
import moment from "moment"
import PageComponent from "../common/PageComponent"

const initState = {
  dtoList: [],
  pageNumList: [],
  postListRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
}

const ListComponents = () => {
  const {page, size, moveToList, moveToRead, refresh} = useCustomMove()
  const [serverData, setServerData] = useState(initState)

  const [open, setOpen] = useState(false)
  const [categogry, setCategory] = useState("제목")

  useEffect(() => {
    findList({page, size}).then(data => {
      setServerData(data)
    })
  }, [page, size, refresh])

  return (
    <>
      {/* search bar */}
      <section className="flex justify-center my-5 relative">
        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl ">
          {/* category */}
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            type="button"
            onClick={() => setOpen(!open)}
          >
            {categogry}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            {open ? (
              <div className="absolute top-[72px] left-[577px]  bg-gray-100 text-gray-500 w-[110px] h-[80px] rounded-lg">
                <ul className="" onClick={e => setCategory(e.target.textContent)}>
                  <br />
                  <li>제목</li>
                  <li>글쓴이</li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </button>
          {/* category end */}

          <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
          </div>
          <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </section>
      {/* search bar end */}

      <main className="flex items-center justify-center min-h-[80vh] container mx-auto">
        {/* Grid */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* Card */}
          {serverData.dtoList.map(post => (
            <section
              key={post.pno}
              className="card transform hover:scale-105 transition duration-500"
              onClick={() => moveToRead(post.pno)}
            >
              <div className="p-5 flex flex-col">
                {/* 여기서 overflow가 왜 필요할까? */}
                <div className="rounded-xl overflow-hidden">
                  <img src={clippers} alt="" />
                </div>
                <div className=" line-clamp-1">
                  <p>
                    <span className="mx-2">#수완</span>
                    <span className="mx-2">#수완</span>
                  </p>
                </div>
                <p className="font-bold text-2xl md:text-3xl mt-3 line-clamp-1">{post.title}</p>
                <p className="text-slate-500 text-lg mt-3 line-clamp-3 ">{post.content}</p>
                <hr className="my-2  border-stone-900" />
                <div className="flex  items-center justify-between">
                  <div className="flex items-center">
                    <img src={duck} alt="" className="w-10 h-10 rounded-xl" />
                    <p className="line-clamp-1 w-28 font-medium text-slate-500">{post.userId}</p>
                  </div>
                  <p className="text-slate-500 font-medium">
                    {moment().isSame(moment(post.createdDate).format("YYYY/MM/DD"), "day")
                      ? moment(post.createdDate).format("HH시 mm분")
                      : moment(post.createdDate).format("YYYY/MM/DD")}
                  </p>
                </div>
              </div>
            </section>
          ))}
          {/* Card end */}
        </article>
        {/* Grid end */}
      </main>

      <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>
    </>
  )
}

export default ListComponents
