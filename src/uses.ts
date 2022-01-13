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
    const response = await fetch(`/search?departure=${departure}&destination=${destination}`);
    const data = await response.json();
    setData(data);
  }

  return { data, search: f };
}