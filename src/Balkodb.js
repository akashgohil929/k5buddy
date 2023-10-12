import React,{useEffect,useState} from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'
import Load from './Load'
function Balkodb() {

  var {sabha}=useParams()
  sabha = sabha.replace(" ","")
  const [db,setDb]= useState(null)
  useEffect(()=>{
    fetch(`https://script.google.com/macros/s/AKfycbwSzaapF1OU-_mEiR8DA02LhZTbwcSCPt1jCXPwoaAsIe4SFXpzwmB9-zxqr6S8Kx1d/exec?type=nodel&sabha=${sabha}`,{redirect: "follow", headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },mode: "cors",})
    .then((response) => response.json())
    .then((data) => setDb(data.data));
  },[db])
  return (
    <div>
      {
        db==null?<div className='text-white w-full h-full flex items-center justify-center'>
          <h1><Load caption={"Fetching data..."}/></h1>
        </div>:
          <div className='w-full h-full'>
            {
              db.map((ele,i)=>{
                return <div className="mt-0"><Card data={ele} index={i}/></div>
              })
            }
          </div>
      } 
    </div>
  )
}

export default Balkodb
