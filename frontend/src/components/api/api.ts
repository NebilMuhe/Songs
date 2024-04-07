import axios from "axios"



const fetchSong =async () => {
    const songs = await axios.get("http://localhost:4000/api/songs")
   
    return songs 
    // console.log("fetch song")
}

const updateSong =async () => {
    
}

const addSong =async () => {
    
}

const removeSong =async () => {
    
}

export {fetchSong,updateSong,addSong,removeSong}