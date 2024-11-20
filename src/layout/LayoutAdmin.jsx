import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div class="flex min-h-screen bg-gray-100">
  {/* <!-- Sidebar --> */}
  <aside class="w-64 bg-gray-800 text-white flex flex-col">
    <div class="p-4 text-center bg-gray-900">
      <h2 class="text-2xl font-bold">Admin Dashboard</h2>
    </div>
    <nav class="mt-5 flex-grow">
      <Link to="/admin" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
      <Link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Users</Link>
      <Link to="/admin/productlist" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Products</Link>
      <Link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Orders</Link>
      <Link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Settings</Link>
    </nav>
    <div class="p-4 bg-gray-900 text-center">
      <button class="w-full py-2 bg-red-500 text-white rounded">Logout</button>
    </div>
  </aside>

  {/* <!-- Content Area --> */}
  <div class="flex-grow">
    {/* <!-- Navbar --> */}
    <header class="bg-white p-4 shadow flex justify-between items-center">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Search" class="px-4 py-2 border rounded-md" />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Search</button>
        <div class="bg-gray-300 h-8 w-8 rounded-full"></div>
      </div>
    </header>

    {/* <!-- Main Content --> */}
    <main class="p-6">
      <Outlet />
    </main>
  </div>
</div>

  )
}

export default LayoutAdmin