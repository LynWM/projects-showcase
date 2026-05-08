import React, { useState, useEffect } from 'react'
import AddProject from './components/add-project'
import ProjectsList from './components/projects-list'

export default function App() {

  // STATES
  const [projects, setProjects] = useState(() => {
    try {
      const stored = localStorage.getItem('projects')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  const handleAddProject = (project) => {
    setProjects(prev => [{ ...project, id: Date.now() }, ...prev])
  }

  const handleDeleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div className='min-h-screen bg-white text-gray-900 font-sans'>

      <div className='flex flex-col border-b border-gray-700 px-8 py-4 gap-4'>

        <h2 className='font-barlow text-2xl font-bold'>
          My Projects Showcase
        </h2>

        <p className='text-gray-600'>
          This is a Single Page Application that showcases all my projects, past and present.
        </p>
      </div>

      
      <main className='flex h-[calc(100vh-80px)]'>

        {/* AddProjects Component */}
        <aside className='w-80 min-w-72 border-r border-gray-700'>
          <AddProject onAddProject={handleAddProject} />
        </aside>

        {/* ProjectsList Component */}
        <section className='flex-1'>
          <ProjectsList 
              projects={projects} 
              onDeleteProject={handleDeleteProject} 
            />
        </section>

      </main>
    </div>
  )
}