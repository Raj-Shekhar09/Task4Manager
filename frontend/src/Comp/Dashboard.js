import React, { useState } from 'react';
import { Home, Grid, Package } from 'lucide-react';

import HomePage from './Home';
import CategoryPage from './Category';
import SubcategoryPage from './Subcategory';

import ProductsPage from './Products';
import AddProductPage from "./Products00";

import AddSubcategoryPage from "./Subcategory00";  
import AddCategoryPage from "./Category00";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("category");
  const [editItem, setEditItem] = useState(null);

  // Reset edit data whenever switching menu
  const switchMenu = (menu) => {
    setEditItem(null);
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <HomePage />;

      case "category":
        return (
          <CategoryPage
            setActiveMenu={setActiveMenu}
            setEditItem={setEditItem}
          />
        );

      case "add-category":
        return (
          <AddCategoryPage
            setActiveMenu={setActiveMenu}
            editItem={editItem}
          />
        );

      case "subcategory":
        return (
          <SubcategoryPage
            setActiveMenu={setActiveMenu}
            setEditItem={setEditItem}
          />
        );

      case "add-subcategory":
        return (
          <AddSubcategoryPage
            setActiveMenu={setActiveMenu}
            editItem={editItem}
          />
        );

      case "products":
        return (
          <ProductsPage
            setActiveMenu={setActiveMenu}
            setEditItem={setEditItem}
          />
        );

      case "add-product":
        return (
          <AddProductPage
            setActiveMenu={setActiveMenu}
            editItem={editItem}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-700 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-bold text-lg">
            D
          </div>
          <span className="text-2xl font-light tracking-wide">digitalflake</span>
        </div>

        <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-purple-600 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </button>
      </header>

      <div className="flex">
        <aside className="w-64 bg-gray-100 min-h-screen">
          <nav className="p-2">

            {/* HOME */}
            <button
              onClick={() => switchMenu('home')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${
                activeMenu === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              <Home size={20} />
              <span className="flex-1 text-left font-medium">Home</span>
              <span className="text-gray-400">›</span>
            </button>

            {/* CATEGORY */}
            <button
              onClick={() => switchMenu('category')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${
                activeMenu === 'category' || activeMenu === 'add-category'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              <Grid size={20} />
              <span className="flex-1 text-left font-medium">Category</span>
              <span className="text-gray-400">›</span>
            </button>

            {/* SUBCATEGORY */}
            <button
              onClick={() => switchMenu('subcategory')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${
                activeMenu === 'subcategory' || activeMenu === 'add-subcategory'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              <span className="flex-1 text-left font-medium">Subcategory</span>
              <span className="text-gray-400">›</span>
            </button>

            {/* PRODUCTS */}
            <button
              onClick={() => switchMenu('products')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${
                activeMenu === 'products' || activeMenu === 'add-product'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              <Package size={20} />
              <span className="flex-1 text-left font-medium">Products</span>
              <span className="text-gray-400">›</span>
            </button>

          </nav>
        </aside>

        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
