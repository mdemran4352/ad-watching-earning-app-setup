
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Trophy, Medal, Award, User } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'John Doe', coins: 15420, avatar: '🥇' },
  { rank: 2, name: 'Jane Smith', coins: 12350, avatar: '🥈' },
  { rank: 3, name: 'Mike Johnson', coins: 10890, avatar: '🥉' },
  { rank: 4, name: 'Sarah Wilson', coins: 8750, avatar: '👤' },
  { rank: 5, name: 'David Brown', coins: 7650, avatar: '👤' },
  { rank: 6, name: 'Lisa Davis', coins: 6540, avatar: '👤' },
];

export default function Leaderboard() {
  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Header */}
      <Card className="earning-gradient text-white">
        <CardContent className="p-6 text-center">
          <Trophy className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <p className="opacity-90">Top earners this month</p>
        </CardContent>
      </Card>

      {/* Top 3 */}
      <div className="grid grid-cols-3 gap-2">
        {leaderboardData.slice(0, 3).map((user) => (
          <Card key={user.rank} className="text-center">
            <CardContent className="p-4">
              <div className="text-3xl mb-2">{user.avatar}</div>
              <p className="font-bold text-sm">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.coins} coins</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>All Rankings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {leaderboardData.map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm">#{user.rank}</span>
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.coins} coins</p>
                </div>
              </div>
              <div className="text-2xl">
                {user.rank <= 3 ? user.avatar : '👤'}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}