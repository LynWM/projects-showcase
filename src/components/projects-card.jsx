import React from 'react'

export default function ProjectsCard({ project, onDelete }) {

  const { id, name, description, type } = project

  return (
    <div className='odd:bg-gray-300 even:bg-gray-400 border rounded-xl p-4 flex gap-4 hover:bg-gray-200'>

      <div className='flex-1 min-w-0'>
        <div className='flex items-start justify-between gap-2 mb-1'>
            <h3 className='text-gray-900 font-bold truncate'>
                {name}
            </h3>
            <span className='text-xs px-2 py-0.5 rounded-full font-medium  bg-gray-100 text-gray-600'>
                {type}
            </span>
        </div>
        <p className='text-sm  line-clamp-3'>
            {description}
        </p>
      </div>


      <button className='opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-900 transition-all text-lg leading-none shrink-0 self-start pt-0.5'
        onClick={() => onDelete(id)}
        title="Remove project"
      >
        &times;
      </button>

    </div>
  )
}