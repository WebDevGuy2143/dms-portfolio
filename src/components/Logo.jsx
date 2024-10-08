import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="w-16 h-16 bg-dark text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light hover:scale-75 ease-in duration-300 hover:bg-purple-600 xs:-ml-5"
      >
        GH
      </Link>
    </div>
  )
}

export default Logo
