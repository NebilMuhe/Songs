import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SongItem, updateSongRequest } from "../slice/slice";
import { Link, useNavigate, useParams } from "react-router-dom";

const editButton = css`
  background: blue;
`;
const cancelButton = css`
  background: gray;
`;

const Aside = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  background: #fff;
  width: 80vw;
  max-width: 900px;
  border-radius: 0.25rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-left: 20px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  width: 60vw;
  height: 20px;
  padding: 0.5rem;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    border-color: #7db0fb;
    outline: 0;
    box-shadow: 0 0 0 4px rgba(24, 117, 255, 0.25);
  }
`;

const Select = styled.select`
  border: 1px solid #ccc;
  display: block;
  width: 62vw;
  height: 40px;
  padding: 0.5rem;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    border-color: #7db0fb;
    outline: 0;
    box-shadow: 0 0 0 4px rgba(24, 117, 255, 0.25);
  }
`;

const H4 = styled.h4`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  outline: 0;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const EditModal = () => {
  const dispatch = useDispatch();
  const songItems: SongItem[] = useSelector<RootState, SongItem[]>(
    (state) => state.songs.songItems
  );

  const { id } = useParams();
  const navigate = useNavigate();

  const song = songItems.find((song) => song._id === id);
  const [songs, setSongs] = useState({
    id: id,
    title: song?.title || "",
    artist: song?.artist || "",
    album: song?.album || 0,
    genre: song?.genre.toLocaleLowerCase() || "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateSongRequest(songs));
    navigate("/");
  };

  useEffect(() => {
    if (song) {
      setSongs((prevSongs) => ({
        ...prevSongs,
        title: song.title || "",
        artist: song.artist || "",
        album: song.album || 0,
        genre: song.genre?.toLocaleLowerCase() || "",
      }));
    }
  }, [song]);

  return (
    <Aside>
      <Div>
        <H4>Edit Song</H4>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                value={songs.title}
                onChange={(e) => setSongs({ ...songs, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="artist">Artist</Label>
              <Input
                type="text"
                id="artist"
                value={songs.artist}
                onChange={(e) => setSongs({ ...songs, artist: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="album">Album</Label>
              <Input
                type="number"
                id="album"
                value={songs.album}
                onChange={(e) =>
                  setSongs({ ...songs, album: parseInt(e.target.value) })
                }
              />
            </div>
            <div>
              <Label htmlFor="genre">Genre</Label>
              <Select
                name=""
                id="genre"
                value={songs.genre?.toLowerCase()}
                onChange={(e) => setSongs({ ...songs, genre: e.target.value })}
              >
                <option value=""></option>
                <option value="reggae">Reggae</option>
                <option value="jazz">Jazz</option>
                <option value="disco">Disco</option>
                <option value="hiphop">HipHop</option>
                <option value="rock">Rock</option>
              </Select>
            </div>
            <div>
              <Button css={editButton} type="submit">
                Edit
              </Button>

              <Link to="/">
                <Button css={cancelButton}>Cancel</Button>
              </Link>
            </div>
          </form>
        </div>
      </Div>
    </Aside>
  );
};

export default EditModal;
