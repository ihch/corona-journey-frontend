import React, { useEffect, useMemo, useState } from 'react';
import SelectPrefectures from './SelectPrefectures';

type ContentProps = {};

export type Prefecture = {
  prefecture: string;
  total_patients: number;
}

const usePrefectures = () => {
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

const Content: React.VFC<ContentProps> = () => {
  const _prefectures = usePrefectures();
  const prefectures = useMemo(
    () => _prefectures?.map((prefecture) => ({
      name: prefecture.prefecture,
      value: prefecture,
    })) || [],
    [_prefectures]);

  const [departure, setDeparture] = useState<Prefecture>();
  const [destination, setDestination] = useState<Prefecture>();

  return (
    <div className='w-4/5 mx-auto my-4 shadow-[0_10px_20px_10px_rgba(0,0,0,0.1)]'>
      <div className='min-h-screen py-8 px-6'>
        <h2 className='text-3xl font-bold'>目的地を選ぶ</h2>
        <SelectPrefectures
          prefectures={prefectures}
          onChangeDeparture={(v) => { setDeparture(v) }}
          onChangeDestination={(v) => { setDestination(v) }}
        />
      </div>
    </div>
  )
}

export default Content;