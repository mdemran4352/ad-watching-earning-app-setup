
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TrendingUp, Calendar, Coins, Eye } from 'lucide-react';

const earningHistory = [
  { id: 1, type: 'Ad Watch', amount: 10, date: '2024-01-20 14:30' },
  { id: 2, type: 'Daily Bonus', amount: 50, date: '2024-01-20 09:00' },
  { id: 3, type: 'Referral Bonus', amount: 100, date: '2024-01-19 16:45' },
  { id: 4, type: 'Ad Watch', amount: 10, date: '2024-01-19 15:20' },
  { id: 5, type: 'Ad Watch', amount: 10, date: '2024-01-19 14:10' },
];

export default function Earnings() {
  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">180</p>
            <p className="text-sm text-muted-foreground">Today's Earnings</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-coin-gold mx-auto mb-2" />
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-sm text-muted-foreground">This Week</p>
          </CardContent>
        </Card>
      </div>

      {/* Earning History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Earnings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {earningHistory.map((earning) => (
            <div key={earning.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  {earning.type === 'Ad Watch' ? (
                    <Eye className="w-4 h-4 text-primary" />
                  ) : (
                    <Coins className="w-4 h-4 text-coin-gold" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{earning.type}</p>
                  <p className="text-sm text-muted-foreground">{earning.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">+{earning.amount}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}