import { useEffect, useState } from "react";

import getDictionaryData from "../services/dictionary.service";
import Pronunciation from "../pronunciation";
import Meanings from "./Meanings";
import { useSearchContext } from "../context/searchContext";

function Dictionary() {
  const [resultsLoading, setResultsLoading] = useState(null);
  const [resultsError, setResultsError] = useState(null);
  const [dictionaryResults, setDictionaryResults] = useState(null);

  const { keyword } = useSearchContext();
  console.log(dictionaryResults);
  useEffect(() => {
    let isSubscribed = true;

    const fetchDictionaryData = async () => {
      try {
        const response = await getDictionaryData(keyword);
        if (isSubscribed) {
          setDictionaryResults(response.data);
        }
      } catch (err) {
        console.log(err);
        setResultsError(err.message);
      }
    };

    setResultsLoading(true);
    fetchDictionaryData();
    setResultsLoading(false);

    return () => {
      isSubscribed = false;
    };
  }, [keyword]);

  if (resultsError) {
    return <h3>{resultsError}</h3>;
  }

  return (
    <section>
      <h3 className="keyword">• {dictionaryResults?.word || keyword} •</h3>

      {resultsLoading && <h3>Results loading</h3>}
      {dictionaryResults && (
        <>
          {dictionaryResults[0]?.phonetics
            ?.filter((pronunciation) => pronunciation.text)
            .map((pronunciation, index) => (
              <div key={index}>
                <Pronunciation pronunciation={pronunciation} />
              </div>
            ))}

          {dictionaryResults[0]?.meanings?.map((meaning, index) => (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default Dictionary;
