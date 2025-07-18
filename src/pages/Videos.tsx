import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, Upload, Play, Eye, Heart, MessageCircle, TrendingUp, Clock, Video } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Perfekte Pasta Carbonara",
      thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      duration: "3:45",
      views: 1250,
      likes: 89,
      comments: 23,
      status: "published",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Schnelle Avocado Bruschetta",
      thumbnail: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop",
      duration: "2:15",
      views: 890,
      likes: 67,
      comments: 15,
      status: "published",
      uploadDate: "2024-01-12"
    },
    {
      id: 3,
      title: "Vegane Buddha Bowl",
      thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      duration: "4:30",
      views: 0,
      likes: 0,
      comments: 0,
      status: "processing",
      uploadDate: "2024-01-18"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-success/10 text-success border-success/20">Veröffentlicht</Badge>;
      case "processing":
        return <Badge className="bg-warning/10 text-warning border-warning/20">In Bearbeitung</Badge>;
      case "draft":
        return <Badge className="bg-muted text-muted-foreground">Entwurf</Badge>;
      default:
        return <Badge variant="outline">Unbekannt</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">MealsReelz</h1>
            <p className="text-muted-foreground">Verwalte deine Koch-Videos und erreiche mehr Zuschauer</p>
          </div>
          <Button className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all">
            <Upload className="w-4 h-4 mr-2" />
            Video hochladen
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gesamt Videos</CardTitle>
              <div className="text-2xl font-bold text-primary">24</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-muted-foreground">
                <Video className="w-3 h-3 mr-1" />
                3 neue diese Woche
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gesamt Views</CardTitle>
              <div className="text-2xl font-bold text-primary">45.2K</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% zur letzten Woche
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Durchschn. Watch Time</CardTitle>
              <div className="text-2xl font-bold text-primary">2:45</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                von 3:20 Minuten
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
              <div className="text-2xl font-bold text-primary">8.4%</div>
            </CardHeader>
            <CardContent>
              <Progress value={84} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Upload Progress */}
        <Card className="border-dashed border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Upload className="w-5 h-5 mr-2 text-primary" />
              Quick Upload
            </CardTitle>
            <CardDescription>
              Ziehe dein Video hier hinein oder klicke zum Auswählen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-32 bg-background/50 rounded-lg border-2 border-dashed border-muted">
              <div className="text-center">
                <Video className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">MP4, MOV bis zu 500MB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Grid */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Deine Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="card-hover">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    {getStatusBadge(video.status)}
                  </div>
                  {video.status === "published" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all group cursor-pointer rounded-t-lg">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-base line-clamp-2">{video.title}</CardTitle>
                  <CardDescription>
                    Hochgeladen am {new Date(video.uploadDate).toLocaleDateString('de-DE')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {video.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {video.comments}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      Bearbeiten
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Teilen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips */}
        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">💡 Video-Tipps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Nutze aussagekräftige Thumbnails für mehr Klicks</li>
              <li>• Halte die ersten 15 Sekunden besonders spannend</li>
              <li>• Optimale Video-Länge: 2-4 Minuten für Koch-Tutorials</li>
              <li>• Verlinke deine Rezepte in der Beschreibung</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Videos;