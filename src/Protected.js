import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Protected(props) {
  const {Component} = props
  var navigate = useNavigate()
  useEffect(()=>{
    var login = localStorage.getItem('is_login')
    if(login==='false'){
      navigate('/')
    }
  },[])
  return (
    <div className='w-full h-[100vh] bg-gray-900'>
       <Component/>
    </div>
  )
}

export default Protected
