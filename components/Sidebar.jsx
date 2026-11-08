import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="text-3xl">ToDo App</h2>
      <p className="mb-2">Manage Your Daily Work</p>

      <ul className="sidebar-items">
        <li className="s_Items">Account</li>
        <li className="s_Items">General</li>
        <li className="s_Items">Calendar</li>
        <li className="s_Items">Productivity</li>
        <li className="s_Items">Reminders</li>
        <li className="s_Items">Theme</li>
        <li className="s_Items">Help & Feedback</li>
        <li className="s_Items">About</li>
      </ul>
    </div>
  )
}

