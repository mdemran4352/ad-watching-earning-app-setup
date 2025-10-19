
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
    const interval =