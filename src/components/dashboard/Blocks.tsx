import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Clock, Download, File } from "lucide-react";
import Icons from "../Icons";

const Blocks = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader className="flex items-start">
                    <CardTitle>
                        Recent Conversions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-3">
                            <Icons.image className="w-6 h-6" />
                            <div className="flex-1">
                                <div className="font-medium">image.jpg</div>
                            </div>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icons.audio className="w-6 h-6" />
                            <div className="flex-1">
                                <div className="font-medium">
                                    me.wav
                                </div>
                            </div>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icons.audio className="w-6 h-6" />
                            <div className="flex-1">
                                <div className="font-medium">
                                    audio.mp3
                                </div>
                            </div>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex items-start">
                    <CardTitle>
                        Recent Downloads
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-3">
                            <Icons.audio className="w-6 h-6" />
                            <div className="flex-1">
                                <div className="font-medium">
                                    audio.mp3
                                </div>
                            </div>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icons.video className="w-6 h-6" />
                            <div className="flex-1">
                                <div className="font-medium">
                                    video.mp4
                                </div>
                            </div>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icons.image className="w-6 h-6" />
                            <div className="flex-1">
                                <div className="font-medium">
                                    image.ico
                                </div>
                            </div>
                            <Button size="sm" variant="outline">
                                Download
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex items-start">
                    <CardTitle>
                        Conversion Stats
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:gap-6">
                        <div className="flex items-center gap-3">
                            <div className="flex-1 flex items-center gap-3">
                                <File className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                <div className="font-medium">Total Conversions</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">1,234</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 flex items-center gap-3">
                                <Clock className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                <div className="font-medium">Avg. Conversion Time</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">5 sec</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 flex items-center gap-3">
                                <Download className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                <div className="font-medium">Total Downloads</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">987</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default Blocks
