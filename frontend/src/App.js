import React, { useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Disp from './Comp/Disp'
import Reg from './Comp/Reg'
import Edit from './Comp/Edit'
import Ct from './Comp/Ct'
import Flipcard from './Comp/Flipcard'
import Dashboard from './Comp/Dashboard'
import Category from './Comp/Category111111111111111'
import AddCategoryPage from './Comp/Products00' 

const App = () => {
  let [store,setStore]=useState({})
  let updstore=(obj)=>{
    setStore({...store,...obj})
  }
  let obj={"store":store,"updstore":updstore}
  return (
    <BrowserRouter>
      <Ct.Provider value={obj}>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Flipcard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/disp" element={<Disp/>}/>
          <Route path="/reg" element={<Reg/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/category" element={<Category />} />
          <Route path="/add-category" element={<AddCategoryPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </Ct.Provider>
    </BrowserRouter>
  )
}
export default App