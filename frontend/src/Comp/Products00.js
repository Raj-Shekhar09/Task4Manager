import React, { useState, useEffect } from "react";
import { Upload, X, ArrowLeft, ChevronDown } from "lucide-react";

export default function AddProductPage({ setActiveMenu, editItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [subcategory, setSubcategory] = useState("Select SubCategory");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [subcategoryOpen, setSubcategoryOpen] = useState(false);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const categories = ["Electronics", "Fashion", "Grocery"];
  const subcategories = ["Mobile", "Laptop", "Camera"];

  useEffect(() => {
    if (editItem) {
      setName(editItem.name || "");
      setPrice(editItem.price || "");
      setCategory(editItem.category || "Select Category");
      setSubcategory(editItem.subcategory || "Select SubCategory");
      setImagePreview(editItem.image || null);
    }
  }, [editItem]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!name.trim() || !price.trim()) {
      alert("Please fill all fields!");
      return;
    }

    alert(editItem ? "Product updated successfully!" : "Product added successfully!");
    setActiveMenu("products");
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setActiveMenu("products")}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-2xl font-semibold">
          {editItem ? "Edit Product" : "Add Product"}
        </h1>
      </div>

      <div className="bg-white rounded-lg p-6 shadow border flex flex-wrap gap-8">

        <div className="flex-1 min-w-[250px]">
          <label className="text-sm font-medium">Product Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label className="text-sm font-medium">Price</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label className="text-sm font-medium">Category</label>
          <div
            className="border px-4 py-2 rounded flex justify-between mt-1 cursor-pointer"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            {category}
            <ChevronDown size={18} />
          </div>

          {categoryOpen && (
            <div className="border rounded mt-1 bg-white shadow">
              {categories.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setCategoryOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-[250px]">
          <label className="text-sm font-medium">SubCategory</label>
          <div
            className="border px-4 py-2 rounded flex justify-between mt-1 cursor-pointer"
            onClick={() => setSubcategoryOpen(!subcategoryOpen)}
          >
            {subcategory}
            <ChevronDown size={18} />
          </div>

          {subcategoryOpen && (
            <div className="border rounded mt-1 bg-white shadow">
              {subcategories.map((s) => (
                <div
                  key={s}
                  onClick={() => {
                    setSubcategory(s);
                    setSubcategoryOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-[250px]">
          <label className="text-sm font-medium">Upload Image</label>

          <div className="border-2 border-dashed p-6 rounded text-center bg-gray-50 mt-1">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  className="w-full h-40 object-contain"
                  alt="Preview"
                />
                <button
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer block">
                <Upload size={20} className="mx-auto text-gray-400" />
                <span className="text-sm text-gray-500">Click to upload</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex gap-3">
        <button
          onClick={() => setActiveMenu("products")}
          className="px-8 py-2 border rounded bg-white text-gray-700"
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="px-8 py-2 bg-purple-700 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
