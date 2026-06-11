import {
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

import { siteConfig } from "@/components/site-data";

type FooterProps = {
  hasLogo: boolean;
};

export function Footer({ hasLogo }: FooterProps) {
  return (
    <footer
      id="contato"
      className="surface-grid relative overflow-hidden bg-[linear-gradient(180deg,#081D33_0%,#061423_100%)] py-16 text-white"
    >
      <div className="floating-orb absolute -left-10 top-8 h-32 w-32 rounded-full bg-[#A7CBE5]/8 blur-3xl" />
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {hasLogo ? (
            <Image
              src="/image_0.png"
              alt="Sanus Vet"
              width={128}
              height={44}
              className="soft-ring h-11 w-auto rounded-xl bg-white px-3 py-2"
            />
          ) : (
            <div className="inline-flex rounded-2xl bg-white px-4 py-3 text-base font-bold text-[#0D2C4D]">
              {siteConfig.legalName}
            </div>
          )}

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">
            Clínica veterinária 24h em São Caetano do Sul com consultas,
            vacinação pet, exames laboratoriais, raio-x, ultrassom, cirurgias e
            especialistas para o cuidado integral do seu melhor amigo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.28em] text-[#A7CBE5]">
              Contatos
            </h3>
            <ul className="mt-4 space-y-4 text-lg leading-8 text-slate-200">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-start gap-3 hover:text-white"
                >
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#A7CBE5]" />
                  Telefone 24h: {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  className="inline-flex items-start gap-3 hover:text-white"
                >
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#A7CBE5]" />
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-3 hover:text-white"
                >
                  <FaInstagram className="mt-1 h-5 w-5 shrink-0 text-[#A7CBE5]" />
                  @hospitalsanus.vet
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#A7CBE5]" />
                  {siteConfig.addressLine}
                </span>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.28em] text-[#A7CBE5]">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-4 text-lg leading-8 text-slate-200">
              <li className="inline-flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#A7CBE5]" />
                {siteConfig.hoursLabel}
              </li>
              <li className="inline-flex items-start gap-3">
                <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#A7CBE5]" />
                Consultas, exames e cirurgias
              </li>
              <li>Especialidades veterinárias</li>            
            </ul>
          </div>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-300">
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
