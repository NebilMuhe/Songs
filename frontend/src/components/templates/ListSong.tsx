import { useDispatch, useSelector } from "react-redux";
import { removeSongRequest, SongState } from "../slice/slice";
import styled from "@emotion/styled";
import { RootState } from "../store/store";
import { css } from "@emotion/react";
import { openEditModal } from "../slice/editSlice";
import { Link } from "react-router-dom";

const Table = styled.table`
  border: 0 solid grey;
  padding: 5px;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 0 solid grey;
  padding: 5px;
  border-collapse: collapse;
  font-size: 25px;
`;

const Td = styled.td`
  border: 0 solid grey;
  padding: 5px;
  border-collapse: collapse;
  font-size: 20px;
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  outline: 0;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
`;

const editButton = css`
  background: #0d6efd;
`;

const deleteButton = css`
  background: #de321f;
`;

const ListSong = () => {
  const songs: SongState = useSelector((store: RootState) => store.songs);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Showing {songs.songItems.length} song from the database.</p>
      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Artist</Th>
            <Th>Album</Th>
            <Th>Genre</Th>
          </tr>
        </thead>
        <tbody>
          {songs.songItems.map((value: any) => (
            <tr key={value._id}>
              <Td>{value.title}</Td>
              <Td>{value.artist}</Td>
              <Td>{value.album}</Td>
              <Td>{value.genre}</Td>
              <Td>
                <Link to={`/edit/${value._id}`}>
                  <Button css={editButton}>Edit</Button>
                </Link>
              </Td>
              <Td>
                <Button
                  css={deleteButton}
                  onClick={() => dispatch(removeSongRequest(value._id))}
                >
                  Delete
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListSong;
