import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const PostWidget = () => {
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
            <p className="ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400">Nickname</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 leading-3 ml-1">@Username</p>
          </div>          
          <button className='dropdown post-options justify-self-end'>
            <img src="/assets/icons/post-options.svg"/>
          </button>
        </div>
        <p className='mx-3 m-2'>
          Isso é um post. Teste.
        </p>
        <div className='buttons flex space-x-3 items-center ml-3 place-content-between'>
          <div className='buttons flex space-x-3 items-center'>
            <div className='like flex items-center space-x-2'>
              <button className=''><Image src="/assets/icons/Heart.svg" alt="like" width={20} height={20} className="my-2"/></button>
              <p className='text-neutral-300 dark:text-neutral-600'>1.2k</p>
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
