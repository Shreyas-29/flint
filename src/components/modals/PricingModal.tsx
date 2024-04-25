"use client";

import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { pricingFeatures } from "@/constants";
import { usePricingModal } from "@/store";
import { X, Zap } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import Icons from "../Icons";
import { Button } from "../ui/Button";

const PricingModal = () => {

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const { isOpen, setIsOpen } = usePricingModal();

    const closeDrawer = () => setIsOpen(false);

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl mx-auto">
                    <div className="grid w-full grid-cols-12 gap-4">
                        <div className="relative w-full h-full col-span-7 rounded-2xl overflow-hidden">
                            <div className="w-full h-full rounded-2xl">
                                <div className="flex flex-col w-full h-full rounded-2xl max-h-[510px]">
                                    <Icons.pricing className="w-full h-full rounded-2xl bg-transparent z-20" />
                                </div>
                                <div className="absolute bg-tertiary w-20 h-20 bottom-0 left-0 -z-1 blur-[5rem]"></div>
                                <div className="absolute bg-tertiary w-20 h-20 top-0 right-0 -z-1 blur-[5rem]"></div>
                                <div className="absolute inset-0 flex items-center justify-center h-full">
                                    <div className="flex items-center justify-center w-36 h-36 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-tertiary/20"></div>
                                        <Icons.flower className="w-full h-full animate-rotate" />
                                        <h4 className="text-2xl md:text-3xl font-bold text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                                            Pro
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full col-span-5 px-2">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl font-black !leading-tight text-start">
                                    Go Pro to unlock all the features.
                                </h2>
                                <p className="mt-3 text-lg text-muted-foreground">
                                    Level up your workflow with unlimited file conversions and more.
                                </p>
                            </div>
                            <ul className="flex flex-col items-start mt-4 gap-y-4">
                                {pricingFeatures.map((feature) => (
                                    <li
                                        key={feature.id}
                                        className="flex items-start justify-start w-full gap-x-2"
                                    >
                                        <div className="flex items-center justify-center p-1 mt-1 rounded-full bg-tertiary/10">
                                            <Zap className="w-3 h-3 fill-tertiary text-tertiary" />
                                        </div>
                                        <p className="flex-1 ml-2 text-sm font-medium text-muted-foreground text-start">
                                            {feature.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full mt-8">
                                <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/pricing" className="w-full">
                                        Upgrade for just ₹99/month
                                    </Link>
                                </Button>
                            </div>
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
                            Go Pro to unlock all the features.
                        </h2>
                        <p className="mt-3 text-lg text-muted-foreground">
                            Level up your workflow with unlimited file conversions and more.
                        </p>
                    </div>
                    <ul className="flex flex-col items-start mt-4 gap-y-4">
                        {pricingFeatures.map((feature) => (
                            <li
                                key={feature.id}
                                className="flex items-start justify-start w-full gap-x-2"
                            >
                                <div className="flex items-center justify-center p-1 mt-1 rounded-full bg-tertiary/10">
                                    <Zap className="w-3 h-3 fill-tertiary text-tertiary" />
                                </div>
                                <p className="flex-1 ml-2 text-base font-medium text-neutral-600 text-start">
                                    {feature.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full mt-8">
                        <Button size="lg" className="w-full text-base">
                            <Link href="/pricing" className="w-full">
                                Upgrade for just ₹99/month
                            </Link>
                        </Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
};

export default PricingModal
