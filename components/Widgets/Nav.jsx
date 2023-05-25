"use client";

import '@styles/globals.css';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    return (
        <div id="" class="flex">
            <Image
                src="/assets/icons/Unite.svg"
                alt="Unite"
                width={20}
                height={10}
            />
            <button id="darkMode">
                <Image
                    src="/assets/icons/LightMode.svg"
                    alt="Light Mode"
                    width={10}
                    height={10}
                />
            </button>
        </div>
    )

};

export default Nav;