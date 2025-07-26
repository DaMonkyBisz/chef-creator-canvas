import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EditVideoModal } from "./EditVideoModal";
import { Play, Edit, ExternalLink, Upload, Clock, Eye } from "lucide-react";

interface VideoManagerProps {
  selectedCategory: string;
}

// Mock video data
const mockVideos = [
  {
    id: "1",
    title: "Cremige Carbonara in 15 Minuten",
    description: "Ein klassisches italienisches Rezept, perfekt für schnelle Abendessen",
    thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
    duration: "15:32",
    views: 12450,
    status: "published",
    category: "quick",
    linkedRecipe: {
      id: "r1",
      title: "Carbonara Original",
      thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=100&h=100&fit=crop",
      status: "published"
    },
    hashtags: ["#carbonara", "#pasta", "#schnell", "#italienisch"]
  },
  {
    id: "2",
    title: "Veganer Schokokuchen ohne Ei",
    description: "Saftiger Schokokuchen, komplett vegan und unglaublich lecker",
    thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    duration: "22:15",
    views: 8920,
    status: "draft",
    category: "vegan",
    linkedRecipe: null,
    hashtags: ["#vegan", "#kuchen", "#schokolade", "#backrezept"]
  },
  {
    id: "3",
    title: "Perfektes Steak braten",
    description: "Die ultimative Anleitung für das perfekte Steak",
    thumbnail: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    duration: "18:45",
    views: 15670,
    status: "published",
    category: "meat",
    linkedRecipe: {
      id: "r3",
      title: "Ribeye Steak Medium-Rare",
      thumbnail: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop",
      status: "published"
    },
    hashtags: ["#steak", "#fleisch", "#grillen", "#profi"]
  }
];

const getStatusBadge = (status: string) => {
  const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
    published: { variant: "default", label: "Veröffentlicht" },
    draft: { variant: "secondary", label: "Entwurf" },
    processing: { variant: "outline", label: "Wird verarbeitet" }
  };
  
  const config = variants[status] || variants.draft;
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export function VideoManager({ selectedCategory }: VideoManagerProps) {
  const [editingVideo, setEditingVideo] = useState<typeof mockVideos[0] | null>(null);
  
  const filteredVideos = selectedCategory === "all" 
    ? mockVideos 
    : mockVideos.filter(video => video.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Gesamt Videos</span>
            </div>
            <p className="text-2xl font-bold mt-1">{mockVideos.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Gesamte Aufrufe</span>
            </div>
            <p className="text-2xl font-bold mt-1">37,040</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Upload className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">Veröffentlicht</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockVideos.filter(v => v.status === "published").length}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Entwürfe</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockVideos.filter(v => v.status === "draft").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="card-hover">
            <CardContent className="p-4">
              {/* Thumbnail */}
              <div className="relative mb-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  {getStatusBadge(video.status)}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold line-clamp-2 mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views.toLocaleString()}
                  </div>
                </div>
                
                {/* Linked Recipe */}
                {video.linkedRecipe && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <img 
                        src={video.linkedRecipe.thumbnail} 
                        alt={video.linkedRecipe.title}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Verlinkt mit:</p>
                        <p className="text-sm font-medium">{video.linkedRecipe.title}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Hashtags */}
                <div className="flex flex-wrap gap-1">
                  {video.hashtags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {video.hashtags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{video.hashtags.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setEditingVideo(video)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Bearbeiten
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Im Editor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Edit Modal */}
      {editingVideo && (
        <EditVideoModal 
          video={editingVideo}
          open={!!editingVideo}
          onOpenChange={(open) => !open && setEditingVideo(null)}
          onSave={(updatedVideo) => {
            console.log("Video updated:", updatedVideo);
            setEditingVideo(null);
          }}
        />
      )}
    </div>
  );
}