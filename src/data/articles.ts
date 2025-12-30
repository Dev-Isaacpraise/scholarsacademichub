export type Article = {
  id: string
  title: string
  author: string
  affiliation: string
  pages: string
  category: 'current' | 'archive'
  pdf: string
  journalId: string
}

export const articles: Article[] = [
  // Current issue samples for JLLE (10)
  { id: 'c1', title: 'Reimagining Social Spaces: An Ethnographic Study', author: 'Dr Joseph Abuh', affiliation: 'Dean, School of Languages, Kogi State College of Education, Ankpa', pages: '1-12', category: 'current', pdf: '/assets/sample-current-1.pdf', journalId: 'jlle' },
  { id: 'c2', title: 'Language Acquisition in Multilingual Contexts', author: 'Prof. B. Linguist', affiliation: 'Dept. of Linguistics, City University', pages: '13-24', category: 'current', pdf: '/assets/sample-current-2.pdf', journalId: 'jlle' },
  { id: 'c3', title: 'Digital Literacy and Education', author: 'Dr D. Educator', affiliation: 'School of Education & Communications', pages: '25-36', category: 'current', pdf: '/assets/sample-current-3.pdf', journalId: 'jlle' },
  { id: 'c4', title: 'Literary Analysis of Contemporary African Fiction', author: 'E. Scholar', affiliation: 'Department of Literature', pages: '37-48', category: 'current', pdf: '/assets/sample-current-4.pdf', journalId: 'jlle' },
  { id: 'c5', title: 'Women in Educational Leadership', author: 'F. Researcher', affiliation: 'Centre for Gender Studies', pages: '49-60', category: 'current', pdf: '/assets/sample-current-5.pdf', journalId: 'jlle' },
  { id: 'c6', title: 'Language Shift and Cultural Identity', author: 'G. Linguist', affiliation: 'Department of Linguistics', pages: '61-72', category: 'current', pdf: '/assets/sample-current-6.pdf', journalId: 'jlle' },
  { id: 'c7', title: 'Pedagogical Approaches in Language Teaching', author: 'H. Teacher', affiliation: 'Institute for Language Education', pages: '73-84', category: 'current', pdf: '/assets/sample-current-7.pdf', journalId: 'jlle' },
  { id: 'c8', title: 'Education Policy Reform', author: 'I. Policy', affiliation: 'Education Policy Lab', pages: '85-96', category: 'current', pdf: '/assets/sample-current-8.pdf', journalId: 'jlle' },
  { id: 'c9', title: 'Comparative Literature Studies', author: 'J. Critic', affiliation: 'Literature Research Unit', pages: '97-108', category: 'current', pdf: '/assets/sample-current-9.pdf', journalId: 'jlle' },
  { id: 'c10', title: 'Technology in Language Learning', author: 'K. Innovator', affiliation: 'EdTech Research Lab', pages: '109-120', category: 'current', pdf: '/assets/sample-current-10.pdf', journalId: 'jlle' },

  // Archive samples for JLLE (10)
  { id: 'a1', title: 'Historical Perspectives on Language Education', author: 'C. Historian', affiliation: 'Department of History, University of Ibadan', pages: '101-112', category: 'archive', pdf: '/assets/sample-archive-1.pdf', journalId: 'jlle' },
  { id: 'a2', title: 'Reflections on Literary Criticism', author: 'L. Critic', affiliation: 'Literature Studies Centre, Federal University', pages: '113-124', category: 'archive', pdf: '/assets/sample-archive-2.pdf', journalId: 'jlle' },
  { id: 'a3', title: 'Historical Language Landscapes', author: 'M. Philologist', affiliation: 'Linguistics Unit, University of Lagos', pages: '125-136', category: 'archive', pdf: '/assets/sample-archive-3.pdf', journalId: 'jlle' },
  { id: 'a4', title: 'The Role of Education in Society', author: 'N. Analyst', affiliation: 'Education Policy Institute, University of Nigeria', pages: '137-148', category: 'archive', pdf: '/assets/sample-archive-4.pdf', journalId: 'jlle' },
  { id: 'a5', title: 'Language and Memory', author: 'O. Cultural', affiliation: 'Centre for Cultural Studies, Ahmadu Bello University', pages: '149-160', category: 'archive', pdf: '/assets/sample-archive-5.pdf', journalId: 'jlle' },
  { id: 'a6', title: 'Literary Theory and Practice', author: 'P. Theorist', affiliation: 'Literature Lab, University of Ibadan', pages: '161-172', category: 'archive', pdf: '/assets/sample-archive-6.pdf', journalId: 'jlle' },
  { id: 'a7', title: 'Language Rights and Social Change', author: 'Q. Jurist', affiliation: 'Faculty of Law, University of Abuja', pages: '173-184', category: 'archive', pdf: '/assets/sample-archive-7.pdf', journalId: 'jlle' },
  { id: 'a8', title: 'Early Childhood Language Education', author: 'R. Educator', affiliation: 'School of Education, University of Benin', pages: '185-196', category: 'archive', pdf: '/assets/sample-archive-8.pdf', journalId: 'jlle' },
  { id: 'a9', title: 'Language Ecology Research', author: 'S. Ecologist', affiliation: 'Linguistics Research Centre, University of Port Harcourt', pages: '197-208', category: 'archive', pdf: '/assets/sample-archive-9.pdf', journalId: 'jlle' },
  { id: 'a10', title: 'Historical Linguistics Review', author: 'T. Philologist', affiliation: 'Institute of Linguistic Studies, University of Ibadan', pages: '209-220', category: 'archive', pdf: '/assets/sample-archive-10.pdf', journalId: 'jlle' }
]

