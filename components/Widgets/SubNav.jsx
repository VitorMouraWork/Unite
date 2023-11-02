"use client";

import '@styles/globals.css';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useTheme } from 'next-themes';

const SubNav = () => {

    return (
        <div class="flex bg-white dark:bg-neutral-800 rounded-xl flex-col items-center ease-out duration-200 py-2">
            <div class="flex flex-col cursor-pointer">
            <Link href={'/Profile'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Profile.svg" className='mr-2'></img>Perfil
            </Link>
            <Link href={'/Messages'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Messages.svg" className='mr-2'></img>Mensagens
            </Link>
            <Link href={'/Saves'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Bookmarks.svg" className='mr-3 ml-1'></img>Salvos
            </Link>
            </div>
        </div>
    )

};

export default SubNav;