import React from "react";
import { Character, CharacterLocation } from "../../Interfaces/types";
import CharDetail from "../charDetails/charDetails";

interface LocationDetailsProps {
  mainData?: CharacterLocation;
  error: string;
  response: Character;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({
  mainData,
  error,
  response,
}) => {
  return (
    <>
      <CharDetail
        dataTestid="Location"
        data={response?.name}
        title="Location: "
      />

      {error ? (
        <span>{error}</span>
      ) : (
        mainData && (
          <div>
            <CharDetail
              data={mainData?.residents?.length}
              title="Amount of residents: "
              dataTestid="amount of residents"
              list
            />

            <CharDetail
              data={mainData?.dimension}
              title="Dimension: "
              dataTestid="dimension"
              list
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

export default LocationDetails;
