
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { useSoundEffect } from '@/hooks/use-sound-effect';

interface VBotAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const VBotAvatar: React.FC<VBotAvatarProps> = ({ 
  size = 'md', 
  interactive = true,
  className = '' 
}) => {
  const { playSound } = useSoundEffect();
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleMouseEnter = () => {
    if (interactive) {
      setIsHovered(true);
      playSound('hover');
    }
  };
  
  const handleMouseLeave = () => {
    if (interactive) {
      setIsHovered(false);
    }
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={isHovered ? {
        scale: [1, 1.05, 1],
        rotate: [0, 5, 0, -5, 0],
      } : {}}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      {/* Outer glow ring */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/30 to-neon-blue/30 blur-md"
        animate={{ 
          boxShadow: ['0 0 20px rgba(0, 255, 255, 0.5)', '0 0 30px rgba(0, 255, 255, 0.7)', '0 0 20px rgba(0, 255, 255, 0.5)'] 
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Main avatar circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-sm border border-neon-cyan/30 flex items-center justify-center"
        animate={{ 
          boxShadow: isHovered 
            ? '0 0 30px rgba(0, 255, 255, 0.7)' 
            : '0 0 20px rgba(0, 255, 255, 0.5)' 
        }}
      >
        {/* Brain icon */}
        <motion.div
          animate={isHovered ? {
            scale: [1, 1.1, 1],
            rotateZ: [0, 10, -10, 0],
          } : {
            scale: [1, 1.05, 1],
            rotateZ: 0,
          }}
          transition={{
            duration: isHovered ? 0.8 : 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Brain className="text-neon-cyan w-3/5 h-3/5 mx-auto" />
        </motion.div>
      </motion.div>
      
      {/* Orbiting particles */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-3 h-3 bg-neon-blue/60 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 blur-[1px]" />
        <div className="w-2 h-2 bg-neon-purple/60 rounded-full absolute top-1/4 right-0 blur-[1px]" />
        <div className="w-2.5 h-2.5 bg-neon-cyan/60 rounded-full absolute bottom-0 left-1/3 transform -translate-x-1/3 blur-[1px]" />
      </motion.div>
    </motion.div>
  );
};

export default VBotAvatar;
