import React from "react";
import CharDetail from "../charDetails/charDetails";

interface OriginDetailsProps {
  mainData?: any;
  error: string;
  response: any;
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
              data={mainData?.residents?.length as number}
              title="Amount of residents: "
              list
              dataTestid="amount of residents "
            />
            <CharDetail
              data={mainData?.dimension as string}
              title="Dimension: "
              list
              dataTestid="dimension"
            />
            <CharDetail
              dataTestid="type"
              data={mainData?.type as string}
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
