export type EditorialMember = {
  id: string
  name: string
  office: string
  address: string
  image?: string
}

export type Journal = {
  id: string
  title: string
  description: string
  about: string
  editorialTeam: EditorialMember[]
  email: string
}

export const journals: Journal[] = [
  {
    id: 'jlle',
    title: 'Journal of Languages, Literature and Education',
    description: 'A peer-reviewed journal committed to publishing rigorous, accessible research across languages, literature, and education.',
    about: 'The Journal of Languages, Literature and Education is a scholarly journal which is edited by seasoned academics spread across Nigerian Universities. The journal is multidisciplinary in scope. Its purpose is to promote excellence in academic research traditions. It is, therefore, committed to professionalism of international standards. The journal publishes research works on contemporary and emerging issues and ideas in languages, linguistics, literature and education. In pursuit of its goal, we welcome well researched and original scholarly papers from academics, professionals and students of all walks of life for publication.',
    editorialTeam: [
      {id:'e1', name: 'Ichado Ojotule Noel', office: 'Department of French, Kogi State College of Education, Ankpa', address: '0866118396'},
      {id:'e2', name: 'Prof Gideon S. Omachonu', office: 'Department of Linguistics, National Open University, Abuja', address: 'Editor-in-Chief'},
      {id:'e3', name: 'Olugbenga Oluseyi', office: 'Department of Yoruba, Kogi State College of Education, Ankpa', address: '08135118041'}
    ],
    email: 'journaloflanglinglitedu@gmail.com'
  },
  {
    id: 'jcsm',
    title: 'Journal of Computer Science and Machine Learning',
    description: 'A leading journal publishing cutting-edge research in computer science, artificial intelligence, and machine learning.',
    about: 'The Journal of Computer Science and Machine Learning is dedicated to advancing the field of computational sciences through high-quality research publications. Our journal covers a wide range of topics including algorithms, data structures, artificial intelligence, machine learning, neural networks, and computational theory. We aim to bridge the gap between theoretical research and practical applications, providing a platform for researchers, practitioners, and students to share their innovative work.',
    editorialTeam: [
      {id:'e1', name: 'Dr. Sarah Johnson', office: 'Department of Computer Science, University of Technology', address: 'Editor-in-Chief'},
      {id:'e2', name: 'Prof. Michael Chen', office: 'Machine Learning Lab, Institute of Advanced Computing', address: 'Senior Editor'},
      {id:'e3', name: 'Dr. Emily Rodriguez', office: 'AI Research Center, National University', address: 'Associate Editor'}
    ],
    email: 'jcsm@scholarsacademichub.com'
  },
  {
    id: 'jsir',
    title: 'Journal of Scientific Innovations and Research',
    description: 'An interdisciplinary journal promoting innovative research and scientific discoveries across all fields of science.',
    about: 'The Journal of Scientific Innovations and Research serves as a platform for groundbreaking research across multiple scientific disciplines. We publish original research articles, reviews, and case studies that contribute to the advancement of knowledge in natural sciences, engineering, medicine, and technology. Our mission is to facilitate the dissemination of innovative ideas and research findings that can drive scientific progress and address global challenges.',
    editorialTeam: [
      {id:'e1', name: 'Prof. David Williams', office: 'Department of Physics, Research University', address: 'Editor-in-Chief'},
      {id:'e2', name: 'Dr. Lisa Anderson', office: 'Biotechnology Institute, Science Academy', address: 'Senior Editor'},
      {id:'e3', name: 'Prof. Robert Taylor', office: 'Engineering Department, Technical University', address: 'Associate Editor'}
    ],
    email: 'jsir@scholarsacademichub.com'
  },
  {
    id: 'jbm',
    title: 'Journal of Business and Management',
    description: 'A premier journal focusing on business strategies, management practices, and organizational behavior research.',
    about: 'The Journal of Business and Management is dedicated to advancing knowledge in business administration, strategic management, organizational behavior, and related fields. We publish high-quality research that addresses contemporary business challenges and contributes to both theoretical understanding and practical applications in the business world.',
    editorialTeam: [
      {id:'e1', name: 'Prof. James Wilson', office: 'School of Business, Metropolitan University', address: 'Editor-in-Chief'},
      {id:'e2', name: 'Dr. Maria Garcia', office: 'Management Department, Business School', address: 'Senior Editor'},
      {id:'e3', name: 'Dr. Robert Brown', office: 'Organizational Studies Institute', address: 'Associate Editor'}
    ],
    email: 'jbm@scholarsacademichub.com'
  },
  {
    id: 'jhs',
    title: 'Journal of Health Sciences',
    description: 'An interdisciplinary journal covering public health, medical research, and healthcare policy.',
    about: 'The Journal of Health Sciences serves as a platform for research in public health, clinical medicine, healthcare policy, and health education. Our mission is to publish innovative research that contributes to improving health outcomes and advancing healthcare practices worldwide.',
    editorialTeam: [
      {id:'e1', name: 'Dr. Patricia Lee', office: 'School of Public Health, Medical University', address: 'Editor-in-Chief'},
      {id:'e2', name: 'Prof. John Martinez', office: 'Department of Health Policy, Health Sciences Institute', address: 'Senior Editor'},
      {id:'e3', name: 'Dr. Susan White', office: 'Clinical Research Center, University Hospital', address: 'Associate Editor'}
    ],
    email: 'jhs@scholarsacademichub.com'
  },
  {
    id: 'jes',
    title: 'Journal of Environmental Studies',
    description: 'A comprehensive journal addressing environmental science, sustainability, and climate change research.',
    about: 'The Journal of Environmental Studies publishes cutting-edge research on environmental science, sustainability, climate change, conservation, and environmental policy. We aim to provide a platform for interdisciplinary research that addresses critical environmental challenges and promotes sustainable development.',
    editorialTeam: [
      {id:'e1', name: 'Prof. Thomas Green', office: 'Environmental Science Department, Green University', address: 'Editor-in-Chief'},
      {id:'e2', name: 'Dr. Anna Forest', office: 'Climate Research Institute, Environmental Studies Center', address: 'Senior Editor'},
      {id:'e3', name: 'Dr. Mark River', office: 'Sustainability Lab, Environmental Research Unit', address: 'Associate Editor'}
    ],
    email: 'jes@scholarsacademichub.com'
  }
]


