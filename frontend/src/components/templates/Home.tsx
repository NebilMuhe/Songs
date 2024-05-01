import { Link } from "react-router-dom";
import ListSong from "./ListSong";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const addButton = css`
  background: #0d6efd;
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

function Home() {
  return (
    <div>
      <Link to="/add">
        <Button css={addButton}>Add</Button>
      </Link>
      <Link to="/stats">
        <Button css={addButton}>Stats</Button>
      </Link>
      <ListSong />
    </div>
  );
}

export default Home;
