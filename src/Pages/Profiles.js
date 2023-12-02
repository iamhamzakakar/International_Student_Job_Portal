import React from 'react'
import CompanyProfile from '../Components/Profiles/CompanyLayout'
import NavBar from '../Components/NavBar/NavBar'
import StudentProfile from '../Components/Profiles/StudentLayout'

function Profiles() {
  return (
    <>
        <NavBar/>
        <StudentProfile />
        <CompanyProfile />
    </>
  )
}

export default Profiles