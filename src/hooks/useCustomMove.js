import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
  if (!param) { return defaultValue }
  else { return param }
}

const useCustomMove = () => {

  const navigate = useNavigate()
  const [queryParams] = useSearchParams()
  const [refresh, setRefressh] = useState(false)
  const page = getNum(queryParams.get("page"), 1)
  const size = getNum(queryParams.get("size"), 12)

  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = ""

    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1)
      const sizeNum = getNum(pageParam.size, 12)

      queryStr = createSearchParams({ page: pageNum, size: sizeNum }).toString()
    } else {
      queryStr = queryDefault
    }

    setRefressh(!refresh)
    navigate({ pathname: `../list`, search: queryStr })
  }

  const moveToRead = (postNum) => {
    navigate({
      pathname: `../read/${postNum}`,
      search: queryDefault
    })
  }

  const moveToModify = (pageNum) => {
    navigate({
      pathname: `../modify/${pageNum}`,
      search: queryDefault
    })
  }

  return { moveToList, moveToRead, moveToModify, page, size, refresh }
}

export default useCustomMove