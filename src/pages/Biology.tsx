
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { GlowingButton } from '@/components/ui/glowing-button';
import { GlassCard } from '@/components/ui/glass-card';
import SiteHeader from '@/components/layout/SiteHeader';
import ChatBotMentor from '@/components/ChatBotMentor';
import { Bookmark, Clock, Microscope, CheckCircle2, Beaker, Zap, Play, User, ArrowRight, Atom } from 'lucide-react';

const Biology = () => {
  const [completedExperiments, setCompletedExperiments] = useState<string[]>([]);
  // Mock authentication state - replace with actual auth when Supabase is connected
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate loading completed experiments from storage
  useEffect(() => {
    // In a real app, this would come from a database or localStorage
    const mockCompletedExperiments = ['osmosis', 'onion-cells'];
    setCompletedExperiments(mockCompletedExperiments);
    
    // Mock check for authentication - replace with real auth check
    const mockAuthState = localStorage.getItem('mockAuth') === 'true';
    setIsLoggedIn(mockAuthState);
  }, []);

  // Mock login function - remove when real auth is implemented
  const handleMockLogin = () => {
    localStorage.setItem('mockAuth', 'true');
    setIsLoggedIn(true);
  };

  const experiments = [
    {
      id: 'animal-cell',
      title: 'Animal Cell Structure',
      description: 'Explore the detailed anatomy of an animal cell, identifying organelles like nucleus, mitochondria, ribosomes, and more.',
      difficulty: 'Beginner',
      duration: '25 minutes',
      image: '/lovable-uploads/ce75bd9d-caa7-4902-a5b5-c00da6b4d2b2.png',
      path: '/biology/animal-cell'
    },
    {
      id: 'osmosis',
      title: 'Observing Osmosis in a Potato',
      description: 'Explore how water moves across cell membranes by observing changes in potato slices placed in different salt concentrations.',
      difficulty: 'Beginner',
      duration: '30 minutes',
      image: '/placeholder.svg',
      path: '/biology/osmosis'
    },
    {
      id: 'blood-groups',
      title: 'Blood Group Identification',
      description: 'Learn how to identify different blood groups (A, B, AB, O, Rh+ and Rh-) by simulating the agglutination reaction with antibodies.',
      difficulty: 'Intermediate',
      duration: '25 minutes',
      image: '/placeholder.svg',
      path: '/biology/blood-groups'
    },
    {
      id: 'catalase',
      title: 'Effect of Temperature on Catalase Activity',
      description: 'Investigate how temperature affects enzyme activity by observing catalase breaking down hydrogen peroxide into water and oxygen.',
      difficulty: 'Intermediate',
      duration: '45 minutes',
      image: '/placeholder.svg',
      path: '/biology/catalase'
    },
    {
      id: 'onion-cells',
      title: 'Examining Onion Cells',
      description: 'Observe plant cell structure by examining onion cells under a microscope and identifying key cell components.',
      difficulty: 'Beginner',
      duration: '25 minutes',
      image: '/placeholder.svg',
      path: '/biology/onion-cells'
    },
    {
      id: 'pollen-germination',
      title: 'Pollen Germination on Stigma',
      description: 'Visualize and interact with the process of pollen grain germination on a flower stigma using microscope and SEM views.',
      difficulty: 'Intermediate',
      duration: '30 minutes',
      image: '/placeholder.svg',
      path: '/biology/pollen-germination'
    },
    {
      id: 'photosynthesis',
      title: 'Photosynthesis in Aquatic Plants',
      description: 'Measure the rate of photosynthesis by counting oxygen bubbles produced by aquatic plants under different light conditions.',
      difficulty: 'Intermediate',
      duration: '45 minutes',
      image: '/placeholder.svg',
      path: '/biology/photosynthesis'
    }
  ];

  const isExperimentCompleted = (experimentId: string) => 
    completedExperiments.includes(experimentId);

  const completionPercentage = 
    Math.round((completedExperiments.length / experiments.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 transition-colors duration-300">
      {/* Scientific pattern background */}
      <div className="fixed inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`,
          backgroundSize: '300px 300px, 400px 400px, 350px 350px'
        }} />
      </div>

      {/* Glowing Header */}
      <div className="relative overflow-hidden">
        <SiteHeader />
        
        <div className="container pt-20 pb-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-purple-600 to-blue-600 dark:from-teal-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-neon-pulse">
                🔬 Biology Lab
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 font-medium">
                Explore Life with Interactive Experiments
              </p>
            </div>
            
            {/* Primary CTA Button - conditional based on auth */}
            <div className="flex flex-col items-center gap-6 mb-16">
              {isLoggedIn ? (
                <>
                  <GlowingButton 
                    asChild 
                    variant="cyan" 
                    size="xl" 
                    glow="cyan" 
                    animation="pulse"
                    className="text-lg px-8 py-4"
                  >
                    <Link to="/biology/models" className="flex items-center gap-3">
                      <Microscope className="h-6 w-6" />
                      Explore 3D Biology Models
                    </Link>
                  </GlowingButton>
                  
                  {/* New Modern Interface Button */}
                  <GlowingButton 
                    asChild 
                    variant="neon" 
                    size="xl" 
                    glow="neon" 
                    animation="pulse"
                    className="text-lg px-8 py-4"
                  >
                    <Link to="/biology-interface" className="flex items-center gap-3">
                      <Atom className="h-6 w-6" />
                      Modern Biology Interface
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </GlowingButton>
                </>
              ) : (
                <div className="space-y-4">
                  <GlowingButton 
                    onClick={handleMockLogin}
                    variant="cyan" 
                    size="xl" 
                    glow="cyan" 
                    animation="pulse"
                    className="text-lg px-8 py-4"
                  >
                    <User className="h-6 w-6 mr-3" />
                    Login to Access Biology Models
                  </GlowingButton>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Login required to access interactive experiments
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-teal-400/20 dark:bg-teal-400/30 rounded-full blur-xl animate-floating-3d" />
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-purple-400/20 dark:bg-purple-400/30 rounded-full blur-xl animate-floating-3d" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-xl animate-floating-3d" style={{ animationDelay: '4s' }} />
      </div>
      
      <main className="relative z-10 container py-8 -mt-16">
        {/* Progress Tracker with Glassmorphism - only show when logged in */}
        {isLoggedIn && (
          <GlassCard 
            variant="default" 
            hover="lift" 
            animation="floating" 
            className="mb-12 backdrop-blur-xl bg-white/20 dark:bg-slate-800/30 border border-white/30 dark:border-slate-700/50"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Your Biology Journey</h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  {completedExperiments.length} of {experiments.length} experiments completed
                </p>
              </div>
              
              <div className="flex-1 max-w-md">
                <div className="mb-4">
                  <Progress 
                    value={completionPercentage} 
                    className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-full overflow-hidden"
                  />
                </div>
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white text-lg">{completionPercentage}%</span>
                </div>
              </div>
            </div>
          </GlassCard>
        )}
        
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Interactive Experiments</h2>
        
        {/* Experiment Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {experiments.map((experiment) => {
            const isCompleted = isExperimentCompleted(experiment.id);
            
            return (
              <GlassCard
                key={experiment.id}
                variant="default"
                hover="lift"
                animation="none"
                className={`group backdrop-blur-xl transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-gradient-to-br from-emerald-100/40 to-teal-100/40 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-300/50 dark:border-emerald-600/30' 
                    : 'bg-white/30 dark:bg-slate-800/30 border-white/40 dark:border-slate-700/50'
                } hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20`}
              >
                {/* Card Image/Icon Area */}
                <div className="relative h-48 bg-gradient-to-br from-teal-100/50 to-purple-100/50 dark:from-teal-900/30 dark:to-purple-900/30 flex items-center justify-center overflow-hidden rounded-t-2xl">
                  {experiment.image !== '/placeholder.svg' ? (
                    <img 
                      src={experiment.image} 
                      alt={experiment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Microscope className="w-16 h-16 text-teal-600/60 dark:text-teal-400/60 group-hover:scale-110 transition-transform duration-300" />
                  )}
                  
                  {/* Completed badge */}
                  {isCompleted && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  )}
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/40 rounded-full animate-float" />
                    <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Difficulty and Duration badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 ${
                      experiment.difficulty === 'Beginner' 
                        ? 'bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' 
                        : experiment.difficulty === 'Intermediate'
                          ? 'bg-purple-100/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                          : 'bg-orange-100/80 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'
                    }`}>
                      {experiment.difficulty}
                    </span>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      {experiment.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {experiment.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {experiment.description}
                  </p>
                </div>
                
                {/* Action buttons - conditional based on auth */}
                <div className="p-6 pt-0 flex justify-between items-center">
                  {isLoggedIn ? (
                    <GlowingButton 
                      asChild 
                      variant={isCompleted ? "neon" : "cyan"} 
                      size="sm"
                      glow={isCompleted ? "neon" : "cyan"}
                      className="flex items-center gap-2"
                    >
                      <Link to={experiment.path}>
                        <Play className="h-4 w-4" />
                        {isCompleted ? 'Review Experiment' : 'Start Experiment'}
                      </Link>
                    </GlowingButton>
                  ) : (
                    <GlowingButton 
                      onClick={handleMockLogin}
                      variant="cyan" 
                      size="sm"
                      glow="cyan"
                      className="flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Login to Start
                    </GlowingButton>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>
        
        {/* Floating Chat Bot */}
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px]">
          <ChatBotMentor />
        </div>
      </main>
      
      {/* Footer with Glassmorphism */}
      <footer className="relative z-10 mt-20">
        <GlassCard 
          variant="default" 
          className="mx-6 mb-6 backdrop-blur-xl bg-white/20 dark:bg-slate-800/30 border-white/30 dark:border-slate-700/50"
        >
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center md:justify-start">
                <Link to="/" className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Microscope className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  <span>Science Lab AI</span>
                </Link>
              </div>
              
              <div className="flex justify-center gap-12">
                <Link to="/chemistry" className="flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group">
                  <div className="p-3 rounded-full bg-purple-100/50 dark:bg-purple-900/30 group-hover:bg-purple-200/70 dark:group-hover:bg-purple-800/50 transition-colors">
                    <Beaker className="h-6 w-6" />
                  </div>
                  <span className="font-medium">Chemistry Lab</span>
                </Link>
                <Link to="/physics" className="flex flex-col items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <div className="p-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/50 transition-colors">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="font-medium">Physics Lab</span>
                </Link>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <GlassCard variant="default" className="bg-gradient-to-r from-teal-100/30 to-purple-100/30 dark:from-teal-900/20 dark:to-purple-900/20 p-4">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Your Achievements</p>
                  <div className="flex gap-2">
                    {completedExperiments.map((expId) => (
                      <div 
                        key={expId}
                        className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
                        title={experiments.find(e => e.id === expId)?.title || ''}
                      >
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
            
            <div className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Science Lab AI. All rights reserved.
            </div>
          </div>
        </GlassCard>
      </footer>
    </div>
  );
};

export default Biology;
