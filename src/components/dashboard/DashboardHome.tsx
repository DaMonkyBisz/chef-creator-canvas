import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Eye, 
  Heart, 
  Coins, 
  Plus, 
  Users, 
  ChefHat, 
  Video,
  Calendar,
  ArrowUpRight,
  Star
} from "lucide-react";

const statsCards = [
  {
    title: "Gesamteinnahmen",
    value: "€2,450",
    change: "+12.5%",
    icon: Coins,
    trend: "up",
    color: "text-success"
  },
  {
    title: "Aufrufe (30 Tage)",
    value: "15,234",
    change: "+8.2%",
    icon: Eye,
    trend: "up",
    color: "text-brand-blue"
  },
  {
    title: "Aktive Follower",
    value: "3,847",
    change: "+5.1%",
    icon: Users,
    trend: "up",
    color: "text-brand-teal"
  },
  {
    title: "Coins-Guthaben",
    value: "2,450",
    change: "0",
    icon: Star,
    trend: "neutral",
    color: "text-brand-mint"
  }
];

const recentRecipes = [
  {
    id: 1,
    title: "Pasta Carbonara Deluxe",
    views: 1234,
    likes: 89,
    status: "Veröffentlicht",
    price: "2.5",
    image: "🍝"
  },
  {
    id: 2,
    title: "Mediterrane Buddha Bowl",
    views: 856,
    likes: 67,
    status: "Entwurf",
    price: "3.0",
    image: "🥗"
  },
  {
    id: 3,
    title: "Schokoladen-Lava-Kuchen",
    views: 2341,
    likes: 156,
    status: "Veröffentlicht",
    price: "4.0",
    image: "🍰"
  }
];

export function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="gradient-primary rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Willkommen zurück, Chef Maria! 👋</h1>
            <p className="text-white/90 text-lg">
              Du hast diese Woche bereits 3 neue Rezepte erstellt und 245 Coins verdient.
            </p>
          </div>
          <div className="hidden md:block">
            <Button size="lg" variant="secondary" className="gap-2">
              <Plus className="w-5 h-5" />
              Neues Rezept
            </Button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-white/80">Rezepte</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm text-white/80">Videos</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-white/80">Pakete</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm text-white/80">⭐ Bewertung</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="stats-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    {stat.change !== "0" && (
                      <p className={`text-sm ${stat.trend === 'up' ? 'text-success' : 'text-destructive'} flex items-center gap-1`}>
                        <TrendingUp className="w-3 h-3" />
                        {stat.change}
                      </p>
                    )}
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Recipes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold text-brand-purple">Neueste Rezepte</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">
              Alle anzeigen
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRecipes.map((recipe) => (
                <div key={recipe.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{recipe.image}</div>
                    <div>
                      <h4 className="font-medium">{recipe.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {recipe.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {recipe.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={recipe.status === "Veröffentlicht" ? "default" : "secondary"}>
                      {recipe.status}
                    </Badge>
                    <p className="text-sm text-brand-mint font-medium mt-1">{recipe.price} Coins</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-brand-blue">Wöchentliche Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Aufrufe</span>
                  <span className="font-medium">2,341 / 3,000</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Likes</span>
                  <span className="font-medium">156 / 200</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Coins verdient</span>
                  <span className="font-medium">245 / 300</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium text-brand-teal mb-2">💡 Creator-Tipp</h4>
              <p className="text-sm text-muted-foreground">
                Deine Rezepte mit Videos erhalten 3x mehr Aufrufe! Versuche zu jedem Rezept ein kurzes MealsReel hinzuzufügen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-brand-purple">Schnellaktionen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button size="lg" className="gap-2 h-16 gradient-primary">
              <ChefHat className="w-5 h-5" />
              Neues Rezept erstellen
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-16">
              <Video className="w-5 h-5" />
              MealsReel uploaden
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-16">
              <Calendar className="w-5 h-5" />
              Wochenplan erstellen
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}