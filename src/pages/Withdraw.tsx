
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Wallet, CreditCard, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

const withdrawMethods = [
  { id: 'bkash', name: 'bKash', icon: Smartphone, min: 5000 },
  { id: 'nagad', name: 'Nagad', icon: Smartphone, min: 5000 },
  { id: 'paypal', name: 'PayPal', icon: CreditCard, min: 10000 },
  { id: 'usdt', name: 'USDT', icon: Wallet, min: 15000 },
];

export default function Withdraw() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');

  const handleWithdraw = () => {
    toast.success('Withdrawal request submitted! We will process it within 24 hours.');
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      {/* Balance Card */}
      <Card className="withdraw-gradient text-white">
        <CardContent className="p-6 text-center">
          <Wallet className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Available Balance</h2>
          <p className="text-4xl font-bold">1,250</p>
          <p className="opacity-90">coins</p>
        </CardContent>
      </Card>

      {/* Withdraw Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Withdrawal Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {withdrawMethods.map((method) => (
            <div
              key={method.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedMethod === method.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <method.icon className="w-6 h-6" />
                  <div>
                    <p className="font-medium">{method.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Min: {method.min} coins
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 border-2 rounded-full border-primary flex items-center justify-center">
                  {selectedMethod === method.id && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Withdraw Form */}
      {selectedMethod && (
        <Card>
          <CardHeader>
            <CardTitle>Withdrawal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (coins)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="account">Account Details</Label>
              <Input
                id="account"
                placeholder="Enter account number/email"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>
            
            <Button onClick={handleWithdraw} className="w-full" size="lg">
              Request Withdrawal
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}