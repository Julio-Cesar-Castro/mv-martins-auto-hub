import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Fuel,
  Gauge,
  Palette,
  Settings,
  CreditCard,
  Shield,
  Send,
  Car as CarIcon,
  Tag,
} from 'lucide-react';
import { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface CarDetailModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ProposalFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function CarDetailModal({ car, isOpen, onClose }: CarDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProposalFormData>();

  if (!car) return null;

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + car.images.length) % car.images.length
    );
  };

  const onSubmit = async (data: ProposalFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Proposta enviada com sucesso! Entraremos em contato em breve.');
    reset();
  };

  const specs = [
    { icon: Tag, label: 'Marca', value: car.brand },
    { icon: CarIcon, label: 'Modelo', value: car.model },
    { icon: Calendar, label: 'Ano', value: car.year },
    { icon: Settings, label: 'Versão', value: car.version },
    { icon: CreditCard, label: 'Portas', value: car.doors },
    { icon: Fuel, label: 'Combustível', value: car.fuel },
    { icon: Gauge, label: 'KM', value: formatKm(car.km) },
    { icon: Palette, label: 'Cor', value: car.color },
    { icon: Shield, label: 'Placa', value: car.plate },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-background shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Left Side - Image Gallery */}
              <div className="relative bg-secondary/50">
                {/* Main Image */}
                <div className="relative aspect-[4/3] lg:aspect-square">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={car.images[currentImageIndex]}
                      alt={car.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {car.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {car.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {car.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 w-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'w-6 bg-primary'
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 p-4">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-primary'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.name} - Imagem ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Car Info */}
                <div className="border-t border-border p-6">
                  <div className="mb-4">
                    <p className="text-sm font-medium uppercase tracking-wider text-primary">
                      {car.brand}
                    </p>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {car.name}
                    </h2>
                    <p className="text-muted-foreground">{car.version}</p>
                  </div>

                  <p className="mb-6 font-display text-3xl font-bold text-primary">
                    {formatPrice(car.price)}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {specs.map((spec, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-secondary p-3 text-center"
                      >
                        <spec.icon className="mx-auto mb-1 h-4 w-4 text-primary" />
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="truncate text-sm font-semibold text-foreground">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Proposal Form */}
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Solicitar Proposta
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Nome Completo
                    </label>
                    <Input
                      {...register('name', { required: 'Nome é obrigatório' })}
                      placeholder="Seu nome"
                      className="h-11"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <Input
                      {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'E-mail inválido',
                        },
                      })}
                      type="email"
                      placeholder="seu@email.com"
                      className="h-11"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Celular
                    </label>
                    <Input
                      {...register('phone', { required: 'Celular é obrigatório' })}
                      placeholder="(11) 99999-9999"
                      className="h-11"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Escreva sua mensagem ou dúvidas..."
                      rows={4}
                      defaultValue={`Olá! Tenho interesse no ${car.name} ${car.version} - ${car.year}.`}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full gap-2 rounded-xl text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar Proposta
                      </>
                    )}
                  </Button>
                </form>

                {/* WhatsApp Button */}
                <div className="mt-6 text-center">
                  <p className="mb-3 text-sm text-muted-foreground">
                    Ou fale diretamente conosco:
                  </p>
                  <a
                    href={`https://wa.me/5511947968556?text=Olá! Tenho interesse no ${car.name} ${car.version} - ${car.year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-medium text-white transition-colors hover:bg-[#128C7E]"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
