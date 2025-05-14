
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, GlowingCard } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Linkedin, Mail, Brain, Beaker, Lightbulb, 
  HelpCircle, Send, ArrowLeft 
} from 'lucide-react';
import SiteHeader from '@/components/layout/SiteHeader';
import { toast } from '@/hooks/use-toast';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { GlassCard } from '@/components/ui/glass-card';
import { NeonText } from '@/components/ui/neon-text';
import { TypewriterText } from '@/components/ui/typewriter-text';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your feedback. We'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <SiteHeader />
      
      <main className="container py-8 px-4 md:px-6">
        <div className="flex items-center mb-6">
          <Button variant="ghost" className="mr-2 p-0" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>Back to Lab</span>
            </Link>
          </Button>
        </div>
      
        <div className="max-w-5xl mx-auto">
          {/* Centered Title and Subtitle with Neon Glow */}
          <div className="text-center mb-10">
            <NeonText 
              as="h1" 
              variant="gradient" 
              glow="lg"
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              VigyaanKosh: AI-Powered Virtual Science Labs
            </NeonText>
            <div className="relative max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg typewriter-text overflow-hidden border-r-4 border-lab-blue animate-typing whitespace-nowrap">
                Conduct immersive experiments in Biology, Chemistry, and Physics using advanced AI simulations in a space-age virtual lab.
              </p>
            </div>
          </div>
          
          {/* NEW: About the Project Section with Light/Dark mode support */}
          <section className="mb-16 overflow-hidden relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 dark:from-transparent dark:to-primary/10 backdrop-blur-3xl"></div>
              <div className="floating-particles"></div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">About the Project</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-lab-blue to-lab-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <p className="text-lg text-foreground/90 leading-relaxed">
                VigyaanKosh is an AI-powered virtual science lab designed to make science accessible, 
                interactive, and fun for students of all levels. It features simulations, 3D models, 
                intelligent chat assistance, and engaging experiments across Biology, Chemistry, and Physics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlowingCard 
                glowColor="blue" 
                className="p-6 backdrop-blur-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Beaker className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-foreground">Interactive Experiments</h3>
                <p className="text-center text-muted-foreground">
                  Hands-on simulations that bring scientific concepts to life
                </p>
              </GlowingCard>
              
              <GlowingCard 
                glowColor="purple" 
                className="p-6 backdrop-blur-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-500/10 dark:bg-purple-500/20 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Brain className="h-8 w-8 text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-foreground">AI Assistance</h3>
                <p className="text-center text-muted-foreground">
                  Intelligent chat support to guide your scientific exploration
                </p>
              </GlowingCard>
              
              <GlowingCard 
                glowColor="green" 
                className="p-6 backdrop-blur-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-500/10 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-5 mx-auto">
                  <Lightbulb className="h-8 w-8 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-foreground">Learning Tools</h3>
                <p className="text-center text-muted-foreground">
                  Comprehensive educational resources and 3D models
                </p>
              </GlowingCard>
            </div>
          </section>
          
          <Tabs defaultValue="about" className="mb-10">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="help">Help</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
            </TabsList>
            
            {/* About Section */}
            <TabsContent value="about" className="mt-6">
              <GlassCard variant="dark" hover="lift" animation="pulse" padding="lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-lab-blue" />
                    About the Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">VigyaanKosh: AI-Powered Virtual Science Labs</h3>
                    <p className="text-muted-foreground">
                      VigyaanKosh is an AI-powered virtual science lab designed to make science accessible, 
                      interactive, and fun for students of all levels. It features simulations, 3D models, 
                      intelligent chat assistance, and engaging experiments across Biology, Chemistry, and Physics.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-green-50 dark:bg-green-950/30 rounded-full flex items-center justify-center mb-4">
                        <Beaker className="h-6 w-6 text-lab-green" />
                      </div>
                      <h3 className="font-medium mb-2">Interactive Experiments</h3>
                      <p className="text-sm text-muted-foreground">
                        Hands-on simulations that bring scientific concepts to life
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-full flex items-center justify-center mb-4">
                        <Brain className="h-6 w-6 text-lab-blue" />
                      </div>
                      <h3 className="font-medium mb-2">AI Assistance</h3>
                      <p className="text-sm text-muted-foreground">
                        Intelligent chat support to guide your scientific exploration
                      </p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/30 rounded-full flex items-center justify-center mb-4">
                        <Lightbulb className="h-6 w-6 text-lab-purple" />
                      </div>
                      <h3 className="font-medium mb-2">Learning Tools</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive educational resources and 3D models
                      </p>
                    </div>
                  </div>
                </CardContent>
              </GlassCard>
            </TabsContent>
            
            {/* Team Section - Enhanced with hover effects and futuristic styling */}
            <TabsContent value="team" className="mt-6">
              <div className="mb-6 text-center">
                <NeonText 
                  as="h2" 
                  variant="cyan" 
                  glow="md"
                  className="text-2xl md:text-3xl font-bold mb-3"
                >
                  Meet the Creators
                </NeonText>
                <p className="text-muted-foreground">The innovative minds behind VigyaanKosh Virtual Science Labs</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Team Member 1 - Lead Developer */}
                <div className="perspective-1000">
                  <div className="team-card group h-[280px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                    {/* Front side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [backface-visibility:hidden] px-6 py-8"
                      variant="dark" 
                      hover="none"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-background shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                          <img 
                            src="https://api.dicebear.com/7.x/personas/svg?seed=sejal&backgroundColor=b6e3f4" 
                            alt="Sejal Chavan" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">Sejal Chavan</h3>
                        <p className="text-blue-400 mb-4">Lead Developer</p>
                        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 bg-gradient-to-t from-blue-900">
                          <div className="absolute inset-0 code-background"></div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center mt-2">Flip card to see contact details</p>
                      </div>
                    </GlassCard>
                    
                    {/* Back side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-6"
                      variant="colored" 
                      hover="glow"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">Sejal Chavan</h3>
                        <p className="text-blue-400 mb-4">Lead Developer</p>
                        <div className="space-y-4">
                          <a href="mailto:sejalchavan0209@gmail.com" 
                            className="flex items-center justify-center gap-2 text-white hover:text-blue-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                              <Mail className="h-5 w-5" />
                            </div>
                            <span>sejalchavan0209@gmail.com</span>
                          </a>
                          <a href="https://www.linkedin.com/in/sejalchavan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white hover:text-blue-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </div>
                            <span>linkedin.com/in/sejalchavan</span>
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
                
                {/* Team Member 2 - UX Designer */}
                <div className="perspective-1000">
                  <div className="team-card group h-[280px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                    {/* Front side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [backface-visibility:hidden] px-6 py-8"
                      variant="dark" 
                      hover="none"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-purple-500/50 ring-offset-2 ring-offset-background shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                          <img 
                            src="https://api.dicebear.com/7.x/personas/svg?seed=shravani&backgroundColor=ffdfbf" 
                            alt="Shravani Desai" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">Shravani Desai</h3>
                        <p className="text-purple-400 mb-4">UX Designer & Developer</p>
                        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 bg-gradient-to-t from-purple-900">
                          <div className="absolute inset-0 wireframe-background"></div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center mt-2">Flip card to see contact details</p>
                      </div>
                    </GlassCard>
                    
                    {/* Back side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-6"
                      variant="colored" 
                      hover="glow"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">Shravani Desai</h3>
                        <p className="text-purple-400 mb-4">UX Designer & Developer</p>
                        <div className="space-y-4">
                          <a href="mailto:shravanids09@gmail.com" 
                            className="flex items-center justify-center gap-2 text-white hover:text-purple-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                              <Mail className="h-5 w-5" />
                            </div>
                            <span>shravanids09@gmail.com</span>
                          </a>
                          <a href="https://www.linkedin.com/in/shravanidesai" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white hover:text-purple-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </div>
                            <span>linkedin.com/in/shravanidesai</span>
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
                
                {/* Team Member 3 - Backend Developer */}
                <div className="perspective-1000">
                  <div className="team-card group h-[280px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                    {/* Front side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [backface-visibility:hidden] px-6 py-8"
                      variant="dark" 
                      hover="none"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-green-500/50 ring-offset-2 ring-offset-background shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                          <img 
                            src="https://api.dicebear.com/7.x/personas/svg?seed=amrut&backgroundColor=c2f0c2" 
                            alt="Amrut S" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">Amrut S</h3>
                        <p className="text-green-400 mb-4">Backend Developer</p>
                        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 bg-gradient-to-t from-green-900">
                          <div className="absolute inset-0 code-background"></div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center mt-2">Flip card to see contact details</p>
                      </div>
                    </GlassCard>
                    
                    {/* Back side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-6"
                      variant="colored" 
                      hover="glow"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">Amrut S</h3>
                        <p className="text-green-400 mb-4">Backend Developer</p>
                        <div className="space-y-4">
                          <a href="mailto:02fe22bcs016@kletech.ac.in" 
                            className="flex items-center justify-center gap-2 text-white hover:text-green-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                              <Mail className="h-5 w-5" />
                            </div>
                            <span>02fe22bcs016@kletech.ac.in</span>
                          </a>
                          <a href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white hover:text-green-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </div>
                            <span>LinkedIn Profile</span>
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
                
                {/* Team Member 4 - Data Scientist */}
                <div className="perspective-1000">
                  <div className="team-card group h-[280px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                    {/* Front side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [backface-visibility:hidden] px-6 py-8"
                      variant="dark" 
                      hover="none"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-2 ring-amber-500/50 ring-offset-2 ring-offset-background shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                          <img 
                            src="https://api.dicebear.com/7.x/personas/svg?seed=vinod&backgroundColor=ffd6a5" 
                            alt="Vinod N" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-white">Vinod N</h3>
                        <p className="text-amber-400 mb-4">Data Scientist</p>
                        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 bg-gradient-to-t from-amber-900">
                          <div className="absolute inset-0 data-background"></div>
                        </div>
                        <p className="text-sm text-muted-foreground text-center mt-2">Flip card to see contact details</p>
                      </div>
                    </GlassCard>
                    
                    {/* Back side */}
                    <GlassCard 
                      className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-6"
                      variant="colored" 
                      hover="glow"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">Vinod N</h3>
                        <p className="text-amber-400 mb-4">Data Scientist</p>
                        <div className="space-y-4">
                          <a href="mailto:02fe22bcs174@kletech.ac.in" 
                            className="flex items-center justify-center gap-2 text-white hover:text-amber-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                              <Mail className="h-5 w-5" />
                            </div>
                            <span>02fe22bcs174@kletech.ac.in</span>
                          </a>
                          <a href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-white hover:text-amber-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </div>
                            <span>LinkedIn Profile</span>
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Help Section */}
            <TabsContent value="help" className="mt-6">
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-lab-purple" />
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-b border-border pb-4">
                        <h3 className="font-medium mb-2">How do I start an experiment?</h3>
                        <p className="text-sm text-muted-foreground">
                          Navigate to the subject area (Biology, Chemistry, or Physics) and select
                          an experiment card. Follow the on-screen instructions to begin your interactive 
                          learning experience.
                        </p>
                      </div>
                      <div className="border-b border-border pb-4">
                        <h3 className="font-medium mb-2">How do I get badges?</h3>
                        <p className="text-sm text-muted-foreground">
                          Complete experiments and challenges to earn badges. Each subject has its own 
                          set of achievements that track your progress and mastery of concepts.
                        </p>
                      </div>
                      <div className="border-b border-border pb-4">
                        <h3 className="font-medium mb-2">Why is my chatbot not responding?</h3>
                        <p className="text-sm text-muted-foreground">
                          Ensure you have a stable internet connection. If the issue persists, 
                          try refreshing the page or clearing your browser cache. For continued problems, 
                          please contact our support team.
                        </p>
                      </div>
                      <div className="pb-2">
                        <h3 className="font-medium mb-2">Can I use VigyaanKosh on mobile devices?</h3>
                        <p className="text-sm text-muted-foreground">
                          Yes! VigyaanKosh is fully responsive and works on desktops, tablets, and mobile phones.
                          Some complex simulations may perform better on larger screens.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                      Have questions or feedback? We'd love to hear from you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <Input
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-lab-blue hover:bg-blue-700">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Mission Section */}
            <TabsContent value="mission" className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-xl mb-8 relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>
                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-30"></div>
                    <blockquote className="relative z-10 text-xl md:text-2xl italic font-light text-center">
                      "To empower students with interactive, AI-enhanced scientific experiences anytime, anywhere."
                    </blockquote>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card rounded-xl shadow-sm border">
                      <h3 className="font-semibold mb-3">Our Vision</h3>
                      <p className="text-muted-foreground">
                        We envision a world where high-quality science education is accessible to all students, 
                        regardless of location or resources. VigyaanKosh aims to bridge the gap between theoretical 
                        knowledge and practical understanding through immersive digital experiences.
                      </p>
                    </div>
                    
                    <div className="p-6 bg-card rounded-xl shadow-sm border">
                      <h3 className="font-semibold mb-3">Our Values</h3>
                      <div className="space-y-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800 border-blue-200">
                          Accessibility
                        </Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-950/50 dark:text-green-300 dark:border-green-800 border-green-200 ml-2">
                          Innovation
                        </Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800 border-purple-200 ml-2">
                          Education
                        </Badge>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800 border-amber-200 ml-2">
                          Inclusivity
                        </Badge>
                        <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800 border-red-200 ml-2">
                          Engagement
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                {/* Removed the founding text that was in CardFooter */}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            {/* Circuit lines background */}
            <div className="absolute top-0 left-0 w-full h-full grid-pattern"></div>
            
            {/* Stars */}
            <div className="stars absolute inset-0">
              {Array(20).fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white animate-pulse-subtle"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Circuit lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M0,50 Q25,30 50,50 T100,50" 
                fill="none" 
                stroke="rgba(56, 189, 248, 0.8)" 
                strokeWidth="0.2"
              ></path>
              <path 
                d="M0,70 Q25,50 50,70 T100,70" 
                fill="none" 
                stroke="rgba(168, 85, 247, 0.8)" 
                strokeWidth="0.2"
              ></path>
              <path 
                d="M0,30 Q25,50 50,30 T100,30" 
                fill="none" 
                stroke="rgba(74, 222, 128, 0.8)" 
                strokeWidth="0.2"
              ></path>
            </svg>
          </div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="text-center">
            <p className="mb-6 text-lg">© {new Date().getFullYear()} VigyaanKosh: AI-Powered Virtual Science Labs. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors hover-link">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors hover-link">About</Link>
              <Link to="/about?tab=team" className="text-gray-400 hover:text-white transition-colors hover-link">Team</Link>
              <a href="mailto:support@vigyaankosh.edu" className="text-gray-400 hover:text-white transition-colors hover-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
