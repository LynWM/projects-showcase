import React from 'react'

export default function FilterSearch({ value, onChange }) {
  return (
    <div className='relative'>
      <input className='w-full  border border-gray-500 rounded-lg px-4 py-2 text-sm'
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search projects..."
        className='w-full  border border-gray-500 rounded-lg px-4 py-2 text-sm'
      />
    </div>
  )
}