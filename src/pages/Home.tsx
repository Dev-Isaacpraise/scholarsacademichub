import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 rounded-lg shadow-2xl overflow-hidden min-h-[450px] md:min-h-[500px]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dots Pattern */}
          <div className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          <div className="absolute top-60 right-16 w-2.5 h-2.5 bg-white/25 rounded-full"></div>
          <div className="absolute top-32 left-1/4 w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="absolute top-52 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
          
          {/* Circles */}
          <div className="absolute top-16 left-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-1/4 w-24 h-24 border border-white/15 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-white/10 rounded-full"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            {/* Left Side - Content */}
            <div className="relative z-10 pl-2 sm:pl-4 md:pl-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Scholars Academic Hub
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-xl">
                Your gateway to academic excellence. Explore journals, books, and literature from leading scholars worldwide.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <Link 
                  to="/journal" 
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                >
                  Explore Journals
                </Link>
                <Link 
                  to="/books" 
                  className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm md:text-base"
                >
                  Browse Books
                </Link>
              </div>
            </div>

            {/* Right Side - Books Image */}
            <div className="relative z-10 flex items-end justify-center md:justify-end pr-2 sm:pr-4 md:pr-6 mt-4 md:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-xl md:max-w-2xl">
                {/* Shelf Base - Increased size and made responsive */}
                <div className="absolute -bottom-1 sm:-bottom-1 md:-bottom-2 left-0 right-0 h-8 sm:h-10 md:h-14 lg:h-16 bg-gradient-to-b from-cyan-600/90 via-teal-600/90 to-emerald-600/90 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl shadow-2xl transform scale-x-[1.05] sm:scale-x-[1.06] md:scale-x-[1.08]"></div>
                {/* Books Image */}
                <img 
                  src="/assets/hero_books.png" 
                  alt="Academic Books" 
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl scale-105 sm:scale-110 md:scale-125"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Journal Section */}
        <Link to="/journal" className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors">Journal</h2>
          <p className="text-white/90">
            Access peer-reviewed articles, current issues, and archives from leading academic journals.
          </p>
        </Link>

        {/* Books Section */}
        <Link to="/books" className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors">Books</h2>
          <p className="text-white/90">
            Browse our collection of academic books, monographs, and research publications.
          </p>
        </Link>

        {/* Literature Section */}
        <Link to="/literature" className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors">Literature</h2>
          <p className="text-white/90">
            Discover literary works, essays, and critical analyses from renowned authors.
          </p>
        </Link>
      </div>

      {/* About Section */}
      <section className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-lg shadow-lg p-8 md:p-12 border-2 border-purple-200">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Scholars Academic Hub</h2>
        <div className="prose max-w-none text-slate-700 space-y-4">
          <p>
            Scholars Academic Hub is a comprehensive platform dedicated to advancing academic excellence and knowledge dissemination. We provide access to peer-reviewed journals, academic books, and literary works from leading scholars and researchers worldwide.
          </p>
          <p>
            Our mission is to bridge the gap between research and practice, making high-quality academic content accessible to researchers, students, and professionals across various disciplines. We are committed to maintaining the highest standards of academic integrity and scholarly excellence.
          </p>
          <p>
            Through our diverse collection of journals covering languages, literature, education, computer science, machine learning, and scientific innovations, we aim to foster intellectual growth and contribute to the global academic community.
          </p>
        </div>
      </section>
    </div>
  )
}
