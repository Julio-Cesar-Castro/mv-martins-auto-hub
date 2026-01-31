import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Car, Send, User, MapPin, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface VendaFormData {
  // Dados Pessoais
  nomeCompleto: string;
  email: string;
  celular: string;
  endereco: string;
  estado: string;
  cidade: string;
  // Dados do Veículo
  marca: string;
  modelo: string;
  versao: string;
  cor: string;
  km: string;
  placa: string;
  anoModelo: string;
  opcionais: string;
  primeiroProprietario: boolean;
  estofamentoManchado: boolean;
  possuiSeguro: boolean;
  recuperadoRoubo: boolean;
  observacoes: string;
}

export default function VendaSeuCarro() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VendaFormData>({
    defaultValues: {
      primeiroProprietario: false,
      estofamentoManchado: false,
      possuiSeguro: false,
      recuperadoRoubo: false,
    },
  });

  const onSubmit = async (data: VendaFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success(
      'Sua solicitação de venda foi enviada com sucesso! Entraremos em contato para avaliar seu veículo.'
    );
    reset();
  };

  const InputField = ({
    label,
    name,
    type = 'text',
    placeholder,
    required = false,
  }: {
    label: string;
    name: keyof VendaFormData;
    type?: string;
    placeholder?: string;
    required?: boolean;
  }) => (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive">*</span>}
      </label>
      <Input
        {...register(name, required ? { required: `${label} é obrigatório` } : {})}
        type={type}
        placeholder={placeholder}
        className="h-11"
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-destructive">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );

  const CheckboxField = ({
    label,
    name,
  }: {
    label: string;
    name: keyof VendaFormData;
  }) => {
    const value = watch(name);
    return (
      <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4">
        <Checkbox
          id={name}
          checked={value as boolean}
          onCheckedChange={(checked) => setValue(name, checked as boolean)}
        />
        <label
          htmlFor={name}
          className="cursor-pointer text-sm leading-tight text-foreground"
        >
          {label}
        </label>
      </div>
    );
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
              Venda seu <span className="text-primary">Carro</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Quer vender seu veículo? Preencha o formulário abaixo e receba uma
              avaliação sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Dados Pessoais */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <User className="h-5 w-5 text-primary" />
                Seus Dados
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <InputField
                    label="Nome Completo"
                    name="nomeCompleto"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <InputField
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                />
                <InputField
                  label="Celular"
                  name="celular"
                  placeholder="(11) 99999-9999"
                  required
                />
                <div className="sm:col-span-2">
                  <InputField
                    label="Endereço"
                    name="endereco"
                    placeholder="Rua, número, bairro"
                  />
                </div>
                <InputField label="Estado" name="estado" placeholder="SP" required />
                <InputField label="Cidade" name="cidade" placeholder="São Paulo" required />
              </div>
            </div>

            {/* Dados do Veículo */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Car className="h-5 w-5 text-primary" />
                Informações do Veículo
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <InputField label="Marca" name="marca" placeholder="Ex: Honda" required />
                <InputField label="Modelo" name="modelo" placeholder="Ex: Civic" required />
                <InputField
                  label="Versão"
                  name="versao"
                  placeholder="Ex: Touring 1.5"
                  required
                />
                <InputField label="Cor" name="cor" placeholder="Ex: Preto" required />
                <InputField label="KM" name="km" placeholder="Ex: 50.000" required />
                <InputField label="Placa" name="placa" placeholder="ABC-1234" required />
                <InputField
                  label="Ano / Modelo"
                  name="anoModelo"
                  placeholder="Ex: 2022/2023"
                  required
                />
                <div className="sm:col-span-2 md:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Opcionais
                  </label>
                  <Textarea
                    {...register('opcionais')}
                    placeholder="Descreva os opcionais do veículo (ar condicionado, direção elétrica, bancos de couro, etc.)"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Perguntas */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Info className="h-5 w-5 text-primary" />
                Informações Adicionais
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <CheckboxField
                  label="Você é o primeiro proprietário do veículo?"
                  name="primeiroProprietario"
                />
                <CheckboxField
                  label="O estofamento, tapete ou teto possui mancha?"
                  name="estofamentoManchado"
                />
                <CheckboxField
                  label="O seu veículo possui seguro?"
                  name="possuiSeguro"
                />
                <CheckboxField
                  label="O veículo foi alguma vez recuperado de roubo?"
                  name="recuperadoRoubo"
                />
              </div>

              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Observações Adicionais
                </label>
                <Textarea
                  {...register('observacoes')}
                  placeholder="Descreva qualquer informação adicional sobre o veículo que julgar importante..."
                  rows={4}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="h-14 gap-2 rounded-xl px-12 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar para Avaliação
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
