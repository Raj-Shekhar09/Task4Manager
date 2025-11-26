import React, { useContext, useState } from 'react';
import Ct from './Ct';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Edit = () => {
  let obj = useContext(Ct);
  let navigate = useNavigate();
  let [data, setData] = useState(obj.store.item);

  let fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let upd = () => {
    axios.put("http://localhost:5000/updtask", data).then((res) => {
      navigate("/disp");
    });
  };

  return (
    <div className="flex justify-center items-center p-10 min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white p-8 rounded-xl shadow-md w-80">
        <label className="mb-1 font-bold text-gray-800">Task:</label>
        <input
          type="text"
          placeholder="Task"
          name="task"
          onChange={fun}
          value={data.task}
          className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="mb-1 font-bold text-gray-800">Description:</label>
        <input
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={fun}
          value={data.desc}
          className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="mb-1 font-bold text-gray-800">Deadline:</label>
        <input
          type="date"
          placeholder="deadline"
          name="deadline"
          onChange={fun}
          value={data.deadline}
          className="p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={upd}
          className="p-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
