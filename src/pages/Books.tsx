import React from 'react'
import { books } from '../data/books'

export default function Books(){
  const colorGradients = [
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500'
  ]
  
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Books</h1>
        <p className="text-white/90">A selection of books available for download. These include monographs, collected essays and practical guides.</p>
      </div>

      <div className="grid gap-4 mt-4">
        {books.map((b, index) => (
          <div key={b.id} className={`bg-gradient-to-r ${colorGradients[index % colorGradients.length]} rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex-1">
              <div className="font-semibold text-white text-lg">{b.title}</div>
              <div className="text-sm text-white/90 mt-1">{b.author} • pp. {b.pages}</div>
              <div className="text-xs text-white/80 mt-1">{b.affiliation}</div>
            </div>
            <div>
              <a href={b.pdf} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">View PDF</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
