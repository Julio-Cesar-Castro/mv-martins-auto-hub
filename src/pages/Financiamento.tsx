import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Shield, Send, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface FinanciamentoFormData {
  // Veículo
  marca: string;
  modelo: string;
  anoVeiculo: string;
  tipoVeiculo: string;
  valorVeiculo: string;
  valorEntrada: string;
  valorFinanciamento: string;
  prazoPagamento: string;
  // Dados Pessoais
  nomeCompleto: string;
  email: string;
  dataNascimento: string;
  telefone: string;
  cpf: string;
  rg: string;
  dataEmissao: string;
  orgaoEmissor: string;
  nomeMae: string;
  nomePai: string;
  // Residência
  tipoResidencia: string;
  anoMudanca: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  estado: string;
  cidade: string;
  // Trabalho
  empresa: string;
  cepTrabalho: string;
  ruaTrabalho: string;
  numeroTrabalho: string;
  complementoTrabalho: string;
  bairroTrabalho: string;
  telefoneTrabalho: string;
  cnpj: string;
  cargo: string;
  setor: string;
  salario: string;
  outrasRendas: string;
  // Banco
  banco: string;
  agencia: string;
  conta: string;
  clienteDesde: string;
}

export default function Financiamento() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FinanciamentoFormData>();

  const onSubmit = async (data: FinanciamentoFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success(
      'Solicitação de financiamento enviada com sucesso! Entraremos em contato em breve.'
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
    name: keyof FinanciamentoFormData;
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
        <p className="mt-1 text-sm text-destructive">{errors[name]?.message}</p>
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
              <span className="text-primary">Financiamento</span> de Veículos
            </h1>
            <p className="text-lg text-muted-foreground">
              Simule seu financiamento e realize o sonho do carro próprio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          {/* LGPD Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6"
          >
            <Shield className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h3 className="mb-1 font-display font-semibold text-foreground">
                Seus dados estão protegidos
              </h3>
              <p className="text-sm text-muted-foreground">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), todas as
                informações fornecidas são necessárias exclusivamente para a
                análise e aprovação do seu financiamento. Seus dados são tratados
                com total segurança e sigilo.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Dados do Veículo */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Info className="h-5 w-5 text-primary" />
                Dados do Veículo
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <InputField label="Marca" name="marca" placeholder="Ex: Honda" required />
                <InputField label="Modelo" name="modelo" placeholder="Ex: Civic" required />
                <InputField label="Ano" name="anoVeiculo" placeholder="Ex: 2023" required />
                <InputField label="Tipo do Carro" name="tipoVeiculo" placeholder="Ex: Sedan" />
                <InputField
                  label="Valor do Carro"
                  name="valorVeiculo"
                  placeholder="R$ 0,00"
                  required
                />
                <InputField
                  label="Valor da Entrada"
                  name="valorEntrada"
                  placeholder="R$ 0,00"
                />
                <InputField
                  label="Valor do Financiamento"
                  name="valorFinanciamento"
                  placeholder="R$ 0,00"
                />
                <InputField
                  label="Prazo de Pagamento"
                  name="prazoPagamento"
                  placeholder="Ex: 48 meses"
                />
              </div>
            </div>

            {/* Dados Pessoais */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Info className="h-5 w-5 text-primary" />
                Dados Pessoais
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                  label="Data de Nascimento"
                  name="dataNascimento"
                  type="date"
                  required
                />
                <InputField
                  label="Telefone"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  required
                />
                <InputField label="CPF" name="cpf" placeholder="000.000.000-00" required />
                <InputField label="RG" name="rg" placeholder="00.000.000-0" required />
                <InputField label="Data de Emissão" name="dataEmissao" type="date" />
                <InputField label="Órgão Emissor" name="orgaoEmissor" placeholder="SSP" />
                <div className="sm:col-span-2 md:col-span-3">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Nome Completo da Mãe"
                      name="nomeMae"
                      placeholder="Nome da mãe"
                      required
                    />
                    <InputField
                      label="Nome Completo do Pai"
                      name="nomePai"
                      placeholder="Nome do pai"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dados de Residência */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Info className="h-5 w-5 text-primary" />
                Dados de Residência
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <InputField
                  label="Tipo de Residência"
                  name="tipoResidencia"
                  placeholder="Ex: Própria, Alugada"
                />
                <InputField
                  label="Ano de Mudança"
                  name="anoMudanca"
                  placeholder="Ex: 2020"
                />
                <InputField label="CEP" name="cep" placeholder="00000-000" required />
                <div className="sm:col-span-2">
                  <InputField
                    label="Endereço"
                    name="endereco"
                    placeholder="Rua, Avenida..."
                    required
                  />
                </div>
                <InputField label="Número" name="numero" placeholder="000" required />
                <InputField
                  label="Complemento"
                  name="complemento"
                  placeholder="Apto, Bloco..."
                />
                <InputField label="Bairro" name="bairro" placeholder="Bairro" required />
                <InputField label="Estado" name="estado" placeholder="SP" required />
                <InputField label="Cidade" name="cidade" placeholder="São Paulo" required />
              </div>
            </div>

            {/* Dados Profissionais */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Info className="h-5 w-5 text-primary" />
                Dados Profissionais
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="sm:col-span-2">
                  <InputField
                    label="Empresa onde Trabalha"
                    name="empresa"
                    placeholder="Nome da empresa"
                    required
                  />
                </div>
                <InputField
                  label="CEP do Trabalho"
                  name="cepTrabalho"
                  placeholder="00000-000"
                />
                <div className="sm:col-span-2">
                  <InputField
                    label="Rua"
                    name="ruaTrabalho"
                    placeholder="Endereço do trabalho"
                  />
                </div>
                <InputField label="Número" name="numeroTrabalho" placeholder="000" />
                <InputField
                  label="Complemento"
                  name="complementoTrabalho"
                  placeholder="Sala, Andar..."
                />
                <InputField label="Bairro" name="bairroTrabalho" placeholder="Bairro" />
                <InputField
                  label="Telefone"
                  name="telefoneTrabalho"
                  placeholder="(11) 0000-0000"
                />
                <InputField label="CNPJ" name="cnpj" placeholder="00.000.000/0001-00" />
                <InputField label="Cargo" name="cargo" placeholder="Seu cargo" required />
                <InputField label="Setor" name="setor" placeholder="Seu setor" />
                <InputField label="Salário" name="salario" placeholder="R$ 0,00" required />
                <InputField
                  label="Outras Rendas"
                  name="outrasRendas"
                  placeholder="R$ 0,00"
                />
              </div>
            </div>

            {/* Dados Bancários */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                <Info className="h-5 w-5 text-primary" />
                Dados Bancários
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <InputField label="Banco" name="banco" placeholder="Nome do banco" />
                <InputField label="Agência" name="agencia" placeholder="0000" />
                <InputField label="Conta" name="conta" placeholder="00000-0" />
                <InputField
                  label="Cliente Desde"
                  name="clienteDesde"
                  placeholder="Ex: 2015"
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
                    Enviar Solicitação de Financiamento
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
