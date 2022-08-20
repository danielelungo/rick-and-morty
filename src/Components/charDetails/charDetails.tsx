import React from "react";
import styled from "styled-components";

interface CharDetailProps {
  list?: boolean;
  data: string | number;
  title: string;
  dataTestid: string;
}

const CharDetail: React.FC<CharDetailProps> = ({
  list = false,
  data,
  title,
  dataTestid,
}) => {
  return (
    <Details>
      {list ? (
        <List data-testid={dataTestid}>
          {title} {data}
        </List>
      ) : (
        <Title data-testid={dataTestid}>
          {title} {data}
        </Title>
      )}
    </Details>
  );
};

export default CharDetail;

const Details = styled.div`
  margin: 10px;
`;

const List = styled.li`
  font-weight: 500;
`;

const Title = styled.h4``;
