import React from 'react'
import Notes from './Notes'
import { useAuth0 } from "@auth0/auth0-react";
import mock from "../Assets/mock.png"

const Home = ({showAlert}) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div> 
      {isAuthenticated ? <Notes showAlert={showAlert}/> 
      : 
      <div className='mock'>
        <img src={mock} alt="mock"/>
        <p>
        INotebook: Your Cloud-Based Note-Taking Solution<br/>
        INotebook is an innovative application designed to streamline your note-taking process, 
        providing a seamless and efficient way to create, delete, update, and view notes directly on the cloud. 
        Whether you're a student, professional, or just someone who loves to keep their thoughts organized, 
        INotebook offers a user-friendly interface and powerful features to cater to all your note-taking needs.
        </p>
        </div>}
    </div>
  )
}

export default Home
