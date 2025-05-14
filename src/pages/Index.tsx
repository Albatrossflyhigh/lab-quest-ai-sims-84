import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Microscope, 
  FlaskConical, 
  Atom, 
  Brain,
  LogIn,
  Beaker,
  GraduationCap,
  Rocket,
  CloudLightning,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlowingButton } from '@/components/ui/glowing-button';
import { GlassCard } from '@/components/ui/glass-card';
import { NeonText } from '@/components/ui/neon-text';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { Card } from '@/components/ui/card';
import SiteHeader from '@/components/layout/SiteHeader';
import VBotAvatar from '@/components/VBotAvatar';
import ParticleBackground from '@/components/ParticleBackground';
import { useSoundEffect } from '@/hooks/use-sound-effect';

const Index = () => {
  const { playSound } = useSoundEffect();
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-950 via-blue-950 to-black text-white overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground particleCount={70} baseColor="#00FFFF" />
      
      {/* Animated Circuit Background */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSIxMCIgeDI9IjEwMCIgeTI9IjEwIiBzdHJva2U9IiMwMDhlYmExMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iMCIgeTE9IjIwIiB4Mj0iMTAwIiB5Mj0iMjAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iMzAiIHgyPSIxMDAiIHkyPSIzMCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSI0MCIgeDI9IjEwMCIgeTI9IjQwIiBzdHJva2U9IiMwMDhlYmExMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iMCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iNjAiIHgyPSIxMDAiIHkyPSI2MCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSI3MCIgeDI9IjEwMCIgeTI9IjcwIiBzdHJva2U9IiMwMDhlYmExMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iMCIgeTE9IjgwIiB4Mj0iMTAwIiB5Mj0iODAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iOTAiIHgyPSIxMDAiIHkyPSI5MCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSIxMDAiIHgyPSIxMDAiIHkyPSIxMDAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]
      bg-repeat animate-circuit-flow opacity-30 pointer-events-none" />
      
      {/* Custom Header */}
      <header className="sticky top-0 z-40 w-full bg-black/10 backdrop-blur-xl border-b border-neon-cyan/10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Beaker className="h-8 w-8 text-neon-cyan" />
              <motion.div 
                className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <NeonText 
              as="span" 
              variant="gradient" 
              glow="lg" 
              className="text-xl font-bold tracking-tight group-hover:animate-electric-flicker"
            >
              VigyaanKosh
            </NeonText>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-neon-cyan hover-link"
            >
              Home
            </Link>
            <Link 
              to="/biology" 
              className="text-sm font-medium text-neon-green hover-link"
            >
              Biology
            </Link>
            <Link 
              to="/chemistry" 
              className="text-sm font-medium text-neon-blue hover-link"
            >
              Chemistry
            </Link>
            <Link 
              to="/physics" 
              className="text-sm font-medium text-neon-purple hover-link"
            >
              Physics
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-neon-pink hover-link"
            >
              About
            </Link>
          </nav>
          
          <GlowingButton 
            variant="neon" 
            size="default"
            glow="neon"
            animation="pulse"
            asChild
          >
            <Link to="/login">
              <Rocket className="mr-2 h-4 w-4" />
              Login to Start Learning
            </Link>
          </GlowingButton>
        </div>
      </header>
      
      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section with Futuristic Design */}
        <section className="py-16 md:py-24 container relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-neon-green/10 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute left-1/2 top-1/3 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-subtle"></div>
          
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
                {i % 3 === 0 && <Atom className="text-neon-cyan/30 w-8 h-8" />}
                {i % 3 === 1 && <FlaskConical className="text-neon-green/30 w-6 h-6" />}
                {i % 3 === 2 && <Microscope className="text-neon-purple/30 w-10 h-10" />}
              </motion.div>
            ))}
          </div>
          
          {/* V-Bot floating avatar in corner */}
          <motion.div 
            className="absolute top-0 right-0 z-20"
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <VBotAvatar size="md" className="animate-floating-3d" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="md:text-left text-center" // Text alignment for mobile vs desktop
            >
              <div className="mb-4 inline-block py-1 px-3 bg-neon-blue/10 text-neon-cyan rounded-full backdrop-blur-sm border border-neon-cyan/20">
                <div className="flex items-center gap-2">
                  <CloudLightning className="h-4 w-4" />
                  <span className="text-sm font-medium">Futuristic Learning</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <NeonText
                  as="h1"
                  variant="gradient"
                  glow="xl"
                  animation="flicker"
                  className="text-4xl md:text-6xl font-extrabold tracking-tight relative font-tech mx-auto"
                >
                  VigyaanKosh: AI-Powered Virtual Science Labs
                </NeonText>
              </div>
              
              <div className="h-24 mb-8 text-center">
                <TypewriterText
                  text="Conduct immersive experiments in Biology, Chemistry, and Physics using advanced AI simulations in a space-age virtual lab."
                  className="text-lg text-gray-300 max-w-lg mx-auto"
                  delay={500}
                  speed={30}
                />
              </div>
              
              <div className="flex gap-4 mt-12 justify-center">
                <GlowingButton 
                  variant="cyan" 
                  size="lg" 
                  glow="cyan"
                  animation="bounce"
                  className="font-tech shadow-lg shadow-neon-cyan/20 border border-neon-cyan/30"
                  asChild
                >
                  <Link to="/login">
                    <Atom className="mr-2 h-5 w-5" />
                    Explore Simulations
                  </Link>
                </GlowingButton>
                
                <GlowingButton 
                  variant="neon" 
                  size="lg" 
                  className="font-tech transition-all duration-200 hover:border-neon-cyan"
                  asChild
                >
                  <Link to="/about">
                    <Brain className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </GlowingButton>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 flex items-center justify-center"
            >
              {/* 3D Atom */}
              <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative">
                  {/* Electron orbits */}
                  <div className="absolute inset-0 rounded-full border-2 border-neon-blue/40 animate-rotate-slow"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-neon-blue/40 animate-rotate-slow" style={{transform: 'rotate(60deg)'}}></div>
                  <div className="absolute inset-0 rounded-full border-2 border-neon-blue/40 animate-rotate-slow" style={{transform: 'rotate(120deg)'}}></div>
                  
                  {/* Electron particles */}
                  <motion.div 
                    className="absolute w-4 h-4 bg-neon-cyan rounded-full shadow-glow"
                    animate={{ 
                      rotateZ: 360,
                      rotateX: 0
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ top: 0, left: 'calc(50% - 8px)' }}
                  />
                  <motion.div 
                    className="absolute w-4 h-4 bg-neon-purple rounded-full shadow-glow"
                    animate={{ 
                      rotateZ: 0,
                      rotateY: 360
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ bottom: 0, right: 'calc(50% - 8px)' }}
                  />
                  <motion.div 
                    className="absolute w-4 h-4 bg-neon-green rounded-full shadow-glow"
                    animate={{ 
                      rotateX: 360,
                      rotateY: 0
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ bottom: '50%', right: 0 }}
                  />
                  
                  {/* Nucleus */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-[0_0_30px_rgba(62,210,248,0.6)] flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0, -45, 0]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Atom className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* V-Bot Avatar */}
              <motion.div
                className="absolute -bottom-12 -right-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <VBotAvatar size="lg" className="animate-floating-3d" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Subject Cards Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-indigo-950 to-transparent"></div>
          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp}>
                <NeonText
                  as="h2"
                  variant="gradient"
                  glow="lg"
                  className="text-3xl md:text-4xl font-bold mb-6 font-tech"
                >
                  Explore Science Subjects
                </NeonText>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Choose from our interactive simulations across multiple scientific disciplines. Each experiment 
                is designed to help you understand complex concepts through hands-on learning.
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Biology Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ z: 10 }}
              >
                <GlassCard 
                  variant="colored" 
                  hover="flip"
                  className="group h-full"
                  padding="none"
                >
                  <div className="h-1 bg-gradient-to-r from-neon-green to-green-600"></div>
                  <div className="h-56 flex items-center justify-center relative overflow-hidden group-hover:h-48 transition-all duration-500">
                    <motion.div 
                      className="absolute w-40 h-40 bg-neon-green/10 rounded-full opacity-70 blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute w-20 h-20 bg-green-400/10 rounded-full opacity-70 bottom-5 left-5"></div>
                    <motion.div
                      className="relative z-10 group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Microscope className="w-24 h-24 text-neon-green shadow-[0_0_15px_rgba(0,255,127,0.6)]" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-transparent to-green-900/20">
                    <h3 className="text-xl font-tech text-center mb-2 text-neon-green animate-electric-flicker">Biology</h3>
                    <p className="text-gray-300 text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Zoom into cells, enzymes, and living systems through interactive simulations
                    </p>
                    <GlowingButton 
                      variant="neon" 
                      glow="neon"
                      animation="pulse"
                      className="w-full border-neon-green/30 text-neon-green group-hover:shadow-neon-green/20" 
                      asChild
                    >
                      <Link to="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-4 h-4" />
                        <span>Login to Access</span>
                      </Link>
                    </GlowingButton>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Chemistry Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ z: 10 }}
              >
                <GlassCard 
                  variant="colored" 
                  hover="flip"
                  className="group h-full"
                  padding="none"
                >
                  <div className="h-1 bg-gradient-to-r from-neon-blue to-blue-600"></div>
                  <div className="h-56 flex items-center justify-center relative overflow-hidden group-hover:h-48 transition-all duration-500">
                    <motion.div 
                      className="absolute w-40 h-40 bg-neon-blue/10 rounded-full opacity-70 blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <div className="absolute w-20 h-20 bg-blue-400/10 rounded-full opacity-70 bottom-5 left-5"></div>
                    <motion.div
                      className="relative z-10 group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                    >
                      <FlaskConical className="w-24 h-24 text-neon-blue shadow-[0_0_15px_rgba(0,191,255,0.6)]" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-transparent to-blue-900/20">
                    <h3 className="text-xl font-tech text-center mb-2 text-neon-blue animate-electric-flicker">Chemistry</h3>
                    <p className="text-gray-300 text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Simulate real reactions and explore molecular dynamics
                    </p>
                    <GlowingButton 
                      variant="neon" 
                      glow="neon"
                      animation="pulse"
                      className="w-full border-neon-blue/30 text-neon-blue group-hover:shadow-neon-blue/20" 
                      asChild
                    >
                      <Link to="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-4 h-4" />
                        <span>Login to Access</span>
                      </Link>
                    </GlowingButton>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Physics Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ z: 10 }}
              >
                <GlassCard 
                  variant="colored" 
                  hover="flip"
                  className="group h-full"
                  padding="none"
                >
                  <div className="h-1 bg-gradient-to-r from-neon-purple to-purple-600"></div>
                  <div className="h-56 flex items-center justify-center relative overflow-hidden group-hover:h-48 transition-all duration-500">
                    <motion.div 
                      className="absolute w-40 h-40 bg-neon-purple/10 rounded-full opacity-70 blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <div className="absolute w-20 h-20 bg-purple-400/10 rounded-full opacity-70 bottom-5 left-5"></div>
                    <motion.div
                      className="relative z-10 group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Atom className="w-24 h-24 text-neon-purple shadow-[0_0_15px_rgba(147,112,219,0.6)]" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-transparent to-purple-900/20">
                    <h3 className="text-xl font-tech text-center mb-2 text-neon-purple animate-electric-flicker">Physics</h3>
                    <p className="text-gray-300 text-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Visualize forces, magnetism, and relativity
                    </p>
                    <GlowingButton 
                      variant="neon" 
                      glow="neon"
                      animation="pulse"
                      className="w-full border-neon-purple/30 text-neon-purple group-hover:shadow-neon-purple/20" 
                      asChild
                    >
                      <Link to="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-4 h-4" />
                        <span>Login to Access</span>
                      </Link>
                    </GlowingButton>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-md"></div>
          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
            >
              <motion.h2
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-bold text-center mb-12 font-tech"
              >
                <NeonText variant="gradient" glow="lg">AI-Powered Learning Features</NeonText>
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <GlassCard
                    variant="neon"
                    hover="glow"
                    animation="flicker"
                    className="h-full p-8 rounded-xl shadow-lg border border-amber-500/20 hover:shadow-amber-500/30 hover:border-amber-500/30 transition-all flex flex-col items-center text-center relative group"
                  >
                    <div className="w-16 h-16 bg-amber-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-amber-500/30">
                      <motion.div
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <GraduationCap className="w-8 h-8 text-amber-400 relative z-10" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-tech mb-3 text-amber-300">AI Curriculum</h3>
                    <p className="text-gray-300">
                      Personalized learning journeys that adapt to your understanding and pace
                    </p>
                  </GlassCard>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <GlassCard
                    variant="neon"
                    hover="glow"
                    animation="flicker"
                    className="h-full p-8 rounded-xl shadow-lg border border-red-500/20 hover:shadow-red-500/30 hover:border-red-500/30 transition-all flex flex-col items-center text-center relative group"
                  >
                    <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-red-500/30">
                      <motion.div
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <Beaker className="w-8 h-8 text-red-400 relative z-10" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-tech mb-3 text-red-300">Virtual Experiments</h3>
                    <p className="text-gray-300">
                      Real-time simulations with feedback and guidance on your progress
                    </p>
                  </GlassCard>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <GlassCard
                    variant="neon"
                    hover="glow"
                    animation="flicker"
                    className="h-full p-8 rounded-xl shadow-lg border border-cyan-500/20 hover:shadow-cyan-500/30 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center relative group"
                  >
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-cyan-500/30">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Brain className="w-8 h-8 text-cyan-400 relative z-10" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-tech mb-3 text-cyan-300">V-Bot Assistant</h3>
                    <p className="text-gray-300">
                      24/7 AI mentor for live help answering all your science questions
                    </p>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Meet V-Bot Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-10">
                <NeonText as="h2" variant="gradient" glow="lg" className="text-3xl md:text-4xl font-bold font-tech mb-4">
                  Meet Your Science Mentor
                </NeonText>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  V-Bot is your personal AI science guide, ready to assist with experiments and answer your questions
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 md:p-12 rounded-xl shadow-lg border border-neon-cyan/20 overflow-hidden relative">
                <div className="absolute -right-20 top-20 w-60 h-60 bg-neon-cyan/10 rounded-full blur-xl"></div>
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-neon-purple/10 rounded-full blur-xl"></div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-neon-purple/30 relative">
                      <div className="absolute -top-3 -left-3 w-6 h-6 bg-neon-purple/50 rounded-full"></div>
                      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-neon-blue/50 rounded-full"></div>
                      
                      <NeonText as="h3" variant="gradient" glow="lg" className="text-2xl font-bold mb-4 font-tech">
                        Hey there! I'm V-Bot.
                      </NeonText>
                      
                      <p className="text-gray-300 mb-6">
                        Need help with science? I'm here 24/7 to guide you! Ask me anything about Biology, Chemistry, Physics or any scientific concept you're curious about.
                      </p>
                      
                      <GlowingButton 
                        variant="neon" 
                        glow="neon"
                        animation="bounce"
                        className="border-neon-purple/30" 
                        size="lg"
                        asChild
                      >
                        <Link to="/login">
                          <MessageSquare className="mr-2 h-5 w-5" />
                          Talk to V-Bot
                        </Link>
                      </GlowingButton>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 relative flex justify-center items-center">
                    {/* Floating 3D V-Bot model */}
                    <div className="relative h-96 w-96">
                      {/* Holographic platform */}
                      <motion.div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent rounded-full blur-md"
                        animate={{ 
                          boxShadow: ['0 5px 15px rgba(0, 255, 255, 0.3)', '0 5px 25px rgba(0, 255, 255, 0.5)', '0 5px 15px rgba(0, 255, 255, 0.3)'],
                          width: [250, 270, 250]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* V-Bot Avatar with enhanced size and effects */}
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-1/2 bottom-10 transform -translate-x-1/2"
                      >
                        <VBotAvatar size="xl" interactive={true} className="z-10" />
                        
                        {/* Orbiting lights */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-purple rounded-full blur-sm opacity-70" />
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full blur-sm opacity-70" />
                        </motion.div>
                        
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-neon-cyan rounded-full blur-sm opacity-70" />
                          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-neon-green rounded-full blur-sm opacity-70" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Speech bubble */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute top-0 right-0 bg-neon-cyan/10 backdrop-blur-md border border-neon-cyan/30 p-4 rounded-lg max-w-[220px] shadow-lg"
                      >
                        <p className="text-neon-cyan text-sm">Hey there! I'm V-Bot. Need help with science? I'm here 24/7 to guide you!</p>
                        <div className="absolute -bottom-2 right-10 w-4 h-4 bg-neon-cyan/10 border-b border-r border-neon-cyan/30 transform rotate-45"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md text-white py-12 relative overflow-hidden border-t border-neon-cyan/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSIxMCIgeDI9IjEwMCIgeTI9IjEwIiBzdHJva2U9IiMwMDhlYmExMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iMCIgeTE9IjIwIiB4Mj0iMTAwIiB5Mj0iMjAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iMzAiIHgyPSIxMDAiIHkyPSIzMCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSI0MCIgeDI9IjEwMCIgeTI9IjQwIiBzdHJva2U9IiMwMDhlYmExMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iMCIgeTE9IjUwIiB4Mj0iMTAwIiB5Mj0iNTAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iNjAiIHgyPSIxMDAiIHkyPSI2MCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSI3MCIgeDI9IjEwMCIgeTI9IjcwIiBzdHJva2U9IiMwMDhlYmExMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48bGluZSB4MT0iMCIgeTE9IjgwIiB4Mj0iMTAwIiB5Mj0iODAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSIwIiB5MT0iOTAiIHgyPSIxMDAiIHkyPSI5MCIgc3Ryb2tlPSIjMDA4ZWJhMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PGxpbmUgeDE9IjAiIHkxPSIxMDAiIHgyPSIxMDAiIHkyPSIxMDAiIHN0cm9rZT0iIzAwOGViYTEwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]
      bg-repeat animate-circuit-flow opacity-30 pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Beaker className="h-6 w-6 text-neon-cyan" />
                <NeonText variant="gradient" glow="md" className="text-xl font-bold">
                  VigyaanKosh
                </NeonText>
              </div>
              <p className="text-gray-400 max-w-md">
                Interactive science experiments and simulations for students and educators.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-tech mb-4 text-neon-cyan">Subjects</h3>
                <ul className="space-y-2">
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Biology</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Chemistry</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Physics</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-tech mb-4 text-neon-cyan">Features</h3>
                <ul className="space-y-2">
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Achievements</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Challenges</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">AI Mentor</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-tech mb-4 text-neon-cyan">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">About</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Contact</Link></li>
                  <li><Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Help</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} VigyaanKosh. All rights reserved. Powered by AI.</p>
            
            {/* Animated circuit line */}
            <div className="w-full h-1 mt-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-blue/20 to-neon-purple/5"></div>
              <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-liquid-shimmer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
