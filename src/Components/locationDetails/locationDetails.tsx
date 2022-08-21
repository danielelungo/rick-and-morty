import React from "react";
import { Character, CharacterLocation } from "../../Interfaces/types";
import CharDetail from "../charDetails/charDetails";

interface LocationDetailsProps {
  mainData?: CharacterLocation;
  error: string;
  response: Character;
  sameLocationAndOrigin?: boolean;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({
  mainData,
  error,
  response,
  sameLocationAndOrigin = false,
}) => {
  return (
    <>
      <CharDetail
        data={response?.location?.name}
        title={sameLocationAndOrigin ? "Location and Origin: " : "Location: "}
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
