
import { useAuth } from '../contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Coins, Bell } from 'lucide-react';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-foreground">Hi, {user?.name}</p>
            <div className="flex items-center space-x-1">
              <Coins className="h-3 w-3 text-coin-gold" />
              <span className="text-xs font-semibold text-coin-gold">{user?.coins?.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <Button variant="ghost" size="sm">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;