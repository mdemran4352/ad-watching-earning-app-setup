
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Coins, LogOut } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-card border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Coins className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">EarnApp</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-coin-gold/10 px-3 py-1 rounded-full">
            <Coins className="w-4 h-4 text-coin-gold" />
            <span className="font-bold text-coin-gold">{user?.coins || 0}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}