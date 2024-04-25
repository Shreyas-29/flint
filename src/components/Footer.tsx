import Link from "next/link";
import React from "react"
import Icons from "./Icons";
import { Button } from "./ui/Button";
import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full px-4 max-w-screen-xl mx-auto sm:px-10 border-0 border-border py-10 md:py-20 bg-neutral-50">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <aside className="flex flex-col items-start justify-start md:max-w-[300px]">
                    <div className="flex items-start">
                        <Icons.icon className="w-7 h-7" />
                        <h3 className="text-lg font-semibold ml-2">
                            Flint
                        </h3>
                    </div>
                    <p className="text-muted-foreground mt-4 text-start">
                        Your all-in-one file conversion tool.
                    </p>
                    <p className="text-neutral-700 mt-4 flex items-center">
                        Made with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 mx-1" /> in India
                    </p>
                </aside>
                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <nav>
                            <h6 className="text-lg font-semibold">
                                Features
                            </h6>
                            <ul className="mt-4 text-muted-foreground">
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Conversion
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Compression
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Editing
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Sharing
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                        <nav className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-lg font-semibold">
                                Tools
                            </h3>
                            <ul className="mt-4 text-muted-foreground">
                                <li className="">
                                    <Button size="default" variant="link" className="px-0">
                                        PDF Converter
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Image Converter
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Video Converter
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Audio Converter
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-lg font-semibold">
                                Resources
                            </h3>
                            <ul className="mt-4 text-muted-foreground">
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Blog
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Case Studies
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Support
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-lg font-semibold">
                                Company
                            </h3>
                            <ul className="mt-4 text-muted-foreground">
                                <li className="">
                                    <Button size="default" variant="link" className="px-0">
                                        About Us
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Privacy Policy
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button size="default" variant="link" className="px-0">
                                        Terms & Conditions
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
