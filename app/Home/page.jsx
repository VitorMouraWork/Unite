'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import TagWidget from '@components/Widgets/TagWidget';
import CreatePostWidget from '@components/Widgets/CreatePostWidget';
import PostWidget from '@components/Widgets/PostWidget';
import Image from 'next/image';
import { Databases, Client, Account } from 'appwrite';

import '@styles/globals.css';
import { useState } from 'react';

const Home = ({posts}) => {
console.log(posts)

const client = new Client();
const account = new Account();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('6527f8f1124d9905ddda') // Your project ID
;

//set user
const [user, setUser] = useState(null);

const UnitePosts = []

const getAccount = account.get();
getAccount.then(function (response) {
  setUser(response.username)
})

//list posts
const listPosts = databases.listDocuments('6528054a4edf5344e551', '6528055a6fb9c77819ca');

listPosts.then(function (response) {
  console.log(response);
  // return new UnitePosts.push(response)

}, function (error) {
  console.log(error); // Failure
});

  return (
    <div className="flex space-x-2 place-content-center w-full">
      <div className='flex flex-col space-y-2 justify-items-center'>
        <MainNav></MainNav>
        <SubNav></SubNav>
        <NavProfile/>
      </div>
      <div className='p-3 flex bg-white dark:bg-neutral-800 rounded-xl w-5/12 flex-col items-center ease-out duration-200 py-2 overflow-y-scroll container'>
        <CreatePostWidget/>

<PostWidget posts={posts} />


      </div> 
      <div className='TAGS flex flex-col space-y-2 justify-items-center'>
        <TagWidget/>
      </div>
    </div>

  )
}

export default Home
