export type Action = {
    file: File | any;
    fileName: string;
    fileSize: number;
    from: string;
    to: String | null;
    fileType: string;
    isConverting?: boolean;
    isConverted?: boolean;
    isError?: boolean;
    url?: any;
    output?: any;
};
