import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Character } from "../../Interfaces/types";

interface TableProps {
  data: Character[];
  page: number;
}

const Char: React.FC<TableProps> = ({ data, page }) => {
  const navigate = useNavigate();

  const openCharacter = (id: number) => {
    navigate(`/character/${id}`, { state: { pageId: page } });
  };

  return (
    <>
      {data?.length ? (
        <div>
          {data?.map((item: Character) => (
            <Container key={item?.id} onClick={() => openCharacter(item.id)}>
              <Name>{item?.name}</Name>
              <Status color={item?.status}>{item?.status}</Status>
              <Species speciesLength={item?.species?.length}>
                {item?.species}
              </Species>
            </Container>
          ))}
        </div>
      ) : (
        "There is no data"
      )}
    </>
  );
};

export default Char;

const Container = styled.div`
  cursor: pointer;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-width: 3px;
  border-color: black;
  border-style: solid;
  margin: 15px;
  border-radius: 10px;
  @media only screen and (min-width: 900px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

const Name = styled.div`
  flex: 2;
  align-self: center;
  font-weight: 800;
`;
const Status = styled.div`
  flex: 1;
  background-color: ${({ color }) =>
    color === "Alive" ? "#8AC75F " : color === "Dead" ? "#C23C41" : "#A1CBDC"};
  align-self: center;
  border-radius: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 600;
`;
const Species = styled.div<{ speciesLength: number }>`
  flex: 1;
  align-self: center;
  font-weight: 600;
  @media only screen and (max-width: 500px) {
    font-size: ${({ speciesLength }) => (speciesLength > 5 ? "11px" : "16px")};
  }
`;
