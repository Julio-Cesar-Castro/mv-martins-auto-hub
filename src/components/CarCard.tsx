import { motion } from 'framer-motion';
import { Calendar, Fuel, Gauge, Palette, Settings } from 'lucide-react';
import { Car } from '@/data/cars';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
  variant?: 'simple' | 'detailed';
}

export function CarCard({ car, onClick, variant = 'simple' }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number) => {
    return new Intl.NumberFormat('pt-BR').format(km);
  };

  if (variant === 'simple') {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => onClick(car)}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={car.images[0]}
            alt={car.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          {car.armored && (
            <Badge className="absolute right-3 top-3 bg-primary/90 text-primary-foreground">
              Blindado
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-2">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {car.brand}
            </p>
            <h3 className="font-display text-xl font-bold text-foreground">
              {car.name}
            </h3>
            <p className="text-sm text-muted-foreground">{car.version}</p>
          </div>

          <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {car.year}
            </span>
            <span className="flex items-center gap-1">
              <Gauge className="h-3.5 w-3.5" />
              {formatKm(car.km)} km
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <p className="font-display text-xl font-bold text-primary">
              {formatPrice(car.price)}
            </p>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              Ver mais
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  // Detailed variant for Estoque page
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {car.armored && (
          <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">
            Blindado
          </Badge>
        )}
        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-medium uppercase tracking-wider text-white/80">
            {car.brand}
          </p>
          <h3 className="font-display text-2xl font-bold text-white">{car.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Info Grid */}
        <div className="mb-4 grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center rounded-lg bg-secondary p-2 text-center">
            <Calendar className="mb-1 h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Ano</span>
            <span className="text-sm font-semibold text-foreground">{car.year}</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-secondary p-2 text-center">
            <Fuel className="mb-1 h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Comb.</span>
            <span className="truncate text-sm font-semibold text-foreground">
              {car.fuel}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-secondary p-2 text-center">
            <Gauge className="mb-1 h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">KM</span>
            <span className="text-sm font-semibold text-foreground">
              {formatKm(car.km)}
            </span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-secondary p-2 text-center">
            <Palette className="mb-1 h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Cor</span>
            <span className="truncate text-sm font-semibold text-foreground">
              {car.color}
            </span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Settings className="h-4 w-4" />
          <span>{car.transmission}</span>
          <span>•</span>
          <span>{car.doors} portas</span>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <p className="font-display text-2xl font-bold text-primary">
            {formatPrice(car.price)}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => onClick(car)}
              className="flex-1 rounded-lg bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Ver Detalhes
            </button>
            <a
              href={`https://wa.me/5511947968556?text=Olá! Tenho interesse no ${car.name} ${car.version} - ${car.year}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Estou Interessado
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
