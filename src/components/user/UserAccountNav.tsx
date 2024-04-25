'use client';

import Link from "next/link";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/DropdownMenu";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

const UserAccountNav = () => {

    const { signOut, user } = useClerk();

    const handleSignOut = (e: any) => {
        e.preventDefault();

        try {
            signOut()
                .then(() => {
                    setTimeout(() => {
                        toast.success("Logout successful! See you next time.");
                    }, 1000);
                })
        } catch (error) {
            console.log("Error signing out", error);
            toast.error("Oops! Unable to sign out. Please try again.");
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
                <UserAvatar />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white" align="end">
                <div className="flex items-center justify-normal gap-2 px-3 py-2 rounded-lg">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user?.username &&
                            <p className="font-medium capitalize">
                                {user.username}
                            </p>
                        }
                        {user?.emailAddresses &&
                            <p className="w-48 text-sm text-zinc-700">
                                {user.primaryEmailAddress?.emailAddress}
                            </p>
                        }
                    </div>
                </div>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href='/account'>
                        Account
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href='/settings'>
                        Settings
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={handleSignOut} className="cursor-pointer">
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserAccountNav;
