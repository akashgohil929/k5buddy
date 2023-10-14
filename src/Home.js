import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useParams ,Outlet} from 'react-router-dom';

function Home(){

  var {id ,name,post,sabha,sabha_no}= useParams()
  var header_data = {name,post,sabha,sabha_no,id}
  return (
    <div className='main w-full h-full bg-gray-900'>
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