import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Ct from './Ct'

const Login1 = ({ onFlip }) => {
  let [data, setData] = useState({ "_id": "", "pwd": "" })
  let [msg, setMsg] = useState("")
  let obj = useContext(Ct)
  let navigate = useNavigate()
  const [showPwd, setShowPwd] = useState(false);

  let fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  let log = () => {
    axios.post("http://localhost:5000/login", data).then((res) => {
      if (res.data.token !== undefined) {
        obj.updstore(res.data)
        navigate("/dashboard")
      } else {
        setMsg(res.data.msg)
      }
    })
  }

  return (
   <div className="w-full h-screen flex items-center justify-center bg-white ">
  
  <div className="bg-white w-[420px] p-10 rounded-xl shadow-md relative  shadow-[10px_-10px_25px_rgba(0,0,0,0.2)]">

  
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQEMmofeiWD_ow/company-logo_200_200/0/1648038602729?e=2147483647&v=beta&t=pMNgsUVixblkctiNTMBVZSE2lWwXcDRrJURruonRO3Y"
      alt="DigitalFlake Logo"
  className="w-[50%] mx-auto mb-[-6px]"
/>

<div className="text-center mt-0">
  <h5 className="text-m font-semibold text-gray-400 mb-3">
    Welcome to DigitalFlake
  </h5>
    </div>

    <label className="text-sm font-semibold text-gray-700">Email</label>
    <input
      type="text"
      placeholder="Enter Email"
      name="_id"
      value={data._id}
      onChange={fun}
      className="w-full mt-1 mb-4 p-2 border rounded-md outline-none focus:ring-1 focus:ring-purple-500"
    />
<label className="text-sm font-semibold text-gray-700">Password</label>

<div className="relative w-full">
  <input
    type={showPwd ? "text" : "password"}
    placeholder="Enter Password"
    name="pwd"
    value={data.pwd}
    onChange={fun}
    className="w-full mt-1 mb-4 p-2 pr-10 border rounded-md outline-none focus:ring-1 focus:ring-purple-500"
  />


  <span
    onClick={() => setShowPwd(!showPwd)}
    className="absolute right-3 top-3 cursor-pointer text-gray-600"
  >
    {showPwd ? "🙈" : "👁️"}
  </span>
</div>


    <p className="text-right mb-2 text-sm">
      <a
        href="/ResetPWD"
        className="text-purple-700 font-semibold cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          onFlip();
        }}
      >
        Forgot Password?
      </a>
    </p>

    <button
      onClick={log}
      className="w-full bg-purple-700 text-white py-2 rounded-md font-semibold hover:bg-purple-800"
    >
      Login
    </button>

    <div className="mt-3 text-center text-red-600 font-semibold">{msg}</div>

  </div>
</div>

  )
}

export default Login1
