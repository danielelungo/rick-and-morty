import React from "react";
import styled from "styled-components";

type EpisodesType = {
  id: number;
  name: string;
  date: string;
  episode: string;
};

interface CharTableProps {
  data: EpisodesType[];
}

const CharTable: React.FC<CharTableProps> = ({ data }) => {
  return (
    <div>
      <ContainerTitle>
        <EpisodeTitle>Ep</EpisodeTitle>
        <NameTitle>Name</NameTitle>
        <DateTitle>Date</DateTitle>
      </ContainerTitle>
      {data?.map((item: EpisodesType) => (
        <Container key={item?.id}>
          <Episode>{item?.episode}</Episode>
          <Name>{item?.name}</Name>
          <Date>{item?.date}</Date>
        </Container>
      ))}
    </div>
  );
};

export default CharTable;

const ContainerTitle = styled.div`
  background-color: #01b0c5;
  display: flex;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid;
  border-radius: 5px;
  margin: 15px;
  @media only screen and (min-width: 900px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

const EpisodeTitle = styled.div`
  flex: 1;
  align-self: center;
  font-weight: 800;
`;

const NameTitle = styled.div`
  flex: 2;
  align-self: center;
  font-weight: 800;
`;

const DateTitle = styled.div`
  flex: 1;
  align-self: center;
  font-weight: 800;
`;

const Container = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid;
  border-radius: 5px;
  margin: 15px;
  @media only screen and (min-width: 900px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

const Episode = styled.div`
  flex: 1;
  align-self: center;
  font-weight: 400;
`;

const Name = styled.div`
  flex: 2;
  align-self: center;
  font-weight: 500;
`;

const Date = styled.div`
  flex: 1;
  align-self: center;
  font-weight: 400;
`;
