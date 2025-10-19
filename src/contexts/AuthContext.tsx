
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  coins: number;
  referralCode: string;
  totalEarnings: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateCoins: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const login = async (email: string, password: string) => {
    // Placeholder login logic
    setUser({
      id: '1',
      email,
      name: 'Demo User',
      coins: 1250,
      referralCode: 'REF123',
      totalEarnings: 2500
    });
  };

  const logout = async () => {
    setUser(null);
  };

  const updateCoins = (amount: number) => {
    if (user) {
      setUser({ ...user, coins: user.coins + amount });
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateCoins }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}