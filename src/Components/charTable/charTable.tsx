import React from "react";

type EpisodesType = {
  id: number;
  name: string;
  date: string;
};

interface CharTableProps {
  data: EpisodesType[];
}

const CharTable: React.FC<CharTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: EpisodesType) => (
          <tr key={item?.id}>
            <td>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharTable;
