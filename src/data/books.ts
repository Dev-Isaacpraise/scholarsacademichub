export type Book = {
  id: string
  title: string
  author: string
  affiliation: string
  pages: string
  pdf: string
}

export const books: Book[] = [
  { id: 'b1', title: 'Collected Essays on Urban Life', author: 'Various', affiliation: 'Various institutions (contributors from Nigerian universities)', pages: '1-200', pdf: '/assets/sample-book-1.pdf' },
  { id: 'b2', title: 'Handbook of Community Methods', author: 'A. Practitioner', affiliation: 'Community Development Unit, University of Ibadan', pages: '1-174', pdf: '/assets/sample-book-2.pdf' },
  { id: 'b3', title: 'Stories from the Field', author: 'B. Storyteller', affiliation: 'Independent Researcher, Coastal Studies', pages: '1-220', pdf: '/assets/sample-book-3.pdf' },
  { id: 'b4', title: 'Guide to Sustainable Planning', author: 'C. Planner', affiliation: 'Sustainable Cities Institute, University of Lagos', pages: '1-192', pdf: '/assets/sample-book-4.pdf' },
  { id: 'b5', title: 'Local Histories Compendium', author: 'D. Archivist', affiliation: 'Archive Services, National Archives, Ibadan', pages: '1-240', pdf: '/assets/sample-book-5.pdf' },
  { id: 'b6', title: 'Voices in Migration', author: 'E. Researcher', affiliation: 'Migration Studies Unit, Ahmadu Bello University', pages: '1-160', pdf: '/assets/sample-book-6.pdf' },
  { id: 'b7', title: 'Policy and Practice', author: 'F. Analyst', affiliation: 'Policy Lab, Centre for Policy Research, Abuja', pages: '1-180', pdf: '/assets/sample-book-7.pdf' },
  { id: 'b8', title: 'Language and Identity', author: 'G. Linguist', affiliation: 'Department of Linguistics, University of Ibadan', pages: '1-210', pdf: '/assets/sample-book-8.pdf' },
  { id: 'b9', title: 'Educational Pathways', author: 'H. Educator', affiliation: 'Teacher Training Academy, Federal College of Education, Zaria', pages: '1-150', pdf: '/assets/sample-book-9.pdf' },
  { id: 'b10', title: 'Rethinking Public Space', author: 'I. Urbanist', affiliation: 'Urban Research Group, Lagos State University', pages: '1-200', pdf: '/assets/sample-book-10.pdf' }
]
