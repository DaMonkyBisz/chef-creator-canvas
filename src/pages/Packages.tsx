import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  FileText,
  Video,
  ChefHat,
  Download,
  Upload,
  Star,
  Users,
  Coins
} from 'lucide-react';

// Helper function for type icons
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'weekly-plan': return <Calendar className="h-4 w-4" />;
    case 'video-course': return <Video className="h-4 w-4" />;
    case 'pdf': return <FileText className="h-4 w-4" />;
    case 'recipe-bundle': return <ChefHat className="h-4 w-4" />;
    default: return <Package className="h-4 w-4" />;
  }
};

const Packages = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // Mock data for packages
  const packages = [
    {
      id: 1,
      title: 'Mediterrane Woche',
      type: 'weekly-plan',
      description: 'Gesunde mediterrane Rezepte für 7 Tage',
      thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
      price: 150,
      status: 'published',
      sales: 24,
      rating: 4.8,
      items: 7,
      category: 'Wochenplan'
    },
    {
      id: 2,
      title: 'Italienische Pasta Masterclass',
      type: 'video-course',
      description: 'Kompletter Videokurs für perfekte Pasta',
      thumbnail: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0',
      price: 299,
      status: 'published',
      sales: 18,
      rating: 4.9,
      items: 12,
      category: 'Videokurs'
    },
    {
      id: 3,
      title: 'Basis Kochbuch PDF',
      type: 'pdf',
      description: 'Umfassendes Kochbuch mit 50 Grundrezepten',
      thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
      price: 89,
      status: 'draft',
      sales: 0,
      rating: 0,
      items: 50,
      category: 'E-Book'
    },
    {
      id: 4,
      title: 'Asiatische Küche Bundle',
      type: 'recipe-bundle',
      description: 'Sammlung exotischer asiatischer Rezepte',
      thumbnail: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
      price: 199,
      status: 'published',
      sales: 31,
      rating: 4.7,
      items: 15,
      category: 'Rezeptsammlung'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };


  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Pakete & Templates</h1>
            <p className="text-muted-foreground">Verwalte deine Kochpakete, Wochenpläne und digitalen Inhalte</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Neues Paket erstellen
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Neues Paket erstellen</DialogTitle>
              </DialogHeader>
              <CreatePackageForm />
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Aktive Pakete</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Gesamtumsatz</p>
                  <p className="text-2xl font-bold text-secondary">2.450€</p>
                </div>
                <Coins className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Verkäufe</p>
                  <p className="text-2xl font-bold text-accent">73</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Ø Bewertung</p>
                  <p className="text-2xl font-bold text-warning">4.8</p>
                </div>
                <Star className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">Alle</TabsTrigger>
            <TabsTrigger value="weekly-plan">Wochenpläne</TabsTrigger>
            <TabsTrigger value="video-course">Videokurse</TabsTrigger>
            <TabsTrigger value="pdf">E-Books</TabsTrigger>
            <TabsTrigger value="recipe-bundle">Rezeptsammlungen</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <PackageGrid packages={packages} />
          </TabsContent>
          <TabsContent value="weekly-plan" className="space-y-4">
            <PackageGrid packages={packages.filter(p => p.type === 'weekly-plan')} />
          </TabsContent>
          <TabsContent value="video-course" className="space-y-4">
            <PackageGrid packages={packages.filter(p => p.type === 'video-course')} />
          </TabsContent>
          <TabsContent value="pdf" className="space-y-4">
            <PackageGrid packages={packages.filter(p => p.type === 'pdf')} />
          </TabsContent>
          <TabsContent value="recipe-bundle" className="space-y-4">
            <PackageGrid packages={packages.filter(p => p.type === 'recipe-bundle')} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Package Grid Component
const PackageGrid = ({ packages }: { packages: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <Card key={pkg.id} className="group hover:shadow-lg transition-shadow">
          <div className="relative">
            <img 
              src={pkg.thumbnail} 
              alt={pkg.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <Badge 
              className={`absolute top-2 right-2 ${pkg.status === 'published' ? 'bg-green-500' : pkg.status === 'draft' ? 'bg-yellow-500' : 'bg-gray-500'}`}
            >
              {pkg.status === 'published' ? 'Veröffentlicht' : pkg.status === 'draft' ? 'Entwurf' : 'Archiviert'}
            </Badge>
          </div>
          
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                {getTypeIcon(pkg.type)}
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm">{pkg.rating}</span>
              </div>
            </div>
            <CardDescription>{pkg.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Badge variant="outline">{pkg.category}</Badge>
                <span className="text-lg font-bold text-primary">{pkg.price} Coins</span>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{pkg.items} Inhalte</span>
                <span>{pkg.sales} Verkäufe</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  Ansehen
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Bearbeiten
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Create Package Form Component
const CreatePackageForm = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Titel</Label>
          <Input id="title" placeholder="Paket-Titel eingeben" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Typ</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Paket-Typ wählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly-plan">Wochenplan</SelectItem>
              <SelectItem value="video-course">Videokurs</SelectItem>
              <SelectItem value="pdf">E-Book/PDF</SelectItem>
              <SelectItem value="recipe-bundle">Rezeptsammlung</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Beschreibung</Label>
        <Textarea 
          id="description" 
          placeholder="Beschreibe dein Paket..." 
          className="min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Preis (Coins)</Label>
          <Input id="price" type="number" placeholder="100" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Kategorie</Label>
          <Input id="category" placeholder="z.B. Italienisch" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">Klicken Sie hier oder ziehen Sie ein Bild hinein</p>
          <p className="text-xs text-gray-400">PNG, JPG bis zu 10MB</p>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Abbrechen</Button>
        <Button>Als Entwurf speichern</Button>
        <Button className="bg-primary">Veröffentlichen</Button>
      </div>
    </div>
  );
};

export default Packages;