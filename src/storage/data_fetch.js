import { createContext,useState } from "react";
const AppContext = createContext()


const AppProvider = ({children})=>{
  const [login,setLogin] = useState(null)

return (
  
    (login!=null)?<AppContext.Provider value={login}>{children}</AppContext.Provider>:<AppContext.Provider value={null}>{children}</AppContext.Provider>
  
);
}
export {AppContext,AppProvider}