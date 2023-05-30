import React, { useState } from 'react'
import Navigation from './Navigation'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './Footer'

export default function Container(){
  const [currentPage, setPage] = useState('aboutMe')

  const renderPage = () => {
    switch(currentPage){
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'contactMe':
        return <ContactMe />
      default:
        return <AboutMe />
    }
  }

  const handleNavClick = (page) => setPage(page)

  return(
    <div>
      <Navigation currentPage={currentPage} handleNavClick={handleNavClick} />
      {renderPage()}
      <Footer />
    </div>
  )
}