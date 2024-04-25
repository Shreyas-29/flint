import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

export const loadFfmpeg = async (): Promise<FFmpeg> => {
    const ffmpeg = new FFmpeg();
    const basePath = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";

    await ffmpeg.load({
        coreURL: await toBlobURL(`${basePath}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${basePath}/ffmpeg-core.wasm`, "application/wasm"),
    });

    return ffmpeg;
};
