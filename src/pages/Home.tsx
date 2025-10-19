
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
      <div className="relative overflow-hidden rounded-2xl earning-gradient p-6 text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">Start Earning Today!</h1>
          <p className="text-white/90 mb-4">Watch ads and earn coins instantly</p>
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5" />
            <span className="text-lg font-semibold">{user?.coins || 0} Coins</span>
          </div>
        </div>
      </div>

      {/* Watch Ad Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            Watch Ads
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isWatchingAd ? (
            <div className="space-y-3">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <p className="text-sm text-muted-foreground">Watching ad...</p>
              </div>
              <Progress value={adProgress} className="w-full" />
              <p className="text-xs text-center text-muted-foreground">
                {Math.round(adProgress)}% complete
              </p>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">Earn 10 coins per ad</p>
                <p className="text-sm text-muted-foreground">30-40 seconds each</p>
              </div>
              <Button onClick={watchAd} className="w-full pulse-glow">
                <Play className="w-4 h-4 mr-2" />
                Watch Ad Now
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Gift className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="font-medium text-sm">Daily Bonus</p>
            <p className="text-xs text-muted-foreground">50 coins</p>
            <Button size="sm" variant="outline" className="mt-2 w-full" onClick={dailyBonus}>
              Claim
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="font-medium text-sm">Spin & Win</p>
            <p className="text-xs text-muted-foreground">Coming Soon</p>
            <Button size="sm" variant="outline" className="mt-2 w-full" disabled>
              Play
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Your Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{user?.coins || 0}</p>
              <p className="text-sm text-muted-foreground">Current Coins</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{user?.totalEarnings || 0}</p>
              <p className="text-sm text-muted-foreground">Total Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}