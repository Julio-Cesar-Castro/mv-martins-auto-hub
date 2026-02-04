import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CarCard } from '@/components/CarCard';
import { CarDetailModal } from '@/components/CarDetailModal';
import { cars, Car } from '@/data/cars';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Todos os veículos passam por rigorosa inspeção de qualidade.',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Trabalhamos apenas com veículos selecionados e bem conservados.',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    description: 'Equipe dedicada para te atender com rapidez e eficiência.',
  },
  {
    icon: Users,
    title: '+1000 Clientes',
    description: 'Milhares de clientes satisfeitos ao longo dos anos.',
  },
];

export default function Index() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const featuredCars = cars.slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310B981%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container relative py-20 md:py-28 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                🚗 Seu próximo carro está aqui
              </span>
              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Encontre o{' '}
                <span className="text-primary">veículo perfeito</span> para você
              </h1>
              <p className="mb-8 max-w-lg text-lg text-muted-foreground">
                Na MV Martins Veículos, oferecemos os melhores seminovos e usados
                com qualidade, procedência e as melhores condições de pagamento.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/">
                  <Button size="lg" className="gap-2 rounded-full px-6">
                    Ver Estoque
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-6"
                  >
                    Simular Financiamento
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800"
                  alt="Carros de qualidade"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-background p-4 shadow-xl md:-left-12"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">
                      +10
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Anos de experiência
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-border bg-secondary/30 py-12">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-display font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Destaques
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Veículos em Destaque
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Confira alguns dos nossos veículos disponíveis. Qualidade e
              procedência garantidas.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CarCard car={car} onClick={handleCarClick} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2 rounded-full">
                Ver Todo o Estoque
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Quer vender seu carro?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Compramos seu veículo usado! Avaliação rápida e pagamento à vista.
              Entre em contato e faça uma avaliação sem compromisso.
            </p>
            <Link to="/">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 rounded-full px-8"
              >
                Vender Meu Carro
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
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
