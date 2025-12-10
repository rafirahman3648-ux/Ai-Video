"use client";

import { useAuthContext } from "@/app/provider";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HomeIcon, FileVideo2Icon, WalletCardsIcon, SearchIcon, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // use Next.js Link instead of lucide-react Link
import { usePathname } from "next/navigation";

const MenuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Create New Video",
    url: "/create-new-video",
    icon: FileVideo2Icon,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: SearchIcon,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: WalletCardsIcon,
  },
];

export default function AppSidebar() {
  const path = usePathname();
  const {user} = useAuthContext();
  console.log(path)
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
          <div className="flex items-center justify-start p-2 gap-2">
            <Image 
              src="/A.png" 
              alt="A" 
              width={30} 
              height={40} 
              className="rounded-full"
            />
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-md">
              Video Gen
            </h2>
          </div>
          <h2 className="text-lg text-gray-400 text-center mt-3">
            AI Short Video Generator
          </h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="mx-5 mt-8">

<Link href={'/create-new-video'}>
<Button className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(0,150,255,0.6)] transition-transform duration-300">
  <span className="flex items-center gap-2">
    <span className="text-2xl transition-transform duration-300 group-hover:rotate-90">+</span>
    Create New Video
  </span>
</Button>
</Link>

            </div>

            <SidebarMenu>
              {MenuItems.map((menu, index) => (
                <SidebarMenuItem key={index} className="mt-6">
                  <SidebarMenuButton isActive={path==menu.url} >
                    <Link href={menu.url} className="flex items-center gap-4 p-3">
                      <menu.icon className="w-5 h-5 " />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-5 border rounded-lg mb-6 bg-gray-900">
          <div className="flex items-center justify-between">
            <Gem/>
            <h2>{user?.credits}Credits Left</h2>
          </div>
      <Button className="w-full mt-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
        Buy More Credits
      </Button>
          
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
