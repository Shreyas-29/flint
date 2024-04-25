"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Icons from "../Icons";
import { Avatar, AvatarFallback } from "../ui/Avatar";

const UserAvatar = () => {

    const { user } = useUser();

    return (
        <Avatar className="w-8 h-8">
            {user?.imageUrl ? (
                <div className="relative aspect-square h-full w-full">
                    <Image
                        src={user?.imageUrl!}
                        alt={user?.username!}
                        referrerPolicy="no-referrer"
                        unoptimized
                        fill
                    />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">
                        {user?.username}
                    </span>
                    <Icons.user className="w-4 h-4" />
                </AvatarFallback>
            )}
        </Avatar>
    );
}

export default UserAvatar;
