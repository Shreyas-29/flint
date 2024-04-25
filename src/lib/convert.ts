import { Action } from "@/types";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

const getFileExtension = (fileName: string) => {
    const regex = /(?:\.([^.]+))?$/;
    const match = regex.exec(fileName);
    if (match && match[1]) {
        return match[1];
    }
    return "";
};

const removeFileExtension = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1) {
        return fileName.slice(0, lastDotIndex);
    }
    return fileName;
};

export const convert = async (ffmpeg: FFmpeg, action: Action) => { 
    const { file, to, fileName, fileType } = action;
    const input = getFileExtension(fileName);
    const output = removeFileExtension(fileName) + '.' + to;
    ffmpeg.writeFile(input, await fetchFile(file));

    // FFMEG COMMANDS
    let ffmpeg_cmd: any = [];
    // 3gp video
    if (to === '3gp')
        ffmpeg_cmd = [
            '-i',
            input,
            '-r',
            '20',
            '-s',
            '352x288',
            '-vb',
            '400k',
            '-acodec',
            'aac',
            '-strict',
            'experimental',
            '-ac',
            '1',
            '-ar',
            '8000',
            '-ab',
            '24k',
            output,
        ];
    else ffmpeg_cmd = ['-i', input, output];

    // execute cmd
    await ffmpeg.exec(ffmpeg_cmd);

    const data = (await ffmpeg.readFile(output)) as any;
    const blob = new Blob([data], { type: fileType.split('/')[0] });
    const url = URL.createObjectURL(blob);
    return { url, output };
};