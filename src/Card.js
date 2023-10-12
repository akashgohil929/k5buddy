import React,{useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


function Card(props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setEdit({
        "fname": fname,
        "mname":mname,
        "lname":lname,
        "dob":year+"-"+month+"-"+day,
        "std":std,
        "mno" : mobile_no,
        "category":category,
        "status":status,
      })
    setOpen(false)
};
  
  var  {name,dob,std,mobile_no,category,status} = props.data
  var [fname,mname,lname] = name.split(" ")
  var [day,month,year] = dob.split("-")
  const [edit,setEdit] = useState({
    "fname": fname,
    "mname":mname,
    "lname":lname,
    "dob":year+"-"+month+"-"+day,
    "std":std,
    "mno" : mobile_no,
    "category":category,
    "status":status,
  })
  const update = (e)=>{
    var {name,value} = e.target
    setEdit({...edit,[name]:value})
  }
  const save = (e)=>{
    e.preventDefault()
    console.log(edit)
    fetch("https://script.google.com/macros/s/AKfycbzMlsdDBA81_1EzAmUIV6WOGZwZTGvySS1v2pz73pJ0-mXijqa2XLmmc1AzIztPYuM4/exec", {
         method: "POST",
         body: JSON.stringify({
        name:"Akshar"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },mode:"cors"
}).
  }
  return (
    <div>
        <div className='modal  w-[100vw] bg-gray-800 bg-opacity-50 h-[100%] m-0 p-0'>
        <Modal open={open} showCloseIcon={false}   onClose={closeModal}>
            <div className='heading w-full h-[40px]  bg-white flex items-center justify-between'>
            <h3 className='ml-4 text-lg'>Edit Details</h3>
            <i onClick={()=>setOpen(false)} className="fa-solid fa-rectangle-xmark text-2xl mr-4"></i>
            </div>
            <div className='form'>
<section className="w-full p-6 mx-0  bg-gray-800 rounded-md shadow-md dark:bg-gray-800 mt-0">
    <form onSubmit={save} >
        <div className="grid grid-cols-1 gap-6 mt-0 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" htmlfor="fname">First Name</label>
                <input onChangeCapture={update} id="fname" name='fname' value={edit.fname} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none" placeholder='Eg. Jai'/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" htmlfor="mname">Middle Name</label>
                <input onChangeCapture={update} id="mname" name='mname' type="text" value={edit.mname} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none" placeholder='Eg. Gautambhai'/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" htmlfor="lname">Last Name</label>
                <input onChangeCapture={update} id="lname" name='lname' type="text" value={edit.lname} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none" placeholder='Eg. Shah'/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" htmlfor="mno">Mobile no.</label>
                <input onChangeCapture={update} id="mno" name='mno' type="text" value={edit.mno} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none" placeholder='Eg. 9899899891'/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200">STD</label>
                <select onChangeCapture={update} name='std' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none">
                    <option selected={edit.std==="NURSERY"}  value="NURSERY">Nursery</option>
                    <option selected={edit.std==="JR"} value="JR">Jr</option>
                    <option selected={edit.std==="KG"} value="KG">Kg</option>
                    <option selected={edit.std==="1ST"}value="1ST">1st</option>
                    <option selected={edit.std==="2ND"}value="2ND">2nd</option>
                    <option selected={edit.std==="3RD"}value="3RD">3rd</option>
                    <option selected={edit.std==="4TH"}value="4TH">4th</option>
                    <option selected={edit.std==="5TH"}value="5TH">5th</option>
                    <option selected={edit.std==="6TH"}value="6TH">6th</option>
                    <option selected={edit.std==="7TH"}value="7TH">7th</option>
                    <option selected={edit.std==="8TH"}value="8TH">8th</option>
                    <option selected={edit.std==="9TH"}value="9TH">9th</option>
                    <option selected={edit.std==="10TH"}value="10TH">10th</option>
                </select>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" htmlfor="date">Date of birth</label>
                <input onChangeCapture={update} id="date" name='dob' type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-noneg" value={edit.dob}/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200">Category</label>
                <select onChangeCapture={update} name='category' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none">
                    <option selected={edit.category==="SATSANGI"}  value="SATSANGI">Satsangi</option>
                    <option selected={edit.category==="GUNBHAVI"}  value="GUNBHAVI">Gunbhavi</option>
                    <option selected={edit.category==="SIM"} value="SIM">Sim</option>

                </select>
            </div>
            <div>
                <label className="text-white dark:text-gray-200">Status</label>
                <select onChangeCapture={update} name='status' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md outline-none">
                    <option selected={edit.status==="REGULAR"}  value="REGULAR">Regular</option>
                    <option selected={edit.status==="STOPPED"}  value="IRREGULAR">Irregular</option>
                    <option selected={edit.status==="SIFT TO"} value="SIFT TO">Stop</option>
                </select>
            </div>
            <div className='flex items-center space-evenly gap-2'>
                <button type="submit" className='py-2 px-3 bg-white text-sm rounded-lg font-medium'>Save</button>
                <button type='button' className='py-2 px-3 bg-red-400 text-sm rounded-lg font-medium'>Delete</button>
                <button type="button" onClick={()=>{setOpen(false)}} className='py-2 px-3 bg-white text-sm rounded-lg font-medium'>Close</button>
            </div>
            
        </div>
    </form>
</section>
</div>
</Modal>
</div>
<div className="flex bg-white shadow-lg  max-w-full md:max-w-full mt-0">
   <div className="flex items-start px-2 py-2 w-full h-full ">
      <div className="w-full h-full">
         <div className="w-full flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900 -mt-1">{name}</h2>
            <small className={["text-sm font-semibold text-green-500",status==="REGULAR"?'text-green-500':'text-red-500'].join(" ")}>{status}</small>
         </div>
         <p className="text-gray-700 text-sm"> <i className="fa-solid fa-calendar text-[12px]"></i> {dob} </p>
         <div className='w-full flex flex-row items-center justify-between p-1 '>
         <p className="mt-0 text-gray-700 text-sm">
          STD : {std} | {category}
         </p>
          <div className="w-[50%] flex items-center justify-evenly">
          <div className="flex mr-2  text-sm">
            <a href={`tel:${mobile_no}`}><i className="fa-solid fa-phone text-lg text-green-500"></i></a>
          </div>
          <div className="flex mr-2  text-sm">
            <a href={`https://wa.me/${mobile_no}`}><i className="fa-brands fa-whatsapp text-lg text-green-600"></i></a>
          </div>
          <div onClick={()=>setOpen(true)} className="flex mr-2 text-sm">
            <i className="fa-solid fa-user-pen text-lg text-yellow-500"></i>
          </div>
          </div>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}
export default Card
