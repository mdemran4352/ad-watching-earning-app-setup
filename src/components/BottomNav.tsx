
import { NavLink } from 'react-router-dom';
import { Home, TrendingUp, DollarSign, Trophy, Users } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/earnings', icon: TrendingUp, label: 'Earnings' },
  { to