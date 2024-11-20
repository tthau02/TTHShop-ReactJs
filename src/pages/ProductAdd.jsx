import React from 'react'

const ProductAdd = () => {
  return (
    <div class="flex flex-col min-h-screen bg-gray-100 p-6">
  <header class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Add New Product</h1>
  </header>
  <div class="bg-white shadow-lg rounded-lg p-6 ">
    <form action="#" method="POST">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter product name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
        <input 
          type="number" 
          id="price" 
          name="price" 
          placeholder="Enter product price" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea 
          id="description" 
          name="description" 
          placeholder="Enter product description" 
          rows="4" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="image" class="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
        <input 
          type="file" 
          id="image" 
          name="image" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div class="flex justify-end">
        <button 
          type="submit" 
          class="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
        >
          Save Product
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default ProductAdd