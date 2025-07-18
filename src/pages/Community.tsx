import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Heart, Reply, Star, Users, TrendingUp, Clock, Filter } from "lucide-react";

const Community = () => {
  const comments = [
    {
      id: 1,
      user: "Maria K.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=40&h=40&fit=crop&crop=face",
      content: "Wow, dieses Rezept ist absolut perfekt! Meine Familie war begeistert. Gibt es auch eine vegane Variante?",
      recipe: "Klassische Lasagne",
      time: "vor 2 Stunden",
      isNew: true,
      likes: 3
    },
    {
      id: 2,
      user: "Thomas B.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      content: "Super Video! Die Erklärung war sehr verständlich. Könntest du mal ein Dessert-Tutorial machen?",
      recipe: "Pasta Carbonara Video",
      time: "vor 5 Stunden",
      isNew: true,
      likes: 7
    },
    {
      id: 3,
      user: "Sarah L.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      content: "Ich habe das Rezept ausprobiert und es ist fantastisch geworden! Danke für die tollen Tipps.",
      recipe: "Mediterrane Bowl",
      time: "vor 1 Tag",
      isNew: false,
      likes: 12
    },
    {
      id: 4,
      user: "Alex M.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content: "Welche Marke von Olivenöl empfiehlst du? Das macht sicher einen großen Unterschied im Geschmack.",
      recipe: "Bruschetta Rezept",
      time: "vor 2 Tagen",
      isNew: false,
      likes: 5
    }
  ];

  const tips = [
    {
      id: 1,
      user: "Felix R.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      amount: 5,
      message: "Für das großartige Carbonara Rezept! 🍝",
      time: "vor 3 Stunden"
    },
    {
      id: 2,
      user: "Nina S.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      amount: 10,
      message: "Deine Videos sind immer so inspirierend! Danke! ❤️",
      time: "vor 1 Tag"
    },
    {
      id: 3,
      user: "Marco D.",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=40&h=40&fit=crop&crop=face",
      amount: 3,
      message: "Tolles Dessert-Tutorial!",
      time: "vor 2 Tagen"
    }
  ];

  const followers = [
    {
      name: "Lisa Weber",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
      followers: "2.3K",
      isVerified: true,
      followedDate: "vor 2 Tagen"
    },
    {
      name: "Koch_Master_99",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      followers: "856",
      isVerified: false,
      followedDate: "vor 4 Tagen"
    },
    {
      name: "Foodie_Anna",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face",
      followers: "1.1K",
      isVerified: false,
      followedDate: "vor 1 Woche"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Community</h1>
            <p className="text-muted-foreground">Interagiere mit deiner Community und baue deine Fanbase auf</p>
          </div>
          <Button variant="outline" className="border-primary/20">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Follower</CardTitle>
              <div className="text-2xl font-bold text-primary">2.4K</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                +127 diese Woche
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Neue Kommentare</CardTitle>
              <div className="text-2xl font-bold text-primary">23</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-muted-foreground">
                <MessageCircle className="w-3 h-3 mr-1" />
                Letzte 24 Stunden
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Erhaltene Tips</CardTitle>
              <div className="text-2xl font-bold text-primary">18</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-warning">
                <Star className="w-3 h-3 mr-1" />
                Coins diese Woche
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
              <div className="text-2xl font-bold text-primary">12.3%</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-success">
                <Heart className="w-3 h-3 mr-1" />
                +2.1% zur letzten Woche
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="comments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="comments">Kommentare</TabsTrigger>
            <TabsTrigger value="tips">Tips & Belohnungen</TabsTrigger>
            <TabsTrigger value="followers">Neue Follower</TabsTrigger>
          </TabsList>

          {/* Comments Tab */}
          <TabsContent value="comments" className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className={`card-hover ${comment.isNew ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback>{comment.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{comment.user}</p>
                        <p className="text-xs text-muted-foreground">zu "{comment.recipe}"</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {comment.isNew && <Badge className="bg-primary/10 text-primary">Neu</Badge>}
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm mb-4">{comment.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{comment.likes}</span>
                      </button>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {comment.time}
                      </span>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      <Reply className="w-4 h-4 mr-2" />
                      Antworten
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips" className="space-y-4">
            {tips.map((tip) => (
              <Card key={tip.id} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={tip.avatar} />
                        <AvatarFallback>{tip.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{tip.user}</p>
                        <p className="text-sm text-muted-foreground">{tip.message}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-warning font-medium">
                        <Star className="w-4 h-4" />
                        <span>{tip.amount} Coins</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{tip.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-subtle border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">🌟 Tips insgesamt</CardTitle>
                <CardDescription>
                  Du hast diese Woche 18 Coins durch Tips erhalten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="gradient-primary text-white">
                  Coins auszahlen
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Followers Tab */}
          <TabsContent value="followers" className="space-y-4">
            {followers.map((follower, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={follower.avatar} />
                        <AvatarFallback>{follower.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">{follower.name}</p>
                          {follower.isVerified && (
                            <Badge className="bg-primary/10 text-primary text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Verifiziert
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {follower.followers} Follower • Folgt dir seit {follower.followedDate}
                        </p>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      <Users className="w-4 h-4 mr-2" />
                      Zurück folgen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">🚀 Community-Tipps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Antworte schnell auf Kommentare, um das Engagement zu erhöhen</li>
              <li>• Stelle Fragen in deinen Posts, um mehr Interaktion zu fördern</li>
              <li>• Teile Behind-the-Scenes Content für eine persönlichere Verbindung</li>
              <li>• Bedanke dich bei treuen Followern mit exklusiven Inhalten</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Community;