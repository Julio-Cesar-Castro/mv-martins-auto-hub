import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Shield, Send, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SeguroFormData {
  nome: string;
  email: string;
  rg: string;
  cpf: string;
  celular: string;
  dataNascimento: string;
}

const benefits = [
  'Cobertura completa contra roubo e furto',
  'Assistência 24 horas em todo o Brasil',
  'Carro reserva em caso de sinistro',
  'Proteção para terceiros',
  'Cobertura para danos da natureza',
  'Atendimento personalizado',
];

export default function Seguro() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SeguroFormData>();

  const onSubmit = async (data: SeguroFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success(
      'Sua solicitação de seguro foi enviada com sucesso! Entraremos em contato com as melhores opções.'
    );
    reset();
  };

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
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Precisa de um <span className="text-primary">Seguro</span>?
            </h1>
            <p className="text-lg text-muted-foreground">
              Proteja seu veículo com as melhores seguradoras do mercado. Solicite
              uma cotação gratuita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
                Por que fazer seu seguro conosco?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-primary/5 p-6">
                <h3 className="mb-2 font-display font-semibold text-foreground">
                  Trabalhamos com as melhores seguradoras
                </h3>
                <p className="text-sm text-muted-foreground">
                  Porto Seguro, Bradesco Seguros, Tokio Marine, HDI, Allianz,
                  Mapfre, SulAmérica e muito mais. Encontramos a melhor opção para
                  o seu perfil e bolso.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <h2 className="mb-6 font-display text-xl font-bold text-foreground">
                Solicitar Cotação de Seguro
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Nome Completo <span className="text-destructive">*</span>
                  </label>
                  <Input
                    {...register('nome', { required: 'Nome é obrigatório' })}
                    placeholder="Seu nome completo"
                    className="h-11"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    E-mail <span className="text-destructive">*</span>
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

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      RG <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register('rg', { required: 'RG é obrigatório' })}
                      placeholder="00.000.000-0"
                      className="h-11"
                    />
                    {errors.rg && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.rg.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      CPF <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register('cpf', { required: 'CPF é obrigatório' })}
                      placeholder="000.000.000-00"
                      className="h-11"
                    />
                    {errors.cpf && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.cpf.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Celular <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register('celular', { required: 'Celular é obrigatório' })}
                      placeholder="(11) 99999-9999"
                      className="h-11"
                    />
                    {errors.celular && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.celular.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Data de Nascimento <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register('dataNascimento', {
                        required: 'Data de nascimento é obrigatória',
                      })}
                      type="date"
                      className="h-11"
                    />
                    {errors.dataNascimento && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.dataNascimento.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-6 h-12 w-full gap-2 rounded-xl text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Solicitar Cotação
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
