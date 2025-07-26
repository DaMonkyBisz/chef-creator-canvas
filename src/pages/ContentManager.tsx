import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoManager } from "@/components/content-manager/VideoManager";
import { RecipeManager } from "@/components/content-manager/RecipeManager";
import { WeekPlanManager } from "@/components/content-manager/WeekPlanManager";
import { EBookManager } from "@/components/content-manager/EBookManager";
import { FilterDropdown } from "@/components/content-manager/FilterDropdown";
import { FolderOpen, Video, ChefHat, Calendar, BookOpen } from "lucide-react";

const ContentManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Content Manager</h1>
              <p className="text-muted-foreground">Verwalte all deinen Content zentral</p>
            </div>
          </div>
          
          {/* Filter */}
          <FilterDropdown 
            value={selectedCategory} 
            onChange={setSelectedCategory} 
          />
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="recipes" className="flex items-center gap-2">
              <ChefHat className="w-4 h-4" />
              Rezepte
            </TabsTrigger>
            <TabsTrigger value="weekplans" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Wochenpläne
            </TabsTrigger>
            <TabsTrigger value="ebooks" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              E-Books
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="mt-6">
            <VideoManager selectedCategory={selectedCategory} />
          </TabsContent>
          
          <TabsContent value="recipes" className="mt-6">
            <RecipeManager selectedCategory={selectedCategory} />
          </TabsContent>
          
          <TabsContent value="weekplans" className="mt-6">
            <WeekPlanManager selectedCategory={selectedCategory} />
          </TabsContent>
          
          <TabsContent value="ebooks" className="mt-6">
            <EBookManager selectedCategory={selectedCategory} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ContentManager;