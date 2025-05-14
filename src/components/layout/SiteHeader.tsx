
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Beaker, BookOpen, LogIn, Home } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

const SiteHeader = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="sticky top-0 z-40 w-full bg-background/10 backdrop-blur-md border-b border-white/10">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            className="relative"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Beaker className="h-8 w-8 text-cyan-400" />
            <motion.div 
              className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-200">
            VigyaanKosh
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-300 hover:text-cyan-300 transition-colors flex items-center gap-1 hover-button"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link 
            to="/biology" 
            className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors hover-button"
          >
            Biology
          </Link>
          <Link 
            to="/chemistry" 
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors hover-button"
          >
            Chemistry
          </Link>
          <Link 
            to="/physics" 
            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors hover-button"
          >
            Physics
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
            asChild
          >
            <Link to="/about">
              <BookOpen className="h-4 w-4" />
              <span>About</span>
            </Link>
          </Button>
          {!isLoginPage && (
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white border border-white/10 shadow-lg shadow-blue-600/20" 
              asChild
            >
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
