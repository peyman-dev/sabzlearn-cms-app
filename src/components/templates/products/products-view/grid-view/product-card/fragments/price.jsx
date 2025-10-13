import React from 'react'

export default function Price({price}) {
  return (
    <div className='inline-flex items-center gap-1'>
        <span className="text-lg font-black">
            {Number(price).toLocaleString('fa-IR')}
        </span>
        <span className="text-zinc-500 text-xs">
            تومان
        </span>
    </div>
  )
}
