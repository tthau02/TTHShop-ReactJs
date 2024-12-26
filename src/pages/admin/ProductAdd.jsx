import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductAdd = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onHandleSubmit = async (formData) => {
    formData.inStock = formData.inStock === "true";
    await axios.post(`http://localhost:3000/products`, formData);
    toast("Thêm mới thành công");
    navigate("/admin/products");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-6 ">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
             {...register("name", { required: true, minLength: 5 })}
            />
          {errors?.name?.type === "required" && (
            <span className="p-3 text-red-500">Không được để trống</span>
          )}
          {errors?.name?.type === "minLength" && (
            <span className="p-3 text-red-500">Ít nhất có 5 kí tự</span>
          )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($)
            </label>
            <input
              type="number"
              placeholder="Enter product price"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("price" , {required: true, min: 0})}
            />
            {errors?.price?.type === "required" && (
            <span className="p-3 text-red-500">Không được để trống</span>
            )}
            {errors?.price?.type === "min" && (
              <span className="p-3 text-red-500">Giá sản phẩm không được âm</span>
            )}
           
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Image
            </label>
            <input
              type="text"
              placeholder="Enter product image"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("imageURL", {required: true})}
            />
            {errors?.imageURL?.type === "required" && (
            <span className="p-3 text-red-500">Không được để trống</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product inStock
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  className="mr-2"
                  value={true}
                  {...register("inStock")}
                />
                Còn hàng
              </label>
              <label>
                <input
                  type="radio"
                  className="mr-2"
                  value={false}
                  {...register("inStock")}
                />
                Hết hàng
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("description")}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;