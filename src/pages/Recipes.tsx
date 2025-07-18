import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Heart, 
  Edit, 
  MoreHorizontal,
  Clock,
  Users,
  Star
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const recipes = [
  {
    id: 1,
    title: "Pasta Carbonara Deluxe",
    description: "Cremige Carbonara mit Pancetta und Parmigiano-Reggiano",
    image: "🍝",
    status: "Veröffentlicht",
    price: 2.5,
    views: 1234,
    likes: 89,
    difficulty: "Mittel",
    cookTime: "25 Min",
    rating: 4.8,
    category: "Hauptgerichte"
  },
  {
    id: 2,
    title: "Mediterrane Buddha Bowl",
    description: "Gesunde Bowl mit Quinoa, Hummus und geröstetem Gemüse",
    image: "🥗",
    status: "Entwurf",
    price: 3.0,
    views: 856,
    likes: 67,
    difficulty: "Einfach",
    cookTime: "15 Min",
    rating: 4.6,
    category: "Gesunde Küche"
  },
  {
    id: 3,
    title: "Schokoladen-Lava-Kuchen",
    description: "Warmer Schokoladenkuchen mit flüssigem Kern",
    image: "🍰",
    status: "Veröffentlicht",
    price: 4.0,
    views: 2341,
    likes: 156,
    difficulty: "Schwer",
    cookTime: "45 Min",
    rating: 4.9,
    category: "Desserts"
  },
  {
    id: 4,
    title: "Asiatische Ramen Bowl",
    description: "Authentische Ramen mit selbstgemachter Brühe",
    image: "🍜",
    status: "Geplant",
    price: 3.5,
    views: 0,
    likes: 0,
    difficulty: "Schwer",
    cookTime: "120 Min",
    rating: 0,
    category: "Asiatisch"
  }
];

const Recipes = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-brand-purple">Meine Rezepte</h1>
            <p className="text-muted-foreground">Verwalte deine Koch-Kreationen und verdiene Coins</p>
          </div>
          <Button size="lg" className="gap-2 gradient-primary">
            <Plus className="w-5 h-5" />
            Neues Rezept
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-purple/10 rounded-lg">
                  <Eye className="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gesamt Aufrufe</p>
                  <p className="text-xl font-bold">4,431</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-teal/10 rounded-lg">
                  <Heart className="w-4 h-4 text-brand-teal" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gesamt Likes</p>
                  <p className="text-xl font-bold">312</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-mint/10 rounded-lg">
                  <Star className="w-4 h-4 text-brand-mint" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Rating</p>
                  <p className="text-xl font-bold">4.7</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Users className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Verkäufe</p>
                  <p className="text-xl font-bold">89</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Rezepte durchsuchen..." className="pl-10" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="group card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{recipe.image}</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Bearbeiten
                      </DropdownMenuItem>
                      <DropdownMenuItem>Duplizieren</DropdownMenuItem>
                      <DropdownMenuItem>Statistiken</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Löschen</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{recipe.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{recipe.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={recipe.status === "Veröffentlicht" ? "default" : recipe.status === "Entwurf" ? "secondary" : "outline"}>
                      {recipe.status}
                    </Badge>
                    <Badge variant="outline">{recipe.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {recipe.cookTime}
                    </span>
                    <span className="text-muted-foreground">{recipe.difficulty}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {recipe.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {recipe.likes}
                      </span>
                      {recipe.rating > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {recipe.rating}
                        </span>
                      )}
                    </div>
                    <div className="text-brand-mint font-bold">
                      {recipe.price} Coins
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Recipe CTA */}
        <Card className="border-dashed border-2 border-muted-foreground/20">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-2">Erstelle dein nächstes Meisterwerk</h3>
            <p className="text-muted-foreground mb-4">
              Teile deine Leidenschaft fürs Kochen und verdiene dabei Coins
            </p>
            <Button size="lg" className="gap-2 gradient-primary">
              <Plus className="w-5 h-5" />
              Neues Rezept erstellen
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Recipes;