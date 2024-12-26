import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      setProducts(response.data);
    }
    fetchProducts()
  }, []);

  const removeItem =  async (id) => {
    if(confirm("Bạn có muốn xóa sản phẩm này không")){
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
      toast("Xóa thành công");
    }
  }
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
        <Link to="/admin/products/add"><button className='ml-3 p-2 bg-blue-500 w-[80px] rounded-lg text-white hover:bg-blue-400'>Add</button></Link>
    </div>
         {/* <!-- Table --> */}
      <div class="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full text-left">
          <thead class="bg-gray-200">
            <tr>
              <th class="py-3 px-4">ID</th>
              <th class="py-3 px-4">Product Name</th>
              <th class="py-3 px-4">Image</th>
              <th class="py-3 px-4">Price</th>
              <th class="py-3">Description</th>
              <th class="py-3 px-4">inStock</th>
              <th class="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr class="border-t" key={item.id}>
                  <td class="py-3 px-4">{index+1}</td>
                  <td class="py-3 px-4">{item.name}</td>
                  <td class="py-3 px-4 w-[150px] h-[150px]">
                      <img src={item.imageURL} alt="" />
                  </td>
                  <td class="py-3 px-4">{item.price}$</td>
                  <td class="py-3">{item.description}</td>
                  <td class="py-3 px-4">
                    {item.inStock ? <span className='text-white p-2 text-[14px] bg-red-500 rounded-lg'>Còn Hàng </span> : <span className='text-white p-2 text-[14px] bg-slate-400 text-white rounded-lg'>Hết Hàng</span>}
                    
                    </td>
                  <td class="py-3 px-4">
                    <Link to={`/admin/products/${item.id}/edit`}><button class="text-blue-500 p-2">Edit</button></Link>
                    <button class="text-red-500 ml-2" onClick={() => removeItem(item.id)}>Delete</button>
                  </td>
              </tr>
              )
            })}
           
            {/* <!-- Thêm các dòng khác tùy ý --> */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList