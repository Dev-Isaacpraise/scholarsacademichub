import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function JournalArticle(){
  const { id } = useParams<{ id: string }>()
  const article = articles.find(a => a.id === id)
  
  if (!article) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/journal" className="text-cyan-500 hover:text-cyan-600">
          Back to Journals
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Link 
        to={`/journal/${article.journalId}/${article.category === 'current' ? 'current' : 'archive'}`} 
        className="text-cyan-500 hover:text-cyan-600"
      >
        ← Back to {article.category === 'current' ? 'Current' : 'Archive'}
      </Link>
      
      <article className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="border-b pb-6 mb-6">
          <div className="text-lg text-slate-700 mb-2">
            <strong>Author:</strong> {article.author}
          </div>
          <div className="text-sm text-slate-600 mb-2">
            <strong>Affiliation:</strong> {article.affiliation}
          </div>
          <div className="text-sm text-slate-600">
            <strong>Pages:</strong> {article.pages}
          </div>
        </div>

        <div className="mb-6">
          <a 
            href={article.pdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium"
          >
            View PDF
          </a>
        </div>

        <div className="prose max-w-none">
          <p className="text-slate-700">
            This article is available for download. Click the button above to view the full PDF document.
          </p>
        </div>
      </article>
    </div>
  )
}

