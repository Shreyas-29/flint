"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { extensions, acceptedFiles as fileTypes } from "@/constants";
import { convert } from "@/lib/convert";
import { fileToIcon } from "@/lib/file-to-icon";
import { getFileSize } from "@/lib/get-file-size";
import { loadFfmpeg } from "@/lib/load-ffmpeg";
import { cn } from "@/lib/utils";
import { useFormatModal } from "@/store";
import { Action } from "@/types";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { motion } from 'framer-motion';
import { Ban, CircleCheck, CloudUpload, Download, File, FileSymlink, History, Loader, RefreshCcw, RotateCw, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDropzone, { Accept } from "react-dropzone";
import { toast } from "sonner";

const DropZone = () => {

    const { user } = useUser();

    const ffmpegRef = useRef<any>(null);

    const { isOpen, setIsOpen } = useFormatModal();

    const [isEnter, setIsEnter] = useState<boolean>(false);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isConverting, setIsConverting] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [files, setFiles] = useState(Array<File>());
    const [defaultValues, setDefaultValues] = useState<string>("video");
    const [output, setOutput] = useState<string>("...");
    const [actions, setActions] = useState<Action[]>([]);

    const handleReset = () => {
        setFiles([]);
        setActions([]);
        setIsDone(false);
        setIsDone(false);
        setIsLoaded(false);
        setIsError(false);
        setIsConverting(false);
    };

    const handleDownload = (action: Action) => {
        if (action.isError) {
            toast.error("An error occurred while converting the file. Please try again");
            return;
        }
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = action.url;
        a.download = action.output;

        document.body.appendChild(a);
        a.click();

        URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
    };

    const handleDownloadAll = () => {
        for (let action of actions) {
            if (action.isError) {
                toast.error("An error occurred while converting the file. Please try again");
                return;
            } else {
                handleDownload(action);
            }
        }
    };

    const handleConvert = async () => {
        let tmp_actions = actions.map((elt) => ({
            ...elt,
            is_converting: true,
        }));
        setActions(tmp_actions);
        setIsConverting(true);
        for (let action of tmp_actions) {
            try {
                const { url, output } = await convert(ffmpegRef.current!, action);
                tmp_actions = tmp_actions.map((elt) =>
                    elt === action
                        ? {
                            ...elt,
                            isConverted: true,
                            isConverting: false,
                            url,
                            output,
                        }
                        : elt
                );
                setActions(tmp_actions);
            } catch (err) {
                tmp_actions = tmp_actions.map((elt) =>
                    elt === action
                        ? {
                            ...elt,
                            isConverted: false,
                            isConverting: false,
                            isError: true,
                        }
                        : elt
                );
                setActions(tmp_actions);
                setIsError(true);
            }
        }
        setIsDone(true);
        setIsConverting(false);
    };

    const handleDrop = (data: File[]) => {
        setFiles(data);
        setIsEnter(false);

        const tmp: Action[] = [];

        data.forEach((file: any) => {
            tmp.push({
                fileName: file.name,
                fileSize: file.size,
                from: file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2),
                to: null,
                fileType: file.type,
                file,
                isConverted: false,
                isConverting: false,
                isError: false,
            });
        });
        setActions(tmp);
    };

    const handleUpdateAction = (fileName: string, to: string) => {
        setActions(
            actions.map((action) => {
                if (action.fileName === fileName) {
                    return {
                        ...action,
                        to,
                    }
                }

                return action;
            }),
        );
    };

    const handleCheck = useCallback(() => {
        let temp = true;
        actions.forEach((action) => {
            if (!action.to) {
                temp = false;
            }
            setIsReady(temp);
        });
    }, [actions]);

    const handleDelete = (action: Action) => {
        setActions(actions.filter((elt) => elt !== action));
        setFiles(files.filter((elt) => elt.name !== action.fileName));
    };

    const handleOnLoad = async () => {
        const res = await loadFfmpeg();
        ffmpegRef.current! = res;
        setIsLoaded(true);
    };

    const handleFormatChange = (fileName: string, value: string) => {
        if (extensions.audio.includes(value)) {
            setDefaultValues("audio");
        } else if (extensions.video.includes(value)) {
            setDefaultValues("video");
        }
        setOutput(value);
        handleUpdateAction(fileName, value);
    };

    useEffect(() => {
        handleOnLoad();
    }, []);

    useEffect(() => {
        if (!actions.length) {
            setFiles([]);
            setIsDone(false);
            setIsReady(false);
            setIsConverting(false);
        } else {
            handleCheck();
        }
    }, [actions, handleCheck]);


    if (actions.length) {
        return (
            <div className="flex flex-col w-full">
                <ul className="z-10 flex flex-col items-center justify-center w-full gap-y-4 md:gap-y-6 md:py-6">
                    {actions?.map((action: Action) => {
                        return (
                            !isLoaded ? (
                                <div className="flex items-center justify-center w-full h-40 bg-white border rounded-lg border-border">
                                    <Loader className="w-6 h-6 animate-spin" />
                                </div>
                            ) : (
                                <motion.li
                                    key={action.fileName}
                                    transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
                                    className="flex items-center gap-4 md:gap-0 md:grid flex-wrap w-full grid-cols-12 px-4 py-3 transition-all duration-300 border rounded-lg border-border lg:rounded-xl md:flex-nowrap"
                                >
                                    <div className="flex items-center justify-start w-full col-span-6 gap-x-2">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg">
                                            {fileToIcon(action.fileType)}
                                        </div>
                                        <h6 className="flex items-center text-base font-medium text-foreground">
                                            <TooltipProvider delayDuration={0}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        {action.fileName.slice(0, 20)}...
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        {action.fileName}
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            <span className="ml-2 text-sm text-muted-foreground">
                                                ({getFileSize(action.fileSize)})
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="flex items-center justify-start col-span-2">
                                        {/* <Badge
                                    variant={action.isError ? "destructive" : action.isConverting ? "yellow" : action.isConverted ? "green" : "default"}
                                    className="flex items-center gap-x-2 w-max"
                                >
                                    {action.isConverted ? "Converted" : action.isConverting ? "Converting" : action.isError ? "Error" : "Pending"}
                                    {action.isConverted ? <CircleCheck className="w-3.5 h-3.5" />
                                        : action.isConverting ? <Loader className="w-3.5 h-3.5 animate-spin" />
                                            : action.isError ? <Ban className="w-3.5 h-3.5" /> : <History className="w-3.5 h-3.5" />}
                                </Badge> */}
                                        {action.isConverted ? (
                                            <Badge variant="green" className="gap-x-2 w-max">
                                                Converted
                                                <CircleCheck className="w-3.5 h-3.5" />
                                            </Badge>
                                        ) : action.isConverting ? (
                                            <Badge variant="yellow" className="gap-x-2 w-max">
                                                Converting
                                                <Loader className="w-3.5 h-3.5 animate-spin" />
                                            </Badge>
                                        ) : action.isError ? (
                                            <Badge variant="destructive" className="gap-x-2 w-max">
                                                Error
                                                <Ban className="w-3.5 h-3.5" />
                                            </Badge>
                                        ) : (
                                            <Badge variant="default" className="gap-x-2 w-max">
                                                Pending
                                                <History className="w-3.5 h-3.5" />
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex items-center col-span-2">
                                        {!action.isConverted && (
                                            <Select
                                                value={output}
                                                onValueChange={(value) => handleFormatChange(action.fileName, value)}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {action.fileType.includes("image") && (
                                                        <div className="grid grid-cols-2 gap-2 w-fit">
                                                            {extensions.image.map((ele) => (
                                                                <div key={ele} className="col-span-1 text-center">
                                                                    <SelectItem value={ele}>
                                                                        {ele}
                                                                    </SelectItem>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {action.fileType.includes("video") && (
                                                        <div className="grid grid-cols-2 gap-2 w-fit">
                                                            {extensions.video.map((ele) => (
                                                                <div key={ele} className="col-span-1 text-center">
                                                                    <SelectItem value={ele}>
                                                                        {ele}
                                                                    </SelectItem>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {action.fileType.includes("audio") && (
                                                        <div className="grid grid-cols-2 gap-2 w-fit">
                                                            {extensions.audio.map((ele) => (
                                                                <div key={ele} className="col-span-1 text-center">
                                                                    <SelectItem value={ele}>
                                                                        {ele}
                                                                    </SelectItem>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-end col-span-2 gap-x-4">
                                        {action.isConverted ? (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleDownload(action)}
                                                className=""
                                            >
                                                Download
                                                <Download className="w-4 h-4 ml-1.5" />
                                            </Button>
                                        ) : (
                                            <Button
                                                size="iconx"
                                                variant="outline"
                                                onClick={() => handleDelete(action)}
                                                className=""
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        )}
                                    </div>
                                </motion.li>
                            )
                        )
                    })}
                </ul>
                <div className="flex items-center justify-end w-full mt-6">
                    {isError ? (
                        <div className="flex items-center">
                            <Button variant="outline" className="gap-x-2 w-max" onClick={handleReset}>
                                Try again
                                <RotateCw className="w-3.5 h-3.5" />
                            </Button>
                        </div>
                    ) :
                        isDone ? (
                            <div className="flex flex-col-reverse md:flex-row items-end md:items-center justify-end md:justify-between w-full gap-4 md:gap-0">
                                <div className="flex items-center w-full md:w-auto">
                                    <div className="px-4 py-1 rounded-md bg-neutral-100 flex items-center justify-between md:justify-start w-full md:w-max gap-x-4">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {user ? "Check your dashboard for more" : "Want to save your files?"}
                                        </p>
                                        {user ? (
                                            <Button size="sm" variant="outline" className="text-sm" asChild>
                                                <Link href="/dashboard">
                                                    Dashboard
                                                </Link>
                                            </Button>
                                        ) : (
                                            <SignUpButton mode="modal">
                                                <Button size="sm" variant="outline" className="text-sm">
                                                    Sign Up
                                                </Button>
                                            </SignUpButton>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full items-center justify-end gap-4">
                                    <Button
                                        variant="outline"
                                        onClick={handleReset}
                                        className="w-full md:w-max"
                                    >
                                        Convert More
                                    </Button>
                                    <Button
                                        onClick={handleDownloadAll}
                                        className="w-full md:w-max"
                                    >
                                        {actions.length > 1 ? "Download All" : "Download"}
                                        <Download className="w-4 h-4 ml-1.5" />
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Button
                                disabled={isConverting || !isReady}
                                onClick={handleConvert}
                                className="w-36"
                            >
                                {isConverting ? (
                                    <Loader className="w-4 h-4 animate-spin" />
                                ) : (
                                    <>
                                        <RefreshCcw strokeWidth={2.5} className="w-4 h-4 mr-1.5" />
                                        Convert
                                    </>
                                )}
                            </Button>
                        )
                    }
                </div>
            </div>
        )
    };

    return (
        <ReactDropzone
            onDrop={handleDrop}
            onDragEnter={() => setIsEnter(true)}
            onDragLeave={() => setIsEnter(false)}
            accept={fileTypes as Accept}
            onDropRejected={() => {
                setIsEnter(false);
                toast.warning("Invalid file type", {
                    description: "Please upload a valid file type",
                    action: {
                        label: "See formats",
                        onClick: () => {
                            setIsOpen(true);
                        },
                    }
                })
            }}
        >
            {({ getRootProps, getInputProps }) => (
                <div
                    {...getRootProps()}
                    className={cn(
                        "flex flex-col items-center justify-center w-full p-8 transition-all border-2 border-dashed cursor-pointer bg-blue-50/20 hover:border-primary/40 md:py-12 lg:py-16 xl:py-20 border-card-foreground/30 rounded-xl lg:rounded-2xl h-56 lg:h-72",
                        isEnter && "bg-primary/10 border-primary/40"
                    )}
                >
                    <input {...getInputProps()} />
                    {isEnter ? (
                        <div className="flex flex-col items-center justify-center">
                            <FileSymlink className="w-8 h-8 text-primary" />
                            <h4 className="mt-4 text-lg font-medium text-foreground">
                                Yes, right here
                            </h4>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-gradient-to-b from-blue-500 to-blue-600">
                                <CloudUpload strokeWidth={2} className="w-6 h-6" />
                            </div>
                            <Button size="sm" variant="outline" className="mt-4">
                                <File className="w-4 h-4 mr-2" />
                                Browse files
                            </Button>
                            <p className="mt-2 text-sm text-center text-neutral-600">
                                or drag and drop files here
                            </p>
                        </div>
                    )}
                </div>
            )}
        </ReactDropzone>
    )
};

export default DropZone
