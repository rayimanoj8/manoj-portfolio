import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/SideBar/AppSidebar.jsx";
import {Outlet} from "react-router";
import {ThemeProvider} from "@/context/theme.js";
import {useEffect, useState} from "react";
import { Sun,Moon } from 'lucide-react';
import {Button} from "@/components/ui/button.jsx";


export default function App() {
    const [theme,setTheme] = useState("dark");
    const toggleTheme = () => {
        (theme === "dark") ?
             setTheme("light")
            :setTheme("dark");
    }
    useEffect(() => {
        document.querySelector("html").classList.remove("light","dark");
        document.querySelector("html").classList.add(theme);
    },[theme, toggleTheme])
    return (
        <ThemeProvider value={{theme,toggleTheme}}>
            <SidebarProvider >
                <AppSideBar />
                    <SidebarTrigger/>
                <main className={'w-full'}>
                    <nav className='text-lg font-semibold flex justify-between'>
                        Goto
                        {theme === 'dark' ?
                            <Button variant='ghost' onClick={toggleTheme}><Sun/></Button> :
                            <Button variant='ghost' onClick={toggleTheme}><Moon/></Button>
                        }
                    </nav>
                    <Outlet/>
                </main>
            </SidebarProvider>

        </ThemeProvider>
    );
}
