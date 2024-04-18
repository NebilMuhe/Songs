import styled from "@emotion/styled/macro";

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
  max-width: 900px;
  border-radius: 0.25rem;
`;

const H4 = styled.h4`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const EditModal = () => {
  return (
    <Aside>
      <Div>
        <H4>Edit Song</H4>
      </Div>
    </Aside>
  );
};

export default EditModal;
