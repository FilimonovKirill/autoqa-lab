import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FormsPage from "../pages/FormsPage";
import TablesPage from "../pages/TablesPage";
import ModalsPage from "../pages/ModalsPage";
import AlertsPage from "../pages/AlertsPage";
import WidgetsPage from "../pages/WidgetsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<FormsPage />} />
                <Route path="forms" element={<FormsPage />} />
                <Route path="tables" element={<TablesPage />} />
                <Route path="modals" element={<ModalsPage />} />
                <Route path="alerts" element={<AlertsPage />} />
                <Route path="widgets" element={<WidgetsPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
