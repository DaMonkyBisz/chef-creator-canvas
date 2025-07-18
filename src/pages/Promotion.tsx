import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Zap, Trophy, Target, Clock, Users, Star, Coins } from "lucide-react";

const Promotion = () => {
  const promotionOptions = [
    {
      id: 1,
      title: "Featured Rezept",
      description: "Dein Rezept wird 24h in der Featured-Sektion angezeigt",
      cost: 50,
      expectedReach: "5.000-8.000",
      duration: "24 Stunden",
      icon: Star,
      popular: false
    },
    {
      id: 2,
      title: "Trending Boost",
      description: "Erhöhe die Sichtbarkeit in den Trending-Rezepten",
      cost: 100,
      expectedReach: "10.000-15.000",
      duration: "48 Stunden",
      icon: TrendingUp,
      popular: true
    },
    {
      id: 3,
      title: "Premium Spotlight",
      description: "Top-Platzierung mit erweiterter Reichweite",
      cost: 200,
      expectedReach: "20.000-30.000",
      duration: "72 Stunden",
      icon: Zap,
      popular: false
    }
  ];

  const activeChallenges = [
    {
      id: 1,
      title: "Herbst-Rezepte Challenge",
      description: "Teile dein bestes Herbstrezept und gewinne 500 Coins",
      deadline: "31. Oktober 2024",
      participants: 142,
      prize: "500 Coins + Featured Badge",
      status: "active"
    },
    {
      id: 2,
      title: "Schnelle Küche",
      description: "Rezepte unter 20 Minuten Zubereitungszeit",
      deadline: "15. November 2024",
      participants: 89,
      prize: "300 Coins + Trending Boost",
      status: "active"
    },
    {
      id: 3,
      title: "Vegane Vielfalt",
      description: "Kreative vegane Rezeptideen gesucht",
      deadline: "20. November 2024",
      participants: 67,
      prize: "400 Coins + Premium Spotlight",
      status: "active"
    }
  ];

  const campaignStats = [
    { label: "Aktive Promotions", value: "3", icon: Zap },
    { label: "Gesamte Reichweite", value: "45.2K", icon: Users },
    { label: "ROI dieser Woche", value: "+23%", icon: TrendingUp },
    { label: "Verfügbare Coins", value: "1,250", icon: Coins }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gradient">Promotion & Boost</h1>
          <p className="text-muted-foreground">
            Erhöhe die Sichtbarkeit deiner Rezepte und nimm an spannenden Challenges teil
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {campaignStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="card-hover">
                <CardContent className="flex items-center p-6">
                  <IconComponent className="h-8 w-8 text-cheflify-mint mr-4" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gradient">
                      {stat.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="boost" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="boost">Rezept Boosten</TabsTrigger>
            <TabsTrigger value="challenges">Challenges & Kampagnen</TabsTrigger>
          </TabsList>

          <TabsContent value="boost" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-cheflify-purple" />
                  Boost-Optionen
                </CardTitle>
                <CardDescription>
                  Investiere Coins, um die Reichweite deiner Rezepte zu erhöhen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {promotionOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <Card key={option.id} className={`relative card-hover ${option.popular ? 'ring-2 ring-cheflify-mint' : ''}`}>
                        {option.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-cheflify-mint text-white">
                            Beliebt
                          </Badge>
                        )}
                        <CardHeader className="text-center">
                          <IconComponent className="h-8 w-8 text-cheflify-blue mx-auto mb-2" />
                          <CardTitle className="text-lg">{option.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {option.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Kosten:</span>
                              <span className="font-medium text-cheflify-purple">
                                {option.cost} Coins
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Reichweite:</span>
                              <span className="font-medium">{option.expectedReach}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Dauer:</span>
                              <span className="font-medium">{option.duration}</span>
                            </div>
                          </div>
                          <Button className="w-full btn-gradient">
                            Jetzt boosten
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Promotions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-cheflify-teal" />
                  Aktuelle Promotions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Mediterrane Pasta</h4>
                      <p className="text-sm text-muted-foreground">Featured Rezept • noch 8 Stunden</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-cheflify-mint">+2.4K Views</p>
                      <p className="text-xs text-muted-foreground">+24% vs. normal</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Veganer Burger</h4>
                      <p className="text-sm text-muted-foreground">Trending Boost • noch 20 Stunden</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-cheflify-mint">+1.8K Views</p>
                      <p className="text-xs text-muted-foreground">+18% vs. normal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-cheflify-purple" />
                  Aktuelle Challenges
                </CardTitle>
                <CardDescription>
                  Nimm an Challenges teil und gewinne Coins sowie Premium-Features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {activeChallenges.map((challenge) => (
                    <Card key={challenge.id} className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{challenge.title}</CardTitle>
                          <Badge variant="secondary" className="bg-cheflify-mint/20 text-cheflify-mint border-cheflify-mint/30">
                            Aktiv
                          </Badge>
                        </div>
                        <CardDescription>
                          {challenge.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>Deadline: {challenge.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{challenge.participants} Teilnehmer</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-cheflify-purple">
                              {challenge.prize}
                            </span>
                          </div>
                        </div>
                        <Button className="w-full btn-gradient">
                          Teilnehmen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenge Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-cheflify-teal" />
                  Deine Challenge-Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">7</p>
                    <p className="text-sm text-muted-foreground">Teilgenommene Challenges</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">3</p>
                    <p className="text-sm text-muted-foreground">Gewonnene Challenges</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-gradient">1,200</p>
                    <p className="text-sm text-muted-foreground">Gewonnene Coins</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Promotion;