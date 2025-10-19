
import { NavLink } from 'react-router-dom';
import { Home, TrendingUp, Wallet, Trophy, Users } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/earnings', icon: TrendingUp, label: 'Earnings' },
  { to: '/withdraw', icon: Wallet, label: 'Withdraw' },
  { to: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
  { to: '/referrals', icon: Users, label: 'Referrals' }
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 text-xs transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <Icon className="w-5 h-5 mb-1" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}