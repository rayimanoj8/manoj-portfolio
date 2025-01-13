import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/SideBar/AppSidebar.jsx";
import {Outlet} from "react-router";


export default function App() {
    return (
        <>
            <SidebarProvider >
                <AppSideBar />
                    <SidebarTrigger/>
                <main className={'w-full'}>
                    <Outlet />
                </main>
            </SidebarProvider>

        </>
    );
}
