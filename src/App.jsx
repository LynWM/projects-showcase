import React, { useState, useEffect } from 'react'
import AddProject from './components/add-project'
import ProjectsList from './components/projects-list'

export default function App() {
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
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Header */}
      <header className="border-b border-gray-200 px-8 py-5">
        <h2 className="font-barlow text-2xl font-bold text-gray-900">My Projects Showcase</h2>
        <p className="text-sm text-gray-500 mt-1">This is a Single Page Application that showcases all my projects.</p>
      </header>

      {/* Main layout — side by side */}
      <main className="flex h-[calc(100vh-80px)]">

        {/* Left — Add Project */}
        <aside className="w-80 min-w-72 border-r border-gray-200 overflow-y-auto">
          <AddProject onAddProject={handleAddProject} />
        </aside>

        {/* Right — Projects List */}
        <section className="flex-1 overflow-y-auto">
          <ProjectsList projects={projects} onDeleteProject={handleDeleteProject} />
        </section>

      </main>
    </div>
  )
}