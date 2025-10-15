import React from 'react'

export default function Card({children}) {
  return (
    <article className="w-full duration-150 hover:border-zinc-400/90! p-4  space-y-3 border primary-border-color bg-white">
        {children}
    </article>
  )
}
