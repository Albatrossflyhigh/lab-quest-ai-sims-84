import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Check, Mail, Info } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import VBotAvatar from '@/components/VBotAvatar';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { GlowingCard } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

// Form schema
const signupSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
      { message: 'Password must contain uppercase, lowercase and number' }),
  confirmPassword: z.string(),
  role: z.enum(['student', 'educator', 'researcher']),
  termsAgreed: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms and privacy policy' }),
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student',
      termsAgreed: false,
    }
  });

  const onSubmit = async (values: SignupFormValues) => {
    setIsLoading(true);
    
    // Simulate API call
    try {
      console.log('Form submitted:', values);
      
      // Add artificial delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Success!',
        description: 'Your account has been created.',
        variant: 'default',
      });
      
      // Redirect would happen here
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignup = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Google Authentication',
        description: 'Google sign up functionality not implemented yet.',
        variant: 'default',
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-gradient-to-br from-background to-background/90">
      {/* Animated molecular background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" className="text-primary" />
              </pattern>
              <pattern id="molecule" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="5" fill="currentColor" className="text-lab-blue opacity-30" />
                <circle cx="150" cy="70" r="3" fill="currentColor" className="text-lab-green opacity-30" />
                <circle cx="50" cy="130" r="4" fill="currentColor" className="text-lab-purple opacity-30" />
                <line x1="100" y1="100" x2="150" y2="70" stroke="currentColor" className="text-primary opacity-20" strokeWidth="1" />
                <line x1="100" y1="100" x2="50" y2="130" stroke="currentColor" className="text-primary opacity-20" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#molecule)" />
          </svg>
        </div>
        
        {/* Floating atoms */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 backdrop-blur-sm"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 backdrop-blur-sm"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Header with theme toggle */}
      <div className="w-full p-4 flex justify-end">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:right-20 lg:bottom-16 lg:right-32">
          <div className="relative">
            <VBotAvatar size="lg" />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-14 -left-4 bg-black/20 backdrop-blur-md p-3 rounded-xl border border-neon-cyan/30 text-white max-w-[200px] shadow-lg"
            >
              <p className="text-xs">Ready to begin your science journey?</p>
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-black/20 backdrop-blur-md rotate-45 border-r border-b border-neon-cyan/30"></div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlowingCard glowColor="cyan" className="w-full max-w-md p-8 backdrop-blur-lg">
            <div className="text-center mb-6">
              <motion.h1 
                className="text-2xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Create Your VigyaanKosh Account
              </motion.h1>
              <motion.p 
                className="text-sm text-muted-foreground mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Start exploring AI-powered virtual science labs
              </motion.p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="bg-background/50 backdrop-blur-sm border-muted"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Email Address</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-3.5 w-3.5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">We'll use this for account verification</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="you@example.com" 
                          {...field} 
                          className="bg-background/50 backdrop-blur-sm border-muted"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-3.5 w-3.5 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Minimum 8 characters with uppercase, lowercase & number</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-background/50 backdrop-blur-sm border-muted"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-background/50 backdrop-blur-sm border-muted"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 backdrop-blur-sm border-muted">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="educator">Educator</SelectItem>
                          <SelectItem value="researcher">Researcher</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAgreed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow-sm bg-background/30">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          className="data-[state=checked]:bg-neon-blue"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I agree to the <Link to="#" className="text-neon-blue hover:underline">Terms</Link> and{" "}
                          <Link to="#" className="text-neon-blue hover:underline">Privacy Policy</Link>
                        </FormLabel>
                        <FormMessage className="text-xs" />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="pt-2 space-y-4">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"
                        />
                        Creating Account...
                      </>
                    ) : (
                      <>Sign Up</>
                    )}
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background/50 backdrop-blur-sm px-2 text-muted-foreground">
                        or continue with
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleGoogleSignup}
                    disabled={isLoading}
                    className="w-full bg-background/50 backdrop-blur-sm"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Google
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-neon-cyan font-medium hover:text-neon-blue transition-colors"
              >
                Log in now
              </Link>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
