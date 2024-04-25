import React from 'react'

const Loader = () => {
    return (
        <div className="absolute inset-0 w-full h-full bg-background flex items-center justify-center z-[1000]">
            <div className="loader"></div>
        </div>
    )
}

export default Loader
