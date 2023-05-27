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
            
        </div>
    )

};

export default SubNav;