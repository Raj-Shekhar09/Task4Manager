import React, { useState } from 'react';
import { Search, Edit2, Trash2 } from 'lucide-react';

export default function SubcategoryPage({ setActiveMenu, setEditItem }) {
  const [categories, setCategories] = useState([
    { id: 123, name: 'Mobile', image: '📱', status: 'Active' },
    { id: 124, name: 'Laptop', image: '💻', status: 'Inactive' },
    { id: 125, name: 'Grocery', image: '🛒', status: 'Inactive' }
  ]);

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <svg width="25" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          <h1 className="text-2xl font-semibold">Subcategory</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder=""
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            onClick={() => {
              setEditItem(null);
              setActiveMenu("add-subcategory");
            }}
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition font-medium"
          >
            Add New
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-yellow-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Id ↕</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category name ↕</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image ↕</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status ↕</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{category.id}</td>
                <td className="px-6 py-4 text-sm">{category.name}</td>
                <td className="px-6 py-4 text-sm text-2xl">{category.image}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`${category.status === 'Active' ? 'text-green-600' : 'text-red-600'} font-medium`}>
                    {category.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">

                    {/* ⭐ FIXED EDIT BUTTON ⭐ */}
                    <button
                      className="text-gray-600 hover:text-purple-600 transition"
                      onClick={() => {
                        setEditItem(category);
                        setActiveMenu("add-subcategory");
                      }}
                    >
                      <Edit2 size={18} />
                    </button>

                    <button
                      className="text-gray-600 hover:text-red-600 transition"
                      onClick={() => handleDelete(category.id)}
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No subcategories found.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </>
  );
}
