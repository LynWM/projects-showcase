import React from 'react'

export default function ProjectsCard({ project, onDelete }) {
  const { id, name, description, type } = project

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 hover:border-gray-400 transition-colors group">

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-gray-900 font-bold text-sm truncate">{name}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0 bg-gray-100 text-gray-600">{type}</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{description}</p>
      </div>

      {/* Delete */}
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-all text-lg leading-none shrink-0 self-start pt-0.5"
        title="Remove project"
      >
        &times;
      </button>

    </div>
  )
}