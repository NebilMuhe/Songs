import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getSongsRequest, SongItem } from "./components/slice/slice";
import ListSong from "./components/templates/ListSong";
import { RootState } from "./components/store/store";

function App() {
  const songs = useSelector<RootState, SongItem[]>(
    (state) => state.songs.songItems
  );
  const dispatch = useDispatch();

  // const total = songs.length;

  console.log("total", songs.length);

  useEffect(() => {
    dispatch(getSongsRequest());
  }, [dispatch]);

  // console.log("songs", songs);
  return (
    <>
      <ListSong />
    </>
  );
}

export default App;
