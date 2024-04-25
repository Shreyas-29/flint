"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/Button"
import { Ban, CircleCheck, CloudUpload, Download, File, FileImage, FileSymlink, FileWarning, FileX2, Loader, X } from "lucide-react"
import Dropzone, { Accept, useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { acceptedFiles as fileTypes } from "@/constants";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/Select"
import { useFormatModal, usePricingModal } from "@/store";
import { motion, AnimatePresence } from 'framer-motion';
import { getFileSize } from "@/lib/get-file-size";
// import  imageConversion from 'image-conversion';
// import { File } from "buffer";

type ImageFormat = '.jpg' | '.jpeg' | '.png' | '.gif' | '.bmp' | '.webp' | '.ico' | '.tif' | '.tiff' | '.raw' | '.tga';

const accepted_files: { [key: string]: ImageFormat[] } = {
    'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.ico', '.tif', '.tiff', '.raw', '.tga'],
};

type Status = "done" | "in-progress" | "in-que";

type ConvertedFile = {
    file: File;
    status: Status;
}

const DropBox = () => {

    const { setIsOpen } = useFormatModal();

    const { setIsOpen: setIsPricingOpen } = usePricingModal();

    const [files, setFiles] = useState<ConvertedFile[]>([]);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isConverting, setIsConverting] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [outputFormat, setOutputFormat] = useState<ImageFormat>(".jpg");
    const [dropzoneKey, setDropzoneKey] = useState<number>(0);

    const handleDownload = () => { };

    const handleDelete = (file: File) => {
        const newFiles = files.filter((f) => f.file !== file);
        setFiles(newFiles);
    };

    const handleConvert =async (file:File, outputFormat: ImageFormat)=> {
        setIsConverting(true);
        
        try {
             
        } catch (error) {
            
        }
    };

    const handleDrop = (acceptedFiles: File[]) => {
        const convertedFiles: ConvertedFile[] = acceptedFiles.map(file => ({ file, status: 'in-que' }));
        setFiles(convertedFiles);
        console.log(convertedFiles);
    };

    const getFileStatus = (status: Status) => {
        switch (status) {
            case "done":
                return "Done"
            case "in-progress":
                return "In Progress"
            default:
                return "In Que"
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: fileTypes,
        onDrop: (acceptedFiles, fileRejections) => {
            if (acceptedFiles.length > 3) {
                setIsConverting(false);
                toast.error("Upgrade to pro to convert more than 3 files at once.", {
                    duration: 4000,
                    action: {
                        label: "Go Pro",
                        onClick: () => {
                            setIsPricingOpen(true);
                        }
                    },
                });
                return;
            }

            // checking for the image file type
            acceptedFiles.forEach(file => {
                const fileType = file.type;
                const fileExtension = file.name.split('.').pop();

                console.log(fileType, fileExtension);

                if (!fileType.includes("image") || !fileExtension) {
                    setFiles([]);
                    setIsConverting(false);
                    toast.error("Invalid file type. Please upload a valid image file.", {
                        action: {
                            label: "See formats",
                            onClick: () => {
                                setIsOpen(true);
                            }
                        },
                    });
                    return;
                }

                const acceptedFormats = accepted_files['image/*'];
                console.log(acceptedFormats);

                if (!acceptedFormats.includes(`.${fileExtension}` as ImageFormat)) {
                    setFiles([]);
                    setIsConverting(false);
                    toast.error("Invalid file type. Please upload a valid image file.", {
                        action: {
                            label: "See formats",
                            onClick: () => {
                                setIsOpen(true);
                            }
                        },
                    });
                    return;
                }
            });

            const convertedFiles: ConvertedFile[] = acceptedFiles.map(file => ({ file, status: 'in-que' }));

            setFiles(convertedFiles);
            // setIsConverting(true);
            setIsReady(true);
            // handleConvert(files[0].file, outputFormat);
        },
        // maxFiles: 3,
        multiple: true,
        maxSize: 10485760,
        disabled: isConverting,
        onError: () => {
            setIsConverting(false);
            setFiles([]);
            toast.error("An error occurred while uploading files.");
        },
    });

    useEffect(() => {
        setDropzoneKey(prevKey => prevKey + 1);
    }, [files]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-4">
            <div key={dropzoneKey} className="w-full max-w-4xl mx-auto overflow-visible">
                {/* <div className="z-10 flex-col items-center justify-center hidden w-full md:p-6">
                    {selectedFile === null && (
                        <div
                            {...getRootProps()}
                            className={cn(
                                "flex flex-col items-center justify-center w-full p-8 transition-all border-2 border-dashed cursor-pointer bg-blue-50/20 hover:border-primary/40 md:py-12 lg:py-16 xl:py-20 border-card-foreground/30 rounded-xl lg:rounded-2xl h-56 lg:h-72",
                                isEntered && "bg-primary/10 border-primary/40"
                            )}
                        >
                            <input {...getInputProps()} />
                            {isEntered ? (
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
                    {selectedFile && (
                        <div className="flex flex-wrap items-center justify-between w-full px-4 py-3 transition-all duration-300 border rounded-lg border-border lg:rounded-xl">
                            <div className="flex items-center justify-start gap-x-4">
                                <div className="flex items-center justify-center w-10 h-10 text-white rounded-lg bg-gradient-to-b from-blue-500 to-blue-600">
                                    <FileImage className="w-5 h-5" />
                                </div>
                                <h6 className="flex items-center text-base font-medium text-foreground">
                                    Image.png
                                    <span className="ml-2 text-base text-muted-foreground">
                                        (2.4MB)
                                    </span>
                                </h6>
                            </div>
                            <div className="flex items-center justify-center">
                                <Badge
                                    variant={conversionStatus === "done" ? "tertiary" : conversionStatus === "in-progress" ? "secondary" : "default"}
                                    className="flex items-center gap-x-2">
                                    {conversionStatus}
                                    {conversionStatus === "done" ? <CircleCheck className="w-3 h-3" /> : conversionStatus === "in-progress" ? <Loader className="w-3 h-3 animate-spin" /> : <Ban className="w-3 h-3" />}
                                </Badge>
                            </div>
                            <div className="flex items-center justify-end gap-x-4">
                                {conversionStatus === "done" ? (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={handleDownload}
                                        className=""
                                    >
                                        Download
                                        <Download className="w-4 h-4 ml-1.5" />
                                    </Button>
                                ) : (
                                    <Button
                                        size="iconx"
                                        variant="outline"
                                        onClick={handleDelete}
                                        className=""
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div> */}

                <AnimatePresence initial={false}>
                    {files.length ? (
                        <div className="flex flex-col w-full">
                            <ul className="z-10 flex flex-col items-center justify-center w-full gap-y-4 md:gap-y-6 md:py-6">
                                {files && files?.map((file) => (
                                    <motion.li
                                        key={file.file.name}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
                                        className="grid flex-wrap w-full grid-cols-12 px-4 py-3 transition-all duration-300 border rounded-lg border-border lg:rounded-xl md:flex-nowrap"
                                    >
                                        <div className="flex items-center justify-start w-full col-span-6 gap-x-4">
                                            <div className="flex items-center justify-center w-10 h-10 text-white rounded-lg bg-gradient-to-b from-blue-500 to-blue-600">
                                                <FileImage className="w-5 h-5" />
                                            </div>
                                            <h6 className="flex items-center text-base font-medium text-foreground">
                                                <TooltipProvider delayDuration={0}>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            {file.file.name.slice(0, 20)}...
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            {file.file.name}
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <span className="ml-2 text-sm text-muted-foreground">
                                                    ({getFileSize(file.file.size)})
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="flex items-center justify-start col-span-2">
                                            <Badge
                                                variant={file.status === "done" ? "green" : file.status === "in-progress" ? "yellow" : "default"}
                                                className="flex items-center gap-x-2 w-max"
                                            >
                                                {getFileStatus(file.status)}
                                                {file.status === "done" ? <CircleCheck className="w-3 h-3" />
                                                    : file.status === "in-progress" ? <Loader className="w-3 h-3 animate-spin" />
                                                        : <Ban className="w-3 h-3" />}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center col-span-2">
                                            <Select>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="..." />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {accepted_files['image/*'].map((format) => (
                                                        <SelectItem key={format} value={format}>
                                                            {format.split('.')[1]}
                                                        </SelectItem>
                                                    ))}
                                                    {/* <SelectItem value="light">Light</SelectItem>
                                                    <SelectItem value="dark">Dark</SelectItem>
                                                    <SelectItem value="system">System</SelectItem> */}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {/* TODO: add a select trigger here for output format */}
                                        <div className="flex items-center justify-end col-span-2 gap-x-4">
                                            {file.status === "done" ? (
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={handleDownload}
                                                    className=""
                                                >
                                                    Download
                                                    <Download className="w-4 h-4 ml-1.5" />
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="iconx"
                                                    variant="outline"
                                                    onClick={() => handleDelete(file.file)}
                                                    className=""
                                                >
                                                    <X className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="flex items-center justify-end w-full mt-6">
                                {isDone ? (
                                    <Button
                                    >
                                        Download
                                    </Button>
                                ) : (
                                    <Button
                                        disabled={isConverting}
                                    >
                                        Convert
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div
                            {...getRootProps()}
                            className={cn(
                                "flex flex-col items-center justify-center w-full p-8 transition-all border-2 border-dashed cursor-pointer bg-blue-50/20 hover:border-primary/40 md:py-12 lg:py-16 xl:py-20 border-card-foreground/30 rounded-xl lg:rounded-2xl h-56 lg:h-72",
                                isDragActive && "bg-primary/10 border-primary/40"
                            )}
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
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
                </AnimatePresence>

            </div>
        </div>
    )
}

export default DropBox
