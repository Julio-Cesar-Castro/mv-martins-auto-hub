import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Empresa', path: '/empresa' },
  { name: 'Estoque', path: '/estoque' },
  { name: 'Financiamento', path: '/financiamento' },
  { name: 'Venda seu Carro', path: '/venda-seu-carro' },
  { name: 'Seguro', path: '/seguro' },
  { name: 'Contato', path: '/contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Car className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-foreground md:text-xl">
              MV
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground md:text-xs">
              Martins Veículos
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-x-2 -bottom-[1px] h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.me/5511947968556"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 rounded-full">
              <Phone className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <nav className="container flex flex-col gap-1 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-accent text-primary'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-2 px-4"
              >
                <a
                  href="https://wa.me/5511947968556"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full gap-2 rounded-full">
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
