import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { useAppDispatch } from "./hooks/hook";
import { closeModal } from "../slice/modalSlice";
// import { clearSongs } from "./redux-toolkit/songSlice";
import { useDispatch } from "react-redux";
import { removeSongRequest } from "../slice/slice";

const btnContainer = css`
  display: flex;
  justify-content: space-around;
`;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  background: #fff;
  width: 80vw;
  max-width: 400px;
  border-radius: 0.25rem;
  padding: 2rem 1rem;
  text-align: center;
`;

const Button = styled.button`
  text-transform: uppercase;
  background: #645cff;
  color: #fff;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.25rem;
  display: inline-block;
  font-weight: 700;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const DeleteModal = ({ props }: any) => {
  const dispatch = useDispatch();

  return (
    <Aside>
      <Div>
        <h4>Delete Song Item</h4>
        <div css={btnContainer}>
          <Button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(closeModal());
              dispatch(removeSongRequest(props));
              //   dispatch(clearSongs());
            }}
          >
            Confirm
          </Button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </Div>
    </Aside>
  );
};

export default DeleteModal;
