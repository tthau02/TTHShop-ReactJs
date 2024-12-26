import axios from 'axios';
import React, { useEffect } from 'react'
import { get, useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";

const ProductEdit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  useEffect(() => {
    const getProduct = async() => {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      if(response.status !== 200){
        toast(errors);
      }

      reset(response.data);
    }
    getProduct();
  }, [id, reset])

  const onHandleSubmit = async (formData) => {
    formData.inStock = formData.inStock === "true";
    await axios.put(`http://localhost:3000/products/${id}`, formData);
    toast("Cập nhật thành công");
    navigate("/admin/products")
  }

  return (
    <div class="flex flex-col min-h-screen bg-gray-100 p-6">
  <header class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Edit Product</h1>
  </header>
  <div class="bg-white shadow-lg rounded-lg p-6 ">
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
        <input 
          type="text" 
          placeholder="Enter product name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("name", { required: true, minLength: 5})}
        />
          {errors?.name?.type === "required" && (
            <span className='text-red-500 p-3'>Bắt buộc nhập</span>)}
          {errors?.name?.type === "minLength" && (
        <span className='text-red-500 p-3'>Sản phẩm không nhỏ hơn 5 ký tự</span>)}
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
        <input 
          type="number" 
          placeholder="Enter product price" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("price", { required: true, min: 0})}
        />
        {errors?.price?.type === "required" && (
            <span className='text-red-500 p-3'>Bắt buộc nhập</span>)}
          {errors?.price?.type === "min" && (
        <span className='text-red-500 p-3'>Giá không được âm</span>)}
      </div>
      <div class="mb-4">
        <label for="image" class="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
        <input 
          type="text" 
          placeholder="Enter product image"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("imageUrl", { required: true, min: 0})}
        />
      </div>
      <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">Product inStock</label>
      <div class="flex items-center">
        <label class="mr-4">
          <input type="radio" name="inStock" value={false} class="mr-2" {...register("inStock")}/>
          Còn hàng
        </label>
        <label>
          <input type="radio" name="inStock" value={true} class="mr-2"  {...register("inStock")}/>
          Hết hàng
        </label>

      </div>
    </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea 
          placeholder="Enter product description" 
          rows="4" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("description", { required: true, minLength: 10})}
        ></textarea>
        {errors?.description?.type === "required" && (
            <span className='text-red-500 p-3'>Bắt buộc nhập</span>)}
          {errors?.description?.type === "minLength" && (
        <span className='text-red-500 p-3'>Mô tả phải trên 10 kĩ tự</span>)}
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

export default ProductEdit
