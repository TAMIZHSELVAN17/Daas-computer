import React from 'react'

const RouterComponents = () => {
  return (
    <div className='bg-blue h-16 w-full text-yellow-400'>RouterComponents
    
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-6">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Website</h1>
      </header>
      <main className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
        <p className="text-gray-700 mb-4">
          This is a basic homepage built with React and styled using Tailwind CSS. Customize this
          page to showcase your content, whether it's a personal portfolio, a business landing page,
          or anything else!
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 mt-8">
        <p className="text-center">&copy; 2025 Your Website. All rights reserved.</p>
      </footer>
    </div></div>
  )
}

export default RouterComponents