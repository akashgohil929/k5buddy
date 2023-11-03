import React,{useState,useEffect} from 'react'
import Contentcard from './Contentcard'
import { ToastContainer, toast } from 'react-toastify';
import Load from './Load'
function Content() {
  const [content,setContent] = useState(null)
  var endpoint = "https://script.google.com/macros/s/AKfycbxyEqlo53N5f1dBCOHtM2kSz6TicNsOWhPrwgIpM_jt_Z7iX7X1cuwnhyA_tTIrlKeC/exec"
  useEffect(()=>{
    fetch(endpoint,{redirect: "follow", headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },mode: "cors",})
    .then((response) =>{
      if(response.status===200){
        return response.json()
      }
      throw new Error('fetching data')
    })
    .then((data) => (setContent(data.content))).catch((error)=>{
      toast.error('Something went wrong, please refresh!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    });
    return ()=>{}
  },[])
  return (
    <div className='w-full h-full bg-[#151E3D] flex items-center flex-col'>
      <ToastContainer/>
      {
        content==null?<div><Load caption={"Loading the content.."}/></div>:
        content.length!==0?<>
        {
        content.map((ele,i)=>{
          return <Contentcard key={i} content={ele}/>
        })
        }
      </>:<><h1 className="text-white text-center p-3">No content found!</h1></>
      }
    </div>
  )
}
export default Content
