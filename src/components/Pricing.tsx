"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { plans } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useState } from 'react';
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

type Tab = "monthly" | "yearly";

const Pricing = () => {

    const MotionTabTrigger = motion(TabsTrigger);

    const [activeTab, setActiveTab] = useState<Tab>("monthly");

    return (
        <div className="flex flex-col py-4 items-center justify-center w-full mb-40">
            <div className="hidden flex-col items-center justify-center">
                <Badge>PRICING</Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 text-center mt-5">
                    Simple and transparent pricing
                </h2>
                <p className="text-sm md:text-base text-center max-w-md mx-auto mt-4 text-muted-foreground">
                    Start for free, upgrade as you grow. Our pricing is designed to scale with your business.
                </p>
            </div>
            <Tabs defaultValue="monthly" className="w-full flex flex-col items-center justify-center">

                <TabsList>
                    <MotionTabTrigger
                        value="monthly"
                        onClick={() => setActiveTab("monthly")}
                        className="relative"
                    >
                        {activeTab === "monthly" && (
                            <motion.div
                                layoutId="active-tab-indicator"
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                }}
                                className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                            />
                        )}
                        <span className="z-20">
                            monthly
                        </span>
                    </MotionTabTrigger>
                    <MotionTabTrigger
                        value="yearly"
                        onClick={() => setActiveTab("yearly")}
                        className="relative"
                    >
                        {activeTab === "yearly" && (
                            <motion.div
                                layoutId="active-tab-indicator"
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                }}
                                className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                            />
                        )}
                        <span className="z-20">
                            yearly
                        </span>
                    </MotionTabTrigger>
                </TabsList>

                <TabsContent value="monthly" className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto max-w-4xl">
                    {plans.map((plan) => (
                        <div key={plan.type} className="flex flex-col items-start w-full border border-border p-5 md:p-8 lg:p-10 rounded-xl lg:rounded-2xl">
                            <h3 className="text-lg lg:text-2xl xl:text-3xl font-semibold lg:font-bold text-foreground">
                                {plan.type}
                            </h3>
                            <p className="text-muted-foreground mt-4">
                                {plan.info}
                            </p>
                            <h4 className="text-2xl lg:text-4xl font-bold mt-6">
                                ₹{plan.price}
                            </h4>
                            <p className="text-sm mt-2 text-muted-foreground">
                                {plan.type === "Pro" ? "per month, billed monthly" : "per month"}
                            </p>
                            <ul className="mt-6 space-y-4 w-full">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-x-4 justify-start text-muted-foreground">
                                        <div className={cn(
                                            "flex items-center justify-center p-1 rounded-full",
                                            plan.type === "Pro" ? "bg-tertiary/10" : "bg-foreground/10"
                                        )}>
                                            <Zap
                                                className={cn(
                                                    "w-3.5 h-3.5",
                                                    plan.type === "Pro" ? "fill-tertiary text-tertiary" : "fill-muted-foreground text-muted-foreground"
                                                )}
                                            />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full mt-auto">
                                <Button
                                    variant={plan.type === "Pro" ? "default" : "subtle"}
                                    className={cn(
                                        "mt-8 w-full",
                                        plan.type === "Pro" && "bg-tertiary hover:bg-tertiary/90"
                                    )}
                                >
                                    {plan.type === "Pro" ? "Upgrade to Pro" : "Start for free"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="yearly" className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto max-w-4xl">
                    {plans.map((plan) => (
                        <div key={plan.type} className="flex flex-col items-start w-full border border-border p-5 md:p-8 lg:p-10 rounded-xl lg:rounded-2xl">
                            <h3 className="text-lg lg:text-2xl xl:text-3xl font-semibold lg:font-bold text-foreground">
                                {plan.type}
                            </h3>
                            <p className="text-muted-foreground mt-4">
                                {plan.info}
                            </p>
                            <h4 className="text-2xl lg:text-4xl font-bold mt-6">
                                ₹{plan.type === "Pro" ? plan.discountPrice : plan.price}
                                {plan.type === "Pro" && <span className="text-sm text-muted-foreground line-through ml-2">₹{plan.priceYearly}</span>}
                            </h4>
                            <p className="text-sm mt-2 text-muted-foreground">
                                {/* {activeTab === "yearly" ? `₹${plan.priceMonthly} per month, billed yearly` : "per month"} */}
                                {plan.type === "Free" && "per month"}
                                {plan.type === "Pro" && `₹${plan.priceMonthly} per month, billed yearly`}
                            </p>
                            <ul className="mt-6 space-y-4 w-full">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-x-4 justify-start text-muted-foreground">
                                        <div className={cn(
                                            "flex items-center justify-center p-1 rounded-full",
                                            plan.type === "Pro" ? "bg-tertiary/10" : "bg-foreground/10"
                                        )}>
                                            <Zap
                                                className={cn(
                                                    "w-3.5 h-3.5",
                                                    plan.type === "Pro" ? "fill-tertiary text-tertiary" : "fill-muted-foreground text-muted-foreground"
                                                )}
                                            />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full mt-auto">
                                <Button
                                    variant={plan.type === "Pro" ? "default" : "subtle"}
                                    className={cn(
                                        "mt-8 w-full",
                                        plan.type === "Pro" && "bg-tertiary hover:bg-tertiary/90"
                                    )}
                                >
                                    {plan.type === "Pro" ? "Upgrade to Pro" : "Start for free"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    )
};

export default Pricing
