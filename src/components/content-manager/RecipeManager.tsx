import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Edit, Trash2, DollarSign, Clock, Users, ChefHat } from "lucide-react";

interface RecipeManagerProps {
  selectedCategory: string;
}

// Mock recipe data
const mockRecipes = [
  {
    id: "r1",
    title: "Carbonara Original",
    description: "Klassische italienische Carbonara mit Guanciale, Ei und Pecorino",
    thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
    cookingTime: "15 min",
    difficulty: "Einfach",
    servings: 4,
    category: "quick",
    price: 0, // kostenlos
    likes: 234,
    status: "published"
  },
  {
    id: "r2",
    title: "Veganer Schokokuchen",
    description: "Saftiger Schokokuchen ohne tierische Produkte",
    thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    cookingTime: "45 min",
    difficulty: "Mittel",
    servings: 8,
    category: "vegan",
    price: 3, // 3 Coins
    likes: 189,
    status: "published"
  },
  {
    id: "r3",
    title: "Ribeye Steak Medium-Rare",
    description: "Perfekt gegartes Ribeye Steak mit Kräuterbutter",
    thumbnail: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
    cookingTime: "20 min",
    difficulty: "Schwer",
    servings: 2,
    category: "meat",
    price: 5, // 5 Coins
    likes: 312,
    status: "published"
  },
  {
    id: "r4",
    title: "Thai Green Curry",
    description: "Authentisches grünes Thai-Curry mit Kokosmilch",
    thumbnail: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop",
    cookingTime: "30 min",
    difficulty: "Mittel",
    servings: 4,
    category: "healthy",
    price: 0,
    likes: 156,
    status: "draft"
  }
];

const PriceModal = ({ recipe, open, onOpenChange, onSave }: {
  recipe: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (recipeId: string, price: number) => void;
}) => {
  const [price, setPrice] = useState(recipe.price.toString());
  
  const coinToEuro = 0.10; // 1 Coin = 0.10 €
  const euroValue = parseFloat(price) * coinToEuro;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Preis festlegen</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="price">Preis in Coins</Label>
            <Input
              id="price"
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0"
            />
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Live-Berechnung:</span>
              <span className="font-medium">
                {price ? `${price} Coins ≈ ${euroValue.toFixed(2)} €` : "0 Coins ≈ 0,00 €"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Hinweis: Nutzer sehen nur den Coinpreis, nicht den Echtgeldwert
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Abbrechen
            </Button>
            <Button 
              onClick={() => {
                onSave(recipe.id, parseInt(price) || 0);
                onOpenChange(false);
              }} 
              className="flex-1"
            >
              Speichern
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const getDifficultyBadge = (difficulty: string) => {
  const variants: Record<string, { variant: "default" | "secondary" | "destructive", color: string }> = {
    "Einfach": { variant: "secondary", color: "text-success" },
    "Mittel": { variant: "default", color: "text-warning" },
    "Schwer": { variant: "destructive", color: "text-destructive" }
  };
  
  const config = variants[difficulty] || variants["Mittel"];
  return <Badge variant={config.variant}>{difficulty}</Badge>;
};

export function RecipeManager({ selectedCategory }: RecipeManagerProps) {
  const [pricingRecipe, setPricingRecipe] = useState<any>(null);
  
  const filteredRecipes = selectedCategory === "all" 
    ? mockRecipes 
    : mockRecipes.filter(recipe => recipe.category === selectedCategory);

  const handleEditRecipe = (recipeId: string) => {
    console.log("Edit recipe:", recipeId);
    // Hier würde der Rezepteditor geöffnet werden
  };

  const handleDeleteRecipe = (recipeId: string) => {
    console.log("Delete recipe:", recipeId);
    // Hier würde das Rezept gelöscht werden
  };

  const handleSavePrice = (recipeId: string, price: number) => {
    console.log("Update price for recipe:", recipeId, "to", price, "coins");
    // Hier würde der Preis aktualisiert werden
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Gesamt Rezepte</span>
            </div>
            <p className="text-2xl font-bold mt-1">{mockRecipes.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Gesamt Likes</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockRecipes.reduce((sum, recipe) => sum + recipe.likes, 0)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">Premium Rezepte</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockRecipes.filter(r => r.price > 0).length}
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
              {mockRecipes.filter(r => r.status === "draft").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} className="card-hover">
            <CardContent className="p-4">
              {/* Thumbnail */}
              <div className="relative mb-4">
                <img 
                  src={recipe.thumbnail} 
                  alt={recipe.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2">
                  {recipe.price > 0 ? (
                    <Badge className="bg-warning text-warning-foreground">
                      {recipe.price} Coins
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Kostenlos</Badge>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  {getDifficultyBadge(recipe.difficulty)}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold line-clamp-2 mb-1">{recipe.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
                </div>
                
                {/* Recipe Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {recipe.cookingTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {recipe.servings} Portionen
                  </div>
                  <div className="flex items-center gap-1">
                    ❤️ {recipe.likes}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditRecipe(recipe.id)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Bearbeiten
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setPricingRecipe(recipe)}
                  >
                    <DollarSign className="w-3 h-3" />
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Rezept löschen</AlertDialogTitle>
                        <AlertDialogDescription>
                          Möchtest du das Rezept "{recipe.title}" wirklich löschen? 
                          Diese Aktion kann nicht rückgängig gemacht werden.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                        <AlertDialogAction 
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          onClick={() => handleDeleteRecipe(recipe.id)}
                        >
                          Löschen
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Price Modal */}
      {pricingRecipe && (
        <PriceModal
          recipe={pricingRecipe}
          open={!!pricingRecipe}
          onOpenChange={(open) => !open && setPricingRecipe(null)}
          onSave={handleSavePrice}
        />
      )}
    </div>
  );
}