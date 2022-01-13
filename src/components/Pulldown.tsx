import React, { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';

export type PulldownItem = {
  name: string;
  value: any;
};

type PulldownProps = {
  items: PulldownItem[];
  placeholder?: string;
  onChange: (value: PulldownItem['value']) => void;
};

const Pulldown: React.VFC<PulldownProps> = ({ items, placeholder = '選択してください', onChange }) => {
  const [selected, setSelected] = useState<PulldownItem>();
  
  useEffect(() => {
    if (!selected) return;
    onChange(selected.value);
  }, [selected, onChange])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative w-full'>
        <Listbox.Button
          className="w-full text-gray-800 text-xl font-bold px-10 py-2 border-2 rounded-lg hover:border-teal-300"
        >
          {selected?.name || placeholder} {!selected ? '👇' : '👍'}
        </Listbox.Button>
        <Listbox.Options
          className='w-full max-h-80 overflow-y-auto absolute bottom-0 left-0 translate-y-full border-2 rounded-lg'
        >
          {items.map((item) => (
            <Listbox.Option
              className='w-full text-gray-600 text-lg text-center px-10 py-1
                border-t-2 first:border-t-0 border-gray-200 hover:text-teal-500 hover:font-bold'
              key={item.name}
              value={item}
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default Pulldown;