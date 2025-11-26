import React, { useState, useEffect } from "react";
import { Upload, X, ArrowLeft } from "lucide-react";

export default function AddCategoryPage({ setActiveMenu, editItem }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (editItem) {
      setName(editItem.name || "");
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
    if (!name.trim()) {
      alert("Please enter a category name");
      return;
    }

    alert(editItem ? "Category updated!" : "Category added!");
    setActiveMenu("category");
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setActiveMenu("category")}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-2xl font-semibold">
          {editItem ? "Edit Category" : "Add Category"}
        </h1>
      </div>

      <div className="bg-white rounded-lg p-6 shadow border flex gap-8">
        <div className="flex-1">
          <label className="text-sm font-medium">Category Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded mt-1"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium">Upload Image</label>
          <div className="border-2 border-dashed p-6 rounded text-center bg-gray-50 mt-1">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-40 object-contain"
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
                <Upload size={22} className="mx-auto text-gray-400" />
                <span className="text-sm text-gray-500">Click to upload</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex gap-3">
        <button
          onClick={() => setActiveMenu("category")}
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
