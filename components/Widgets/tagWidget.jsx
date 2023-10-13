"use client";

import '@styles/globals.css';

import Link from "next/link";
import Image from "next/image";

const tagWidget = () => {

    return (
        <div class="flex bg-white dark:bg-neutral-800 rounded-xl flex-col ease-out duration-200 p-3">
            <div className='SearchBar flex rounded-full overflow-hidden border-2 px-1 dark:border-neutral-700 '>
                <img src="/assets/icons/search.svg" width={15}></img>
                <input type='search' placeholder='' className='bg-transparent border-none ml-1'></input>
            </div>
            <br></br>

                <p className=''>#ForYou</p>           
            <div class="ForYouTags flex space-x-2 container max-w-0 p-2">
                <p className='text-sm text-neutral-400 cursor-pointer'>#ux</p>   
                <p className='text-sm text-neutral-400 cursor-pointer'>#design</p>   
                <p className='text-sm text-neutral-400 cursor-pointer'>#react</p>   
                <p className='text-sm text-neutral-400 cursor-pointer'>#figma</p> 
            </div>
                <p className=''>#Recomended</p>           
            <div class="ForYouTags flex space-x-2 container max-w-0 p-2">
                <p className='text-sm text-neutral-400 cursor-pointer'>#ux</p>   
                <p className='text-sm text-neutral-400 cursor-pointer'>#design</p>   
                <p className='text-sm text-neutral-400 cursor-pointer'>#react</p>   
                <p className='text-sm text-neutral-400 cursor-pointer'>#figma</p> 
            </div>
        </div>
    )

};

export default tagWidget;