
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Microscope, 
  FlaskConical, 
  Lightbulb, 
  Brain,
  LogIn,
  Beaker,
  BookOpen,
  Atom,
  GraduationCap
} from 'lucide-react';
import SiteHeader from '@/components/layout/SiteHeader';
import ChatBotMentor from '@/components/ChatBotMentor';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 to-indigo-950 text-white">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section with Futuristic Design */}
        <section className="py-16 md:py-24 container relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-lab-blue/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-lab-green/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute left-1/2 top-1/3 w-60 h-60 bg-lab-purple/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          
          {/* Floating scientific elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: Math.random() * 8 + 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {i % 3 === 0 && <Atom className="text-cyan-400/30 w-8 h-8" />}
                {i % 3 === 1 && <FlaskConical className="text-green-400/30 w-6 h-6" />}
                {i % 3 === 2 && <Microscope className="text-purple-400/30 w-10 h-10" />}
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-block py-1 px-3 bg-lab-blue/20 text-cyan-300 rounded-full backdrop-blur-sm border border-lab-blue/30">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  <span className="text-sm font-medium">AI-Powered Learning</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  VigyaanKosh: AI-Powered Virtual Science Labs
                </span>
                <span className="absolute -top-3 -right-3 animate-pulse text-amber-300">✦</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Conduct immersive experiments in Biology, Chemistry, and Physics with smart simulations 
                and your AI science mentor.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 text-white font-medium shadow-lg shadow-blue-600/20 border border-blue-500/20 backdrop-blur-sm transform transition-transform duration-200 hover:scale-105 rounded-xl"
                  asChild
                >
                  <Link to="/login">
                    <LogIn className="mr-2 h-5 w-5" />
                    Login to Start Learning
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-500/30 text-blue-300 hover:bg-blue-800/20 backdrop-blur-sm transition-all duration-200 hover:border-blue-400 rounded-xl"
                  asChild
                >
                  <Link to="/about">
                    <Beaker className="mr-2 h-5 w-5" />
                    Explore Simulations
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl glass-card bg-blue-950/30 p-8 shadow-lg border border-blue-800/30 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 backdrop-blur-md"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-lab-blue/20 rounded-full blur-xl animate-pulse-subtle"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-lab-purple/20 rounded-full blur-xl animate-pulse-subtle"></div>
              <div className="relative z-10 flex items-center justify-center">
                <motion.div 
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center relative group-hover:animate-float"
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-rotate-slow"></div>
                  <div className="absolute w-10 h-10 bg-lab-green/20 rounded-full -top-5 right-10 animate-float"></div>
                  <div className="absolute w-8 h-8 bg-lab-purple/20 rounded-full bottom-10 -left-3 animate-float"></div>
                  <Atom className="w-32 h-32 text-cyan-400 shadow-glow transform transition-transform group-hover:scale-110" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subject Cards Section with Enhanced Visuals */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-indigo-950 to-transparent"></div>
          <div className="container relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300"
            >
              Explore Science Subjects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
            >
              Choose from our interactive simulations across multiple scientific disciplines. Each experiment 
              is designed to help you understand complex concepts through hands-on learning.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Biology Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:shadow-green-900/20 transition-shadow border-0 bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-md group">
                  <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                  <div className="h-40 flex items-center justify-center relative overflow-hidden">
                    <motion.div 
                      className="absolute w-40 h-40 bg-green-500/10 rounded-full opacity-70 blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute w-20 h-20 bg-green-400/10 rounded-full opacity-70 bottom-5 left-5"></div>
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Microscope className="w-20 h-20 text-green-400 shadow-glow relative z-10 group-hover:scale-110 transition-transform" />
                    </motion.div>
                  </div>
                  <CardContent className="pt-6 text-white">
                    <h3 className="text-xl font-semibold text-center mb-2 text-green-300">Biology</h3>
                    <p className="text-gray-300 text-center mb-4">
                      Explore cells, enzymes, and living systems through interactive simulations
                    </p>
                    <Button className="w-full bg-green-700/50 hover:bg-green-700/80 border border-green-600/30 shadow-sm group-hover:shadow-md transition-all" asChild>
                      <Link to="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-4 h-4" />
                        <span>Login to Access</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Chemistry Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-shadow border-0 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md group">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-cyan-600"></div>
                  <div className="h-40 flex items-center justify-center relative overflow-hidden">
                    <motion.div 
                      className="absolute w-40 h-40 bg-blue-500/10 rounded-full opacity-70 blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <div className="absolute w-20 h-20 bg-blue-400/10 rounded-full opacity-70 bottom-5 left-5"></div>
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                    >
                      <FlaskConical className="w-20 h-20 text-blue-400 shadow-glow relative z-10 group-hover:scale-110 transition-transform" />
                    </motion.div>
                  </div>
                  <CardContent className="pt-6 text-white">
                    <h3 className="text-xl font-semibold text-center mb-2 text-blue-300">Chemistry</h3>
                    <p className="text-gray-300 text-center mb-4">
                      Conduct reactions and explore molecular structures
                    </p>
                    <Button className="w-full bg-blue-700/50 hover:bg-blue-700/80 border border-blue-600/30 shadow-sm group-hover:shadow-md transition-all" asChild>
                      <Link to="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-4 h-4" />
                        <span>Login to Access</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Physics Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition-shadow border-0 bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-md group">
                  <div className="h-1 bg-gradient-to-r from-purple-400 to-violet-600"></div>
                  <div className="h-40 flex items-center justify-center relative overflow-hidden">
                    <motion.div 
                      className="absolute w-40 h-40 bg-purple-500/10 rounded-full opacity-70 blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <div className="absolute w-20 h-20 bg-purple-400/10 rounded-full opacity-70 bottom-5 left-5"></div>
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Atom className="w-20 h-20 text-purple-400 shadow-glow relative z-10 group-hover:scale-110 transition-transform" />
                    </motion.div>
                  </div>
                  <CardContent className="pt-6 text-white">
                    <h3 className="text-xl font-semibold text-center mb-2 text-purple-300">Physics</h3>
                    <p className="text-gray-300 text-center mb-4">
                      Interact with energy, motion, and forces
                    </p>
                    <Button className="w-full bg-purple-700/50 hover:bg-purple-700/80 border border-purple-600/30 shadow-sm group-hover:shadow-md transition-all" asChild>
                      <Link to="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-4 h-4" />
                        <span>Login to Access</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - AI-Powered Learning Features */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-md"></div>
          <div className="container relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300"
            >
              AI-Powered Learning Features
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card bg-gradient-to-br from-amber-900/20 to-amber-800/10 p-8 rounded-xl shadow-lg border border-amber-500/20 hover:shadow-amber-900/30 hover:border-amber-500/30 transition-all flex flex-col items-center text-center relative group"
              >
                <div className="w-16 h-16 bg-amber-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-amber-500/30">
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <GraduationCap className="w-8 h-8 text-amber-400 relative z-10" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-amber-300">AI Curriculum</h3>
                <p className="text-gray-300">
                  Personalized learning journeys that adapt to your understanding and pace
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card bg-gradient-to-br from-red-900/20 to-red-800/10 p-8 rounded-xl shadow-lg border border-red-500/20 hover:shadow-red-900/30 hover:border-red-500/30 transition-all flex flex-col items-center text-center relative group"
              >
                <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-red-500/30">
                  <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Beaker className="w-8 h-8 text-red-400 relative z-10" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-300">Virtual Experiments</h3>
                <p className="text-gray-300">
                  Real-time simulations with feedback and guidance on your progress
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 p-8 rounded-xl shadow-lg border border-cyan-500/20 hover:shadow-cyan-900/30 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center relative group"
              >
                <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-cyan-500/30">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Brain className="w-8 h-8 text-cyan-400 relative z-10" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">V-Bot Assistant</h3>
                <p className="text-gray-300">
                  24/7 AI mentor for live help answering all your science questions
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Meet V-Bot Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 md:p-12 rounded-xl shadow-lg border border-blue-500/20 overflow-hidden relative"
              >
                <div className="absolute -right-20 top-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-xl"></div>
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-xl"></div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-purple-900/40 backdrop-blur-md p-6 rounded-xl border border-purple-500/30 relative">
                      <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500/50 rounded-full"></div>
                      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-blue-500/50 rounded-full"></div>
                      <h3 className="text-2xl font-bold mb-4 text-purple-200">Ask me anything about science!</h3>
                      <p className="text-gray-300 mb-6">
                        I'm V-Bot, your personal AI science mentor. I can explain complex concepts,
                        guide you through experiments, and help you explore the fascinating world of science.
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white font-medium shadow-lg shadow-purple-600/20 border border-purple-500/20 transform transition-all duration-200 hover:scale-105 hover:shadow-lg" 
                        size="lg"
                        asChild
                      >
                        <Link to="/login">
                          <Brain className="mr-2 h-5 w-5" />
                          Meet Your Mentor
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center order-1 md:order-2 relative">
                    <motion.div 
                      className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 flex items-center justify-center animate-float"
                      animate={{ boxShadow: ['0 0 20px rgba(6, 182, 212, 0.5)', '0 0 30px rgba(6, 182, 212, 0.7)', '0 0 20px rgba(6, 182, 212, 0.5)'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Brain className="w-32 h-32 text-cyan-300" />
                      </motion.div>
                    </motion.div>
                    {/* Animated circles around V-Bot */}
                    <motion.div 
                      className="absolute inset-0 w-full h-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-6 h-6 bg-blue-500/40 rounded-full absolute top-0 left-1/2"></div>
                      <div className="w-4 h-4 bg-purple-500/40 rounded-full absolute top-1/4 right-0"></div>
                      <div className="w-5 h-5 bg-cyan-500/40 rounded-full absolute bottom-0 left-1/3"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with upgraded styling */}
      <footer className="bg-gradient-to-br from-gray-900 to-indigo-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-lab-blue/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-lab-green/30 rounded-full blur-xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Beaker className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold text-blue-300">VigyaanKosh: AI-Powered Virtual Science Labs</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Interactive science experiments and simulations for students and educators.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-blue-300">Subjects</h3>
                <ul className="space-y-2">
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Biology</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Chemistry</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Physics</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-300">Features</h3>
                <ul className="space-y-2">
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Achievements</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Challenges</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">AI Mentor</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-blue-300">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Help</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} VigyaanKosh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
