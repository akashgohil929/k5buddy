import React from 'react'

function NotFound() {
  return (
    <div>

<div className="flex items-center justify-center h-[100vh] bg-white py-48">
    <div className="flex flex-col">
        <div className="flex flex-col items-center">
            <div className="text-gray-800 font-bold text-7xl">
                404
            </div>

            <div className="font-bold text-center text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                This page does not exist
            </div>

            <div className="text-gray-400 text-center font-medium text-sm md:text-xl lg:text-2xl mt-8 p-4">
                The page you are looking for could not be found.
            </div>
        </div>

        <div className="flex flex-col mt-0">

            <div className="flex flex-col items-stretch mt-5">
                <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-xl bg-gray-100 px-3 py-2 md:py-4">
                        <i className="mdi mdi-message-outline mx-auto 
                            text-gray-900 text-2xl md:text-3xl"></i>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl">
                        <a  href="mailto:borivalibalmandalk5@gmail.com">Contact</a>
                    </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default NotFound
