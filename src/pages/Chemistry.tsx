
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, GlowingCard } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GlowingButton } from '@/components/ui/glowing-button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import SiteHeader from '@/components/layout/SiteHeader';
import { useToast } from '@/hooks/use-toast';
import { 
  Bookmark, 
  Clock, 
  FlaskConical, 
  Atom, 
  Battery, 
  Beaker, 
  FlaskRound, 
  TestTube,
  Sparkles,
  Scale,
  Zap 
} from 'lucide-react';

const Chemistry = () => {
  const { toast } = useToast();
  
  const experiments = [
    {
      id: 'catalyst',
      title: 'Catalyst Reaction',
      description: 'Investigate how catalysts increase the rate of chemical reactions without being consumed in the process.',
      difficulty: 'Intermediate',
      duration: '25 minutes',
      image: '/placeholder.svg',
      featured: true,
      icon: <Atom className="w-8 h-8 text-purple-500 dark:text-purple-400" />
    },
    {
      id: 'electrolysis',
      title: 'Electrolysis of Water',
      description: 'Split water into hydrogen and oxygen gases by passing an electric current through water.',
      difficulty: 'Intermediate',
      duration: '40 minutes',
      image: '/placeholder.svg',
      featured: true,
      icon: <Battery className="w-8 h-8 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 'flame-test',
      title: 'Flame Test',
      description: 'Identify metal ions based on the characteristic color they produce when heated in a flame.',
      difficulty: 'Beginner',
      duration: '25 minutes',
      image: '/placeholder.svg',
      icon: <FlaskConical className="w-8 h-8 text-orange-500 dark:text-orange-400" />
    },
    {
      id: 'acid-base',
      title: 'Acid-Base Titration',
      description: 'Determine the concentration of an acid or base by neutralizing it with a standard solution of known concentration.',
      difficulty: 'Intermediate',
      duration: '35 minutes',
      image: '/placeholder.svg',
      icon: <TestTube className="w-8 h-8 text-green-500 dark:text-green-400" />
    },
    {
      id: 'baking-soda',
      title: 'Vinegar and Baking Soda Reaction',
      description: 'Observe an acid-base reaction that produces carbon dioxide gas through the reaction of vinegar with baking soda.',
      difficulty: 'Beginner',
      duration: '20 minutes',
      image: '/placeholder.svg',
      icon: <Beaker className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
    }
  ];

  const handleStartExperiment = (experimentId: string, experimentTitle: string) => {
    toast({
      title: "Experiment Selected",
      description: `Starting ${experimentTitle} experiment...`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SiteHeader />
      
      {/* Page content with floating molecules background */}
      <main className="flex-1 container py-8 relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="bubble animate-bubble absolute left-1/4 top-1/3 w-4 h-4 rounded-full bg-blue-400/20 dark:bg-blue-400/30"></div>
          <div className="bubble animate-bubble animation-delay-700 absolute left-3/4 top-1/2 w-6 h-6 rounded-full bg-purple-400/20 dark:bg-purple-400/30"></div>
          <div className="bubble animate-bubble animation-delay-1500 absolute left-1/5 top-2/3 w-5 h-5 rounded-full bg-green-400/20 dark:bg-green-400/30"></div>
          <div className="bubble animate-bubble animation-delay-2000 absolute left-2/3 top-1/4 w-3 h-3 rounded-full bg-pink-400/20 dark:bg-pink-400/30"></div>
        </div>
        
        {/* Header section with title and subtitle */}
        <div className="relative z-10 mb-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 font-tech tracking-tight">
                Chemistry Experiments
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg max-w-2xl">
                Explore the fascinating world of chemical reactions and transformations
              </p>
            </div>
            <div className="hidden md:flex space-x-2 mt-4 md:mt-0">
              <FlaskConical className="w-10 h-10 text-cyan-500 dark:text-cyan-400 animate-pulse-subtle" />
              <TestTube className="w-10 h-10 text-purple-500 dark:text-purple-400 animate-floating-3d" />
              <Atom className="w-10 h-10 text-blue-500 dark:text-blue-400 animate-rotate-slow" />
            </div>
          </div>
          
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
        </div>
        
        {/* Featured Cards - Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Molarity Simulation Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-xl border border-cyan-500/30 dark:border-cyan-400/20 hover:border-cyan-400/50 dark:hover:border-cyan-300/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/20 hover:-translate-y-2">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-400/30 flex items-center justify-center backdrop-blur-sm border border-cyan-300/30 dark:border-cyan-400/20 group-hover:scale-110 transition-transform duration-300">
                    <Beaker className="w-10 h-10 text-cyan-500 dark:text-cyan-400 group-hover:animate-neon-pulse" />
                  </div>
                  {/* Floating particles around icon */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-cyan-400/60 animate-floating-3d"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-400/60 animate-pulse-subtle"></div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                  Try Molarity Simulation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
                  Interactive simulation to explore concentration and molarity principles
                </p>
                
                <div className="pt-4">
                  <GlowingButton 
                    asChild 
                    variant="cyan" 
                    glow="cyan" 
                    animation="pulse"
                    className="px-8 py-3 text-base font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
                  >
                    <Link to="/chemistry/virtual-lab">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Start Simulation
                    </Link>
                  </GlowingButton>
                </div>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 group-hover:h-2 transition-all duration-300"></div>
          </div>
          
          {/* Virtual Chemistry Lab Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30 dark:border-purple-400/20 hover:border-purple-400/50 dark:hover:border-purple-300/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 dark:hover:shadow-purple-400/20 hover:-translate-y-2">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-400/30 dark:to-indigo-400/30 flex items-center justify-center backdrop-blur-sm border border-purple-300/30 dark:border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                    <FlaskRound className="w-10 h-10 text-purple-500 dark:text-purple-400 group-hover:animate-neon-pulse" />
                  </div>
                  {/* Floating particles around icon */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-purple-400/60 animate-floating-3d"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-indigo-400/60 animate-pulse-subtle"></div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                  Virtual Chemistry Lab
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
                  Experience realistic chemical reactions in an interactive lab environment
                </p>
                
                <div className="pt-4">
                  <GlowingButton 
                    asChild 
                    variant="default" 
                    glow="default"
                    className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                  >
                    <Link to="/chemistry/lab">
                      <Zap className="w-4 h-4 mr-2" />
                      Enter Virtual Lab
                    </Link>
                  </GlowingButton>
                </div>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 group-hover:h-2 transition-all duration-300"></div>
          </div>
        </div>
        
        {/* Featured Experiments - Middle Row */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-50">
            <Sparkles className="h-5 w-5 text-amber-500" />
            Featured Experiments
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {experiments
              .filter(exp => exp.featured)
              .map((experiment) => (
                <GlowingCard 
                  key={experiment.id}
                  glowColor="blue"
                  className="overflow-hidden transition-all duration-300 hover:-translate-y-1 border-blue-200/30 dark:border-blue-400/10"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                      <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-black/30 shadow-inner flex items-center justify-center">
                        {experiment.icon || (
                          <FlaskConical className="w-7 h-7 text-blue-500 dark:text-blue-400" />
                        )}
                      </div>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mr-auto">{experiment.title}</h3>
                        <Badge className="bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/50 pulse-badge">
                          Featured
                        </Badge>
                        <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50">
                          {experiment.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{experiment.duration}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {experiment.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <Button 
                          onClick={() => handleStartExperiment(experiment.id, experiment.title)}
                          asChild 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none"
                        >
                          <Link to={`/chemistry/${experiment.id}`}>
                            Start Experiment
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlowingCard>
              ))}
          </div>
        </div>
        
        {/* All Experiments - Bottom Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-50">
            <Zap className="h-5 w-5 text-purple-500" />
            All Experiments
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments
              .filter(exp => !exp.featured)
              .map((experiment) => (
                <Card 
                  key={experiment.id} 
                  className="overflow-hidden border-gray-200 dark:border-gray-800 hover-card hover:shadow-lg dark:hover:shadow-cyan-900/20 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/80 dark:bg-black/50 shadow-inner flex items-center justify-center">
                      {experiment.icon || (
                        <FlaskConical className="w-10 h-10 text-gray-400 dark:text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700">
                        {experiment.difficulty}
                      </Badge>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {experiment.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-50">{experiment.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {experiment.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Button 
                      onClick={() => handleStartExperiment(experiment.id, experiment.title)}
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Link to={`/chemistry/${experiment.id}`}>
                        Start Experiment
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-900 py-6 border-t dark:border-gray-800">
        <div className="container text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Science Lab AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Chemistry;
