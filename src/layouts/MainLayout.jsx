import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const MainLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1">
                <Header />
                <main className="p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
