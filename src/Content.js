import React,{useState} from 'react'
import Contentcard from './Contentcard'
import Load from './Load'
function Content() {
  const [content,setContent] = useState(null)
  var endpoint = "https://script.google.com/macros/s/AKfycbxyEqlo53N5f1dBCOHtM2kSz6TicNsOWhPrwgIpM_jt_Z7iX7X1cuwnhyA_tTIrlKeC/exec"
  fetch(endpoint,{redirect: "follow", headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },mode: "cors",})
    .then((response) => response.json())
    .then((data) => (setContent(data.content)));
  return (
    <div className='w-full h-full  flex items-center flex-col'>
      {
        content==null?<div><Load caption={"Loading the content.."}/></div>:
        content.length!==0?<>
        {
        content.map((ele)=>{
          return <Contentcard content={ele}/>
        })
        }
      </>:<><h1 className="text-white text-center p-3">No content found!</h1></>
      }
    </div>
  )
}
export default Content
