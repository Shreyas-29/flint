import React from 'react'
import Icons from "../Icons"
import Pricing from "../Pricing"

const PricingSection = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto">

            <div className="flex flex-col items-center justify-center text-center py-10 lg:pt-20 relative max-w-2xl mx-auto">
                <div className="flex items-center justify-center w-24 md:w-32 h-24 md:h-32 relative">
                    <Icons.flower className="w-24 md:w-32 h-24 md:h-32 animate-rotate" />
                    <h4 className="text-2xl md:text-3xl font-bold text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">
                        Pro
                    </h4>
                </div>
                <h1 className="text-3xl font-bold mt-8 lg:text-5xl lg:leading-tight text-neutral-950">
                    Get Pro
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg">
                    Unlock the full potential of Flint with a Pro subscription. Enjoy unlimited file conversions, priority support, and more.
                </p>
            </div>

            <div>
                <Pricing />
            </div>

        </div>
    )
}

export default PricingSection
