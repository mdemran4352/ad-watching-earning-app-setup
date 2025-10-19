
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: 'Ahmed Khan', earnings: 15420, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face' },
    { rank: 2, name: 'Fatima Ali', earnings: 12350, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face' },
    { rank: 3, name: 'Mohammad Rahman', earnings: 11200, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face' },
    { rank: 4, name: 'Ayesha Begum', earnings: 9800, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face' },
    { rank: 5, name: 'Karim Hassan', earnings: 8900, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-amber-600" />;
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold">{rank}</span>;
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">Top earners this month</p>
      </div>

      {/* Top 3 */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {leaderboardData.slice(0, 3).map((user, index) => (
          <Card key={user.rank} className={`text-center ${index === 0 ? 'ring-2 ring-yellow-500' : ''}`}>
            <CardContent className="p-4">
              <div className="relative mb-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full mx-auto"
                />
                <div className="absolute -top-1 -right-1">
                  {getRankIcon(user.rank)}
                </div>
              </div>
              <p className="font-medium text-sm truncate">{user.name}</p>
              <p className="text-xs text-primary font-bold">{user.earnings.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboardData.map((user) => (
              <div key={user.rank} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8">
                  {getRankIcon(user.rank)}
                </div>
                
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                
                <div className="flex-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {user.earnings.toLocaleString()} coins
                  </p>
                </div>
                
                {user.rank <= 3 && (
                  <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    Top {user.rank}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Rank */}
      <Card className="border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-primary">42</span>
            </div>
            <div className="flex-1">
              <p className="font-medium">Your Rank</p>
              <p className="text-sm text-muted-foreground">2,500 coins earned</p>
            </div>
            <div className="text-xs bg-muted px-2 py-1 rounded-full">
              Keep earning!
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}