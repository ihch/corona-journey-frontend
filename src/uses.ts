import { useEffect, useState } from "react";

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '';

export type Prefecture = {
  prefecture: string;
  total_patients: number;
};

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>();

  useEffect(() => {
    const f = async () => {
      const response = await fetch(REACT_APP_API_ENDPOINT + "/prefectures");
      const data = await response.json();
      setPrefectures(data.prefectures);
    };
    f();
  }, [setPrefectures]);

  return prefectures;
};

export type InfectedPerson = {
  date: string;
  patients: number;
  total_patients: number;
};

type SearchResponse = {
  prefectures: {
    prefecture: string;
    infected_persons: InfectedPerson[];
  }[];
};

export const useSearch = () => {
  const [data, setData] = useState<SearchResponse>();
  const f = async (departure: string, destination: string) => {
    const response = await fetch(
      REACT_APP_API_ENDPOINT + `/search?departure=${departure}&destination=${destination}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  return { data, search: f };
};
