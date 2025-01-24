import AppSideBar from "@/components/SideBar/AppSidebar.jsx";
import { Button } from "@/components/ui/button.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider, useTheme } from "@/context/theme.js";
import { Moon, Sun } from 'lucide-react';
import { Outlet } from "react-router";


export default function App() {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <AppSideBar />
                <SidebarTrigger/>
                <main className={'w-full'}>
                    <nav className='text-lg font-semibold flex justify-between'>
                        Goto
                        <ThemeToggle />
                    </nav>
                    <Outlet/>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    );
}

// You can create a separate component for the theme toggle
function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return theme === 'dark' ? (
        <Button variant='ghost' onClick={toggleTheme}><Sun/></Button>
    ) : (
        <Button variant='ghost' onClick={toggleTheme}><Moon/></Button>
    );
}
