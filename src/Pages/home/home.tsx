import React from "react";
import { Oval } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import Char from "../../Components/char/char";
import useAllChars from "../../Hooks/useAllChars";
import usePagination from "../../Hooks/usePagination";

type PageId = {
  pageId: string;
};

function Home() {
  const location = useLocation();
  const { pageId } = location?.state as PageId;

  const { page, nextPageHandler, prevPageHandler } = usePagination(
    pageId ? Number(pageId) : 1,
  );

  const { data, error, loading, numPages } = useAllChars(page);

  return (
    <>
      <h1>Home</h1>
      <div>
        {error ? (
          <span>{error}</span>
        ) : loading ? (
          <Oval />
        ) : (
          data && (
            <div>
              <Char data={data} page={page} />
              <button disabled={page === 1} onClick={prevPageHandler}>
                prev
              </button>
              <span>Page: {page}</span>
              <button disabled={page === numPages} onClick={nextPageHandler}>
                next
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Home;
