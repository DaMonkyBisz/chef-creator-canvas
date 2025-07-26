import { useState } from "react";
import { 
  Home, 
  ChefHat, 
  Video, 
  Coins, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Zap,
  Package,
  MessageSquare,
  FolderOpen
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Übersicht", url: "/", icon: Home },
  { title: "Content Manager", url: "/content-manager", icon: FolderOpen },
  { title: "Rezepte", url: "/recipes", icon: ChefHat },
  { title: "MealsReelz", url: "/videos", icon: Video },
  { title: "Pakete", url: "/packages", icon: Package },
];

const businessItems = [
  { title: "Finanzen", url: "/finances", icon: Coins },
  { title: "Statistiken", url: "/stats", icon: BarChart3 },
  { title: "Community", url: "/community", icon: MessageSquare },
];

const toolsItems = [
  { title: "Promotion", url: "/promotion", icon: Zap },
  { title: "Einstellungen", url: "/settings", icon: Settings },
  { title: "Hilfe", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium" 
      : "hover:bg-muted/50 hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="gradient-primary text-white">
        {/* Logo Bereich */}
        <div className="p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-brand-purple" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg">Cheflify</h1>
                <p className="text-xs text-white/80">Creator Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Hauptnavigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/90 text-sm font-semibold">
            {!collapsed && "Hauptbereich"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive 
                            ? "bg-white/20 text-white font-medium" 
                            : "hover:bg-white/10 text-white/90"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Business Bereich */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/90 text-sm font-semibold">
            {!collapsed && "Business"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {businessItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive 
                            ? "bg-white/20 text-white font-medium" 
                            : "hover:bg-white/10 text-white/90"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tools Bereich */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/90 text-sm font-semibold">
            {!collapsed && "Tools"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive 
                            ? "bg-white/20 text-white font-medium" 
                            : "hover:bg-white/10 text-white/90"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}