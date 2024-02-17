import React from "react"
import {useNavigate} from "react-router"

const ModifyPage = ({pno}) => {
  const navigate = useNavigate()

  const moveToRead = pno => {
    navigate({pathname: `/post/read/${pno}`})
  }

  const moveToList = () => {
    navigate({pathname: `/post/list`})
  }

  return <div>ModifyPage</div>
}

export default ModifyPage
