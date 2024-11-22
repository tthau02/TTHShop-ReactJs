import React from 'react'

const ProductsPage = () => {
  return (
    <div className="container max-w-[1300px] mx-auto flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Danh Mục</h2>
        <ul className="space-y-2">
          <li>
            <a href="#category1" className="block p-2 hover:bg-gray-200 rounded">
              Danh mục 1
            </a>
          </li>
          <li>
            <a href="#category2" className="block p-2 hover:bg-gray-200 rounded">
              Danh mục 2
            </a>
          </li>
          <li>
            <a href="#category3" className="block p-2 hover:bg-gray-200 rounded">
              Danh mục 3
            </a>
          </li>
          <li>
            <a href="#category4" className="block p-2 hover:bg-gray-200 rounded">
              Danh mục 4
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6">
        <h1 className="text-2xl font-bold mb-6">Sản Phẩm</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
                <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product Image" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800">Product Name 4</h2>
                    <p class="mt-2 text-gray-600 text-sm">
                        This is a brief description of the product.
                    </p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-red-500">$99.99</span>
                        <button class="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-red-400">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
                <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product Image" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800">Product Name 4</h2>
                    <p class="mt-2 text-gray-600 text-sm">
                        This is a brief description of the product.
                    </p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-red-500">$99.99</span>
                        <button class="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-red-400">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
                <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product Image" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800">Product Name 4</h2>
                    <p class="mt-2 text-gray-600 text-sm">
                        This is a brief description of the product.
                    </p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-red-500">$99.99</span>
                        <button class="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-red-400">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
                <img class="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Product Image" />
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800">Product Name 4</h2>
                    <p class="mt-2 text-gray-600 text-sm">
                        This is a brief description of the product.
                    </p>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-lg font-bold text-red-500">$99.99</span>
                        <button class="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-red-400">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default ProductsPage