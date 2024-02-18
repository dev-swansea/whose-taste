import React from "react"

const PageComponent = ({serverData, movePage}) => {
  return (
    <div className="m-6 flex justify-center">
      {/* previous button */}
      {serverData.prev ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({page: serverData.prevPage})}
        >
          Prev
        </div>
      ) : (
        <></>
      )}

      {/* pagination */}
      {serverData.pageNumList.map(pageNum => (
        <div
          key={pageNum}
          className={`m-2 p-2 text-center shadow-md text-white cursor-pointer ${
            serverData.current === pageNum ? "bg-gray-500" : "bg-blue-400"
          }`}
          onClick={() => movePage({page: pageNum})}
        >
          {pageNum}
        </div>
      ))}

      {/* next button */}
      {serverData.next ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({page: serverData.nextPage})}
        >
          Next
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PageComponent
