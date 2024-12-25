import React, { useState, useEffect } from 'react'
import './index.scss'
import AngularFundamentalsBlog from '../AngularContent/AngularFundamental'
import AngularFormsAndValidationsBlog from '../AngularContent/AngularFormsandValidations'
import AngularComponentsArch from '../AngularContent/AngularComponentsArch'
const DetailedContentComponents = {
  1: AngularFundamentalsBlog,
  2: AngularComponentsArch,
  6: AngularFormsAndValidationsBlog,
}

const Resume = () => {
  const contentData = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      content: '',
      hasDetailedContent: true,
    },
    {
      id: 2,
      title: 'Component Architecture',
      content:
        'Angular components are the building blocks of the UI. They consist of a TypeScript class, an HTML template, and optional CSS styles. Components use decorators like @Component to define their metadata and structure.',
    },
    {
      id: 3,
      title: 'Dependency Injection',
      content:
        "Angular's dependency injection (DI) system is a core feature that allows for efficient management of service dependencies. It enables loose coupling between components and services, making applications more modular, maintainable, and testable.",
    },
    {
      id: 4,
      title: 'RxJS and Observables',
      content:
        'Angular integrates RxJS for handling asynchronous operations and event processing. Observables provide powerful reactive programming patterns, allowing developers to manage complex data streams, handle events, and implement advanced state management.',
    },
    {
      id: 5,
      title: 'Angular Directives',
      content:
        'Directives are a key concept in Angular that allow you to extend HTML with custom behaviors. There are three types: Component Directives, Structural Directives (like *ngIf and *ngFor), and Attribute Directives that modify element appearance or behavior.',
    },
    {
      id: 6,
      title: 'Forms and Validation',
      content:
        'Angular provides two approaches to forms: Template-driven forms and Reactive forms. Both offer robust validation mechanisms, allowing developers to create complex form interactions with built-in and custom validators.',
      hasDetailedContent: true,
    },
    {
      id: 7,
      title: 'Routing and Navigation',
      content:
        "Angular's Router module enables sophisticated client-side navigation. It supports lazy loading of modules, route guards, resolvers, and complex routing configurations for creating single-page applications with multiple views.",
    },
    {
      id: 8,
      title: 'State Management',
      content:
        'While Angular has built-in services for state management, developers often use additional libraries like NgRx for more complex state handling. NgRx implements the Redux pattern, providing a centralized store for application state.',
    },
  ]

  const [theme, setTheme] = useState(() => {
    const savedTheme = sessionStorage.getItem('app-theme')
    return savedTheme || 'light'
  })

  const [selectedContent, setSelectedContent] = useState(contentData[0])

  useEffect(() => {
    document.body.className = `${theme}-theme`

    sessionStorage.setItem('app-theme', theme)
  }, [theme])

  const handleItemSelect = (item) => {
    setSelectedContent(item)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      sessionStorage.setItem('app-theme', newTheme)
      return newTheme
    })
  }

  const renderContent = () => {
    const DetailedComponent = DetailedContentComponents[selectedContent.id]

    return (
      <>
        <h2 className="content-title">{selectedContent.title}</h2>
        <div className="content-underline"></div>

        {DetailedComponent ? (
          <DetailedComponent theme={theme} />
        ) : (
          <p className="content-description">{selectedContent.content}</p>
        )}
      </>
    )
  }

  return (
    <div className="split-page-container">
      <button
        className="mode-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="left-panel">
        {contentData.map((item) => (
          <div
            key={item.id}
            className={`content-list-item ${
              selectedContent.id === item.id ? 'selected' : ''
            }`}
            onClick={() => handleItemSelect(item)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="right-panel">{renderContent()}</div>
    </div>
  )
}

export default Resume
