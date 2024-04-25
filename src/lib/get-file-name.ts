export const getFileName = (fileName: string): string => {
    const maxLength = 18;

    if (fileName.length > maxLength) {
        const fileNameParts = fileName.split('.').slice(0, -1).join('.');

        const fileExtension = fileName.split('.').pop();

        const charsToKeep = maxLength - (fileNameParts.length + fileExtension?.length! + 3);

        const fileNameShortened = fileNameParts.substring(0, maxLength - fileExtension?.length! - 3,) + "..." + fileNameParts.slice(-charsToKeep) + "." + fileExtension;

        return fileNameShortened;
    } else {
        return fileName.trim();
    }
};
