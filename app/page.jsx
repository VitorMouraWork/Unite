'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import Main from '@components/Main';
import PostWidget from '../../components/Widgets/PostWidget';

const Home = () => {

  return (
    <div className="flex">
      <div className='flex flex-col space-y-2'>
        <MainNav></MainNav>
        <SubNav></SubNav>
        <NavProfile/>
      </div>
      <Main>
        <PostWidget/>
      </Main>
    </div>

  )
}

export default Home
