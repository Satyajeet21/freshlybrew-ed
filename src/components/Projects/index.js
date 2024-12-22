import React, { useRef, useState, useEffect } from 'react'
import Portfolio from '../Portfolio'
import './index.scss'
import { FaArrowRight } from 'react-icons/fa'
import Modal from '../Modal' // Import Modal component
import ExponentialBackoff from '../ExponentialBackoff' // Import ExponentialBackoff

const projectData = [
  {
    title: 'Ultimate Resume Building Guide',
    description:
      'Discover the top online resources to create professional, eye-catching resumes that help you stand out in todays competitive job market. From user-friendly templates to AI-powered writing assistance, these websites will transform your job application strategy and boost your chances of landing your dream job.',
    techStack: 'OverLeaf : Specialized resume creation website',
    projectLink: '',
  },
]

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) // Modal state
  const projectsRef = useRef(null)

  const scrollRight = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: 'smooth',
      })
    }
  }

  // Open modal function
  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-list" ref={projectsRef}>
          {projectData.map((project, index) => (
            <Portfolio
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              onClick={openModal}
            />
          ))}
        </div>
        <button className="scroll-arrow" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ExponentialBackoff />
      </Modal>
    </div>
  )
}

export default Projects
