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
      <CharDetail data={response?.name} title="Location: " />

      {error ? (
        <span>{error}</span>
      ) : (
        mainData && (
          <div>
            <CharDetail
              data={mainData?.residents?.length}
              title="Amount of residents: "
              list
            />

            <CharDetail data={mainData?.dimension} title="Dimension: " list />
            <CharDetail data={mainData?.type} title="Type: " list />
          </div>
        )
      )}
    </>
  );
};

export default LocationDetails;
