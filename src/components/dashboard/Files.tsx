import { Button } from "@/components/ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import Icons from "../Icons";

const Files = () => {
    return (
        <div className="border shadow-sm rounded-lg mt-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">Thumbnail</TableHead>
                        <TableHead>File Name</TableHead>
                        <TableHead className="hidden md:table-cell">Converted From</TableHead>
                        <TableHead className="hidden md:table-cell">Converted To</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Icons.image className="w-6 h-6" />
                        </TableCell>
                        <TableCell className="font-medium">image.jpg</TableCell>
                        <TableCell className="hidden md:table-cell">JPEG</TableCell>
                        <TableCell className="hidden md:table-cell">PNG</TableCell>
                        <TableCell>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Icons.image className="w-6 h-6" />
                        </TableCell>
                        <TableCell className="font-medium">car.jpg</TableCell>
                        <TableCell className="hidden md:table-cell">DOCX</TableCell>
                        <TableCell className="hidden md:table-cell">PDF</TableCell>
                        <TableCell>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Icons.video className="w-6 h-6" />
                        </TableCell>
                        <TableCell className="font-medium">video.mp4</TableCell>
                        <TableCell className="hidden md:table-cell">PPTX</TableCell>
                        <TableCell className="hidden md:table-cell">PDF</TableCell>
                        <TableCell>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
};

export default Files
