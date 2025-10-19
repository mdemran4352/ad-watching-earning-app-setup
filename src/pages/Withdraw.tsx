
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Wallet, CreditCard, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [account, setAccount] = useState('');

  const handleWithdraw = () => {
    if (!amount || !method || !account) {
      toast.error('Please fill all fields');
      return;
    }
    toast.success('Withdrawal request submitted for review');
    setAmount('');
    setMethod('');
    setAccount('');
  };

  const withdrawMethods = [
    { value: 'bkash', label: 'bKash', icon: Smartphone },
    { value: 'nagad', label: 'Nagad', icon: Smartphone },
    { value: 'paypal', label: 'PayPal', icon: CreditCard },
    { value: 'usdt', label: 'USDT', icon: Wallet },
  ];

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Withdraw</h1>
        <p className="text-muted-foreground">Cash out your earnings</p>
      </div>

      {/* Current Balance */}
      <Card className="withdraw-gradient text-white">
        <CardContent className="p-6 text-center">
          <Wallet className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm opacity-90">Available Balance</p>
          <p className="text-3xl font-bold">1,250 Coins</p>
          <p className="text-sm opacity-75">≈ ৳25.00</p>
        </CardContent>
      </Card>

      {/* Withdrawal Form */}
      <Card>
        <CardHeader>
          <CardTitle>Withdrawal Request</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Amount (Coins)</label>
            <Input
              type="number"
              placeholder="Minimum 5000 coins"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              5000 coins = ৳100
            </p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Payment Method</label>
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                {withdrawMethods.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Account Details</label>
            <Input
              placeholder="Phone number / Email / Wallet address"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>

          <Button onClick={handleWithdraw} className="w-full">
            Submit Withdrawal Request
          </Button>
        </CardContent>
      </Card>

      {/* Withdrawal History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Withdrawals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">bKash</p>
                <p className="text-xs text-muted-foreground">Jan 10, 2024</p>
              </div>
              <div className="text-right">
                <p className="font-bold">৳200</p>
                <p className="text-xs text-green-600">Completed</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium text-sm">PayPal</p>
                <p className="text-xs text-muted-foreground">Jan 5, 2024</p>
              </div>
              <div className="text-right">
                <p className="font-bold">$15</p>
                <p className="text-xs text-yellow-600">Pending</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}