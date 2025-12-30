import React from 'react'
import { Link } from 'react-router-dom'
import { journals } from '../data/journals'

export default function Journal(){
  return (
    <div className="space-y-12">
      {/* Journal Cards Section */}
      <section>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Our Journals</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal, index) => {
            const gradients = [
              'from-cyan-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-teal-500 to-cyan-500',
              'from-cyan-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-teal-500 to-cyan-500'
            ]
            return (
              <Link 
                key={journal.id} 
                to={`/journal/${journal.id}`}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 flex flex-col h-full`}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {journal.title}
                </h2>
                <p className="text-white/90 flex-grow">
                  {journal.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 rounded-lg shadow-lg p-8 border-2 border-cyan-200">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Submission Guidelines</h2>
        <div className="prose max-w-none space-y-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-cyan-200">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">Author Guidelines</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Manuscripts should be between 5,000 and 9,000 words.</li>
              <li>All submissions must include an abstract of no more than 250 words.</li>
              <li>References should follow APA style.</li>
              <li>All submissions must be original and not previously published.</li>
              <li>Manuscripts should be submitted in Word or PDF format.</li>
            </ul>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Submission Preparation Checklist</h3>
            <ol className="list-decimal list-inside text-slate-700 space-y-2">
              <li>Manuscript in Word or PDF format</li>
              <li>Completed cover letter</li>
              <li>All author affiliations and contact information</li>
              <li>Abstract (maximum 250 words)</li>
              <li>Keywords (5-7 keywords)</li>
            </ol>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-teal-200">
            <h3 className="text-xl font-semibold mb-3 text-teal-700">Review Process</h3>
            <p className="text-slate-700">
              All submissions undergo a rigorous peer-review process. The editorial team is committed to maintaining high standards of academic excellence. Reviewers are selected based on their expertise in the relevant field.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-cyan-200">
            <h3 className="text-xl font-semibold mb-3 text-cyan-700">General Contact</h3>
            <p className="text-slate-700">
              For general submission inquiries, please contact the specific journal's editorial team. Contact information can be found on each journal's dedicated page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
