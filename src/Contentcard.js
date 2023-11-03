import React,{useState} from 'react'
import Modal from 'react-responsive-modal'
import Load from './Load';
function Contentcard(props) {
  const [open, setOpen] = useState(false);
  const [load,setLoad] = useState(false)

  var {content_id,content_name,content_title,content_gid} = props.content
  return (
    <div key={content_id} className='w-[90%] rounded-xl	 min-h-[70px] bg-white flex items-center justify-center m-2'>
      <div className='left rounded-l-xl h-full w-[80%] flex justify-center flex-col pl-5'>
        <h1 className='font-semibold text-lg'>{content_title}</h1>
        <p className='text-sm'>{content_name}</p>
      </div>
      <div className='right rounded-r-xl h-full w-[20%] bg-gray-600  flex items-center justify-evenly flex-col'>
      <a href={`https://drive.google.com/uc?export=download&id=${content_gid}`}><i className="fa-solid fa-file-arrow-down text-xl text-white"></i></a>
      <i onClick={()=>setOpen(true)} className="fa-solid fa-eye text-xl text-white"></i>
      </div>
      <div>
        <Modal open={open} onClose={()=>{setOpen(false)}}  showCloseIcon={false}>
        <div className='heading w-full h-[40px]  bg-white flex items-center justify-between'>
            <h3 className='ml-4 text-lg'>View Content</h3>
            <i onClick={()=>setOpen(false)} className="fa-solid fa-rectangle-xmark text-2xl mr-4"></i>
        </div>
        <div className='iframe w-[100%] h-[80vh] bg-gray-900 flex items-center justify-center'>
          {
            load?<></>:<h1 className='text-white'>Loading the pdf...</h1>
          }
        <iframe onLoad={()=>setLoad(true)} src={`https://drive.google.com/file/d/${content_gid}/preview`} className="w-full h-full" allow="autoplay"></iframe> 
        </div>
        </Modal>
      </div>
    </div>
  )
}

export default Contentcard
