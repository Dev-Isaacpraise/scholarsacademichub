import React from 'react'
import { Link } from 'react-router-dom'

export default function Submissions(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Submissions</h1>
        <Link to="/journal" className="text-cyan-500 hover:text-cyan-600">
          ← Back to Journal
        </Link>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Submission Guidelines</h2>
        <p className="text-slate-700 mb-4">
          For detailed submission guidelines, please visit the <Link to="/journal" className="text-cyan-500 hover:text-cyan-600">Journal page</Link>.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">How to Submit</h2>
        <p className="text-slate-700 mb-4">
          To submit your manuscript, please send an email to our editorial team with the following information:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
          <li>Your full name and contact information</li>
          <li>Manuscript title</li>
          <li>Abstract (maximum 250 words)</li>
          <li>Author affiliations</li>
          <li>Your manuscript as a PDF attachment</li>
        </ul>
        <p className="text-slate-700">
          <strong>Email:</strong> <a className="text-cyan-600 hover:text-cyan-700" href="mailto:journaloflanglinglitedu@gmail.com">journaloflanglinglitedu@gmail.com</a>
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Author Guidelines</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>Manuscripts should be between 5,000 and 9,000 words.</li>
          <li>All submissions must include an abstract of no more than 250 words.</li>
          <li>References should follow APA style.</li>
          <li>All submissions must be original and not previously published.</li>
          <li>Manuscripts should be submitted in Word or PDF format.</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Privacy Statement</h2>
        <p className="text-slate-700">
          We collect contact information to process submissions and will not share personal data outside of the editorial process.
        </p>
      </section>
    </div>
  )
}