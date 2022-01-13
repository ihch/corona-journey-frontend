import React from 'react';
import Pulldown, { PulldownItem } from './Pulldown';

type SelectPrefecturesProps = {
  prefectures: PulldownItem[];
  onChangeDeparture: (v: any) => void;
  onChangeDestination: (v: any) => void;
};

const SelectPrefectures: React.VFC<SelectPrefecturesProps> = ({
  prefectures,
  onChangeDeparture,
  onChangeDestination
}) => {
  return (
    <div className='flex items-center'>
      <Pulldown items={prefectures} placeholder='出発地' onChange={onChangeDeparture} />
      <span className='text-4xl leading-none inline-block align-middle mx-2'>-</span>
      <Pulldown items={prefectures} placeholder='目的地' onChange={onChangeDestination} />
    </div>
  )
}

export default SelectPrefectures;