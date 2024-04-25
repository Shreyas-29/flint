import { Button } from "@/components/ui/Button";
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 min-h-[calc(100vh-56px)] pt-20">
            <div className="flex items-center justify-center h-full flex-col">
                <span className="text-sm px-3.5 py-1 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-background custom-shadow">
                    404
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-5">
                    Not Found
                </h1>
                <p className="text-base text-muted-foreground font-medium mt-5 text-center mx-auto max-w-xl">
                    The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.
                </p>
                <Link href="/">
                    <Button variant="ghost" className="mt-8">
                        Back to homepage
                    </Button>
                </Link>
            </div>
        </main>
    )
};

export default NotFound;