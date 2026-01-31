import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ContatoFormData {
  nome: string;
  email: string;
  celular: string;
  assunto: string;
  mensagem: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'oseiasmts@hotmail.com',
    href: 'mailto:oseiasmts@hotmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 4028-5068 / (11) 4021-2804',
    href: 'tel:+551140285068',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(11) 94796-8556 / (11) 94794-4578',
    href: 'https://wa.me/5511947968556',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Exemplo, 123 - Centro, São Paulo - SP',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg-Sex: 8h às 18h | Sáb: 8h às 14h',
    href: '#',
  },
];

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>();

  const onSubmit = async (data: ContatoFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success(
      'Mensagem enviada com sucesso! Entraremos em contato em breve.'
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
            <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Fale <span className="text-primary">Conosco</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você. Entre em contato conosco através
              do formulário ou pelos nossos canais de atendimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                Informações de Contato
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      info.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-accent"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/5511947968556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-medium text-white transition-colors hover:bg-[#128C7E]"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chamar no WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-6 font-display text-xl font-bold text-foreground">
                  Envie sua Mensagem
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Nome <span className="text-destructive">*</span>
                      </label>
                      <Input
                        {...register('nome', { required: 'Nome é obrigatório' })}
                        placeholder="Seu nome"
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
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Celular <span className="text-destructive">*</span>
                      </label>
                      <Input
                        {...register('celular', {
                          required: 'Celular é obrigatório',
                        })}
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
                        Assunto <span className="text-destructive">*</span>
                      </label>
                      <Input
                        {...register('assunto', {
                          required: 'Assunto é obrigatório',
                        })}
                        placeholder="Assunto da mensagem"
                        className="h-11"
                      />
                      {errors.assunto && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.assunto.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Mensagem <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      {...register('mensagem', {
                        required: 'Mensagem é obrigatória',
                      })}
                      placeholder="Escreva sua mensagem..."
                      rows={5}
                    />
                    {errors.mensagem && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.mensagem.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 h-12 w-full gap-2 rounded-xl text-base sm:w-auto sm:px-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
