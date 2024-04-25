import { ChevronRight, Files, FileText, Folders, Settings2, Zap } from "lucide-react";
import Icons from "./Icons";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

const Features = () => {
    return (
        <div className="py-12 md:py-16 w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <Badge>FEATURES</Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 text-center mt-5">
                    The ultimate file converter
                </h2>
                <p className="text-sm md:text-base text-center max-w-xl mx-auto mt-4 text-muted-foreground">
                    Convert files from one format to another with ease. Experience efficiency and reliability every step of the way.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 features">
                <div className="md:col-span-2 w-full border border-border p-4 md:p-6 lg:p-8 flex items-center justify-start md:justify-between">
                    <div className="flex flex-col items-start max-w-xs">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                            <FileText strokeWidth={2} className="w-6 h-6 text-primary" />
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mt-4 text-neutral-800 flex items-center">
                            Smart format detection
                            <span className="text-2xs h-5 flex items-center font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-[0px] ml-2">
                                NEW
                            </span>
                        </h5>
                        <p className="text-sm text-muted-foreground mt-2">
                            Upload any file and our converter will automatically detect the format and convert it.
                        </p>
                        <Button size="sm" variant="default" className="mt-4">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                    <div className="hidden md:flex items-center justify-end w-auto rounded-lg shadow-feature shadow-muted-foreground/10">
                        <Icons.feature className="w-full h-auto" />
                    </div>
                </div>
                <div className="w-full md:border-l-0 border border-border p-4 md:p-6 lg:p-8 flex items-center justify-start">
                    <div className="flex flex-col items-start max-w-sm">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                            <Files strokeWidth={2} className="w-6 h-6 text-primary" />
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mt-4 text-neutral-800 flex items-center">
                            Multi-Format Support
                        </h5>
                        <p className="text-sm text-muted-foreground mt-2">
                            Convert files from one format to another with ease. Experience efficiency and reliability every step of the way.
                        </p>
                        <Button size="sm" variant="outline" className="mt-4">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
                <div className="w-full border md:border-t-0 border-border p-4 md:p-6 lg:p-8 flex items-center justify-start">
                    <div className="flex flex-col items-start max-w-sm">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                            <Zap strokeWidth={2} className="w-6 h-6 text-primary" />
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mt-4 text-neutral-800 flex items-center">
                            Instant Conversion
                        </h5>
                        <p className="text-sm text-muted-foreground mt-2">
                            Converts files quickly and seamlessly, saving you valuable time and effort.
                        </p>
                        <Button size="sm" variant="outline" className="mt-4">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
                <div className="w-full border md:border-t-0 md:border-l-0 border-border p-4 md:p-6 lg:p-8 flex items-center justify-start">
                    <div className="flex flex-col items-start max-w-sm">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                            <Settings2 strokeWidth={2} className="w-6 h-6 text-primary" />
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mt-4 text-neutral-800 flex items-center">
                            Customization Options
                        </h5>
                        <p className="text-sm text-muted-foreground mt-2">
                            Offers customizable settings for output format, quality, and more, giving you control over your conversions.
                        </p>
                        <Button size="sm" variant="outline" className="mt-4">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
                <div className="w-full border md:border-t-0 md:border-l-0 border-border p-4 md:p-6 lg:p-8 flex items-center justify-start">
                    <div className="flex flex-col items-start max-w-sm">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                            <Folders strokeWidth={2} className="w-6 h-6 text-primary" />
                        </div>
                        <h5 className="text-lg md:text-xl font-semibold mt-4 text-neutral-800 flex items-center">
                            Batch Processing
                        </h5>
                        <p className="text-sm text-muted-foreground mt-2">
                            Convert multiple files simultaneously, saving you time and effort. Supports batch processing for all file types.
                        </p>
                        <Button size="sm" variant="outline" className="mt-4">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Features
