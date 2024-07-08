import React,{ useEffect, useState }from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [noteCount,setNoteCount] = useState(0);
  const host = "http://localhost:5000";

  useEffect(() => {
    const fetchNotesCount = async () => {
      try {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json', 
            'auth-token': localStorage.getItem('token')
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch notes count");
        }
        const data = await response.json();
        setNoteCount(data);
      } catch (error) {
        console.error("Error fetching notes count:", error);
      }
    };

    if (isAuthenticated) {
      fetchNotesCount();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-card">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>Notes Count: {noteCount.length}</p>
      </div>
    )
  );
};

export default Profile;