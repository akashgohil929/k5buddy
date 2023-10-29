import React,{useEffect,useState} from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'
import Load from './Load'
function Balkodb() {
  var {sabha}=useParams()
  var x = 0
  var [refresh ,setRefresh] = useState(x)
  sabha = sabha.replace(" ","")
  const [db,setDb]= useState(null)
  useEffect(()=>{
    fetch(`https://script.google.com/macros/s/AKfycbz7XOlBHFQ_h85UuZMGaaAnXxBtbKMHhju1YP_ZlksR1R_FBzRCq4XHfEPSIQkYM0Su/exec?type=nodel&sabha=${sabha}&action=full`,{redirect: "follow", headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },mode: "cors",})
    .then((response) => response.json())
    .then((data) => setDb(data.data));
  },[refresh])
  const refre = ()=>{
    setRefresh(x+1)
  }
  return (
    <div>
      {
        db==null?<div className='text-white w-full h-[100%-50px] flex items-center justify-center'>
          <h1><Load caption={"Fetching data..."}/></h1>
        </div>:
          <div className='w-full h-full'>
            {
              db.map((ele,i)=>{
                return <div className="mt-0"><Card data={ele} index={i} Refresh={refre}/></div>
              })
            }
          </div>
      } 
    </div>
  )
}

export default Balkodb
