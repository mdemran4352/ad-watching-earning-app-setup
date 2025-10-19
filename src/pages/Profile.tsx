
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { User, Mail, Calendar, Coins, LogOut, Settings } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account</p>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback><User className="w-8 h-8" /></AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-muted-foreground">{user?.email}</p>
          
          <div className="flex justify-center gap-4 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{user?.coins}</p>
              <p className="text-xs text-muted-foreground">Current Coins</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{user?.totalEarnings}</p>
              <p className="text-xs text-muted-foreground">Total Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Info */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Member Since</p>
              <p className="text-sm text-muted-foreground">January 2024</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <Coins className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Referral Code</p>
              <p className="text-sm text-muted-foreground">{user?.referralCode}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        
        <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive" onClick={logout}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}