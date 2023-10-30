/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
  return (
    <div className='bg-sky-950	'>
      <header className="text-white bg-sky-950	 body-font">
        <div className="container mx-auto bg-sky-950	 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-4xl bg-sky-950	">About Me</span>
          <nav className="md:ml-auto bg-black rounded-lg mt--3 flex flex-wrap items-center text-base justify-center p-2">
            <a href='#' className='p-4 bg-black text-white	'>First Link</a>
            <a href='#' className='p-4 bg-black text-white	'>Second Link</a>
            <a href='#' className='p-4 bg-black text-white	'>Third Link</a>
            <a href='#' className='p-4 bg-black text-white	'>Fourth Link</a>
            <a href='#' className='p-4 bg-black text-white	'>Fourth Link</a>
          </nav>
          </div>
      </header>
    </div>
  )
}

export default Navbar