
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Earnings from './pages/Earnings';
import Withdraw from './pages/Withdraw';
import Leaderboard from './pages/Leaderboard';
import Referrals from './pages/Referrals';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="withdraw" element={<Withdraw />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="referrals" element={<Referrals />} />
              </Route>
            </Routes>
            <Toaster position="top-center" />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;