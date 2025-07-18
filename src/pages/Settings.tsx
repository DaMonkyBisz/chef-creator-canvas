import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User, 
  Bell, 
  CreditCard, 
  Shield, 
  Globe, 
  Palette, 
  Camera, 
  Save, 
  Trash2, 
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Eye,
  EyeOff
} from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Einstellungen</h1>
            <p className="text-muted-foreground">Verwalte dein Profil, Benachrichtigungen und Account-Einstellungen</p>
          </div>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="notifications">Benachrichtigungen</TabsTrigger>
            <TabsTrigger value="payment">Zahlungen</TabsTrigger>
            <TabsTrigger value="privacy">Privatsphäre</TabsTrigger>
            <TabsTrigger value="appearance">Darstellung</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profil Informationen
                </CardTitle>
                <CardDescription>
                  Aktualisiere deine öffentlichen Profil-Informationen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b830?w=80&h=80&fit=crop&crop=face" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Foto ändern
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Entfernen
                    </Button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Anzeigename</Label>
                    <Input id="displayName" placeholder="Dein öffentlicher Name" defaultValue="Maria Kochen" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Benutzername</Label>
                    <Input id="username" placeholder="@username" defaultValue="@mariakochen" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail Adresse</Label>
                  <Input id="email" type="email" placeholder="deine@email.com" defaultValue="maria@example.com" />
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-success">E-Mail verifiziert</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Erzähle etwas über dich und deine Leidenschaft fürs Kochen..."
                    defaultValue="Leidenschaftliche Hobby-Köchin aus München. Ich liebe es, traditionelle Rezepte mit modernen Twists zu kombinieren und meine Kreationen mit euch zu teilen! 🍳✨"
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">240/500 Zeichen</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website (optional)</Label>
                  <Input id="website" placeholder="https://deine-website.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Standort</Label>
                    <Input id="location" placeholder="Stadt, Land" defaultValue="München, Deutschland" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Sprache</Label>
                    <Select defaultValue="de">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="gradient-primary text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Profil speichern
                </Button>
              </CardContent>
            </Card>

            {/* Account Status */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>E-Mail verifiziert</span>
                    </div>
                    <Badge className="bg-success/10 text-success">Aktiv</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>Zahlungsmethode verbunden</span>
                    </div>
                    <Badge className="bg-success/10 text-success">Aktiv</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-warning" />
                      <span>Creator Verifizierung</span>
                    </div>
                    <Badge className="bg-warning/10 text-warning">Ausstehend</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Benachrichtigungs-Einstellungen
                </CardTitle>
                <CardDescription>
                  Wähle aus, welche Benachrichtigungen du erhalten möchtest
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Notifications */}
                <div>
                  <h3 className="text-lg font-medium mb-4">E-Mail Benachrichtigungen</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-comments">Neue Kommentare</Label>
                        <p className="text-sm text-muted-foreground">Erhalte E-Mails bei neuen Kommentaren</p>
                      </div>
                      <Switch id="email-comments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-followers">Neue Follower</Label>
                        <p className="text-sm text-muted-foreground">Benachrichtigung bei neuen Followern</p>
                      </div>
                      <Switch id="email-followers" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-sales">Verkäufe</Label>
                        <p className="text-sm text-muted-foreground">E-Mail bei jedem Verkauf</p>
                      </div>
                      <Switch id="email-sales" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-tips">Tips & Belohnungen</Label>
                        <p className="text-sm text-muted-foreground">Benachrichtigung bei erhaltenen Tips</p>
                      </div>
                      <Switch id="email-tips" defaultChecked />
                    </div>
                  </div>
                </div>

                {/* Push Notifications */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Push Benachrichtigungen</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-comments">Kommentare</Label>
                        <p className="text-sm text-muted-foreground">Sofortige Benachrichtigung bei Kommentaren</p>
                      </div>
                      <Switch id="push-comments" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-weekly">Wöchentlicher Bericht</Label>
                        <p className="text-sm text-muted-foreground">Zusammenfassung deiner Woche</p>
                      </div>
                      <Switch id="push-weekly" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-features">Neue Features</Label>
                        <p className="text-sm text-muted-foreground">Updates über neue Plattform-Features</p>
                      </div>
                      <Switch id="push-features" defaultChecked />
                    </div>
                  </div>
                </div>

                {/* Marketing */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Marketing & Updates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="marketing-tips">Creator Tipps</Label>
                        <p className="text-sm text-muted-foreground">Hilfreiche Tipps für Content Creators</p>
                      </div>
                      <Switch id="marketing-tips" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="marketing-newsletter">Newsletter</Label>
                        <p className="text-sm text-muted-foreground">Wöchentlicher Cheflify Newsletter</p>
                      </div>
                      <Switch id="marketing-newsletter" />
                    </div>
                  </div>
                </div>

                <Button className="gradient-primary text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Einstellungen speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Zahlungsmethoden
                </CardTitle>
                <CardDescription>
                  Verwalte deine Auszahlungseinstellungen und Steuerinformationen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stripe Connect */}
                <div className="p-4 border border-success/20 bg-success/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-success" />
                      <div>
                        <h3 className="font-medium">Stripe Connect verbunden</h3>
                        <p className="text-sm text-muted-foreground">Konto endet auf ****1234</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verwalten
                    </Button>
                  </div>
                </div>

                {/* Payout Settings */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Auszahlungseinstellungen</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="min-payout">Minimale Auszahlung</Label>
                        <Select defaultValue="50">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25">€25</SelectItem>
                            <SelectItem value="50">€50</SelectItem>
                            <SelectItem value="100">€100</SelectItem>
                            <SelectItem value="200">€200</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payout-frequency">Auszahlungsfrequenz</Label>
                        <Select defaultValue="weekly">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Täglich</SelectItem>
                            <SelectItem value="weekly">Wöchentlich</SelectItem>
                            <SelectItem value="monthly">Monatlich</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Steuerinformationen</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tax-id">Steuernummer (optional)</Label>
                        <Input id="tax-id" placeholder="Deine Steuernummer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vat-id">USt-IdNr. (optional)</Label>
                        <Input id="vat-id" placeholder="Deine Umsatzsteuer-ID" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-address">Geschäftsadresse</Label>
                      <Textarea 
                        id="business-address" 
                        placeholder="Straße, PLZ Ort, Land"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Current Balance */}
                <Card className="bg-gradient-subtle">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2">Aktuelles Guthaben</h3>
                      <div className="text-3xl font-bold text-primary mb-4">€127.50</div>
                      <Button className="gradient-primary text-white">
                        Auszahlung beantragen
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Button className="gradient-primary text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Einstellungen speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Privatsphäre & Sicherheit
                </CardTitle>
                <CardDescription>
                  Kontrolliere die Sichtbarkeit deines Profils und deiner Inhalte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Visibility */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Profil Sichtbarkeit</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="public-profile">Öffentliches Profil</Label>
                        <p className="text-sm text-muted-foreground">Dein Profil ist für alle sichtbar</p>
                      </div>
                      <Switch id="public-profile" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-follower-count">Follower-Anzahl anzeigen</Label>
                        <p className="text-sm text-muted-foreground">Andere können deine Follower-Anzahl sehen</p>
                      </div>
                      <Switch id="show-follower-count" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-location">Standort anzeigen</Label>
                        <p className="text-sm text-muted-foreground">Dein Standort wird in deinem Profil angezeigt</p>
                      </div>
                      <Switch id="show-location" />
                    </div>
                  </div>
                </div>

                {/* Content Settings */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Content Einstellungen</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="allow-comments">Kommentare erlauben</Label>
                        <p className="text-sm text-muted-foreground">Nutzer können deine Rezepte kommentieren</p>
                      </div>
                      <Switch id="allow-comments" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="moderate-comments">Kommentare moderieren</Label>
                        <p className="text-sm text-muted-foreground">Kommentare vor Veröffentlichung prüfen</p>
                      </div>
                      <Switch id="moderate-comments" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="allow-downloads">Downloads erlauben</Label>
                        <p className="text-sm text-muted-foreground">Nutzer können Rezepte als PDF herunterladen</p>
                      </div>
                      <Switch id="allow-downloads" defaultChecked />
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Sicherheit</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Aktuelles Passwort</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Neues Passwort</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Passwort bestätigen</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button variant="outline">
                      Passwort ändern
                    </Button>
                  </div>
                </div>

                {/* Two Factor */}
                <div className="p-4 border border-warning/20 bg-warning/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-6 h-6 text-warning" />
                      <div>
                        <h3 className="font-medium">Zwei-Faktor-Authentifizierung</h3>
                        <p className="text-sm text-muted-foreground">Zusätzliche Sicherheit für dein Konto</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Aktivieren
                    </Button>
                  </div>
                </div>

                <Button className="gradient-primary text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Einstellungen speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Darstellung & Theme
                </CardTitle>
                <CardDescription>
                  Personalisiere das Aussehen deines Dashboards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 border rounded-lg cursor-pointer hover:border-primary">
                      <div className="w-full h-12 bg-background border rounded mb-2"></div>
                      <p className="text-sm font-medium text-center">Hell</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:border-primary border-primary">
                      <div className="w-full h-12 bg-gradient-primary rounded mb-2"></div>
                      <p className="text-sm font-medium text-center">Standard</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer hover:border-primary">
                      <div className="w-full h-12 bg-gray-900 rounded mb-2"></div>
                      <p className="text-sm font-medium text-center">Dunkel</p>
                    </div>
                  </div>
                </div>

                {/* Language */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Sprache & Region</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="interface-language">Interface Sprache</Label>
                      <Select defaultValue="de">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Zeitzone</Label>
                      <Select defaultValue="europe-berlin">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="europe-berlin">Berlin (UTC+1)</SelectItem>
                          <SelectItem value="europe-london">London (UTC+0)</SelectItem>
                          <SelectItem value="america-newyork">New York (UTC-5)</SelectItem>
                          <SelectItem value="asia-tokyo">Tokyo (UTC+9)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Display Preferences */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Anzeige Einstellungen</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="compact-mode">Kompakter Modus</Label>
                        <p className="text-sm text-muted-foreground">Mehr Inhalte auf dem Bildschirm anzeigen</p>
                      </div>
                      <Switch id="compact-mode" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="animations">Animationen</Label>
                        <p className="text-sm text-muted-foreground">Weiche Übergänge und Animationen</p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sidebar-collapsed">Sidebar eingeklappt</Label>
                        <p className="text-sm text-muted-foreground">Sidebar standardmäßig minimiert anzeigen</p>
                      </div>
                      <Switch id="sidebar-collapsed" />
                    </div>
                  </div>
                </div>

                <Button className="gradient-primary text-white">
                  <Save className="w-4 h-4 mr-2" />
                  Einstellungen speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Danger Zone */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive">Gefahrenbereich</CardTitle>
            <CardDescription>
              Irreversible Aktionen für dein Konto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Account deaktivieren</h3>
                <p className="text-sm text-muted-foreground">Dein Account wird temporär deaktiviert</p>
              </div>
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                Deaktivieren
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Account löschen</h3>
                <p className="text-sm text-muted-foreground">Alle deine Daten werden permanent gelöscht</p>
              </div>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Account löschen
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;