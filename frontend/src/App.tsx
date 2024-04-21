import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getSongsRequest, SongItem } from "./components/slice/slice";
import ListSong from "./components/templates/ListSong";
import { RootState } from "./components/store/store";
import { EditItem } from "./components/slice/editSlice";
import EditModal from "./components/templates/EditModal";

function App() {
  const songs = useSelector<RootState, SongItem[]>(
    (state) => state.songs.songItems
  );
  const dispatch = useDispatch();

  const { isEditOpen }: EditItem = useSelector<RootState, EditItem>(
    (state) => state.edit
  );

  // const total = songs.length;

  useEffect(() => {
    dispatch(getSongsRequest());
  }, [dispatch]);

  // console.log("songs", songs);
  return (
    <>
      <ListSong />
      {isEditOpen && <EditModal />}
    </>
  );
}

export default App;
