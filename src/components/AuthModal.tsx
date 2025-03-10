
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Facebook, Twitter } from "lucide-react";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would contain actual authentication logic
    toast.success(`Successfully ${isSignUp ? "signed up" : "signed in"}!`);
    onClose();
  };

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would redirect to the OAuth provider
    window.open(`https://www.${provider}.com`, "_blank");
    toast(`Redirecting to ${provider} login...`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-xl bg-background/70 border-border/50 text-foreground">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl tracking-tight">
            {isSignUp ? "Create an account" : "Welcome back"}
          </DialogTitle>
          <DialogDescription>
            {isSignUp
              ? "Sign up to start shopping and save your favorites."
              : "Sign in to your account to continue."}
          </DialogDescription>
        </DialogHeader>
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="grid gap-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background/40"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background/90 px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              className="bg-background/40"
              onClick={() => handleSocialLogin("google")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="h-5 w-5"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            </Button>
            
            <Button
              variant="outline"
              className="bg-background/40"
              onClick={() => handleSocialLogin("facebook")}
            >
              <Facebook className="h-5 w-5 text-[#1877F2]" />
            </Button>
            
            <Button
              variant="outline"
              className="bg-background/40"
              onClick={() => handleSocialLogin("twitter")}
            >
              <Twitter className="h-5 w-5 text-[#1DA1F2]" />
            </Button>
          </div>
          
          <div className="text-center text-sm">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              className="underline transition-colors hover:text-primary"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
