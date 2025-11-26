import React, { useState, useEffect } from "react";
import { Upload, X, ArrowLeft } from "lucide-react";

export default function AddSubCategoryPage({ setActiveMenu, editItem }) {
  const [subCategoryName, setSubCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (editItem) {
      setSubCategoryName(editItem.name || "");
      setImagePreview(editItem.image || null);
    }
  }, [editItem]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSave = () => {
    if (!subCategoryName.trim()) {
      alert("Please enter a subcategory name");
      return;
    }

    console.log(editItem ? "Updating subcategory:" : "Saving subcategory:", {
      name: subCategoryName,
      image: imagePreview,
    });

    alert(editItem ? "Subcategory updated!" : "Subcategory saved!");
    setActiveMenu("subcategory");
  };

  const handleCancel = () => {
    setActiveMenu("subcategory");
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setActiveMenu("subcategory")}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">
          {editItem ? "Edit SubCategory" : "Add SubCategory"}
        </h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex gap-8">

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SubCategory Name
            </label>
            <input
              type="text"
              value={subCategoryName}
              onChange={(e) => setSubCategoryName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter subcategory name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-40 object-contain rounded"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition shadow-lg"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="mb-3">
                      <svg
                        className="w-16 h-16 text-gray-300"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                      >
                        <path
                          d="M20,70 L40,50 L60,70 L80,40 L80,80 L20,80 Z M20,20 L80,20 L80,80 L20,80 Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <circle cx="35" cy="35" r="5" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Upload className="text-gray-400" size={20} />
                      <span className="text-sm text-gray-600 font-medium">
                        Upload Maximum allowed
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">file size is 10MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex gap-3 z-50">
        <button
          onClick={handleCancel}
          className="px-8 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition font-medium"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-8 py-2.5 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
}
