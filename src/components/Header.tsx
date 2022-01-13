import React from 'react';

type HeaderProps = {};

const Header: React.VFC<HeaderProps> = () => {
  return (
    <header className='w-full bg-teal-500 px-8 py-4'>
      <h2 className='text-slate-100 text-3xl font-bold'>Corona Journey</h2>
    </header>
  )
}

export default Header;