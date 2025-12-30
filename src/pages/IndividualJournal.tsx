import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { journals } from '../data/journals'
import { articles } from '../data/articles'

export default function IndividualJournal(){
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState<'current' | 'archive' | 'about' | 'editorial'>('current')
  const journal = journals.find(j => j.id === id)
  
  if (!journal) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Journal Not Found</h1>
        <Link to="/journal" className="text-cyan-500 hover:text-cyan-600">
          Back to Journals
        </Link>
      </div>
    )
  }

  // Filter articles for this journal
  const journalArticles = articles.filter(a => a.journalId === id)
  const currentArticles = journalArticles.filter(a => a.category === 'current').slice(0, 6)
  const archivedArticles = journalArticles.filter(a => a.category === 'archive').slice(0, 6)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-6 md:p-8">
        <Link to="/journal" className="text-white/90 hover:text-white mb-4 inline-block font-medium">
          ← Back to Journals
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{journal.title}</h1>
        <p className="text-lg text-white/90">{journal.description}</p>
      </div>

      {/* Tabs */}
      <div className="border-b-2 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-t-lg">
        <nav className="flex space-x-8 px-4">
          <button
            onClick={() => setActiveTab('current')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all ${
              activeTab === 'current'
                ? 'border-cyan-500 text-cyan-600'
                : 'border-transparent text-slate-500 hover:text-cyan-600 hover:border-cyan-300'
            }`}
          >
            Current
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all ${
              activeTab === 'archive'
                ? 'border-slate-500 text-slate-600'
                : 'border-transparent text-slate-500 hover:text-slate-600 hover:border-slate-300'
            }`}
          >
            Archive
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all ${
              activeTab === 'about'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-blue-600 hover:border-blue-300'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('editorial')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition-all ${
              activeTab === 'editorial'
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-slate-500 hover:text-teal-600 hover:border-teal-300'
            }`}
          >
            Editorial Team
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'current' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Current Articles</h2>
              {currentArticles.length > 6 && (
                <Link to={`/journal/${id}/current`} className="text-cyan-500 hover:text-cyan-600 font-medium">
                  See All →
                </Link>
              )}
              {currentArticles.length === 0 && (
                <Link to={`/journal/${id}/current`} className="text-cyan-500 hover:text-cyan-600 font-medium">
                  View All →
                </Link>
              )}
            </div>
            {currentArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((a, index) => {
                  const gradients = [
                    'from-cyan-500 to-blue-500',
                    'from-purple-500 to-pink-500',
                    'from-teal-500 to-cyan-500'
                  ]
                  return (
                    <article key={a.id} className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full`}>
                      <h3 className="font-semibold text-lg mb-2 text-white">{a.title}</h3>
                      <div className="text-sm text-white/90 mb-1">{a.author}</div>
                      <div className="text-xs text-white/80 mb-3">{a.affiliation}</div>
                      <div className="text-sm text-white/90 mb-4 flex-grow">pp. {a.pages}</div>
                      <Link 
                        to={`/journal/article/${a.id}`}
                        className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30 text-center mt-auto"
                      >
                        Read More
                      </Link>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 text-center text-slate-500 border-2 border-cyan-200">
                <p>No current articles available at this time.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'archive' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Archived Articles</h2>
              {archivedArticles.length > 6 && (
                <Link to={`/journal/${id}/archive`} className="text-cyan-500 hover:text-cyan-600 font-medium">
                  See All →
                </Link>
              )}
              {archivedArticles.length === 0 && (
                <Link to={`/journal/${id}/archive`} className="text-cyan-500 hover:text-cyan-600 font-medium">
                  View All →
                </Link>
              )}
            </div>
            {archivedArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archivedArticles.map((a, index) => {
                  const gradients = [
                    'from-slate-500 to-slate-600',
                    'from-gray-500 to-gray-600',
                    'from-zinc-500 to-zinc-600'
                  ]
                  return (
                    <article key={a.id} className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full`}>
                      <h3 className="font-semibold text-lg mb-2 text-white">{a.title}</h3>
                      <div className="text-sm text-white/90 mb-1">{a.author}</div>
                      <div className="text-xs text-white/80 mb-3">{a.affiliation}</div>
                      <div className="text-sm text-white/90 mb-4 flex-grow">pp. {a.pages}</div>
                      <Link 
                        to={`/journal/article/${a.id}`}
                        className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30 text-center mt-auto"
                      >
                        Read More
                      </Link>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-8 text-center text-slate-500 border-2 border-slate-200">
                <p>No archived articles available at this time.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 rounded-lg shadow-lg p-8 border-2 border-cyan-200">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">About {journal.title}</h2>
            <div className="prose max-w-none text-slate-700">
              <p className="whitespace-pre-line">{journal.about}</p>
            </div>
            <div className="mt-6 pt-6 border-t-2 border-cyan-200">
              <h3 className="font-semibold mb-2 text-cyan-700">Contact</h3>
              <p className="text-slate-700">
                Email: <a className="text-cyan-600 hover:text-cyan-700 font-medium" href={`mailto:${journal.email}`}>{journal.email}</a>
              </p>
            </div>
          </div>
        )}

        {activeTab === 'editorial' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Editorial Team</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {journal.editorialTeam.map((member, index) => {
                const gradients = [
                  'from-cyan-500 to-blue-500',
                  'from-purple-500 to-pink-500',
                  'from-teal-500 to-cyan-500'
                ]
                return (
                  <div key={member.id} className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg p-6 shadow-md text-center transform hover:-translate-y-1 transition-all duration-300`}>
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="h-24 w-24 rounded-full mx-auto mb-3 object-cover border-4 border-white/50" 
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-full mx-auto mb-3 bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/50">
                        <span className="text-white font-semibold text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div className="font-semibold text-white">{member.name}</div>
                    <div className="text-sm text-white/90 mt-1">{member.office}</div>
                    <div className="text-sm text-white/80 mt-1">{member.address}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

