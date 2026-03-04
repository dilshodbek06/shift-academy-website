export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
      screens: {
        'xs': '390px',
      },
  		colors: {
  			brand: {
  				'50': 'var(--brand-50)',
  				'600': 'var(--brand-600)',
  				DEFAULT: 'var(--brand)'
  			},
  			bg: 'var(--bg)',
  			surface: 'var(--surface)',
  			text: 'var(--text)',
  			muted: 'var(--muted)',
  			border: 'var(--border)',
  			background: 'var(--bg)',
  			foreground: 'var(--text)',
  			primary: {
  				DEFAULT: 'var(--brand)',
  				foreground: 'var(--bg)'
  			},
  			secondary: {
  				DEFAULT: 'var(--surface)',
  				foreground: 'var(--text)'
  			},
  			card: {
  				DEFAULT: 'var(--surface)',
  				foreground: 'var(--text)'
  			},
  			popover: {
  				DEFAULT: 'var(--surface)',
  				foreground: 'var(--text)'
  			},
  			accent: {
  				DEFAULT: 'var(--surface)',
  				foreground: 'var(--brand-50)'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'brand-gradient': 'linear-gradient(to right, #31A8FF, #197ACB)',
  			'hero-glow': 'radial-gradient(circle at center, rgba(49,168,255,0.15) 0%, rgba(7,11,18,0) 70%)'
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
  			'marquee': {
  			  from: { transform: 'translateX(0)' },
  			  to: { transform: 'translateX(calc(-50% - 0.75rem))' },
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'marquee': 'marquee 40s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
