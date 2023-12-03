import React, {useContext} from 'react'
import CompanyProfile from '../Components/Profiles/CompanyLayout'
import NavBar from '../Components/NavBar/NavBar'
import StudentProfile from '../Components/Profiles/StudentLayout'
import { UserContext } from "../Components/UserContext/UserContext";

function Profiles() {
    const { user } = useContext(UserContext);
  return (
    <>
        <NavBar/>
        {user && user.role === 'student' && (
        <StudentProfile />
        )}
        {user && user.role === 'company' && (
        <CompanyProfile />
        )}
    </>
  )
}

export default Profiles