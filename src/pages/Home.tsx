
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Play, Gift, Zap, Star, Coins } from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const { user, updateCoins } = useAuth();
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adProgress, setAdProgress] = useState(0);

  const watchAd = async () => {
    setIsWatchingAd(true);
    setAdProgress(0);
    
    // Simulate ad watching progress
    const interval = setInterval(() => {
      setAdProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsWatchingAd(false);
          updateCoins(10);
          toast.success('🎉 You earned 10 coins!');
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const dailyBonus = () => {
    updateCoins(50);
    toast.success('🎁 Daily bonus claimed: 50 coins!');
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Hero Section */}
      <div className="earning-gradient rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="opacity-90">Ready to earn some coins?</p>
          </div>
          <div className="coin-shine">
            <Coins className="w-12 h-12" />
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Your Balance</p>
              <p className="text-3xl font-bold">{user?.coins || 0}</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Total Earned</p>
              <p className="text-xl font-semibold">{user?.totalEarnings || 0}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Watch Ad Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            Watch Ads & Earn
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isWatchingAd ? (
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Watching ad...</p>
                <p className="text-2xl font-bold">{Math.floor(adProgress / 100 * 30)}s</p>
              </div>
              <Progress value={adProgress} className="h-2" />
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="bg-coin-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Coins className="w-8 h-8 text-coin-gold" />
              </div>
              <div>
                <p className="font-semibold">Earn 10 coins per ad</p>
                <p className="text-sm text-muted-foreground">Watch 30-second video ads</p>
              </div>
              <Button 
                onClick={watchAd} 
                className="w-full pulse-glow"
                size="lg"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Ad Now
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Daily Bonus */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Daily Bonus</p>
                <p className="text-sm text-muted-foreground">Claim 50 coins</p>
              </div>
            </div>
            <Button onClick={dailyBonus} variant="outline">
              Claim
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-muted-foreground">Ads Today</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-6 h-6 text-coin-gold mx-auto mb-2" />
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}