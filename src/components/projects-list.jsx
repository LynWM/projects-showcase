import React, { useState } from 'react'
import FilterSearch from './filter-search'
import ProjectsCard from './projects-card'

export default function ProjectsList({ projects, onDeleteProject }) {
  const [query, setQuery] = useState('')

  const filtered = projects.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.type.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-6 flex flex-col gap-6 h-full">

      {/* Top bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <FilterSearch value={query} onChange={setQuery} />
        </div>
        {query && (
          <p className="text-xs text-gray-400 shrink-0">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {filtered.map(project => (
            <ProjectsCard
              key={project.id}
              project={project}
              onDelete={onDeleteProject}
            />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {projects.length === 0 ? (
            <>
              <p className="text-4xl mb-3">&#9633;</p>
              <p className="text-gray-400 text-sm font-medium">No projects yet</p>
              <p className="text-gray-300 text-xs mt-1">Fill in the form on the left to add your first one.</p>
            </>
          ) : (
            <>
              <p className="text-gray-400 text-sm font-medium">No matches for "{query}"</p>
              <p className="text-gray-300 text-xs mt-1">Try a different name, type, or keyword.</p>
            </>
          )}
        </div>
      )}

    </div>
  )
}