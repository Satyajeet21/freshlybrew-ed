import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedImage from './AnimatedImage'
import './index.scss'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [setShowNav] = useState(false)
  const [setShowGreeting] = useState(false)
  const [jobTitle, setJobTitle] = useState('Web')
  const [jobTitleClass, setJobTitleClass] = useState('')

  const nameArray = ['f', 'r', 'e']
  const nameDArray = [
    'h',
    'l',
    'y',
    ' ',
    'B',
    'r',
    'e',
    'w',
    '-',
    'e',
    'd',
    '!',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowGreeting(true)
  //   }, 1000)

  //   return () => clearTimeout(timeoutId)
  // }, [])

  useEffect(() => {
    const jobTitles = ['Explore', 'Learn', 'Hustle']
    let currentIndex = 0

    const intervalId = setInterval(() => {
      setJobTitleClass('fade-out')

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % jobTitles.length
        setJobTitle(jobTitles[currentIndex])
        setJobTitleClass('fade-in')
      }, 500)
    }, 2500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="glass-effect glass-1"></div>
        <div className="glass-effect glass-2"></div>
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> */}
            {/* <br /> */}
            {/* {showGreeting && (
              <AnimatedLetters
                letterClass={letterClass}
                strArray={greetingArray}
                idx={13}
              />
            )}
            <br /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <img
              style={{ marginLeft: '20px' }}
              src={LogoTitle}
              alt="SATYAJEET"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameDArray}
              idx={16}
            />
            <br />
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            /> */}
          </h1>
          <h2>
            <span className={`job-title ${jobTitleClass}`}>{jobTitle}</span>
          </h2>
        </div>
        <Link
          className="logo"
          to="https://www.linkedin.com/in/satyajeet21/"
          target="blank"
          onClick={() => setShowNav(false)}
        >
          <img className="sub-logo" src={LogoSubtitle} alt="satyajet" />
        </Link>
        <AnimatedImage />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
