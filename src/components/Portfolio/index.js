import React from 'react'
import './index.scss'

const Portfolio = ({ title, description, techStack, onClick }) => {
  return (
    <div className="project">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong>Reference:</strong> {techStack}
        </p>
        <button onClick={onClick} className="project-link">
          Click to read...
        </button>
      </div>
    </div>
  )
}

export default Portfolio
