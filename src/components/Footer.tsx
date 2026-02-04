import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Car className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight">MV</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Martins Veículos
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Há mais de 10 anos oferecendo os melhores veículos com qualidade e
              confiança. Seu próximo carro está aqui!
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display font-semibold text-foreground">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Estoque', path: '/1' },
                { name: 'Financiamento', path: '/2' },
                { name: 'Venda seu Carro', path: '/3' },
                { name: 'Contato', path: '/4' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display font-semibold text-foreground">
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:oseiasmts@hotmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                oseiasmts@hotmail.com
              </a>
              <a
                href="tel:+551140285068"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (11) 4028-5068
              </a>
              <a
                href="tel:+551140212804"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                (11) 4021-2804
              </a>
              <a
                href="https://wa.me/5511947968556"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                (11) 94796-8556
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 font-display font-semibold text-foreground">
              Localização
            </h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>
                Rua Nove de Julho, 1300 - Vila Nova
                <br />
                Salto - SP
                <br />
                CEP: 13322-900
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary">
        <div className="container flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>
              © {currentYear} Galaxy Tech Solutions. Todos os direitos reservados.
            </p>
          </div>
          <div className="text-center text-sm text-muted-foreground md:text-right">
            <p>
              Desenvolvido por{' '}
              <a
                href="#"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Galaxy Tech Solutions
              </a>
            </p>
            <p className="text-xs">CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
