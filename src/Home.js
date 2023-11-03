import React,{useEffect} from 'react'
import Header from './Header'
import { getToken } from 'firebase/messaging';
import { messaging } from './Firebase';
import Navbar from './Navbar'
import { useParams ,Outlet} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Home(){
  var {id ,name,post,sabha,sabha_no}= useParams()
  var header_data = {name,post,sabha,sabha_no,id}

  var api_id = "BK1T8l9zkAeghz1mGudczLRIu2TL5B_630fVUX7DX5XWxiPPIJeo2wWcqFH1qQkrvYVdA5ZJzhMoqa1jM-SvSjo" 
  function requestNotification(){
    Notification.requestPermission().then((permission)=>{
      if(permission==='granted'){
        getToken(messaging,{'vapidKey':api_id}).then((token)=>{
          var noti = {
            name:name,
            token:token
          }
          var endpoints = "https://script.google.com/macros/s/AKfycbzxUx4cGh7K_oA0SzPAPtqip41-r-6l6WpxQd5MHqsj-ZttbMLxoZUtOqWeaYeQlcD-/exec"
          fetch(endpoints, {
            method: "POST",
            body: JSON.stringify(noti),
           }).then(res=>{
            if(res.status==200){
               return res.json()
            }
            throw new Error('Something went wrong');
            }).then((data)=>{
              localStorage.setItem('token',data.token)
          }).catch((error)=>{
           if(error){
               toast.error('Something went wrong, try again!', {
                   position: "top-center",
                   autoClose: 2000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: false,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
                   })
           }
          })
        }).catch((err)=>{
          toast.error('Error in notification!', {
            position: "top-center",
            autoClose: 100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        })
      }
      else if(permission==='denied'){
        localStorage.setItem('notification','denied')
        toast.error('Denied notification!', {
          position: "top-center",
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }
      else{
        localStorage.setItem('notification','default')
        console.log('default')
      }
    })
  }
  useEffect(()=>{
    requestNotification()    
    return () => {}

  },[])
  var {id ,name,post,sabha,sabha_no}= useParams()
  var header_data = {name,post,sabha,sabha_no,id}
  return (
    <div className='main w-full h-full bg-gray-900'>
      <ToastContainer/>
      <div className="header w-full h-[12%]">
        <Header headers_data={header_data}/>
      </div>
      <div className='navbar w-full h-[10%] bg-gray-100'>
        <Navbar headers_data={header_data}/>
      </div>
      <div className='main-out w-full overflow-scroll overflow-x-hidden h-[calc(100vh-22%)]'>
        <Outlet/>
      </div>
    </div>
  );
}
export default Home;