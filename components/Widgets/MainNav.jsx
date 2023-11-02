"use client";

import '@styles/globals.css';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useTheme } from 'next-themes';

const MainNav = () => {
    const{ systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;


    return (
        <div class="flex bg-white dark:bg-neutral-800 rounded-xl flex-col items-center ease-out duration-200">
            <div class="flex flex-between space-x-8 p-3">
                <Image
                    src="/assets/icons/Unite.svg"
                    alt="Unite"
                    width={60}
                    height={30}
                    className="ml-12"
                />
                {currentTheme === 'dark' ? (
                    <Image onClick={() => setTheme('light')} className='self-center' role="button" src="/assets/icons/DarkMode.svg" alt="Dark Mode" width={20} height={20}/>
                ) : (
                    <Image onClick={() => setTheme('dark')} className='self-center' role="button" src="/assets/icons/LightMode.svg" alt="Light Mode" width={20} height={20}/>
                )}
                
            </div>
            <div class="flex flex-col cursor-pointer">
            <Link href={'/Home'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Home.svg" className='mr-2'></img>Página Inicial
            </Link>
            <Link href={'/Units'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Units.svg" className='mr-2'></img>Units
            </Link>
            <Link href={'/Vagas'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Notifications.svg" className='mr-2'></img>Vagas
            </Link>
            <Link href={'/Config'} className="ease-out duration-200 text-neutral-600 hover:text-unite-orange flex">
                <img src="/assets/icons/Options.svg" className='mr-2'></img>Opções
            </Link>
            <Link href={'/UnitePro'} className="ease-out duration-200 text-amber-400 hover:text-unite-orange mb-3 flex">
                <img src="/assets/icons/Pro.svg" className='mr-3 ml-1'></img>Unite Pro
            </Link>
            </div>
        </div>
    )

};

export default MainNav;