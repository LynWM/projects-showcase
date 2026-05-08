import React, { useState } from 'react'

const emptyForm = { name: '', description: '', type: '' }

export default function AddProject({ onAddProject }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.type) e.type = 'Required'
    if (!form.description.trim()) e.description = 'Required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

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
    <div className="p-6 flex flex-col gap-6">

      <div>
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">New Entry</p>
        <h2 className="font-barlow text-xl font-semibold text-gray-900">Projects Form</h2>
        <p className="text-sm text-gray-500 mt-1">Enter Project Details in the form below.</p>
      </div>

      {/* Project Name */}
      <div>
        <label className="text-xs text-gray-500 tracking-wide block mb-1">Project Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Project Name ...."
          className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Project Type */}
      <div>
        <label className="text-xs text-gray-500 tracking-wide block mb-1">Project Type</label>
        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Enter Project Category ...."
          className={`w-full bg-white border ${errors.type ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-900 focus:outline-none focus:border-gray-500 transition-colors`}
        />
        {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="text-xs text-gray-500 tracking-wide block mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter Project Description ...."
          rows={4}
          className={`w-full bg-white border ${errors.description ? 'border-red-400' : 'border-gray-300'} rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-900 focus:outline-none focus:border-gray-500 transition-colors resize-none`}
        />
        {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className={`w-full py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all ${submitted ? 'bg-green-500 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
      >
        {submitted ? '✓ Project Added' : 'Add Project'}
      </button>

    </div>
  )
}