import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    var  {name,post,sabha,sabha_no,id} = props.headers_data
  return (
    <div className='main w-full h-full'>
            <div className="flex">
                <NavLink to={`/home/${id}/${name}/${post}/${sabha}/${sabha_no}/balakodb`} className={({isActive})=>(isActive?" flex-1 group text-gray-900 ":"flex-1 group text-gray-500") } end>
                    <div className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full">
                        <span className="block px-0 pt-0 pb-0">
                        <i className="fa-solid fa-users text-lg pt-0 mb-[0.5px] block"></i>
                            <span className="block text-xs pb-0">Balko DB</span>
                        </span>
                    </div>
                </NavLink>
                <NavLink to={`/home/${id}/${name}/${post}/${sabha}/${sabha_no}/add_new`} className={({isActive})=>(isActive?" flex-1 group text-gray-900":"flex-1 group text-gray-500") }>
                    <div className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full ">
                        <span className="block px-0 pt-0 pb-0">
                        <i className="fa-solid fa-user-plus text-lg pt-0 mb-[0.5px] block"></i>
                            <span className="block text-xs pb-0">Add balak</span>
                        </span>
                    </div>
                </NavLink>
                <NavLink to={`/home/${id}/${name}/${post}/${sabha}/${sabha_no}/report`} className={({isActive})=>(isActive?" flex-1 group text-gray-900":"flex-1 group text-gray-500") }>
                    <div className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full">
                        <span className="block px-0 pt-0 pb-0">
                        <i className="fa-solid fa-file-lines text-lg pt-0 mb-[0.5px] block"></i>
                            <span className="block text-xs pb-0">Sabha</span>
                        </span>
                    </div>
                </NavLink>
               
                
               
          
            </div>
    </div>
  )
}

export default Navbar
