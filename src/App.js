import React from 'react'
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Balkodb from './Balkodb';
import Addbalko from './Addbalko';
import Report from './Report'
import NotFound from './NotFound'

function App() { 
  // const [login,setLogin]= useState(null)
  // useEffect(()=>{
  //   fetch('https://script.google.com/macros/s/AKfycbw7zJ3c7xXUdj7mbDaXYl2MudX9vFNuE3kxGT1EZ2OQJhEWQ0iV_-_MT1713bkuYD0h/exec',{redirect: "follow", headers: {
  //     "Content-Type": "text/plain;charset=utf-8",
  //   },mode: "cors",})
  //   .then((response) => response.json())
  //   .then((data) => setLogin(data));
  // },[])
  // var user_index=null;
  // const getData = (data)=>{
  //   user_index = data
  // }
  return (
    <div className="main w-full h-[100vh] bg-blue-700">
    <Router>
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home/:id/:name/:post/:sabha/:sabha_no' element={<Home/>}>
        <Route exact path='balakodb' element={<Balkodb/>}/>
        <Route exact path='add_new' element={<Addbalko/>}/>
        <Route exact path='report' element={<Report/>}/>
      </Route>
      <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>

      
    </div>
  )
}

export default App;