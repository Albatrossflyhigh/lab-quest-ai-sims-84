import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
				tech: ['Orbitron', 'sans-serif'],
				future: ['Sora', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lab: {
					blue: 'hsl(var(--color-lab-blue))',
					green: 'hsl(var(--color-lab-green))',
					purple: 'hsl(var(--color-lab-purple))'
				},
				neon: {
					cyan: '#00FFFF',
					blue: '#00BFFF',
					purple: '#9370DB',
					pink: '#FF69B4',
					green: '#00FF7F'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': { 
						transform: 'translateY(-10px)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': { 
						opacity: '1'
					},
					'50%': { 
						opacity: '0.8'
					}
				},
				'rotate-slow': {
					'0%': { 
						transform: 'rotate(0deg)'
					},
					'100%': { 
						transform: 'rotate(360deg)'
					}
				},
				'shimmer': {
					'0%': { 
						backgroundPosition: '-200% 0'
					},
					'100%': { 
						backgroundPosition: '200% 0'
					}
				},
				'scale-in': {
					'0%': { 
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0'
					},
					'100%': { 
						opacity: '1'
					}
				},
				'electric-flicker': {
					'0%, 100%': { opacity: '1' },
					'33%': { opacity: '0.9' },
					'66%': { opacity: '0.8' },
					'77%': { opacity: '1.2' }
				},
				'floating-3d': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0) rotate3d(1, 1, 1, 0deg)',
						filter: 'drop-shadow(0 0 5px rgba(62, 210, 248, 0.5))'
					},
					'50%': { 
						transform: 'translateY(-15px) translateX(5px) rotate3d(1, 1, 1, 10deg)',
						filter: 'drop-shadow(0 0 10px rgba(62, 210, 248, 0.8))'
					}
				},
				'liquid-shimmer': {
					'0%': { transform: 'translateX(-100%) rotate(-45deg)' },
					'100%': { transform: 'translateX(100%) rotate(-45deg)' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px rgba(62, 210, 248, 0.5))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 15px rgba(62, 210, 248, 0.8))' 
					}
				},
				'hologram-flicker': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'25%': { opacity: '0.8', transform: 'scale(0.98)' },
					'50%': { opacity: '0.9', transform: 'scale(1.02)' },
					'75%': { opacity: '0.85', transform: 'scale(0.99)' },
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink-cursor': {
					'0%, 100%': { borderRightColor: 'transparent' },
					'50%': { borderRightColor: 'rgba(62, 210, 248, 0.8)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0) scale(1)' },
					'50%': { transform: 'translateY(-5px) scale(1.05)' }
				},
				'circuit-flow': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 100%' }
				},
				'rotate-3d': {
					'0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
					'100%': { transform: 'rotate3d(1, 1, 1, 360deg)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'scale-in': 'scale-in 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'electric-flicker': 'electric-flicker 3s ease-in-out infinite',
				'floating-3d': 'floating-3d 6s ease-in-out infinite',
				'liquid-shimmer': 'liquid-shimmer 2s infinite linear',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'hologram-flicker': 'hologram-flicker 3s infinite',
				'typewriter': 'typewriter 4s steps(40) 1s forwards',
				'blink-cursor': 'blink-cursor 0.75s step-end infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'circuit-flow': 'circuit-flow 20s linear infinite',
				'rotate-3d': 'rotate-3d 12s linear infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
