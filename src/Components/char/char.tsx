import React from "react";
import { useNavigate } from "react-router-dom";

interface TableProps {
  data: any[];
  page: number;
}

const Char: React.FC<TableProps> = ({ data, page }) => {
  const navigate = useNavigate();

  const openCharacter = (id: number) => {
    navigate(`/character/${id}`, { state: { pageId: page } });
  };

  return (
    <div>
      {data?.length ? (
        <div>
          {data?.map((item: any) => (
            <div key={item?.id} onClick={() => openCharacter(item.id)}>
              <span>{item.id}</span>
              <span>{item?.name}</span>
              <span>{item?.status}</span>
              <span>{item?.species}</span>
            </div>
          ))}
        </div>
      ) : (
        "There is no data"
      )}
    </div>
  );
};

export default Char;
