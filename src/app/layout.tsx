import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { FormatModal, PricingModal, Providers } from "@/components";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`
    },
    description: siteConfig.description,
    icons: siteConfig.icons,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen antialiased bg-white text-neutral-900",
                // Font.variable,
                font.className,
            )}>
                <Providers>

                    <PricingModal />

                    <FormatModal />

                    {children}

                </Providers>
            </body>
        </html>
    );
};
