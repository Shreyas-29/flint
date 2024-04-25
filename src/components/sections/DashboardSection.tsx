import Blocks from "../dashboard/Blocks";
import Files from "../dashboard/Files";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";

const DashboardSection = () => {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            
            <Sidebar />

            <div className="flex flex-col w-full">
                
                <Header />

                <main className="flex-1 gap-4 p-4 md:gap-8 w-full">
                    
                    <Blocks />
                    
                    <Files />

                </main>
            </div>
        </div>
    )
};

export default DashboardSection
