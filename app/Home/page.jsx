'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import TagWidget from '@components/Widgets/TagWidget';
import CreatePostWidget from '@components/Widgets/CreatePostWidget';
import PostWidget from '@components/Widgets/PostWidget';
import '@styles/globals.css';

const Home = () => {

  return (
    <div className="flex space-x-2 place-content-center w-full">
      <div className='flex flex-col space-y-2 justify-items-center'>
        <MainNav></MainNav>
        <SubNav></SubNav>
        <NavProfile/>
      </div>
      <div className='p-3 flex bg-white dark:bg-neutral-800 rounded-xl w-5/12 flex-col items-center ease-out duration-200 py-2 overflow-y-scroll container'>
        <CreatePostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
        <PostWidget/>
      </div>
      <div className='TAGS flex flex-col space-y-2 justify-items-center'>
        <TagWidget/>
      </div>
    </div>

  )
}

export default Home
