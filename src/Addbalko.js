import React, { useState } from 'react'
import Load from './Load'

function Addbalko() {
  return (
    <div className="w-full h-full overflow-x-auto">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclEF6U78qL0S3iHp6idxWu2VAZmkt9MkqcQIZCig8uoMRAaw/viewform?embedded=true" className='w-full h-full p-0 m-0 overflow-x-hidden' title="addBalakForm"><div><Load caption={"Loading form..."}/></div></iframe>
    </div>
  )
}

export default Addbalko
