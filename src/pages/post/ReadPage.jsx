import React from "react"
import {useParams} from "react-router-dom"
import BasicHeader from "../../components/common/BasicHeader"
import ReadComponent from "../../components/posts/ReadComponent"

const ReadPage = () => {
  const {pno} = useParams()

  return (
    <div className="">
      <BasicHeader />
      <ReadComponent pno={pno} />
    </div>
  )
}

export default ReadPage
