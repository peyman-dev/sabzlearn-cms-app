import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={"/"} className='flex items-center gap-3'>
        <img src="/images/logo.png" className='size-6' alt="SabzPanel" />
        <span className='text-lg font-black! text-zinc-900'>
            پنل سبز
        </span>
    </Link>
  )
}
