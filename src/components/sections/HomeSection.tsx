import DropZone from "../utils/DropZone";

const HomeSection = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto flex-1 flex-col flex h-full">

            <div className="flex flex-col flex-1 h-full w-full">
                <div className="relative flex flex-col items-center justify-center w-full max-w-2xl py-10 mx-auto text-center lg:pt-20">
                    <h1 className="text-3xl font-bold lg:text-5xl lg:leading-tight text-neutral-950">
                        Free Online File Converter
                    </h1>
                    <p className="mt-6 text-base text-muted-foreground">
                        Flint is an online file converter. We support nearly all audio, video, document, ebook,
                        image, and presentation formats. To get started, use the button below
                        and select files to convert from your computer.
                    </p>
                </div>
                <DropZone />
            </div>

        </div>
    )
};

export default HomeSection
