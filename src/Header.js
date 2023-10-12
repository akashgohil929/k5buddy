import React from 'react'

function Header(props) {
  var  {name,post,sabha,sabha_no} = props.headers_data
  return (
<div className='main w-full h-full'>
  <nav className="font-sans flex flex-row text-left sm:flex-row text-center items-center justify-between sm:text-left sm:justify-between py-2 px-4 bg-white shadow sm:items-baseline w-full h-full">
    <div className="mb-2 sm:mb-0 inner text-left">
      <a href="/home" className="text-lg text-left text-grey-darkest hover:text-blue-dark font-sans font-semibold">{sabha}</a>
      <p className='text-sm'>{sabha_no}</p>
    </div>
    <div className="mb-2 sm:mb-0 inner text-right">
      <a href="/home" className="text-sm  text-grey-darkest hover:text-blue-dark font-sans font-medium">{name}</a>
      <p className='text-sm font-light'>{post==="snc"?"Sanchalak":"Sahasanchalak"}</p>
    </div>
  </nav>
</div>
  )
}

export default Header
