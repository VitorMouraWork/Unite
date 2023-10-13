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
          {posts.documents.map((post) => (
            <div key={post.$id}>
              <h3>{post.text}</h3>
              <p>{post.createdAt}</p>
            </div>)
            )}
        </div> */}
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

async function getServerSideProps(context) {
  const client = new Client();
  const account = new Account(client);

  client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('6527f8f1124d9905ddda') // Your project ID
  ;

  const databases = new Databases(client);

  const posts = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE,
    process.env.NEXT_PUBLIC_POSTS_COLLECTION
  );

  return {
    props: {posts},
  };
}

