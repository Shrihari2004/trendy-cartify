
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { CreditCard, Wallet, DollarSign, Truck } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const { state, clearCart } = useCart();

  const handlePaymentProcess = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }

    // Simulate payment processing
    toast.success(`Payment processed via ${getPaymentMethodName(paymentMethod)}`);
    clearCart();
    onClose();
  };

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "paytm": return "Paytm";
      case "gpay": return "Google Pay";
      case "card": return "Credit/Debit Card";
      case "cod": return "Cash on Delivery";
      default: return method;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Select Payment Method
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-accent">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center cursor-pointer">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Credit/Debit Card
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-accent">
                <RadioGroupItem value="paytm" id="paytm" />
                <Label htmlFor="paytm" className="flex items-center cursor-pointer">
                  <Wallet className="w-5 h-5 mr-2" />
                  Paytm
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-accent">
                <RadioGroupItem value="gpay" id="gpay" />
                <Label htmlFor="gpay" className="flex items-center cursor-pointer">
                  <Wallet className="w-5 h-5 mr-2" />
                  Google Pay
                </Label>
              </div>
              
              <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-accent">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex items-center cursor-pointer">
                  <Truck className="w-5 h-5 mr-2" />
                  Cash on Delivery
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{state.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹{(state.totalPrice * 0.18).toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{(state.totalPrice + state.totalPrice * 0.18).toFixed(2)}</span>
            </div>
          </div>
          
          <Button className="w-full" onClick={handlePaymentProcess}>
            <DollarSign className="mr-2 h-4 w-4" />
            Complete Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
