
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Category() {
  const [category, setCategory] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [confirmBox, setConfirmBox] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getCategory")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/deleteCategory/${deleteId}`)
      .then(() => {
        setCategory(category.filter((c) => c.id !== deleteId));
        setConfirmBox(false);
      });
  };
  return (
    <div className="flex-1 p-6">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-2xl">🔲</span> Category
        </h1>
        {/* Search + Add */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 rounded-md w-64"
          />
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">
            Add New
          </button>
        </div>
      </div>
      {/* TABLE */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-yellow-100">
            <th className="p-3">Id</th>
            <th className="p-3">Category name</th>
            <th className="p-3">Image</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item) => (
            <tr
              key={item.id}
              className="border-b bg-gray-50 hover:bg-gray-100 transition"
            >
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">
                <img
                  src={item.image}
                  alt="cat img"
                  className="w-10 h-10 rounded object-cover"
                />
              </td>
              <td
                className={`p-3 font-semibold ${
                  item.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.status}
              </td>
              <td className="p-3 flex gap-4 text-xl">
                {/* Edit */}
                <button className="text-gray-700 hover:text-black">
                  ✏️
                </button>
                {/* Delete */}
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => {
                    setDeleteId(item.id);
                    setConfirmBox(true);
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* CONFIRM DELETE POPUP */}
      {confirmBox && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl w-[340px] shadow-xl">
            <div className="text-center">
              <div className="text-red-600 text-4xl mb-3">⚠️</div>
              <h2 className="text-xl font-bold mb-2">Delete</h2>
              <p className="text-gray-600">
                Are you sure you want to delete?
              </p>
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-2 border rounded-md"
                onClick={() => setConfirmBox(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-purple-700 text-white rounded-md"
                onClick={handleDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}