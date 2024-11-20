import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-10 mt-40">
  <div class="container max-w-[1300px] mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 class="text-2xl font-bold mb-4">THShop</h2>
        <p class="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
        <ul class="space-y-2 text-gray-400">
          <li>Email: info@company.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Main St, Anytown, USA</li>
        </ul>
      </div>
    </div>
    <div class="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-400">&copy; 2024 Company Name. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
        <a href="#" class="text-gray-400 hover:text-white">Twitter</a>
        <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
        <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer