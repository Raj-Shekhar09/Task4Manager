import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Ct from "./Ct";

const Reg = () => {
  const [data, setData] = useState({ task: "", desc: "", deadline: "" });
  const [msg, setMsg] = useState("");

  const obj = useContext(Ct);
  const navigate = useNavigate();

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const add = () => {
    const finalData = { ...data, userId: obj.store.userId };
    axios
      .post("http://localhost:5000/addtask", finalData)
      .then((res) => {
        if ("msg" in res.data) {
          setMsg(res.data.msg);
          setData({ task: "", desc: "", deadline: "" });
          navigate("/disp");
        } else {
          setMsg(res.data.err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md flex flex-col gap-4">
        {msg && <p className="text-green-600 font-medium">{msg}</p>}

        <label className="font-semibold">Task:</label>
        <input
          type="text"
          placeholder="Task"
          name="task"
          onChange={fun}
          value={data.task}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="font-semibold">Description:</label>
        <input
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={fun}
          value={data.desc}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="font-semibold">Deadline:</label>
        <input
          type="date"
          placeholder="Deadline"
          name="deadline"
          onChange={fun}
          value={data.deadline}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={add}
          className="p-3 bg-green-500 text-white rounded-md text-base font-medium hover:bg-green-600 transition-colors"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Reg;
