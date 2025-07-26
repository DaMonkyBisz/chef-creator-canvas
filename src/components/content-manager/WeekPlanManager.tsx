import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Plus, Edit, DollarSign, Users, Crown, Heart, Upload, Palette, LayoutTemplate, ChefHat } from "lucide-react";

interface WeekPlanManagerProps {
  selectedCategory: string;
}

// Mock week plan data
const mockWeekPlans = [
  {
    id: "w1",
    title: "Mediterrane Woche",
    description: "7 Tage voller mediterraner Köstlichkeiten",
    thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
    recipeCount: 7,
    category: "healthy",
    access: "free",
    price: 0,
    downloads: 234,
    status: "published",
    branding: {
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop",
      layout: "classic"
    }
  },
  {
    id: "w2",
    title: "Quick & Easy Woche",
    description: "Schnelle Rezepte für vielbeschäftigte Tage",
    thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop",
    recipeCount: 7,
    category: "quick",
    access: "coins",
    price: 8,
    downloads: 156,
    status: "published",
    branding: {
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop",
      layout: "modern"
    }
  },
  {
    id: "w3",
    title: "Vegane Herbstwoche",
    description: "Saisonale vegane Gerichte für den Herbst",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    recipeCount: 7,
    category: "vegan",
    access: "subscribers",
    price: 0,
    downloads: 89,
    status: "draft",
    branding: {
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop",
      layout: "minimal"
    }
  }
];

const CreateWeekPlanModal = ({ open, onOpenChange }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    access: "free",
    price: "0",
    logo: "",
    layout: "classic"
  });

  const layouts = [
    { id: "classic", name: "Klassisch", preview: "📋 Liste" },
    { id: "modern", name: "Modern", preview: "🎨 Grid" },
    { id: "minimal", name: "Minimal", preview: "📝 Clean" }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSave = () => {
    console.log("Create week plan:", formData);
    onOpenChange(false);
    setStep(1);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Neuen Wochenplan erstellen</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    step >= num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-12 h-0.5 ${
                      step > num ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Grundinformationen</h3>
              
              <div className="space-y-2">
                <Label htmlFor="title">Titel</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="z.B. Mediterrane Woche"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Beschreibung</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Kurze Beschreibung des Wochenplans"
                />
              </div>
            </div>
          )}

          {/* Step 2: Access & Pricing */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Zugriff & Preise</h3>
              
              <div className="space-y-4">
                <Label>Wochenplan ist...</Label>
                <RadioGroup value={formData.access} onValueChange={(value) => setFormData(prev => ({ ...prev, access: value }))}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free" className="flex items-center gap-2">
                      <span>🆓</span> Kostenlos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="coins" id="coins" />
                    <Label htmlFor="coins" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" /> Kostenpflichtig (Coins)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="subscribers" id="subscribers" />
                    <Label htmlFor="subscribers" className="flex items-center gap-2">
                      <Crown className="w-4 h-4" /> Nur für Abonnenten
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="followers" id="followers" />
                    <Label htmlFor="followers" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" /> Nur für Follower
                    </Label>
                  </div>
                </RadioGroup>
                
                {formData.access === "coins" && (
                  <div className="space-y-2">
                    <Label htmlFor="price">Preis in Coins</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="8"
                    />
                    <p className="text-sm text-muted-foreground">
                      {formData.price} Coins ≈ {(parseFloat(formData.price) * 0.10).toFixed(2)} €
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Branding */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Branding & Design</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <Upload className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Logo hochladen
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Erscheint im Export & App-Template
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Layout auswählen</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {layouts.map((layout) => (
                      <div
                        key={layout.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          formData.layout === layout.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-muted-foreground'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, layout: layout.id }))}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{layout.preview}</div>
                          <p className="text-sm font-medium">{layout.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Abbrechen
            </Button>
            {step > 1 && (
              <Button variant="outline" onClick={handleBack}>
                Zurück
              </Button>
            )}
            {step < 3 ? (
              <Button onClick={handleNext} className="flex-1">
                Weiter
              </Button>
            ) : (
              <Button onClick={handleSave} className="flex-1">
                Wochenplan erstellen
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const getAccessBadge = (access: string) => {
  const badges: Record<string, { variant: "default" | "secondary" | "outline", icon: string, label: string }> = {
    free: { variant: "secondary", icon: "🆓", label: "Kostenlos" },
    coins: { variant: "default", icon: "💰", label: "Premium" },
    subscribers: { variant: "outline", icon: "👑", label: "Abonnenten" },
    followers: { variant: "outline", icon: "❤️", label: "Follower" }
  };
  
  const config = badges[access] || badges.free;
  return (
    <Badge variant={config.variant}>
      {config.icon} {config.label}
    </Badge>
  );
};

export function WeekPlanManager({ selectedCategory }: WeekPlanManagerProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const filteredPlans = selectedCategory === "all" 
    ? mockWeekPlans 
    : mockWeekPlans.filter(plan => plan.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Wochenpläne verwalten</h2>
          <p className="text-muted-foreground">Erstelle und verwalte deine Wochenpläne</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Neuen Wochenplan erstellen
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Gesamt Pläne</span>
            </div>
            <p className="text-2xl font-bold mt-1">{mockWeekPlans.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Downloads</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockWeekPlans.reduce((sum, plan) => sum + plan.downloads, 0)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">Premium Pläne</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockWeekPlans.filter(p => p.access === "coins").length}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Entwürfe</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {mockWeekPlans.filter(p => p.status === "draft").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Week Plan Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <Card key={plan.id} className="card-hover">
            <CardContent className="p-4">
              {/* Thumbnail */}
              <div className="relative mb-4">
                <img 
                  src={plan.thumbnail} 
                  alt={plan.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2">
                  {getAccessBadge(plan.access)}
                </div>
                {plan.access === "coins" && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-warning text-warning-foreground">
                      {plan.price} Coins
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold line-clamp-2 mb-1">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{plan.description}</p>
                </div>
                
                {/* Plan Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ChefHat className="w-3 h-3" />
                    {plan.recipeCount} Rezepte
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {plan.downloads} Downloads
                  </div>
                </div>
                
                {/* Branding Preview */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <img 
                      src={plan.branding.logo} 
                      alt="Logo"
                      className="w-6 h-6 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Layout:</p>
                      <p className="text-sm font-medium capitalize">{plan.branding.layout}</p>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-3 h-3 mr-1" />
                    Bearbeiten
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Palette className="w-3 h-3 mr-1" />
                    Design
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Create Modal */}
      <CreateWeekPlanModal 
        open={showCreateModal}
        onOpenChange={setShowCreateModal}
      />
    </div>
  );
}