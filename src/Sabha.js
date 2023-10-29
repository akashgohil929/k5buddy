import React from 'react'
import { NavLink,Outlet,useParams,useLocation } from 'react-router-dom'
function Sabha() {
  var {id ,name,post,sabha,sabha_no}= useParams()
  var location = useLocation()
  var report_path = "/home/2/Akshar%20Parmar/snc/Makwana%20Nagar/BL-BM5-BM-003/sabha/report"
  var content_path = "/home/2/Akshar%20Parmar/snc/Makwana%20Nagar/BL-BM5-BM-003/sabha/content"
  var path = location.pathname
  
  return (
    <div className='main w-full h-full'>
      <div className="bg-white flex items-center justify-center	 w-full h-[40px]">
        <ul className="navbar w-full h-full flex  items-center justify-center	">

            <NavLink to={`/home/${id}/${name}/${post}/${sabha}/${sabha_no}/sabha/report`} className={path===report_path?"bg-gray-900 text-white":"bg-gray-300 text-gray-900"}>
                <div className=" text-gray-900 bg-gray-300 py-1 px-4 text-sm font-medium text-center" >Report</div>
            </NavLink>
            <NavLink to={`/home/${id}/${name}/${post}/${sabha}/${sabha_no}/sabha/content`} className={path===content_path?"bg-gray-900 text-white":"bg-gray-300 text-gray-900"}>
                <div className="text-gray-900 bg-gray-300 py-1 px-4 text-sm  font-medium text-center" >Content</div>
            </NavLink>
        </ul>
    </div>
    <div className="h-[calc(100vh-40px)] w-full bg-red-300">
      <Outlet/>
    </div>
    </div>
  )
}

export default Sabha
