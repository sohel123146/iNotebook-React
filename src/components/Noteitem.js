import React,{useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../context/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h3 className="card-title">{note.title}</h3>
            <div className="buttons d-flex">
          <FontAwesomeIcon
            className="icon mx-2"
            icon={faTrash}
            onClick={()=> {deleteNote(note._id);props.showAlert("Note Deleted Successfully","success")}}
          />
          <FontAwesomeIcon className="icon" icon={faEdit} onClick={()=> updateNote(note) } />
        </div>
          </div>
          <h5 className="card-text">{note.description}</h5>
          <p className="card-text">{note.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
