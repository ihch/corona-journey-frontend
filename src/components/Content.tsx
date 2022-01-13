import React, { useEffect, useMemo, useState } from 'react';
import { Prefecture, usePrefectures, useSearch } from '../uses';
import Button from './Button';
import InfectedInformationCard from './InfectedInformationCard';
import SelectPrefectures from './SelectPrefectures';

type ContentProps = {};

const Content: React.VFC<ContentProps> = () => {
  const _prefectures = usePrefectures();
  const prefectures = useMemo(
    () => _prefectures?.map((prefecture) => ({
      name: prefecture.prefecture,
      value: prefecture,
    })) || [],
    [_prefectures]);

  const [departure, setDeparture] = useState<Prefecture>({ prefecture: '', total_patients: 0 });
  const [destination, setDestination] = useState<Prefecture>({ prefecture: '', total_patients: 0 });
  const { data, search } = useSearch();

  return (
    <div className='w-4/5 mx-auto my-8 shadow-[0_10px_20px_10px_rgba(0,0,0,0.1)]'>
      <div className='min-h-screen py-10 px-6'>
        <h2 className='text-3xl text-gray-700 font-bold'>目的地を選ぶ</h2>
        <div className='mt-8'>
          <SelectPrefectures
            prefectures={prefectures}
            onChangeDeparture={(v) => { setDeparture(v) }}
            onChangeDestination={(v) => { setDestination(v) }}
          />
        </div>
        <div className='flex justify-center pt-8'>
          <Button
            text='検索'
            onClick={() => { search(departure.prefecture, destination.prefecture) }}
          />
        </div>
        <h2 className='text-3xl text-gray-700 font-bold mt-16'>目的地までのコロナウイルス感染状況</h2>
        <div className='py-4 mt-8'>
          {data && data.prefectures.map(({ prefecture, infected_persons }, index) => (
            <>
              {index !== 0 && (
                // I want to change arrow to svg icon.
                <p className='mt-4 text-center text-2xl font-extrabold text-cyan-700' key={`separator-${index}`}>↓</p>
              )}
              <div className='mt-4 first:mt-0' key={prefecture}>
                <InfectedInformationCard prefecture={prefecture} infectedPersons={infected_persons} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content;