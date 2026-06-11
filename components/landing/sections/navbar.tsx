import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  hasLogo: boolean;
};

export function Navbar({ hasLogo }: NavbarProps) {
  return (
    <header
      id="inicio"
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-[0_10px_40px_rgba(13,44,77,0.06)] backdrop-blur-xl"
    >
      <div className="section-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link href="#inicio" className="fade-up flex items-center gap-3">
          {hasLogo ? (
            <Image
              src="/image_0.png"
              alt="Logo da Sanus Vet"              
              priority
              width={80}
              height={40}
              
            />
          ) : (
            <div className="rounded-2xl border border-[#A7CBE5] bg-[#F2E9D0] px-4 py-2 text-sm font-bold text-[#0D2C4D]">
              Sanus Vet
            </div>
          )}
        </Link>

        <nav className="fade-up fade-up-delay-1 hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <Link href="#inicio" className="hover:text-[#0D2C4D]">
            Início
          </Link>
          <Link href="#servicos" className="hover:text-[#0D2C4D]">
            Serviços
          </Link>
          <Link href="#especialidades" className="hover:text-[#0D2C4D]">
            Especialidades
          </Link>
          <Link href="#estrutura" className="hover:text-[#0D2C4D]">
            Estrutura
          </Link>
          <Link href="#contato" className="hover:text-[#0D2C4D]">
            Contato
          </Link>
          <Link href="#duvidas" className="hover:text-[#0D2C4D]">
            Dúvidas
          </Link>
        </nav>
    
      </div>
    </header>
  );
}
