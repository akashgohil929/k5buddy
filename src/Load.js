import React from 'react'
import Loader from "react-js-loader";

function Load(props) {
  var title = props.caption
  return (
    <div className=' h-full w-full'>
      <Loader type="box-up" bgColor={"#FFFFFF"} color={'#FFFFFF'} title={title} size={100} />
    </div>
  )
}

export default Load
