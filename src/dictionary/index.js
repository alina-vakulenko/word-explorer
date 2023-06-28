import { useEffect, useState } from "react";

import { useSearchContext } from "../context/searchContext";
import getDictionaryData from "../services/dictionary.service";
import WordCard from "../word-card";
import Meanings from "./meanings";

function Dictionary() {
  const [resultsLoading, setResultsLoading] = useState(null);
  const [resultsError, setResultsError] = useState(null);
  const [dictionaryResults, setDictionaryResults] = useState({});

  const { keyword } = useSearchContext();

  useEffect(() => {
    let isSubscribed = true;

    const fetchDictionaryData = async () => {
      try {
        const response = await getDictionaryData(keyword);
        if (isSubscribed) {
          setDictionaryResults({
            [response.data.word]: {
              pronunciation: response.data.pronunciation,
              results: response.data.results,
            },
          });
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
    <div>
      {resultsLoading && <h3>Results loading</h3>}

      {Object.entries(dictionaryResults).map(([word, data]) => (
        <>
          <section key={word} className="dictionary-content">
            <WordCard word={word} pronunciation={data.pronunciation} />
            <ul className="definitions">
              {data.results?.map((item, index) => (
                <li key={index}>
                  <article>
                    <Meanings meaning={item} />
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </>
      ))}
    </div>
  );
}

export default Dictionary;
