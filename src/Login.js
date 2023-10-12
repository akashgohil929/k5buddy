import React,{useState,useEffect} from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Load from './Load';


function Login(){
  var navigate = useNavigate()

  var email 
  const [login,setLogin]= useState(null)
  useEffect(()=>{
    fetch('https://script.google.com/macros/s/AKfycbw7zJ3c7xXUdj7mbDaXYl2MudX9vFNuE3kxGT1EZ2OQJhEWQ0iV_-_MT1713bkuYD0h/exec',{redirect: "follow", headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },mode: "cors",})
    .then((response) => response.json())
    .then((data) => setLogin(data));
  },[])
  var breakError = {}
  var login_flag = 0
  const credentialResponse = (res) =>{
    var cred = res.credential
    email = jwt_decode(cred).email
    try{
      login.data.forEach((ele,i)=>{
        if(email===ele.kkr_mail){
          // props.GetData(i)
          console.log(ele)
          navigate(`/home/${i}/${ele.kkr_name}/${ele.kkr_post}/${ele.kkr_sabha}/${ele.sabha_no}/balakodb`)
          login_flag = 1
          throw breakError
        }
        else{
          navigate(`/`) 
          login_flag = 0
        }
      })
    }catch(err){
      if(err!==breakError) throw err
    }
    if(login_flag!==1){
      toast.error('Invalid Email id!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    
  }
  const errorResponse = (res)=>{
    console.log(res)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url(`./assets/bg.avif`)]" >
      <ToastContainer/>
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      {
        login==null?
        <div className="mb-8 flex flex-col items-center">
        <h1 className="mb-2 text-2xl">Welcome to K5Buddy</h1>
        <span className="text-gray-300"><Load caption={"Loading.."}/></span>
      </div>:<div className="mb-8 flex flex-col items-center">
        <h1 className="mb-2 text-2xl">K5Buddy</h1>
        <span className="text-gray-300">Login to continue..</span>
        <div className='mt-4'>
        <GoogleLogin
          onSuccess={credentialResponse}
          onError={errorResponse}
          signin
          icon
        />
        </div>
      </div>
      }
    </div>
  </div>
</div>
  );
}

export default Login