import React,{useEffect,lazy,Suspense} from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound'
import Protected from './Protected';
import Load from './Load';
const Balkodb = lazy(()=>import('./Balkodb'))
const Addbalko = lazy(()=>import('./Addbalko'))
const Sabha = lazy(()=>import('./Sabha'))
const Report  = lazy(()=>import('./Report'))
const Content = lazy(()=>import('./Content'))
function App() { 
  useEffect(()=>{
    var status = localStorage.getItem("is_login")
    if(status=="true"){
      localStorage.setItem("is_login",true)
    }
    else{
      localStorage.setItem("is_login",false)
    }
  },[])
  return (
    <div className="main w-full h-[100vh] bg-blue-700">
    <Router>
      <Suspense fallback={<Load caption={"Loading..."}/>}>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home/:id/:name/:post/:sabha/:sabha_no' element={<Protected Component={Home}/>}>
        <Route exact path='balakodb' element={<Protected Component={Balkodb}/>}/>
        <Route exact path='add_new' element={<Protected Component={Addbalko}/>}/>
        <Route exact path='sabha' element={< Protected Component={Sabha}/>}>
          <Route   path='report' element={<Protected Component={Report}/>}/>
          <Route   path='content' element={<Protected Component={Content}/>}/>
        </Route>
      </Route>
      <Route path='/*' element={<Protected Component={NotFound}/>}/>
      </Routes>
      </Suspense>
    </Router>
    </div>
  )
}

export default App;
