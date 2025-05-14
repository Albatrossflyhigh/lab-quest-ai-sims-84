
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
}

export default function ParticleBackground({ 
  particleCount = 50,
  baseColor = "#00FFFF",
  className = ""
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize and event listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    particles.current = [];
    
    const colorVariations = [
      baseColor,
      "#9370DB", // Neon purple
      "#00BFFF", // Deep sky blue
      "#FF69B4", // Hot pink
      "#00FF7F", // Spring green
    ];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 0.5;
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        color: colorVariations[Math.floor(Math.random() * colorVariations.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    // Animation function
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `${particle.color}${Math.round(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Connect particles that are close
        particles.current.forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `${particle.color}${Math.round((particle.alpha * (1 - distance / 100) * 0.3) * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, baseColor]);
  
  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
    />
  );
}
