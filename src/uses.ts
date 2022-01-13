import { useEffect, useState } from "react";

export type Prefecture = {
  prefecture: string;
  total_patients: number;
}

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>();

  useEffect(() => {
    const f = async () => {
      const response = await fetch('/prefectures');
      const data = await response.json()
      setPrefectures(data.prefectures);
    }
    f();
  }, [setPrefectures])

  return prefectures;
}

type SearchResponse = {
  prefectures: {
    prefecture: string;
    infected_persons: {
      date: string;
      patients: number;
      total_patients: number;
    }[];
  }[];
};

export const useSearch = () => {
  const [data, setData] = useState<SearchResponse>();
  const f = async (departure: string, destination: string) => {
    const response = await fetch(`/search?departure=${departure}&destination=${destination}`);
    const data = await response.json();
    setData(data);
  }

  return { data, search: f };
}