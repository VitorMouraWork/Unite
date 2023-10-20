import Image from 'next/image';
import { useState } from 'react';
import { Databases, Functions, Client } from 'appwrite';
import appwriteClient from '@/libs/appwrite';

const PostWidget = ({ post, onPostRemoved, onLikePostCallback }) => {
  
  const onRemovePost = async () => {

    const client = new Client();
    const databases = new Databases(appwriteClient);
    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('6527f8f1124d9905ddda') // Your project ID
    ;

    try {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_DATABASE, // Your database ID
        process.env.NEXT_PUBLIC_POSTS_COLLECTION, // Your collection ID
        post.$id
      );
      onPostRemoved(post);
    } catch (error) {
    }
  };

  const onLikePost = async () => {
    try {
      const functions = new Functions(appwriteClient);
      await functions.createExecution(
        '6528055a6fb9c77819ca',
        JSON.stringify({
          postId: post.$id,
          likes: (post.likes || 0) + 1,
        }),
        true
      );
      onLikePostCallback({ ...post, likes: (post.likes || 0) + 1 });
    } catch (error) {
      console.log(error);
    }
  };

    // // Obter o texto do post do banco de dados
    // const postText = Databases.getDocument(
    //   process.env.NEXT_PUBLIC_DATABASE, // Your database ID
    //   process.env.NEXT_PUBLIC_POSTS_COLLECTION, // Your collection ID
    //   post.$id,
    //   'text'
    // );
  
  return (
    <div className='flex flex-start w-4/5 items-start my-2'>
      <Image
        src="/assets/images/logo.svg"
        alt="Profile"
        width={35}
        height={35}
        className="rounded-full cursor-pointer m-1"
      />
      <div className='border-2 border-neutral-300 dark:border-neutral-900 w-full px-2 w-120 rounded-xl'>
        <div className='flex items-center place-content-between'>
          <div className='flex items-center'>
            <p className="ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400">
             name
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-3 ml-1">
             @username
            </p>
          </div>          
          <button className='dropdown post-options justify-self-end'>
            <img src="/assets/icons/post-options.svg"/>
          </button>
        </div>
        <p className='mx-3 m-2'>
          post.text
        </p>
        <div className='buttons flex space-x-3 items-center ml-3 place-content-between'>
          <div className='buttons flex space-x-3 items-center'>
            <div className='like flex items-center space-x-2'>
              <button className='' onClick={onLikePost}><Image src="/assets/icons/Heart.svg" alt="like" width={20} height={20} className="my-2"/></button>
              <span className='text-neutral-300 dark:text-neutral-600'>post.likes</span>
            </div>
            <div className='pin flex space-x-2 items-center'>
              <button className=''><Image src="/assets/icons/pin.svg" alt="pin" width={20} height={20} className="my-2"/></button>
              <p className='text-neutral-300 dark:text-neutral-600'>305</p>
            </div>
            <div className='comment flex space-x-2 items-center'>
              <button className=''><Image src="/assets/icons/comment.svg" alt="comment" width={20} height={20} className="my-2"/></button>
              <p className='text-neutral-300 dark:text-neutral-600'>212</p>
            </div>
          </div>
          <div className='flex flex-col justify-center align-items-end mb-2'>
            <p className='text-xs text-neutral-300 dark:text-neutral-600'>00:25</p>
            <button className=''><Image src="/assets/icons/Bookmarks.svg" alt="comment" width={10} height={10} className="r-0"/></button>
          </div>
        </div>
        
      </div>
    </div>
    
  )
};

export default PostWidget;

// estes códigos comentados abaixo são a forma que o banco de dados lê os documentos do post
// {post.username}{' '}
// {post.text}
// {post.likes}