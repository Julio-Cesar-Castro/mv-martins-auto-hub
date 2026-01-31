import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CarCard } from '@/components/CarCard';
import { CarDetailModal } from '@/components/CarDetailModal';
import { cars, Car, brands, colors, fuels, transmissions, years, doors } from '@/data/cars';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface Filters {
  search: string;
  brands: string[];
  colors: string[];
  fuels: string[];
  transmissions: string[];
  years: number[];
  doors: number[];
  armored: boolean | null;
}

const initialFilters: Filters = {
  search: '',
  brands: [],
  colors: [],
  fuels: [],
  transmissions: [],
  years: [],
  doors: [],
  armored: null,
};

export default function Estoque() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          car.name.toLowerCase().includes(searchLower) ||
          car.brand.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.version.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(car.brand)) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.includes(car.color)) {
        return false;
      }

      // Fuel filter
      if (filters.fuels.length > 0 && !filters.fuels.includes(car.fuel)) {
        return false;
      }

      // Transmission filter
      if (
        filters.transmissions.length > 0 &&
        !filters.transmissions.includes(car.transmission)
      ) {
        return false;
      }

      // Year filter
      if (filters.years.length > 0 && !filters.years.includes(car.year)) {
        return false;
      }

      // Doors filter
      if (filters.doors.length > 0 && !filters.doors.includes(car.doors)) {
        return false;
      }

      // Armored filter
      if (filters.armored !== null && car.armored !== filters.armored) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const toggleFilter = <K extends keyof Filters>(
    key: K,
    value: Filters[K] extends (infer U)[] ? U : never
  ) => {
    setFilters((prev) => {
      const current = prev[key] as unknown[];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      }
      return { ...prev, [key]: [...current, value] };
    });
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const activeFiltersCount =
    filters.brands.length +
    filters.colors.length +
    filters.fuels.length +
    filters.transmissions.length +
    filters.years.length +
    filters.doors.length +
    (filters.armored !== null ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Brands */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">Marcas</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => toggleFilter('brands', brand)}
              />
              <span className="text-sm text-foreground">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Years */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">Ano</h3>
        <div className="flex flex-wrap gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => toggleFilter('years', year)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filters.years.includes(year)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Transmissions */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">Câmbio</h3>
        <div className="space-y-2">
          {transmissions.map((transmission) => (
            <label
              key={transmission}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox
                checked={filters.transmissions.includes(transmission)}
                onCheckedChange={() => toggleFilter('transmissions', transmission)}
              />
              <span className="text-sm text-foreground">{transmission}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">Cores</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => toggleFilter('colors', color)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                filters.colors.includes(color)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Fuels */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">
          Combustível
        </h3>
        <div className="space-y-2">
          {fuels.map((fuel) => (
            <label
              key={fuel}
              className="flex cursor-pointer items-center gap-2"
            >
              <Checkbox
                checked={filters.fuels.includes(fuel)}
                onCheckedChange={() => toggleFilter('fuels', fuel)}
              />
              <span className="text-sm text-foreground">{fuel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Doors */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">Portas</h3>
        <div className="flex gap-2">
          {doors.map((door) => (
            <button
              key={door}
              onClick={() => toggleFilter('doors', door)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                filters.doors.includes(door)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {door}
            </button>
          ))}
        </div>
      </div>

      {/* Armored */}
      <div>
        <h3 className="mb-3 font-display font-semibold text-foreground">
          Blindados
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                armored: prev.armored === true ? null : true,
              }))
            }
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              filters.armored === true
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Sim
          </button>
          <button
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                armored: prev.armored === false ? null : false,
              }))
            }
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              filters.armored === false
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            Não
          </button>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full gap-2"
        >
          <X className="h-4 w-4" />
          Limpar Filtros ({activeFiltersCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-background to-background py-12 md:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Nosso <span className="text-primary">Estoque</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Encontre o veículo ideal para você. Use os filtros para refinar sua
              busca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-8 md:py-12">
        <div className="container">
          {/* Search & Filter Bar */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por marca, modelo..."
                value={filters.search}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, search: e.target.value }))
                }
                className="h-12 pl-10"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                {filteredCars.length} veículo(s) encontrado(s)
              </p>

              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2 lg:hidden">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtros
                    {activeFiltersCount > 0 && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden w-64 flex-shrink-0 lg:block">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-6 font-display text-lg font-bold text-foreground">
                  Filtros
                </h2>
                <FilterContent />
              </div>
            </aside>

            {/* Car Grid */}
            <div className="flex-1">
              {filteredCars.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-secondary/30 py-16 text-center">
                  <div className="mb-4 text-6xl">🚗</div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    Nenhum veículo encontrado
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Tente ajustar os filtros para ver mais resultados.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Limpar Filtros
                  </Button>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredCars.map((car, index) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CarCard
                        car={car}
                        onClick={handleCarClick}
                        variant="detailed"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Car Detail Modal */}
      <CarDetailModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
