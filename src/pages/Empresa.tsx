import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Award, Users, Clock, Shield, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Clock, value: '+10', label: 'Anos de mercado' },
  { icon: Users, value: '+1000', label: 'Clientes satisfeitos' },
  { icon: Award, value: '+500', label: 'Veículos vendidos' },
  { icon: Shield, value: '100%', label: 'Procedência garantida' },
];

const values = [
  'Transparência em todas as negociações',
  'Veículos inspecionados e revisados',
  'Equipe especializada e dedicada',
  'Atendimento personalizado',
  'Facilidade no financiamento',
  'Garantia de procedência',
];

export default function Empresa() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Sobre Nós
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              Conheça a <span className="text-primary">MV Martins Veículos</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Há mais de 10 anos realizando sonhos e conectando pessoas aos seus
              veículos ideais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Image & History */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800"
                    alt="Nossa loja"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-xl">
                  <p className="font-display text-4xl font-bold">+10</p>
                  <p className="text-sm">Anos de história</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                Nossa História
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Uma trajetória de confiança e qualidade
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fundada em 2014, a MV Martins Veículos nasceu do sonho de
                  oferecer uma experiência diferenciada na compra e venda de
                  veículos. Desde o início, nossa missão sempre foi proporcionar
                  aos nossos clientes segurança, transparência e as melhores
                  condições do mercado.
                </p>
                <p>
                  Ao longo de mais de uma década, construímos uma reputação
                  sólida baseada em valores como honestidade, qualidade e
                  atendimento personalizado. Cada veículo que passa por nossa
                  loja é rigorosamente inspecionado e avaliado para garantir a
                  satisfação total de nossos clientes.
                </p>
                <p>
                  Hoje, somos referência no mercado de seminovos e usados,
                  contando com uma equipe especializada e infraestrutura completa
                  para atender você da melhor forma possível. Nosso compromisso é
                  realizar o seu sonho de ter o carro ideal com toda a segurança
                  que você merece.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Localização
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Venha nos visitar
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Estamos localizados em um ponto de fácil acesso. Venha conhecer
              nossa loja e conferir nossos veículos pessoalmente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border shadow-lg"
          >
            {/* Placeholder for Google Maps - Replace with actual embed */}
            <div className="relative aspect-[21/9] bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975834073777!2d-46.65390792467468!3d-23.561414761557453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid gap-6 text-center sm:grid-cols-3"
          >
            <div className="rounded-xl bg-secondary/50 p-6">
              <h3 className="mb-2 font-display font-semibold text-foreground">
                Endereço
              </h3>
              <p className="text-sm text-muted-foreground">
                Rua Exemplo, 123 - Centro
                <br />
                São Paulo - SP, 01000-000
              </p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-6">
              <h3 className="mb-2 font-display font-semibold text-foreground">
                Horário de Funcionamento
              </h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 14h
              </p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-6">
              <h3 className="mb-2 font-display font-semibold text-foreground">
                Telefone
              </h3>
              <p className="text-sm text-muted-foreground">
                (11) 4028-5068
                <br />
                (11) 4021-2804
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
