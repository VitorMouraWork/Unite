'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import { useTheme } from 'next-themes';

const Home = () => {

  return (
    <div className='flex flex-col space-y-2'>
      <MainNav></MainNav>
      <SubNav></SubNav>
      <NavProfile/>
    </div>

  )
}

export default Home