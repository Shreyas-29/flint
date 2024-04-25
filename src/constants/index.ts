import { Download, FileSliders, FileUp, LucideIcon, Pickaxe } from "lucide-react";

interface Tool {
    id: number;
    name: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

interface Process {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
}

interface PricingFeature {
    id: number;
    description: string;
    feature: string;
}

interface Plan {
    type: string;
    info: string;
    price: number;
    priceMonthly?: number;
    priceYearly?: number;
    features: string[];
    discountPrice?: number;
}

interface Format {
    id: number;
    name: string;
}

export const tools: Tool[] = [
    {
        id: 1,
        name: "Color Converter",
        description: "Convert between HEX, RGB, and HSL color formats.",
        href: "/tools/color-converter",
        icon: Pickaxe,
    },
    {
        id: 2,
        name: "Audio Converter",
        description: "Convert between different audio formats.",
        href: "/tools/audio-converter",
        icon: Pickaxe,
    },
    {
        id: 3,
        name: "Image Converter",
        description: "Convert between different image formats.",
        href: "/tools/image-converter",
        icon: Pickaxe,
    },
    {
        id: 4,
        name: "Video Converter",
        description: "Convert between different video formats.",
        href: "/tools/video-converter",
        icon: Pickaxe,
    },
    {
        id: 5,
        name: "Document Converter",
        description: "Convert between different file formats.",
        href: "/tools/file-converter",
        icon: Pickaxe,
    },
    {
        id: 6,
        name: "PDF Tools",
        description: "Convert, merge, split, and compress PDF files.",
        href: "/tools/pdf-tools",
        icon: Pickaxe,
    },
];

export const howItWorks: Process[] = [
    {
        id: 1,
        name: "Upload Your File",
        description: "Easily upload your image, video, audio, pdf, or any doc file to start the conversion process.",
        icon: FileUp
    },
    {
        id: 1,
        name: "Select Output Format",
        description: "Choose from a variety of output formats for your converted file, tailored to your needs.",
        icon: FileSliders
    },
    {
        id: 1,
        name: "Download Your File",
        description: "Once the conversion is complete, download your newly formatted file and use it as needed.",
        icon: Download
    },
];

export const pricingFeatures: PricingFeature[] = [
    {
        id: 1,
        description: "Convert as many files as you want without any restrictions.",
        feature: "Unlimited Conversions",
    },
    {
        id: 2,
        description: "Unlock all the features and tools available on Flint.",
        feature: "Unlock All Tools",
    },
    {
        id: 3,
        description: "Get priority support from our team for any issues or queries.",
        feature: "Priority Support",
    },
    {
        id: 4,
        description: "Get access to exclusive features and tools only available to Pro users.",
        feature: "Exclusive Features",
    },
    {
        id: 5,
        description: "Get access to new features and tools before anyone else.",
        feature: "Early Access",
    },
];

export const plans: Plan[] = [
    {
        type: "Free",
        info: "Have access to basic features and tools on Flint.",
        price: 0,
        features: [
            "Ads visible on the page",
            "Basic file conversion",
            "Limited usage",
            "Community support",
        ],
    },
    {
        type: "Pro",
        info: "Get access to all the features and tools available on Flint.",
        price: 199,
        priceMonthly: 125,
        priceYearly: 1999,
        features: [
            "Remove ads",
            "Unlimited file conversion",
            "Priority support",
            "Save files to your account",
            "Dashboard access",
            "Early access to new features",
            "Secure file sharing",
            "Advanced file editing",
            "PDF AI chat",
        ],
        discountPrice: 1499,
    },
];

export const formats: Format[] = [
    {
        id: 1,
        name: "PNG",
    },
    {
        id: 2,
        name: "JPG",
    },
    {
        id: 3,
        name: "WEBP",
    },
    {
        id: 4,
        name: "BMP",
    },
    {
        id: 5,
        name: "GIF",
    },
    {
        id: 6,
        name: "TIFF",
    },
    {
        id: 7,
        name: "SVG",
    },
    {
        id: 8,
        name: "ICO",
    },
    {
        id: 9,
        name: "HEIC",
    },
    {
        id: 10,
        name: "AVIF",
    },
];

interface Extension {
    image: string[];
    video: string[];
    audio: string[];
}


export const extensions: Extension = {
    image: [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "webp",
        "ico",
        "tif",
        "tiff",
        "svg",
        "raw",
        "tga",
    ],
    video: [
        "mp4",
        "m4v",
        "mp4v",
        "3gp",
        "3g2",
        "avi",
        "mov",
        "wmv",
        "mkv",
        "flv",
        "ogv",
        "webm",
        "h264",
        "264",
        "hevc",
        "265",
    ],
    audio: [
        "mp3",
        "wav",
        "ogg",
        "aac",
        "wma",
        "flac",
        "m4a"
    ],
};

export const acceptedFiles = {
    "image/*": [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".bmp",
        ".webp",
        ".ico",
        ".tif",
        ".tiff",
        ".raw",
        ".tga",
    ],
    "audio/*": [],
    "video/*": [],
};
