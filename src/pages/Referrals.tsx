
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, Share, Copy, Gift } from 'lucide-react';
import { toast } from 'sonner';

const referralHistory = [
  { id: 1, name: 'Alice Johnson', joined: '2024-01-18', earned: 100 },
  { id: 2, name: 'Bob Smith', joined: '2024-01-15', earned: 100 },
  { id: 3, name: 'Carol Davis', joined: '2024-01-12', earned: 100 },
];

export default function Referrals() {
  const { user } = useAuth();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(user?.referralCode || '');
    toast.success('Referral code copied to clipboard!');
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join EarnApp',
        text: `Use my referral code ${user?.referralCode} to get bonus coins!`,
        url: window.location.origin
      });
    } else {
      copyReferralCode();
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Referral Stats */}
      <Card className="earning-gradient text-white">
        <CardContent className="p-6 text-center">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Invite Friends</h1>
          <p className="opacity-90 mb-4">Earn 100 coins for each friend</p>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-sm opacity-90">Your Referral Code</p>
            <p className="text-2xl font-bold">{user?.referralCode}</p>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={shareReferral} className="flex-col h-auto py-4">
          <Share className="w-6 h-6 mb-2" />
          Share Code
        </Button>
        
        <Button onClick={copyReferralCode} variant="outline" className="flex-col h-auto py-4">
          <Copy className="w-6 h-6 mb-2" />
          Copy Code
        </Button>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{referralHistory.length}</p>
            <p className="text-sm text-muted-foreground">Friends Joined</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Gift className="w-6 h-6 text-coin-gold mx-auto mb-2" />
            <p className="text-2xl font-bold">{referralHistory.length * 100}</p>
            <p className="text-sm text-muted-foreground">Coins Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral History */}
      <Card>
        <CardHeader>
          <CardTitle>Your Referrals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {referralHistory.map((referral) => (
            <div key={referral.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{referral.name}</p>
                  <p className="text-sm text-muted-foreground">Joined {referral.joined}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-coin-gold">+{referral.earned}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}