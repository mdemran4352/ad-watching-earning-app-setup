
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Users, Copy, Gift, Share } from 'lucide-react';
import { toast } from 'sonner';

export default function Referrals() {
  const { user } = useAuth();
  const [referralCode] = useState(user?.referralCode || 'REF123456');

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success('Referral code copied!');
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join EarnApp',
        text: `Use my referral code ${referralCode} to get bonus coins!`,
        url: `https://earnapp.com/ref/${referralCode}`
      });
    } else {
      copyReferralCode();
    }
  };

  const referralHistory = [
    { name: 'John Doe', date: '2024-01-15', bonus: 100, status: 'Active' },
    { name: 'Jane Smith', date: '2024-01-12', bonus: 100, status: 'Active' },
    { name: 'Mike Johnson', date: '2024-01-10', bonus: 100, status: 'Pending' },
  ];

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Referrals</h1>
        <p className="text-muted-foreground">Invite friends and earn together</p>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Friends Invited</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Gift className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">1,200</p>
            <p className="text-sm text-muted-foreground">Bonus Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Code */}
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Code</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input value={referralCode} readOnly className="font-mono" />
            <Button variant="outline" onClick={copyReferralCode}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          
          <Button onClick={shareReferral} className="w-full">
            <Share className="w-4 h-4 mr-2" />
            Share Referral Link
          </Button>
          
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium mb-1">Earn 100 coins per referral!</p>
            <p className="text-xs text-muted-foreground">
              Your friends get 50 bonus coins when they sign up
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Referral History */}
      <Card>
        <CardHeader>
          <CardTitle>Referral History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {referralHistory.map((referral, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{referral.name}</p>
                  <p className="text-xs text-muted-foreground">{referral.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">+{referral.bonus}</p>
                  <p className={`text-xs ${referral.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {referral.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}