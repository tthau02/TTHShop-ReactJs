import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <>
    <header class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Product List</h1>
    </header>
    <div className='flex justify-between'>
        <div>
            <input className='p-2 rounded-lg' type="text" placeholder='Search'/>
            <button className='ml-3 p-2 bg-red-500 w-[80px] rounded-lg text-white hover:bg-red-400'>Search</button>
        </div>
        <Link to="/admin/productlist/add"><button className='ml-3 p-2 bg-blue-500 w-[80px] rounded-lg text-white hover:bg-blue-400'>Add</button></Link>
    </div>
         {/* <!-- Table --> */}
      <div class="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full text-left">
          <thead class="bg-gray-200">
            <tr>
              <th class="py-3 px-4">User</th>
              <th class="py-3 px-4">Email</th>
              <th class="py-3 px-4">Role</th>
              <th class="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="py-3 px-4">John Doe</td>
              <td class="py-3 px-4">john@example.com</td>
              <td class="py-3 px-4">Admin</td>
              <td class="py-3 px-4">
                <button class="text-blue-500">Edit</button>
                <button class="text-red-500 ml-2">Delete</button>
              </td>
            </tr>
            {/* <!-- Thêm các dòng khác tùy ý --> */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList