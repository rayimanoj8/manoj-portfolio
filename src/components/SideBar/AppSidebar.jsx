import {Home, Projector, CircleUser, Info} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router";

export default function AppSideBar() {
    const arr = [
        {
            label: "Home",
            to:"/manoj-portfolio",
            icon: Home,
        },
        {
            label: "Projects",
            to:"/manoj-portfolio/projects",
            icon: Projector,
        },
        {
            label: "About",
            to:"/manoj-portfolio/about",
            icon: Info,
        },
        {
            label: "Contact",
            to:"/manoj-portfolio/contact",
            icon: CircleUser,
        },
    ]
    return <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Go To</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {
                            arr.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.to}>
                                            < item.icon />
                                            {item.label}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
}