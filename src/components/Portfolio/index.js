import React from 'react'
import './index.scss'

const Portfolio = ({ title, description, techStack, image, onClick }) => {
  return (
    <div className="project">
      <img src={image} alt="title" className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong></strong> {techStack}
        </p>
        <button onClick={onClick} className="project-link">
          Click to read...
        </button>
      </div>
    </div>
  )
}

export default Portfolio
