import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  
  return (
    <header className="bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 shadow-md border-b-2 border-cyan-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110">
            <span className="text-white font-bold text-lg">SAH</span>
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">scholarsacademichub</span>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center text-sm">
          <Link to="/journal" className="px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">Journal</Link>
          <Link to="/books" className="px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all duration-300">Books</Link>
          <Link to="/literature" className="px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white transition-all duration-300">Literature</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-cyan-200 bg-gradient-to-b from-white to-cyan-50">
          <div className="px-4 py-3 space-y-2">
            <Link to="/journal" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">Journal</Link>
            <Link to="/books" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all duration-300">Books</Link>
            <Link to="/literature" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white transition-all duration-300">Literature</Link>
          </div>
        </div>
      )}
    </header>
  )
}
