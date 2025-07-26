import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BookOpen, Plus, Edit, Upload, DollarSign, Users, Crown, Heart, Eye, Download } from "lucide-react";

interface EBookManagerProps {
  selectedCategory: string;
}

// Mock e-book data
const mockEBooks = [
  {
    id: "e1",
    title: "Das große Pasta-Kochbuch",
    description: "50 authentische italienische Pasta-Rezepte mit Step-by-Step Fotos",
    thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=400&fit=crop",
    category: "quick",
    price: 12,
    visibility: "public",
    downloads: 89,
    pages: 45,
    fileSize: "15.2 MB",
    status: "published"
  },
  {
    id: "e2",
    title: "Vegane Küche für Einsteiger",
    description: "Alles was du über vegane Ernährung wissen musst + 30 einfache Rezepte",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop",
    category: "vegan",
    price: 8,
    visibility: "followers",
    downloads: 156,
    pages: 32,
    fileSize: "12.8 MB",
    status: "published"
  },
  {
    id: "e3",
    title: "Thermomix Geheimnisse",
    description: "Profi-Tipps und exklusive Rezepte für deinen Thermomix",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop",
    category: "thermomix",
    price: 15,
    visibility: "subscribers",
    downloads: 67,
    pages: 28,
    fileSize: "18.5 MB",
    status: "draft"
  }
];

const CreateEBookModal = ({ open, onOpenChange }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "0",
    visibility: "public",
    thumbnail: null as File | null,
    pdf: null as File | null
  });

  const handleSave = () => {
    console.log("Create e-book:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Neues E-Book erstellen</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titel</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="z.B. Das große Pasta-Kochbuch"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Beschreibung</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Beschreibe den Inhalt deines E-Books..."
                rows={3}
              />
            </div>
          </div>

          {/* File Uploads */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Thumbnail</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Cover-Bild hochladen (empfohlen: 300x400px)
                </p>
                <Button variant="outline" size="sm">
                  Datei auswählen
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>PDF-Datei</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  PDF-Datei hochladen (max. 50MB)
                </p>
                <Button variant="outline" size="sm">
                  PDF auswählen
                </Button>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <Label htmlFor="price">Preis in Coins</Label>
            <Input
              id="price"
              type="number"
              min="0"
              value={formData.price}
              onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              placeholder="0"
            />
            <p className="text-sm text-muted-foreground">
              {formData.price} Coins ≈ {(parseFloat(formData.price) * 0.10).toFixed(2)} € 
              (0 = kostenlos)
            </p>
          </div>

          {/* Visibility */}
          <div className="space-y-4">
            <Label>Sichtbarkeit / Zugriff</Label>
            <RadioGroup value={formData.visibility} onValueChange={(value) => setFormData(prev => ({ ...prev, visibility: value }))}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Öffentlich
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="followers" id="followers" />
                <Label htmlFor="followers" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" /> Nur für Follower
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="subscribers" id="subscribers" />
                <Label htmlFor="subscribers" className="flex items-center gap-2">
                  <Crown className="w-4 h-4" /> Nur für Abonnenten
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Abbrechen
            </Button>
            <Button onClick={handleSave} className="flex-1">
              E-Book erstellen
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const getVisibilityBadge = (visibility: string) => {
  const badges: Record<string, { variant: "default" | "secondary" | "outline", icon: string, label: string }> = {
    public: { variant: "secondary", icon: "🌍", label: "Öffentlich" },
    followers: { variant: "outline", icon: "❤️", label: "Follower" },
    subscribers: { variant: "outline", icon: "👑", label: "Abonnenten" }
  };
  
  const config = badges[visibility] || badges.public;
  return (
    <Badge variant={config.variant}>
      {config.icon} {config.label}
    </Badge>
  );
};

export function EBookManager({ selectedCategory }: EBookManagerProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const filteredEBooks = selectedCategory === "all" 
    ? mockEBooks 
    : mockEBooks.filter(book => book.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">E-Books verwalten</h2>
          <p className="text-muted-foreground">Erstelle und verkaufe deine eigenen PDF-Kochbücher</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Neues E-Book erstellen
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Gesamt E-Books</span>
            </div>
            <p className="text-2xl font-bold mt-1">{mockEBooks.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Downloads</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockEBooks.reduce((sum, book) => sum + book.downloads, 0)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">Umsatz (Coins)</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockEBooks.reduce((sum, book) => sum + (book.price * book.downloads), 0)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Edit className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Entwürfe</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockEBooks.filter(b => b.status === "draft").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* E-Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEBooks.map((book) => (
          <Card key={book.id} className="card-hover">
            <CardContent className="p-4">
              {/* Cover */}
              <div className="relative mb-4">
                <img 
                  src={book.thumbnail} 
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2">
                  {book.price > 0 ? (
                    <Badge className="bg-warning text-warning-foreground">
                      {book.price} Coins
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Kostenlos</Badge>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  {getVisibilityBadge(book.visibility)}
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold line-clamp-2 mb-1">{book.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                </div>
                
                {/* Book Stats */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{book.pages} Seiten</span>
                    <span>{book.fileSize}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {book.downloads}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {book.price * book.downloads} Coins
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-3 h-3 mr-1" />
                    Bearbeiten
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Create Modal */}
      <CreateEBookModal 
        open={showCreateModal}
        onOpenChange={setShowCreateModal}
      />
    </div>
  );
}