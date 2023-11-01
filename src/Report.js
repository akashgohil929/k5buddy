import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from 'react-toastify';
import ClipboardJS from 'clipboard';
function Report() {
    const [copy,setCopy]=useState(false)
    const [copyvalue,setCopyvalue] = useState("")
    useEffect(()=>{
        var clipboard = new ClipboardJS(".copy-btn")
        clipboard.on('success', function(e) {
            setCopyvalue((e.text).replace(/\n\s*\n/g, '\n'));  
            toast.success('Successfully Copied to Clipboard! Post report in group', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            e.clearSelection();
        });
    },[copy])

    const [open, setOpen] = useState(false);
    const [feedback,setFeedback] = useState("")
    const form = useForm()
    const {register,handleSubmit,watch,getValues,reset} = form
    const [text,setText] = useState(false);
var endpoint = "https://script.google.com/macros/s/AKfycbwAHJ8IcTdxdiTDWuwDN8KhxpVfdyYSEFPTMjH_AIWJSzYZOxMvaBJZHBbwDWRuZxm6/exec"
 const SubmitReport = (data)=>{
        var report = {
        data:data,
        sabha_name:sabha,
        total_balako:bname.length,
        present_balako:(getValues("present_balako")).length
    }
    Swal.fire({
        title: 'Are you sure you want to submit?',
        showCancelButton: true,
        confirmButtonColor: '#00172D',
        cancelButtonColor: '#E3242B',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            if(watch("present_balako")==false){
                toast.error('Select the present balako!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            }else{
                setText(true)
                fetch(endpoint, {
                    method: "POST",
                    body: JSON.stringify(report),
                   }).then(res=>{
                    if(res.status==200){
                       return res.json()
                    }
                    throw new Error('Something went wrong');
                    }).then((data)=>{
                       if(data.status){
                        console.log(data.data)
                        setFeedback(data.data)
                           setText(false)
                           reset()
                           setOpen(true)
                       }
                   }).catch((error)=>{
                    if(error){
                        setText(false)
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
            }
                
            
            
        }})
 }
  var {sabha} = useParams()
  sabha = sabha.replace(" ","")
  var [bname ,setBname] = useState(null)
  useEffect(()=>{
    fetch(`https://script.google.com/macros/s/AKfycbz7XOlBHFQ_h85UuZMGaaAnXxBtbKMHhju1YP_ZlksR1R_FBzRCq4XHfEPSIQkYM0Su/exec?type=nodel&sabha=${sabha}&action=name`,{redirect: "follow", headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },mode: "cors",})
    .then((response) => {
        if(response.status==200){
            return response.json()
        }
        throw new Error("Some thing went wrong")
    })
    .then((data) => (setBname(data.data))).catch((error)=>{
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
  },[])
  function changeDate(edit_date){
    var date = edit_date.split("-")
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var month = months[+(date[1])-1]
    return date[2]+" "+month + " "+date[0]
}   

  return (

    <div className='w-full h-full'>
            <ToastContainer />

            <Modal open={open} closeOnOverlayClick={false} focusTrapped={true} onClose={()=>{setOpen(false)}} showCloseIcon={false}>
            <div className='heading w-full h-[40px]  bg-white flex items-center justify-between'>
            <h3 className='ml-4 text-lg'>Report</h3>
            <i onClick={()=>setOpen(false)} className="fa-solid fa-rectangle-xmark text-2xl mr-4"></i>
            </div>
                {
                    feedback!==""?<div id='content' className='w-full h-full text-gray-800'>
                    <p>{feedback.sabha_name}</p>
                    <p>{changeDate(feedback.data.date)}</p>
                    <p>{(feedback.data.sabha_no).toUpperCase()}</p>
                    <p>Total balako : {feedback.total_balako}</p>
                    <p>Total present balako : {feedback.present_balako}</p>
                    <p>New balak count : {feedback.data.new_balak_count}</p>
                    <p> Satsang vihar : {feedback.data.satsang_vihar==true?"✔️":"❌"}</p>
                    <p> Sarvang vihar : {feedback.data.sarvang_vihar==true?"✔️":"❌"}</p>
                    <p> Pragat vihar : {feedback.data.pragat_vihar==true?"✔️":"❌"}</p>
                    <p>{feedback.data.other?feedback.data.other_sabha:""}</p>
                    <p>Ehwal % : {feedback.data.ehwal_per}%</p>
                    <p>Mulakat
                    <span hidden={feedback.data.santo==true||feedback.data.santo==true||feedback.data.nirikshak==true||feedback.data.agresar==true}> : None</span>
                    </p>
                    <p>{feedback.data.santo==true?"Santo ✔️":""}</p>
                    <p>{feedback.data.nirdeshak==true?"Nirdeshak ✔️":""}</p>
                    <p>{feedback.data.nirikshak==true?"Nirikshak ✔️":""}</p>
                    <p>{feedback.data.agresar==true?"Agresar ✔️":""}</p>
                    <p>{feedback.data.prasad===""?"":`Prasad : ${feedback.data.prasad}`}</p>
                 </div>:<h1>Loading..</h1>
                }
                <div className='mt-2 '>
                    <button onCopy={()=>{setCopy(true)}} className='copy-btn py-1 ml-2 px-3 bg-gray-800 text-white'  data-clipboard-target="#content" data-clipboard-action="copy" data-clipboard-text={copyvalue} >Copy</button>
                    <button type='button' onClick={()=>setOpen(false)} className='py-1 ml-2 px-3 bg-gray-800 text-white'>Close</button>
                </div>
            </Modal>
        
      <div class="mt-0 w-full h-full md:col-span-2">
            <form onSubmit={handleSubmit(SubmitReport)} >
                <div class="shadow overflow-hidden ">
                    <div class="px-2 py-8 bg-white sm:p-6">

                        <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                                <label for="ehwal_per" class="block text-sm font-medium text-gray-700">Ehwal Percentage(if ehwal is not opened put 0)</label>
                                <input 
                                type="number" 
                                {...register("ehwal_per",{valueAsNumber:false,required:{value:true,message:"Enter the ehwal percentage after filling the ehwal"}})} 
                                placeholder="75" 
                                id="first-name"
                                min={0}
                                max={100}
                                class="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full outline-none border-b-2 p-2"/>
                            </div>
                            <div hidden={watch("ehwal_per")!==""}  className='col-span-6 sm:col-span-6'>
                                <a href='https://balmandal.in.baps.org/' target="_blank" className='text-indigo-900 underline'>Click here to fill ehwal</a>
                            </div>
                            <div hidden={watch("ehwal_per")===""}  class="col-span-6 sm:col-span-3">
                                <label for="sabha_date" class="block text-sm font-medium text-gray-700">Sabha Date</label>
                                <input {...register("date",{valueAsDate:false,required:{value:true,message:"Enter the sabha date"}})} type="date"  placeholder="09/02/2021" id="sabha_date"
                                    class="mt-1  text-gray-800  outline-none block w-full shadow-sm" />
                            </div>
                            <div hidden={watch("ehwal_per")===""}  class="col-span-6 sm:col-span-3">
                                <label for="country" class="block text-sm font-medium text-gray-700">
                                    Sabha No.</label>
                                <select required {...register("sabha_no",{required:{value:true,message:"select the sabha no. as per bsc"}})} id="sabha_no" 
                                    class="mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm outline-none ">
                                    <option value=""> --Select the option-- </option>
                                    <option value="bsc 1">BCS 1</option>
                                    <option value="bsc 2">BSC 2</option>
                                    <option value="bsc 3">BSC 3</option>
                                    <option value="bsc 3">BSC 4</option>
                                    <option value="extra sabha">EXTRA SABHA</option>
                                </select>
                            </div>
                           



                        </div>
                        <div hidden={watch("ehwal_per")===""} class="mt-8 ">
                            <div class="mt-2 space-y-4">
                                <legend class=" text-base  text-1.5xl font-medium text-gray-900">
                                    Select the present balko
                                </legend>
                                {
                                    bname==null?<div>
                                        <p className='text-gray-900'>Loading..</p>
                                    </div>:<div>
                                        {
                                        bname.map((ele,i)=>{
                                            return <div  key={i} class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("present_balako")} name="present_balako" type="checkbox" value={ele.name}
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">{ele.name}</label>
                                                </div>
                                            </div>
                                        </div>
                                        })
                                    }
                                    </div>
                                }
                                <div class="col-span-6 sm:col-span-3">
                                <label for="new_balak_count" class="block text-sm font-medium text-gray-700">New balako count</label>
                                <input 
                                type="number" 
                                {...register("new_balak_count",{valueAsNumber:false,required:{value:false,message:"Enter the ehwal percentage after filling the ehwal"}})} 
                                placeholder="0 if not" 
                                id="first-name"
                                defaultValue={0}
                                class="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full outline-none border-b-2 p-2"/>
                            </div>
                                <legend class=" text-base  text-1.5xl font-medium text-gray-900">
                                    Select the sabha karyakram
                                </legend>
                                <div class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("satsang_vihar")} name="satsang_vihar" type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Satsang Vihar</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("sarvang_vihar")} name="sarvang_vihar" type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Sarvang Vihar</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("pragat_vihar")} name="pragat_vihar" type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Pragat Vihar</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("other")} name="other" type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Others</label>
                                                </div>
                                            </div>
                                            
                                        </div>
                            <div hidden={watch("other")===false} class="col-span-6 sm:col-span-3">
                                <label for="other_sabha" class="block text-sm font-medium text-gray-700">Other Karyaram</label>
                                <input type="text" {...register("other_sabha")} placeholder="Visesh sabha" id="first-name"
                                    autocomplete="given-name"
                                    class="mt-1 block w-full outline-none p-2 border-b-2"/>
                            </div>
                            <legend class=" text-base  text-1.5xl font-medium text-gray-900">
                                    Mulakat
                                </legend>
                                <div class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("santo")} type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Santo</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("nirdeshak")} type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Nirdeshak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("agresar")} type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Agresar</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 space-y-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input {...register("nirikshak")} type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="comments"
                                                        class="font-mediuregular text-gray-700">Nirikshak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="col-span-6 sm:col-span-3">
                                <label for="ehwal_per" class="block text-sm font-medium text-gray-700">Prasad</label>
                                <input type="text" {...register("prasad")} placeholder="Ice cream" id="first-name"
                                    autocomplete="given-name"
                                    class="mt-1 block w-full outline-none p-2 border-b-2"/>
                            </div>
                            </div>


                    </div>
                    <div class="px-4 py-3 bg-white text-right sm:px-6">
                        
                        <button  type="submit" disabled={watch("ehwal_per")===""}
                            class={`inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ${watch("ehwal_per")!==""?`bg-indigo-600 opacity-100`:`bg-indigo-500  opacity-50`}  text-white`}>
                            {text?"Generating report..":"Submit"}
                        </button>

                    </div>
                </div>
        </div>    
        </form>
    </div>
    </div>

  )
}

export default Report
