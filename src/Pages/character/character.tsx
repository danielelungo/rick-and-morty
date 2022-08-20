import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CharDetail from "../../Components/charDetails/charDetails";
import CharTable from "../../Components/charTable/charTable";
import LocationDetails from "../../Components/locationDetails/locationDetails";
import OriginDetails from "../../Components/originDetails/origindetails";
import useAxios from "../../Hooks/useAxios";
import useBackListener from "../../Hooks/useBackListener";
import useCharLocation from "../../Hooks/useCharLocation";
import useCharOrigin from "../../Hooks/useCharOrigin";
import useEpisodes from "../../Hooks/useEpisodes";

type PageId = {
  pageId: string;
};

const Character = () => {
  const [episodes, setEpisodes] = useState<string[]>([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const { response, loading, error, location, origin } = useAxios(Number(id));

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

  const handleHomePage = () => {
    navigate("/", { state: { pageId: (locationId?.state as PageId).pageId } });
  };

  return (
    <div>
      <div onClick={handleHomePage}>Back</div>
      {loading ? (
        <div>
          <Oval />
        </div>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          <div>
            {response && (
              <div>
                <h2>{response?.name}</h2>

                <div>
                  <img
                    src={response?.image}
                    alt={response?.name}
                    loading="lazy"
                  />
                </div>
                <div>
                  <CharDetail
                    dataTestid="species"
                    data={response?.species}
                    title="Species: "
                  />
                  <CharDetail
                    dataTestid="gender"
                    data={response?.gender}
                    title="Gender: "
                  />
                  <CharDetail
                    dataTestid="status"
                    data={response?.status}
                    title="Status: "
                  />

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

                  <div>
                    <span>Chapters that {response.name} featured on</span>

                    {errorEpisodes ? (
                      <span>{errorEpisodes}</span>
                    ) : (
                      episodesData && <CharTable data={episodesData} />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Character);
