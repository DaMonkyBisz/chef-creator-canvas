import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Coins, 
  CreditCard,
  Download,
  Calendar,
  ArrowUpRight,
  DollarSign,
  Wallet,
  PiggyBank,
  Target
} from "lucide-react";

const stats = [
  {
    title: "Gesamteinnahmen",
    value: "€2,450.00",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "Letzten 30 Tage"
  },
  {
    title: "Coins-Guthaben",
    value: "2,450",
    change: "+245",
    trend: "up",
    icon: Coins,
    description: "Verfügbare Coins"
  },
  {
    title: "Auszahlbar",
    value: "€1,890.00",
    change: "€50 Mindestbetrag",
    trend: "neutral",
    icon: Wallet,
    description: "Bereit zur Auszahlung"
  },
  {
    title: "Monatsziel",
    value: "77%",
    change: "€230 bis Ziel",
    trend: "up",
    icon: Target,
    description: "€3,000 Ziel"
  }
];

const transactions = [
  {
    id: 1,
    type: "Verkauf",
    description: "Pasta Carbonara Deluxe",
    amount: "+€2.50",
    coins: "+2.5",
    date: "Heute, 14:30",
    status: "Abgeschlossen"
  },
  {
    id: 2,
    type: "Verkauf",
    description: "Schokoladen-Lava-Kuchen",
    amount: "+€4.00",
    coins: "+4.0",
    date: "Gestern, 09:15",
    status: "Abgeschlossen"
  },
  {
    id: 3,
    type: "Auszahlung",
    description: "Banküberweisung",
    amount: "-€500.00",
    coins: "",
    date: "3 Tage",
    status: "Verarbeitung"
  },
  {
    id: 4,
    type: "Verkauf",
    description: "Mediterrane Buddha Bowl",
    amount: "+€3.00",
    coins: "+3.0",
    date: "5 Tage",
    status: "Abgeschlossen"
  },
  {
    id: 5,
    type: "Trinkgeld",
    description: "Von @foodlover_123",
    amount: "+€1.50",
    coins: "+1.5",
    date: "1 Woche",
    status: "Abgeschlossen"
  }
];

const Finances = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-brand-purple">Finanzen & Coins</h1>
            <p className="text-muted-foreground">Verwalte deine Einnahmen und Auszahlungen</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button size="lg" className="gap-2 gradient-primary">
              <CreditCard className="w-5 h-5" />
              Auszahlung beantragen
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="stats-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-muted`}>
                      <Icon className={`w-6 h-6 ${
                        stat.title.includes('Coins') ? 'text-brand-mint' :
                        stat.title.includes('Auszahlbar') ? 'text-success' :
                        stat.title.includes('Ziel') ? 'text-brand-blue' :
                        'text-brand-purple'
                      }`} />
                    </div>
                    {stat.trend === 'up' && (
                      <TrendingUp className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                    {stat.change && (
                      <p className={`text-sm mt-1 ${
                        stat.trend === 'up' ? 'text-success' : 
                        stat.trend === 'down' ? 'text-destructive' : 
                        'text-muted-foreground'
                      }`}>
                        {stat.change}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Earnings Overview & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-brand-blue">Monatlicher Fortschritt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Einnahmen-Ziel (€3,000)</span>
                    <span className="text-sm font-bold">€2,310 / €3,000</span>
                  </div>
                  <Progress value={77} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">Noch €690 bis zum Monatsziel</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Coins gesammelt (3,500)</span>
                    <span className="text-sm font-bold">2,450 / 3,500</span>
                  </div>
                  <Progress value={70} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">Noch 1,050 Coins bis zum Ziel</p>
                </div>

                <div className="bg-gradient-secondary rounded-lg p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <PiggyBank className="w-5 h-5" />
                    <span className="font-semibold">Bonus-Tipp</span>
                  </div>
                  <p className="text-sm text-white/90">
                    Erreiche dein Monatsziel und erhalte 10% Bonus auf alle Einnahmen!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payout Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-success">Auszahlung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-5 h-5 text-success" />
                    <span className="font-semibold text-success">Auszahlbar</span>
                  </div>
                  <p className="text-2xl font-bold text-success">€1,890.00</p>
                  <p className="text-sm text-muted-foreground">Mindestbetrag: €50.00</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Bearbeitungszeit:</span>
                    <span className="text-sm font-medium">1-3 Werktage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Gebühren:</span>
                    <span className="text-sm font-medium">Kostenlos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Zahlungsmethode:</span>
                    <span className="text-sm font-medium">SEPA Überweisung</span>
                  </div>
                </div>

                <Button className="w-full gradient-primary gap-2" size="lg">
                  <CreditCard className="w-5 h-5" />
                  Jetzt auszahlen lassen
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Sichere Überweisung via Stripe Connect
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold text-brand-purple">Transaktionshistorie</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1">
              Alle anzeigen
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'Verkauf' ? 'bg-success/10 text-success' :
                      transaction.type === 'Trinkgeld' ? 'bg-brand-mint/10 text-brand-mint' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {transaction.type === 'Verkauf' || transaction.type === 'Trinkgeld' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">{transaction.description}</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        <Badge variant={transaction.status === "Abgeschlossen" ? "default" : "secondary"} className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${transaction.amount.startsWith('+') ? 'text-success' : 'text-muted-foreground'}`}>
                      {transaction.amount}
                    </p>
                    {transaction.coins && (
                      <p className="text-sm text-brand-mint">{transaction.coins} Coins</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Finances;