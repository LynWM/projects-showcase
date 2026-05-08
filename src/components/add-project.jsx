import React, { useState } from 'react'

const emptyForm = { 
    name: '', 
    description: '', 
    type: '' 
  }

export default function AddProject({ onAddProject }) {

  // STATES
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // FUNCTIONS

  // Validating form
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.type) e.type = 'Required'
    if (!form.description.trim()) e.description = 'Required'
    return e
  }

  // Handling change
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  // Handling submit
  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    onAddProject(form)
    setForm(emptyForm)
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className='flex flex-col p-6 gap-6'>

      <div>
        <h2 className='font-barlow text-xl font-semibold'>
          Projects Form  
        </h2>

        <p className='text-sm text-gray-600 mt-2'>
          Enter Project Details in the form below.
        </p>
        
      </div>

      <div>
        <label className='text-xs text-gray-600 block mb-1'>
          Project Name
        </label>

        <input className={`w-full border ${errors.name ? 'border-red-800' : 'border-gray-500'} rounded-lg px-3 py-2 text-sm`}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Project Name ...."
          
        />
        {errors.name && <p className="text-red-800 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className='text-xs text-gray-600 block mb-1'>
          Project Type
        </label>

        <input className={`w-full border ${errors.name ? 'border-red-800' : 'border-gray-500'} rounded-lg px-3 py-2 text-sm`}
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Enter Project Type...."
        />
        {errors.type && <p className="text-red-800 text-xs mt-1">{errors.type}</p>}
      </div>

      
      <div>
        <label className='text-xs text-gray-600 block mb-1'>
          Description
        </label>

        <textarea className={`w-full border ${errors.name ? 'border-red-800' : 'border-gray-500'} rounded-lg px-3 py-2 text-sm`}
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter Project Description ...."
          rows={4}
        />
        {errors.description && <p className="text-red-800 text-xs mt-1">{errors.description}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className={`w-full py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all ${submitted ? 'bg-green-700 text-white' : 'bg-gray-800 hover:bg-gray-600 text-white'}`}
      >
        {submitted ? 'Project Added' : 'Add Project'}
      </button>

    </div>
  )
}