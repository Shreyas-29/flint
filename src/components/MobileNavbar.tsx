"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/Sheet";
import { tools } from "@/constants";
import { usePricingModal } from "@/store";
import { useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';
import Icons from "./Icons";
import { Button } from "./ui/Button";

const MobileNavbar = () => {

    const { user } = useUser();

    const { isOpen, setIsOpen } = usePricingModal();

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handlePricingModalOpen = () => {
        setIsOpen(true);
        setIsSheetOpen(false);
    };

    return (
        <div className="flex items-center justify-between w-full h-full px-4 md:hidden">

            <div className="flex items-center justify-center gap-x-2">
                <Link href="/" className="flex items-center select-none gap-x-2">
                    <Icons.icon className="w-7 h-7" />
                    <h1 className="text-xl font-bold text-zinc-900">
                        Flint
                    </h1>
                </Link>
            </div>

            <div className="flex justify-end">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <ul className="flex flex-col items-start w-full py-8 gap-y-0">
                            <div className="mb-2 ml-4 text-sm font-medium uppercase text-muted-foreground">
                                Menu
                            </div>
                            <li className="w-full text-base font-medium">
                                <Button variant="ghost" className="w-full">
                                    <Link href="/about" className="w-full text-base text-start">
                                        About
                                    </Link>
                                </Button>
                            </li>
                            <li className="w-full text-base font-medium">
                                <Button variant="ghost" className="w-full">
                                    <Link href="/pricing" className="w-full text-base text-start">
                                        Pricing
                                    </Link>
                                </Button>
                            </li>
                            <div className="pt-4 my-2 ml-4 text-sm font-medium uppercase text-muted-foreground">
                                Tools
                            </div>
                            {tools.map((tool) => (
                                <li key={tool.id} className="w-full text-base font-medium">
                                    <Button variant="ghost" className="w-full">
                                        <Link href="#" className="w-full text-base text-start">
                                            {tool.name}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                            <div className="pt-4 my-2 w-full">
                                <div className="ml-4 pb-2 text-sm font-medium uppercase text-muted-foreground">
                                    Account
                                </div>
                                {user ? (
                                    <div className="flex flex-col items-start w-full">
                                        <li className="w-full text-base text-start font-medium">
                                            <Button variant="ghost" className="w-full text-base justify-start" asChild>
                                                <Link href="/dashboard" className="w-full text-start">
                                                    Dashboard
                                                </Link>
                                            </Button>
                                        </li>
                                        <li className="w-full text-base font-medium">
                                            <Button variant="ghost" className="w-full text-base justify-start">
                                                <Link href="/dashboard" className="w-full text-start">
                                                    Account
                                                </Link>
                                            </Button>
                                        </li>
                                        <li className="w-full text-base font-medium">
                                            <Button variant="ghost" className="w-full text-base justify-start">
                                                <Link href="/dashboard" className="w-full text-start">
                                                    Settings
                                                </Link>
                                            </Button>
                                        </li>
                                        <li className="w-full text-base font-medium">
                                            <Button variant="ghost" className="w-full text-base justify-start pro" onClick={handlePricingModalOpen}>
                                                Go Pro
                                            </Button>
                                        </li>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-start w-full">
                                        <li className="w-full text-base text-start font-medium">
                                            <SignInButton mode="modal">
                                                <Button variant="ghost" className="w-full text-base justify-start">
                                                    Sign In
                                                </Button>
                                            </SignInButton>
                                        </li>
                                        <li className="w-full text-base font-medium">
                                            <SignUpButton mode="modal">
                                                <Button variant="ghost" className="w-full text-base justify-start">
                                                    Sign Up
                                                </Button>
                                            </SignUpButton>
                                        </li>
                                        <li className="w-full text-base font-medium">
                                            <Button variant="ghost" className="w-full text-base justify-start pro" onClick={handlePricingModalOpen}>
                                                Go Pro
                                            </Button>
                                        </li>
                                    </div>
                                )}
                            </div>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}

export default MobileNavbar
