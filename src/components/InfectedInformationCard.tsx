import React from 'react';
import { InfectedPerson } from '../uses';

type InfectedInformationCardProps = {
  prefecture: string;
  infectedPersons: InfectedPerson[];
};

const InfectedInformationCard: React.VFC<InfectedInformationCardProps> = ({ prefecture, infectedPersons }) => {
  return (
    <div className='border-2 border-gray-300 rounded-lg' key={prefecture}>
      <h3 className='text-2xl text-gray-700 font-semibold px-4 py-2 border-b-2 border-gray-300'>{prefecture}</h3>
      <div className='p-4'>
        <p className='text-lg font-semibold text-gray-700'>今日までの感染者数：{infectedPersons[infectedPersons.length - 1].total_patients}人</p>
        <p className='text-lg font-semibold text-gray-700 mt-2'>前日の{prefecture}の感染者数は{infectedPersons[infectedPersons.length - 1].patients}人でした。</p>
      </div>
    </div>
  )
};

export default InfectedInformationCard;