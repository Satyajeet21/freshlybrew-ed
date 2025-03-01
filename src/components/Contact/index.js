import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [notification, setNotification] = useState({ message: '', type: '' })
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_73nbzmp',
        'template_iyq4ihi',
        form.current,
        '17JLkIwo9xIMVmIxz'
      )
      .then(
        () => {
          setNotification({
            message: 'Message successfully sent!',
            type: 'success',
          })
          setTimeout(() => {
            setNotification({ message: '', type: '' })
          }, 3000)
          form.current.reset()
        },
        () => {
          setNotification({
            message: 'Failed to send the message, please try again',
            type: 'error',
          })
          setTimeout(() => {
            setNotification({ message: '', type: '' })
          }, 3000)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    class="custom-placeholder"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Satyajeet Behera,
          <br />
          India,
          <br />
          301, Shree Swami Samartha Apartment, Wadgaon Sheri, Pune, Maharashtra
          (411014) <br />
          <br />
          <span>satyajeetb.se@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.5500042, 73.9100932]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.5500042, 73.9100932]}>
              <Popup>Come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Notification Section */}
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <Loader type="pacman" />
    </>
  )
}

export default Contact
