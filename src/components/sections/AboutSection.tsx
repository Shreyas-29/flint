import React from 'react'
import Icons from "../Icons";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto">

            <div className="flex flex-col items-center justify-center text-center py-10 lg:pt-20 relative max-w-3xl mx-auto">
                <div className="flex items-center justify-center w-24 md:w-32 h-24 md:h-32 relative">
                    <Icons.flower className="w-24 md:w-32 h-24 md:h-32 animate-rotate" />
                    <h4 className="text-2xl md:text-3xl font-bold text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                        NEW
                    </h4>
                </div>
                <h1 className="text-3xl font-bold mt-8 lg:text-5xl lg:leading-tight text-neutral-950">
                    About Us
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground">
                    Welcome to Flint, the ultimate file format conversion tool. This is a simple tool that allows you to convert files from one format to another. We support a wide range of file formats, including documents, images, audio, video, and more.
                </p>
                <Image
                    src="/about.svg"
                    alt="About us"
                    width={50}
                    height={50}
                    className="w-80 h-autp md:h-auto object-cover mt-6"
                />
            </div>

            <div className="w-full flex flex-col text-base md:text-lg text-muted-foreground my-8 gap-y-6 md:gap-y-10">
                <p>
                    🔄 Welcome to our platform! We specialize in providing easy and efficient file format conversion services for all your needs.
                </p>
                <p>
                    🖼️ With our platform, you can easily convert images, audio files, and videos to various formats, including JPG, PNG, MP3, WAV, MP4, and more. Whether you&apos;re a content creator, developer, or business owner, our conversion tools are designed to streamline your workflow and save you time.
                </p>
                <p>
                    🚀 One of the key features of our platform is unlimited conversions. You can convert as many files as you need, without any restrictions. Whether you&apos;re converting one file or one hundred, our platform can handle it all.
                </p>
                <p>
                    🛠️ Our platform also offers fast and reliable conversion services. Simply upload your files, select the desired output format, and let our platform do the rest. You&apos;ll receive your converted files quickly and securely, ready to use in your projects.
                </p>
                <p>
                    🚀 Whether you&apos;re a professional photographer, musician, filmmaker, or business owner, our platform has everything you need to take your projects to the next level. Sign up today and experience the power of seamless file format conversion.
                </p>
                <p>
                    🌟 Let us help you unleash the full potential of your digital projects! Get started with our platform today and transform the way you work with files. 💼
                </p>
                <p className="pt-4">
                    Join the revolution of content creators, professionals, and enthusiasts who are transforming the way they work with multimedia. Get started today and let your creativity shine like never before!
                </p>
            </div>

        </div>
    )
};

export default AboutSection
