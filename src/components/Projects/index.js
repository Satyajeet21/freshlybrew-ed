import React, { useRef, useState } from 'react'
import Portfolio from '../Portfolio'
import './index.scss'
import { FaArrowRight } from 'react-icons/fa'
import Modal from '../Modal'
import ExponentialBackoff from '../ExponentialBackoff'
import image1 from '../../assets/images/image1.png'

const projectData = [
  {
    title: 'Exponential Backoff & Retry Strategy',
    description:
      'Exponential backoff is a retry strategy that progressively increases the waiting time between retry attempts. When a request fails, instead of immediately retrying or waiting a fixed time, the system waits for progressively longer periods between each retry attempt.',
    techStack: 'Click on the below button for complete content',
    projectLink: '',
    image: image1,
  },
]

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const projectsRef = useRef(null)

  const scrollRight = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      })
    }
  }

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
              image={project.image}
              onClick={openModal}
            />
          ))}
        </div>
        <button className="scroll-arrow" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ExponentialBackoff />
      </Modal>
    </div>
  )
}

export default Projects
