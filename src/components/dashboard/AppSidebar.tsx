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
  MessageSquare
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
      <SidebarContent>
        {/* Logo Bereich */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg text-sidebar-foreground">Cheflify</h1>
                <p className="text-xs text-sidebar-foreground/80">Creator Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Hauptnavigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/90 text-sm font-semibold">
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
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
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
          <SidebarGroupLabel className="text-sidebar-foreground/90 text-sm font-semibold">
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
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
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
          <SidebarGroupLabel className="text-sidebar-foreground/90 text-sm font-semibold">
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
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
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