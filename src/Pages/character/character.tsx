import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CharDetail from "../../Components/charDetails/charDetails";
import CharTable from "../../Components/charTable/charTable";
import LocationDetails from "../../Components/locationDetails/locationDetails";
import OriginDetails from "../../Components/originDetails/origindetails";
import useCharDetails from "../../Hooks/useCharDetails/useCharDetails";
import useBackListener from "../../Hooks/useBackListener/useBackListener";
import useCharLocation from "../../Hooks/useCharLocation/useCharLocation";
import useCharOrigin from "../../Hooks/useCharOrigin/useCharOrigin";
import useEpisodes from "../../Hooks/useEpisodes/useEpisodes";

type PageId = {
  pageId: number;
};

const Character = () => {
  const [episodes, setEpisodes] = useState<string[]>([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const { response, loading, error, location, origin } = useCharDetails(
    Number(id),
  );

  const { locationData, errorLocation } = useCharLocation(location);

  const { originData, errorOrigin } = useCharOrigin(origin);

  const { episodesData, errorEpisodes } = useEpisodes(episodes);

  const locationId = useLocation();

  useEffect(() => {
    if (response) {
      setEpisodes(response?.episode);
    }
  }, [id, response]);

  useBackListener(() => {
    navigate("/", { state: { pageId: (locationId?.state as PageId).pageId } });
  });

  return (
    <div>
      {loading ? (
        <div>
          <Oval wrapperClass="loader" height={150} width={150} />
        </div>
      ) : (
        <div>
          {error && (
            <div>
              <h1>{error}</h1>
            </div>
          )}
          <div>
            {response && (
              <div>
                <Name>{response?.name}</Name>
                <div>
                  <Image
                    src={response?.image}
                    alt={response?.name}
                    loading="lazy"
                  />
                </div>
                <DetailsContainer>
                  <CharDetail data={response?.gender} title="Gender: " />
                  {response?.location?.name === response?.origin?.name ? (
                    <LocationDetails
                      response={response}
                      mainData={locationData}
                      error={errorLocation}
                      sameLocationAndOrigin={true}
                    />
                  ) : (
                    <>
                      <LocationDetails
                        response={response}
                        mainData={locationData}
                        error={errorLocation}
                      />
                      <OriginDetails
                        response={response}
                        mainData={originData}
                        error={errorOrigin}
                      />
                    </>
                  )}
                  {errorEpisodes ? (
                    <span>{errorEpisodes}</span>
                  ) : (
                    episodesData && (
                      <>
                        <h4>Chapters in which {response.name} is featured:</h4>
                        <CharTable data={episodesData} />
                      </>
                    )
                  )}
                </DetailsContainer>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Character);

const Name = styled.h2``;

const Image = styled.img`
  border-radius: 10px;
  -moz-box-shadow: 0 0 5px 5px #888;
  -webkit-box-shadow: 0 0 5px 5px #888;
  box-shadow: 0 0 5px 5px #888;
`;

const DetailsContainer = styled.div`
  margin-top: 15px;
`;
