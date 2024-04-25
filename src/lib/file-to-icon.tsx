import { Icons } from "@/components";

export const fileToIcon = (fileType: string) => {
    if (fileType.includes("video")) return <Icons.video className="w-6 h-6" />;
    if (fileType.includes("audio")) return <Icons.audio className="w-6 h-6" />;
    if (fileType.includes("image")) return <Icons.image className="w-6 h-6" />;
    if (fileType.includes("text")) return <Icons.text className="w-6 h-6" />;
    else return <Icons.doc className="w-6 h-6" />;
};
