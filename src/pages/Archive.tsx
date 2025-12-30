import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/articles'
import { journals } from '../data/journals'

export default function Archive(){
  const { id } = useParams<{ id?: string }>()
  const journal = id ? journals.find(j => j.id === id) : null
  const archived = id 
    ? articles.filter(a => a.category === 'archive' && a.journalId === id)
    : articles.filter(a => a.category === 'archive')
  
  const colorGradients = [
    'from-slate-500 to-slate-600',
    'from-gray-500 to-gray-600',
    'from-zinc-500 to-zinc-600',
    'from-neutral-500 to-neutral-600',
    'from-stone-500 to-stone-600',
    'from-slate-600 to-slate-700',
    'from-gray-600 to-gray-700',
    'from-zinc-600 to-zinc-700',
    'from-neutral-600 to-neutral-700',
    'from-stone-600 to-stone-700'
  ]
  
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 rounded-lg shadow-lg p-6 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {journal ? `Archive - ${journal.title}` : 'Archive'}
        </h1>
        <Link to={id ? `/journal/${id}` : '/journal'} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30">
          ← Back {id ? 'to Journal' : 'to Journals'}
        </Link>
      </div>
      <div className="grid gap-4">
        {archived.map((a, index) => (
          <div key={a.id} className={`bg-gradient-to-r ${colorGradients[index % colorGradients.length]} p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-between`}>
            <div className="flex-1 pr-4">
              <Link to={`/journal/article/${a.id}`} className="font-semibold text-lg text-white hover:text-white/90 block">
                {a.title}
              </Link>
              <div className="text-sm text-white/90 mt-1">{a.author} • pp. {a.pages}</div>
              <div className="text-xs text-white/80 mt-1">{a.affiliation}</div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Link 
                to={`/journal/article/${a.id}`}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30 whitespace-nowrap"
              >
                Read More
              </Link>
              <a 
                href={a.pdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30 whitespace-nowrap"
              >
                PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
