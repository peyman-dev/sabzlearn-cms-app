import React from 'react'

export default function Card({children}) {
  return (
    <article className="w-full duration-150 hover:shadow-md rounded-lg p-2 space-y-3 border primary-border-color bg-white">
        {children}
    </article>
  )
}
