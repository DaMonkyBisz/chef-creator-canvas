import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Video, 
  Coins, 
  Users, 
  TrendingUp,
  Star,
  Play,
  Check,
  ArrowRight,
  Heart,
  Award,
  Target,
  Zap,
  DollarSign,
  Camera,
  BookOpen,
  MessageCircle
} from 'lucide-react';

const Creator = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "MealsReelz Videos",
      description: "Erstelle fesselnde Kurz-Videos deiner Kochkünste und erreiche Millionen von Food-Liebhabern"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Premium Rezepte",
      description: "Monetarisiere deine besten Rezepte und verdiene mit jedem Download Coins"
    },
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Coin-System",
      description: "Verdiene echtes Geld durch unser innovatives Coin-System - jeder View zählt"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Baue eine loyale Follower-Basis auf und interagiere direkt mit deinen Fans"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics",
      description: "Detaillierte Einblicke in deine Performance und Optimierungsmöglichkeiten"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Creator Tools",
      description: "Professionelle Tools für Content-Erstellung, AI-Unterstützung und mehr"
    }
  ];

  const stats = [
    { number: "50K+", label: "Aktive Creator" },
    { number: "2M+", label: "Rezepte geteilt" },
    { number: "€500K+", label: "Ausgezahlt" },
    { number: "4.8★", label: "Creator Rating" }
  ];

  const testimonials = [
    {
      name: "Maria Schmidt",
      role: "Food Blogger",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      content: "Mit Cheflify konnte ich meine Passion für's Kochen in ein lukratives Business verwandeln. Über €2000 im ersten Monat!",
      earnings: "€2.100/Monat"
    },
    {
      name: "Chef Andreas",
      role: "Profi-Koch",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      content: "Die Plattform gibt mir die Freiheit, mein Wissen zu teilen und dabei sehr gut zu verdienen. Die Community ist fantastisch!",
      earnings: "€4.500/Monat"
    },
    {
      name: "Lisa Weber",
      role: "Home Cook",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      content: "Als Hobby-Köchin hätte ich nie gedacht, dass ich mit meinen Rezepten Geld verdienen kann. Cheflify hat's möglich gemacht!",
      earnings: "€850/Monat"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Kostenlos",
      description: "Perfekt für den Einstieg",
      features: [
        "Bis zu 10 Rezepte pro Monat",
        "Basic Video-Upload",
        "Community Zugang",
        "Standard Support"
      ],
      cta: "Kostenlos starten",
      popular: false
    },
    {
      name: "Creator Pro",
      price: "€19/Monat",
      description: "Für ambitionierte Creator",
      features: [
        "Unlimited Rezepte",
        "HD Video-Upload",
        "Premium Analytics",
        "Priority Support",
        "AI-Assistent",
        "Custom Branding"
      ],
      cta: "Pro werden",
      popular: true
    },
    {
      name: "Studio",
      price: "€49/Monat",
      description: "Für Profis und Brands",
      features: [
        "Alles aus Creator Pro",
        "4K Video-Upload",
        "Team Collaboration",
        "Advanced Analytics",
        "Dedicated Manager",
        "White-Label Option"
      ],
      cta: "Studio starten",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">Cheflify</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Anmelden</Button>
            <Button className="bg-primary hover:bg-primary/90">Creator werden</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Star className="w-4 h-4 mr-1" />
            #1 Creator Plattform für Köche
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Werde ein 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Cheflify Creator
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Teile deine Kochkünste mit der Welt und verdiene echtes Geld mit deinen Rezepten, Videos und kulinarischen Kreationen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Play className="w-5 h-5 mr-2" />
              Jetzt kostenlos starten
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              <Video className="w-5 h-5 mr-2" />
              Demo anschauen
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Alles was du brauchst, um erfolgreich zu sein
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unsere Plattform bietet dir alle Tools und Features, um deine kulinarischen Inhalte zu monetarisieren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all card-hover">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Was unsere Creator sagen
            </h2>
            <p className="text-xl text-muted-foreground">
              Echte Erfolgsgeschichten von echten Köchen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20 w-fit">
                    <DollarSign className="w-3 h-3 mr-1" />
                    {testimonial.earnings}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Wähle deinen Creator Plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Starte kostenlos und upgrade wenn du bereit bist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative card-hover ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Beliebteste Wahl
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit, deine Kochkünste zu monetarisieren?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schließe dich über 50.000 erfolgreichen Creators an und starte noch heute dein kulinarisches Business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Zap className="w-5 h-5 mr-2" />
              Jetzt Creator werden
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Fragen? Kontaktiere uns
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl gradient-text">Cheflify</span>
              </div>
              <p className="text-muted-foreground">
                Die führende Plattform für Koch-Content-Creator. Teile, monetarisiere und wachse.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Creator</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Creator werden</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Erfolgsgeschichten</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Hilfe Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Presse</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cheflify. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Creator;