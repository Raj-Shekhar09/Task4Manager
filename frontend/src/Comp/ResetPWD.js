import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ct from "./Ct";

const ResetPWD = ({ onFlip }) => {
  const [data, setData] = useState({ _id: "" });
  const [msg, setMsg] = useState("");

  let obj = useContext(Ct);
  const navigate = useNavigate();

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const ResetPWD = () => {
    axios
      .post("http://localhost:5000/forgot", data)
      .then((res) => {
        if (res.data.success) {
          setMsg("Reset link sent to your email!");
          onFlip();
        } else {
          setMsg(res.data.msg);
        }
      })
      .catch((err) => {
        setMsg("Failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4 ">
      <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md ">

        <h2 className="text-center text-xl font-semibold text-purple-700 mb-4">
          Did you forget your password?
        </h2>

        {msg && (
          <div className="text-center text-sm text-red-600 mb-3">{msg}</div>
        )}

        <label className="block text-gray-600 text-sm mb-2 text-center">
          Enter your email address and we'll send you a link to restore your password
        </label>

        <label className="block text-gray-700 font-medium mt-4 mb-1">
          Email address
        </label>

        <input
          type="text"
          name="_id"
          placeholder="Enter email"
          onChange={fun}
          value={data._id}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none 
                     focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={ResetPWD}
          className="w-full bg-purple-700 text-white py-2 rounded-md mt-5 
                     hover:bg-purple-800 transition"
        >
          Request reset link
        </button>

        <p className="text-center mt-4">
          <a
            href="#"
            className="text-gray-600 text-sm hover:underline"
            onClick={(e) => {
              e.preventDefault();
              onFlip();
            }}
          >
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPWD;
