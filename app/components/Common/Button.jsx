import React from 'react'

export default function Button({btn , className}) {
  return (
    <button className={`py-2 px-4 rounded-md bg-amber-500 text-white active:scale-[1.1] hover:bg-amber-700 ${className}`}>{btn}</button>
  )
}
