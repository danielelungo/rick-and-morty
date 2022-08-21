import React from "react";
import { Oval } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Char from "../../Components/char/char";
import useAllChars from "../../Hooks/useAllChars/useAllChars";
import usePagination from "../../Hooks/usePagination/usePagination";

type PageId = {
  pageId: number;
} | null;

function Home() {
  const location = useLocation();
  const state = location.state as PageId;

  const { page, nextPageHandler, prevPageHandler } = usePagination(
    state?.pageId ? state?.pageId : 1,
  );

  const { data, error, loading, numPages } = useAllChars(page);

  return (
    <>
      <h1>Home</h1>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <Oval wrapperClass="loader" height={150} width={150} />
      ) : (
        data && (
          <div>
            <Char data={data} page={page} />
            <ButtonContainer>
              <Button disabled={page === 1} onClick={prevPageHandler}>
                prev
              </Button>
              <PageNumber>Page: {page}</PageNumber>
              <Button disabled={page === numPages} onClick={nextPageHandler}>
                next
              </Button>
            </ButtonContainer>
          </div>
        )
      )}
    </>
  );
}

export default Home;

const ButtonContainer = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#A09FA4" : "#F44250")};
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
`;

const PageNumber = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
