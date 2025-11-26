import React, { useState } from "react";
import { Search, Edit2, Trash2, Package } from "lucide-react";

export default function ProductsPage({ setActiveMenu, setEditItem }) {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 14", price: "₹79,999", image: "📱", status: "Active" },
    { id: 2, name: "Dell Laptop", price: "₹55,000", image: "💻", status: "Inactive" },
    { id: 3, name: "Rice Bag", price: "₹799", image: "🛒", status: "Active" }
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Package size={24} />
          <h1 className="text-2xl font-semibold">Products</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            onClick={() => {
              setEditItem(null);
              setActiveMenu("add-product");
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
              <th className="px-6 py-3 text-left text-sm font-semibold">Id</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{product.id}</td>
                <td className="px-6 py-4 text-sm">{product.name}</td>
                <td className="px-6 py-4 text-sm">{product.price}</td>
                <td className="px-6 py-4 text-2xl">{product.image}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`font-medium ${
                      product.status === "Active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      className="text-gray-600 hover:text-purple-600"
                      onClick={() => {
                        setEditItem(product);
                        setActiveMenu("add-product");
                      }}
                    >
                      <Edit2 size={18} />
                    </button>

                    <button
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
