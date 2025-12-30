import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Journal from './pages/Journal'
import IndividualJournal from './pages/IndividualJournal'
import Current from './pages/Current'
import Archive from './pages/Archive'
import JournalArticle from './pages/JournalArticle'
import Submissions from './pages/Submissions'
import Books from './pages/Books'
import Literature from './pages/Literature'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/journal" element={<Journal/>} />
        <Route path="/journal/:id" element={<IndividualJournal/>} />
        <Route path="/journal/:id/current" element={<Current/>} />
        <Route path="/journal/:id/archive" element={<Archive/>} />
        <Route path="/journal/article/:id" element={<JournalArticle/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/literature" element={<Literature/>} />
        <Route path="/submissions" element={<Submissions/>} />
      </Routes>
    </Layout>
  )
}
