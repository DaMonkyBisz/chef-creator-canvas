import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, TrendingDown, Eye, Heart, Users, Calendar, Download, Filter } from "lucide-react";

const Statistics = () => {
  const monthlyStats = [
    { month: "Jan", revenue: 450, views: 12500, recipes: 8 },
    { month: "Feb", revenue: 620, views: 15800, recipes: 12 },
    { month: "Mar", revenue: 580, views: 14200, recipes: 10 },
    { month: "Apr", revenue: 750, views: 18900, recipes: 15 },
    { month: "Mai", revenue: 890, views: 22100, recipes: 18 },
    { month: "Jun", revenue: 1120, views: 28400, recipes: 22 }
  ];

  const topRecipes = [
    { 
      name: "Klassische Pasta Carbonara", 
      views: 8500, 
      revenue: 245, 
      engagement: 12.3, 
      trend: "up",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=60&h=60&fit=crop"
    },
    { 
      name: "Vegane Buddha Bowl", 
      views: 6200, 
      revenue: 180, 
      engagement: 9.8, 
      trend: "up",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=60&h=60&fit=crop"
    },
    { 
      name: "Mediterrane Bruschetta", 
      views: 4800, 
      revenue: 95, 
      engagement: 7.2, 
      trend: "down",
      image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=60&h=60&fit=crop"
    },
    { 
      name: "Schokoladen Lava Cake", 
      views: 4100, 
      revenue: 125, 
      engagement: 11.5, 
      trend: "up",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=60&h=60&fit=crop"
    },
    { 
      name: "Asiatische Ramen Bowl", 
      views: 3900, 
      revenue: 110, 
      engagement: 8.9, 
      trend: "up",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=60&h=60&fit=crop"
    }
  ];

  const audienceInsights = {
    demographics: {
      age: [
        { range: "18-24", percentage: 15 },
        { range: "25-34", percentage: 35 },
        { range: "35-44", percentage: 28 },
        { range: "45-54", percentage: 16 },
        { range: "55+", percentage: 6 }
      ],
      countries: [
        { country: "Deutschland", percentage: 45 },
        { country: "Österreich", percentage: 25 },
        { country: "Schweiz", percentage: 20 },
        { country: "Andere", percentage: 10 }
      ]
    },
    interests: [
      { topic: "Gesunde Ernährung", percentage: 68 },
      { topic: "Schnelle Küche", percentage: 52 },
      { topic: "Vegetarisch/Vegan", percentage: 45 },
      { topic: "Desserts", percentage: 38 },
      { topic: "Internationale Küche", percentage: 32 }
    ]
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <TrendingUp className="w-4 h-4 text-success" />
    ) : (
      <TrendingDown className="w-4 h-4 text-destructive" />
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Statistiken & Insights</h1>
            <p className="text-muted-foreground">Analysiere deine Performance und optimiere deinen Content</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="last30">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7">Letzte 7 Tage</SelectItem>
                <SelectItem value="last30">Letzte 30 Tage</SelectItem>
                <SelectItem value="last90">Letzte 90 Tage</SelectItem>
                <SelectItem value="last12">Letzte 12 Monate</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Gesamt Umsatz
              </CardTitle>
              <div className="text-2xl font-bold text-primary">€1.485</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18.2% zur letzten Periode
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Gesamt Views
              </CardTitle>
              <div className="text-2xl font-bold text-primary">125.4K</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.8% zur letzten Periode
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Avg. Engagement
              </CardTitle>
              <div className="text-2xl font-bold text-primary">9.4%</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-destructive">
                <TrendingDown className="w-3 h-3 mr-1" />
                -2.1% zur letzten Periode
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Conversion Rate
              </CardTitle>
              <div className="text-2xl font-bold text-primary">4.2%</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                +0.8% zur letzten Periode
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Data */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="recipes">Top Rezepte</TabsTrigger>
            <TabsTrigger value="audience">Zielgruppe</TabsTrigger>
            <TabsTrigger value="revenue">Umsatz</TabsTrigger>
          </TabsList>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Performance Übersicht</CardTitle>
                <CardDescription>Entwicklung deiner wichtigsten Metriken über die Zeit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Performance Chart würde hier angezeigt</p>
                    <p className="text-sm text-muted-foreground">Integration mit Chart-Library erforderlich</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Wachstum dieser Woche</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Neue Follower</span>
                      <span className="font-medium text-success">+127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Neue Rezepte</span>
                      <span className="font-medium text-primary">+3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Video Views</span>
                      <span className="font-medium text-success">+2.4K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Coin Einnahmen</span>
                      <span className="font-medium text-warning">+89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Best Performing Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Beste Upload-Zeit</span>
                      <span className="font-medium">18:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Beste Wochentage</span>
                      <span className="font-medium">Mi, Do, So</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Peak Engagement</span>
                      <span className="font-medium">Sonntag 19:30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Top Recipes Tab */}
          <TabsContent value="recipes" className="space-y-4">
            {topRecipes.map((recipe, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="font-bold text-lg text-muted-foreground">
                        #{index + 1}
                      </div>
                      <img 
                        src={recipe.image} 
                        alt={recipe.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{recipe.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {recipe.views.toLocaleString()} Views
                          </span>
                          <span>€{recipe.revenue}</span>
                          <span>{recipe.engagement}% Engagement</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(recipe.trend)}
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Audience Tab */}
          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Altersverteilung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {audienceInsights.demographics.age.map((age, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{age.range} Jahre</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${age.percentage * 2}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{age.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Länderverteilung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {audienceInsights.demographics.countries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{country.country}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-secondary rounded-full"
                              style={{ width: `${country.percentage * 2}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{country.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Interessen deiner Zielgruppe</CardTitle>
                <CardDescription>Was interessiert deine Follower am meisten?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {audienceInsights.interests.map((interest, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm font-medium">{interest.topic}</span>
                      <Badge variant="secondary">{interest.percentage}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Revenue Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Umsatz Entwicklung</CardTitle>
                <CardDescription>Monatliche Einnahmen und Trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Umsatz Chart würde hier angezeigt</p>
                    <p className="text-sm text-muted-foreground">Integration mit Chart-Library erforderlich</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Top Umsatz Quellen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Premium Rezepte</span>
                      <span className="font-medium">€892</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Wochenpläne</span>
                      <span className="font-medium">€345</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Video Kurse</span>
                      <span className="font-medium">€248</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Durchschnittswerte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ø Rezeptpreis</span>
                      <span className="font-medium">€3.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ø Monatsertrag</span>
                      <span className="font-medium">€247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ø Conversion</span>
                      <span className="font-medium">4.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Prognose</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Nächster Monat</span>
                      <span className="font-medium text-success">€1.680</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Quartal</span>
                      <span className="font-medium text-success">€4.920</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Jahr</span>
                      <span className="font-medium text-success">€18.500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Insights & Recommendations */}
        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">📊 Persönliche Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">🚀 Verbesserungspotenziale</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Deine Dessert-Rezepte haben 23% höhere Conversion Rates</li>
                  <li>• Sonntag-Posts erreichen 45% mehr Engagement</li>
                  <li>• Videos über 3 Minuten haben niedrigere Watch-Times</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">💡 Empfehlungen</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Erstelle mehr Dessert-Content für höhere Umsätze</li>
                  <li>• Plane wichtige Posts für Sonntag 19:00 Uhr</li>
                  <li>• Teste kürzere Video-Formate (2-3 Minuten)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Statistics;