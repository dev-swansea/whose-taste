import React from "react"
import {Link} from "react-router-dom"

const BasicHeader = () => {
  return (
    <div className="relative">
      <header className="flex justify-center items-center bg-teal-400 p-5">
        <h1 className="text-2xl text-center">
          <Link to="/">Whose taste</Link>
        </h1>
      </header>
    </div>
  )
}

export default BasicHeader
