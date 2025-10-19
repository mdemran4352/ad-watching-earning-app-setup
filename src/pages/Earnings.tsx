
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TrendingUp, Calendar, Coins, Target } from 'lucide-react';

export default function Earnings() {
  const earningsData = [
    { date: '2024-01-15', amount: 150, type: 'Ad Watch' },
    { date: '2024-01-14', amount: 50, type: 'Daily Bonus' },
    { date: '2024-01-14', amount: 120, type: 'Ad Watch' },
    { date: '2024-01-13', amount: 200, type: 'Referral Bonus' },
  ];

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Earnings</h1>
        <p className="text-muted-foreground">Track your earning progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">2,500</p>
            <p className="text-sm text-muted-foreground">Total Earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">520</p>
            <p className="text-sm text-muted-foreground">This Month</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress to Next Payout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Next Payout Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to 5,000 coins</span>
              <span>1,250 / 5,000</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <p className="text-xs text-muted-foreground">3,750 coins remaining for withdrawal</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Earnings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {earningsData.map((earning, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Coins className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{earning.type}</p>
                    <p className="text-xs text-muted-foreground">{earning.date}</p>
                  </div>
                </div>
                <span className="font-bold text-primary">+{earning.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}