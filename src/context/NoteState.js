import React, { useState } from 'react'
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes,setNotes] = useState(notesInitial)

    const getNotes = async()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: 'GET',
            headers:{
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
    }


    const addNote = async(title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`,{
            method: "POST",
            headers:{
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
        });

        const note = await response.json()
        setNotes(notes.concat(note))
    }

    const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:"DELETE",
            headers:{
                'Content-type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
        });
        const json = response.json()
        console.log(json)
        const newNotes = notes.filter((note)=> { return note._id !== id })
        setNotes(newNotes)
    }

    const editNote = async(id, title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:"PUT",
            headers:{
                'Content-type':'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body:JSON.stringify({title, description, tag})
        });
        const json = await response.json()
        console.log(json)
        //logic to update note on client side
        const updatedNotes = notes.map(note =>
            note._id === id ? { ...note, title, description, tag } : note
          );
        setNotes(updatedNotes)
    }

    return(
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState
