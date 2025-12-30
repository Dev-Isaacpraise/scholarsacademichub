import React from 'react'

export default function Literature(){
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Literature</h1>
        <p className="text-white/90">
          Explore our collection of literary works, essays, and critical analyses.
        </p>
      </div>
      
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-lg shadow-lg p-8 border-2 border-teal-200">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Coming Soon</h2>
        <p className="text-slate-700">
          Our literature section is currently under development. Check back soon for a curated collection of literary works, essays, and critical analyses.
        </p>
      </section>
    </div>
  )
}

