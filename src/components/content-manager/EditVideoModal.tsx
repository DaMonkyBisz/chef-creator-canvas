import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Upload, X, Search, Check } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  thumbnail: string;
  status: string;
}

interface EditVideoModalProps {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    linkedRecipe?: Recipe | null;
    hashtags: string[];
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (updatedVideo: any) => void;
}

// Mock recipes for the dropdown
const mockRecipes: Recipe[] = [
  {
    id: "r1",
    title: "Carbonara Original",
    thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=100&h=100&fit=crop",
    status: "published"
  },
  {
    id: "r2",
    title: "Veganer Schokokuchen",
    thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop",
    status: "published"
  },
  {
    id: "r3",
    title: "Ribeye Steak Medium-Rare",
    thumbnail: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop",
    status: "published"
  },
  {
    id: "r4",
    title: "Thai Green Curry",
    thumbnail: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=100&h=100&fit=crop",
    status: "draft"
  }
];

export function EditVideoModal({ video, open, onOpenChange, onSave }: EditVideoModalProps) {
  const [formData, setFormData] = useState({
    title: video.title,
    description: video.description,
    thumbnail: video.thumbnail,
    linkedRecipe: video.linkedRecipe,
    hashtags: video.hashtags
  });
  
  const [newTag, setNewTag] = useState("");
  const [recipeSearchOpen, setRecipeSearchOpen] = useState(false);

  useEffect(() => {
    setFormData({
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
      linkedRecipe: video.linkedRecipe,
      hashtags: video.hashtags
    });
  }, [video]);

  const handleAddTag = () => {
    if (newTag.trim() && !formData.hashtags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        hashtags: [...prev.hashtags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      hashtags: prev.hashtags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = () => {
    onSave({
      ...video,
      ...formData
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Video bearbeiten</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Titel</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Video-Titel eingeben..."
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Beschreibung</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Video-Beschreibung eingeben..."
              rows={4}
            />
          </div>

          {/* Thumbnail Upload */}
          <div className="space-y-2">
            <Label>Thumbnail</Label>
            <div className="flex items-center gap-4">
              <img 
                src={formData.thumbnail} 
                alt="Current thumbnail"
                className="w-24 h-16 object-cover rounded-lg border"
              />
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Neues Thumbnail hochladen
              </Button>
            </div>
          </div>

          {/* Hashtags */}
          <div className="space-y-2">
            <Label>Hashtags</Label>
            <div className="space-y-3">
              {/* Add new tag */}
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Neuen Hashtag hinzufügen..."
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                />
                <Button type="button" onClick={handleAddTag} size="sm">
                  Hinzufügen
                </Button>
              </div>
              
              {/* Existing tags */}
              <div className="flex flex-wrap gap-2">
                {formData.hashtags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X 
                      className="w-3 h-3 cursor-pointer hover:text-destructive" 
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Linked Recipe */}
          <div className="space-y-2">
            <Label>Verlinktes Rezept</Label>
            <Popover open={recipeSearchOpen} onOpenChange={setRecipeSearchOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {formData.linkedRecipe ? (
                    <div className="flex items-center gap-2">
                      <img 
                        src={formData.linkedRecipe.thumbnail} 
                        alt={formData.linkedRecipe.title}
                        className="w-6 h-6 rounded object-cover"
                      />
                      {formData.linkedRecipe.title}
                    </div>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Rezept auswählen...
                    </>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <Command>
                  <CommandInput placeholder="Rezept suchen..." />
                  <CommandEmpty>Keine Rezepte gefunden.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => {
                        setFormData(prev => ({ ...prev, linkedRecipe: null }));
                        setRecipeSearchOpen(false);
                      }}
                    >
                      Kein Rezept verlinken
                    </CommandItem>
                    {mockRecipes.map((recipe) => (
                      <CommandItem
                        key={recipe.id}
                        onSelect={() => {
                          setFormData(prev => ({ ...prev, linkedRecipe: recipe }));
                          setRecipeSearchOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <img 
                            src={recipe.thumbnail} 
                            alt={recipe.title}
                            className="w-8 h-8 rounded object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{recipe.title}</p>
                            <p className="text-xs text-muted-foreground">{recipe.status}</p>
                          </div>
                          {formData.linkedRecipe?.id === recipe.id && (
                            <Check className="w-4 h-4" />
                          )}
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            
            {/* Linked Recipe Preview */}
            {formData.linkedRecipe && (
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={formData.linkedRecipe.thumbnail} 
                    alt={formData.linkedRecipe.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{formData.linkedRecipe.title}</p>
                    <p className="text-sm text-success">✓ Verlinkt mit diesem Rezept</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Abbrechen
            </Button>
            <Button onClick={handleSave} className="flex-1">
              Speichern
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
