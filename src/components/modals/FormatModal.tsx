"use client";

import {
    Dialog,
    DialogContent
} from "@/components/ui/Dialog";
import {
    Drawer,
    DrawerContent
} from "@/components/ui/Drawer";
import { formats, pricingFeatures } from "@/constants";
import { useFormatModal, usePricingModal } from "@/store";
import { X, Zap } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import Icons from "../Icons";
import { Button } from "../ui/Button";

const FormatModal = () => {

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const { isOpen, setIsOpen } = useFormatModal();

    const closeDrawer = () => setIsOpen(false);

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg mx-auto">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-col items-start">
                            <h2 className="text-xl font-semibold text-start">
                                We support the following formats
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Choose from a wide range of image formats to convert your files to.
                            </p>
                        </div>
                        <ul className="flex flex-wrap items-start w-full mt-4 gap-4">
                            {formats.map((format) => (
                                <li
                                    key={format.id}
                                    className="w-max px-2.5 py-1 rounded-md hover:bg-neutral-100 cursor-pointer transition-colors duration-200 ease-in-out border border-border"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {format.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex items-center justify-end ml-auto mt-2">
                            <Button onClick={() => setIsOpen(false)}>
                                Got it
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        )
    };

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent>
                <Button size="icon" variant="ghost" onClick={closeDrawer} className="absolute right-1 top-1">
                    <X className="w-5 h-5" />
                    <span className="sr-only">Close</span>
                </Button>
                <div className="flex flex-col items-start w-full col-span-5 px-4 py-4">
                    <div className="flex flex-col items-start mt-5">
                        <h2 className="text-3xl font-black !leading-tight text-start">
                            We support the following formats
                        </h2>
                        <p className="mt-3 text-lg text-muted-foreground">
                            Choose from a wide range of image formats to convert your files to.
                        </p>
                    </div>
                    <ul className="flex flex-col items-start mt-4 gap-4">
                        {formats.map((format) => (
                            <li
                                key={format.id}
                                className="w-max px-2.5 py-1.5 rounded-sm hover:bg-neutral-100 cursor-pointer transition-colors duration-200 ease-in-out"
                            >
                                <span className="text-sm font-medium text-muted-foreground">
                                    {format.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full mt-8 flex items-center justify-end ml-auto">
                        <Button onClick={() => setIsOpen(false)}>
                            Got it
                        </Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
};

export default FormatModal
