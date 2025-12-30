import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-t-4 border-cyan-500 mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-center">
        <div className="text-white/90">© {new Date().getFullYear()} scholarsacademichub. All rights reserved.</div>
        <div className="mt-2">Contact: <a className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors" href="mailto:journaloflanglinglitedu@gmail.com">journaloflanglinglitedu@gmail.com</a></div>
      </div>
    </footer>
  )
}
