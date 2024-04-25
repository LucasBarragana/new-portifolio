import React from 'react'
import Link from 'next/link'
import Left from './icons/Left'

const BackHome = () => {
  return (
    <div className="flex items-center justify-between mb-4 mt-4">
    <Link href="/" className="flex flex-start font-semibold hover:underline seta-link">
        <Left />
        Back
    </Link>    
    <div className="text-center mx-auto">
        <span className="flex align-center text-base font-semibold tracking-wide uppercase">
            Dev <span className="text-orange-500">Bears</span>
        </span>
    </div>
</div>
  )
}

export default BackHome