'use client';

import MainNav from '@components/Widgets/MainNav';
import SubNav from '@components/Widgets/SubNav';
import NavProfile from '@components/Widgets/NavProfile';
import TagWidget from '@components/Widgets/TagWidget';
import CreatePostWidget from '@components/Widgets/CreatePostWidget';
import PostWidget from '@components/Widgets/PostWidget';
import { Databases, Client } from 'appwrite';

import '@styles/globals.css';

const Home = (posts) => {
console.log(posts)

const unitePosts = (post) => []

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('6527f8f1124d9905ddda') // Your project ID
;

//list posts
const promise = databases.listDocuments('6528054a4edf5344e551', '6528055a6fb9c77819ca');

promise.then(function (response) {
  console.log(response); // Success

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
         {/* <div>
          <h2>Tweets</h2>
          {response.map((post) => (
            <div key={post.$id}>
              <h3>{post.text}</h3>
              <p>{post.createdAt}</p>
            </div>)
            )}
        </div>  */}
        <PostWidget/>

      </div> 
      <div className='TAGS flex flex-col space-y-2 justify-items-center'>
        <TagWidget/>
      </div>
    </div>

  )
}

export default Home
