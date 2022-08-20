import React from "react";
import { Character, CharacterOrigin } from "../../Interfaces/types";
import CharDetail from "../charDetails/charDetails";

interface OriginDetailsProps {
  mainData?: CharacterOrigin;
  error: string;
  response: Character;
}

const OriginDetails: React.FC<OriginDetailsProps> = ({
  mainData,
  error,
  response,
}) => {
  return (
    <>
      <CharDetail
        data={response?.origin.name}
        title="Origin: "
        dataTestid="origin"
      />
      {error ? (
        <span>{error}</span>
      ) : (
        mainData && (
          <div>
            <CharDetail
              data={mainData?.residents?.length}
              title="Amount of residents: "
              list
              dataTestid="amount of residents "
            />
            <CharDetail
              data={mainData?.dimension}
              title="Dimension: "
              list
              dataTestid="dimension"
            />
            <CharDetail
              dataTestid="type"
              data={mainData?.type}
              title="Type: "
              list
            />
          </div>
        )
      )}
    </>
  );
};

export default OriginDetails;
