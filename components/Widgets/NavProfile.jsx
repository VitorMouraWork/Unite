"use client";

import '@styles/globals.css';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavProfile = () => {
    return (
            <div class="flex bg-white dark:bg-neutral-800 rounded-full space-x-8 cursor-pointer ease-out duration-200">
                <div class="flex ">
                    <Image 
                            src="/assets/images/logo.svg"
                            alt="Profile"
                            width={35}
                            height={35}
                            className='rounded-full m-1'
                    />
                    <div className='flex flex-col'>
                        <p className='ease-out duration-200 hover:text-unite-orange text-neutral-600 dark:text-neutral-400'>Nickname</p>
                        <p className='text-xs text-neutral-400 dark:text-neutral-600 leading-3'>@Username</p>
                    </div>
                    
                </div>
                
                <button href='/' onClick={signOut} className="self-center r-0">
                        <Image 
                            src="/assets/icons/Logout.svg"
                            alt="Log Out"
                            width={18}
                            height={18}
                        />
                </button>
                
            </div>
    )

};

export default NavProfile;