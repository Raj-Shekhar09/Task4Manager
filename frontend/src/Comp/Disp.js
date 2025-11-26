import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ct from "./Ct";

const Disp = () => {
  const [data, setData] = useState([]);
  const [complete, setComplete] = useState([]);
  const [f, setF] = useState(true);

  const navigate = useNavigate();
  const obj = useContext(Ct);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/gettask/${obj.store.userId}`)
      .then((res) => {
        setData(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching tasks:", err));

    axios
      .get(`http://localhost:5000/getcomptask/${obj.store.userId}`)
      .then((res) => {
        setComplete(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching completed tasks:", err));
  }, [f]);

  const upd = (edtobj) => {
    obj.updstore(edtobj);
    navigate("/edit");
  };

  const del = (idno) => {
    axios.delete(`http://localhost:5000/deltask/${idno}`).then(() => setF(!f));
  };

  const comp = (task) => {
    axios
      .post("http://localhost:5000/addcomptask", task)
      .then(() => axios.delete(`http://localhost:5000/deltask/${task._id}`))
      .then(() => setF(!f))
      .catch((err) => console.error("Error completing task:", err));
  };

  const delcomp = (idno) => {
    axios
      .delete(`http://localhost:5000/delcomptask/${idno}`)
      .then(() => setF(!f))
      .catch((err) => console.error("Error deleting completed task:", err));
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans py-8">
      {/* Active Tasks */}
      {data.length > 0 && (
        <div className="overflow-x-auto mb-12">
          <h1 className="text-2xl font-bold text-center mb-4">Task Data</h1>
          <table className="min-w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-green-600 text-white uppercase text-sm">
              <tr>
                <th className="p-3 text-left">SNO</th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, ind) => (
                <tr
                  key={item._id}
                  className="even:bg-gray-50 hover:bg-green-50 transition-colors"
                >
                  <td className="p-3">{ind + 1}</td>
                  <td className="p-3">{item._id}</td>
                  <td className="p-3">{item.task}</td>
                  <td className="p-3">{item.desc}</td>
                  <td className="p-3">{item.deadline}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => upd({ item })}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => del(item._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => comp(item)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Completed Tasks */}
      {complete.length > 0 && (
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-bold text-center mb-4">
            Completed Tasks
          </h1>
          <table className="min-w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-green-600 text-white uppercase text-sm">
              <tr>
                <th className="p-3 text-left">SNO</th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {complete.map((item, ind) => (
                <tr
                  key={item._id}
                  className="even:bg-gray-50 hover:bg-green-50 transition-colors"
                >
                  <td className="p-3">{ind + 1}</td>
                  <td className="p-3">{item._id}</td>
                  <td className="p-3">{item.task}</td>
                  <td className="p-3">{item.desc}</td>
                  <td className="p-3">{item.deadline}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">
                    <button
                      onClick={() => delcomp(item._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Disp;
