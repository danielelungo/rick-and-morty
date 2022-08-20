import React from "react";

interface CharDetailProps {
  list?: boolean;
  data: string | number;
  title: string;
  dataTestid: string;

  className?: React.HTMLAttributes<HTMLSpanElement> | string;
}

const CharDetail: React.FC<CharDetailProps> = ({
  list = false,
  data,
  title,
  dataTestid,
}) => {
  return (
    <>
      {list ? (
        <li data-testid={dataTestid}>
          {title} {data}
        </li>
      ) : (
        <span data-testid={dataTestid}>
          {title} {data}
        </span>
      )}
    </>
  );
};

export default CharDetail;
