"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/NavigationMenu";
import { tools } from "@/constants";
import { cn } from "@/lib/utils";
import { usePricingModal } from "@/store";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from 'react';
import Icons from "./Icons";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/Button";
import { Skeleton } from "./ui/Skeleton";
import UserAccountNav from "./user/UserAccountNav";

const Navbar = () => {

    const { isLoaded, isSignedIn } = useAuth();

    const { isOpen, setIsOpen } = usePricingModal();

    return (
        <header className="sticky inset-x-0 top-0 z-50 w-full border-b h-14 bg-white/50 backdrop-blur-md border-border">
            <div className="items-center justify-between hidden w-full h-full px-4 mx-auto max-w-screen-xl md:flex sm:px-8">

                <div className="flex items-center gap-x-8">
                    <div className="flex items-center justify-center gap-x-2">
                        <Link href="/" className="flex items-center select-none gap-x-2">
                            <Icons.icon className="w-7 h-7" />
                            <h1 className="text-xl font-bold text-zinc-900">
                                Flint
                            </h1>
                        </Link>
                    </div>

                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Tools
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {tools.map((tool) => (
                                            <ListItem
                                                key={tool.id}
                                                title={tool.name}
                                                href="#"
                                            >
                                                {tool.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center justify-end">
                    {isSignedIn ? (
                        <div className="flex items-center justify-end gap-x-4">
                            <Button size="sm" variant="ghost" className="pro text-rose-500 hover:bg-transparent" onClick={() => setIsOpen(true)}>
                                Go Pro
                            </Button>
                            <div className="h-8 w-[1.5px] bg-neutral-200"></div>
                            {isLoaded ? (
                                <UserAccountNav />
                            ) : (
                                <div className="flex items-center justify-end gap-x-4">
                                    <Skeleton className="w-20 h-8" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center justify-end gap-x-4">
                            <Button size="sm" variant="ghost" className="pro text-rose-500 hover:bg-transparent" onClick={() => setIsOpen(true)}>
                                Go Pro
                            </Button>
                            <div className="h-8 w-[1.5px] bg-neutral-200"></div>
                            {isLoaded ? (
                                <div className="flex items-center gap-x-4">
                                    <SignInButton mode="modal">
                                        <Button size="sm" variant="ghost">
                                            Sign in
                                        </Button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <Button size="sm">
                                            Sign up
                                        </Button>
                                    </SignUpButton>
                                </div>
                            ) : (
                                <div className="flex items-center justify-end gap-x-4">
                                    <Skeleton className="w-20 h-8" />
                                    <Skeleton className="w-20 h-8" />
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>

            <MobileNavbar />

        </header>
    )
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
});
ListItem.displayName = "ListItem";

export default Navbar
