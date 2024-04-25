"use client";

import React from 'react'
import { Toaster as Sonner } from "sonner";
import { useTheme } from "next-themes";

import { Toaster } from "../ui/Sonner";
import { ClerkProvider } from '@clerk/nextjs'

interface Props {
    children: React.ReactNode;
}

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Providers = ({ children }: Props) => {

    const { theme } = useTheme();

    return (
        <ClerkProvider>
            <Toaster richColors position="top-right" theme={theme as ToasterProps["theme"]} />
            {children}
        </ClerkProvider>
    )
};

export default Providers
