import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getSongsRequest } from "./components/slice/slice";

function App() {
  const songs = useSelector<any>((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsRequest());
  }, [dispatch]);

  console.log(songs);
  return <></>;
}

export default App;
