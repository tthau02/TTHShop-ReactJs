import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white shadow-md p-6 rounded-lg">
          <h3 class="text-lg font-semibold">Total Users</h3>
          <p class="text-2xl font-bold text-blue-500">1,234</p>
        </div>

        <div class="bg-white shadow-md p-6 rounded-lg">
          <h3 class="text-lg font-semibold">Products</h3>
          <p class="text-2xl font-bold text-green-500">567</p>
        </div>

        <div class="bg-white shadow-md p-6 rounded-lg">
          <h3 class="text-lg font-semibold">Orders</h3>
          <p class="text-2xl font-bold text-red-500">432</p>
        </div>
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

export default Dashboard