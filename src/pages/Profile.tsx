
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { User, Coins, TrendingUp, Share, Settings } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-muted-foreground">{user?.email}</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-coin-gold">{user?.coins}</p>
              <p className="text-sm text-muted-foreground">Current Coins</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{user?.totalEarnings}</p>
              <p className="text-sm text-muted-foreground">Total Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Coins className="w-6 h-6 text-coin-gold mx-auto mb-2" />
            <p className="text-lg font-bold">125</p>
            <p className="text-sm text-muted-foreground">Ads Watched</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-lg font-bold">15</p>
            <p className="text-sm text-muted-foreground">Referrals</p>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <Share className="w-4 h-4 mr-2" />
          Share Referral Code: {user?.referralCode}
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        
        <Button variant="destructive" onClick={logout} className="w-full">
          Sign Out
        </Button>
      </div>
    </div>
  );
}