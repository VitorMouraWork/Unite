'use client';
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes';

const Provider = ({ children, session }) => {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </ThemeProvider>
    )
}

export default Provider;