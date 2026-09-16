import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contacto")({ head: () => ({ meta: [
  { title: "Contacto — TPH Aromas" }, { name: "description", content: "Cotiza tu proyecto y hablemos." },
] }), component: ContactPage });

function ContactPage() {
  return (
    <SiteShell>
      {/* Header */}
      <header className="relative overflow-hidden bg-[#0c0c0c] py-16 text-white sm:py-20">
        {/* Gradient Glows */}
        <div className="pointer-events-none absolute -bottom-[40%] -left-[10%] h-[80%] w-[50%] rounded-full bg-magenta/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-[10%] -top-[40%] h-[80%] w-[50%] rounded-full bg-cyan/15 blur-[120px]" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-magenta">
              CONTACTO
            </div>
            <h1 className="mt-5 font-sans text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Hablemos de tu proyecto
            </h1>
            <p className="mt-3 text-sm text-white/60">
              Respondemos en el día. Elegí el canal que prefieras.
            </p>
          </div>
          <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            WhatsApp directo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          
          {/* Left Column: Info & Map */}
          <div className="flex flex-col gap-6 md:col-span-4">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <ul className="flex flex-col gap-5">
                <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center text-magenta">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Dirección</p>
                    <p className="mt-0.5 text-xs font-medium text-black">Av. Principal 1234, Ciudad — CP 1000</p>
                  </div>
                </li>
                <li className="h-px bg-border/50" />
                <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center text-[#25D366]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Teléfono</p>
                    <p className="mt-0.5 text-xs font-medium text-black">+54 9 11 1234-5678</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
                </li>
                <li className="h-px bg-border/50" />
                <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center text-sun">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="mt-0.5 text-xs font-medium text-black">ventas@tph.com</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
                </li>
                <li className="h-px bg-border/50" />
                <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center text-cyan">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Horarios</p>
                    <p className="mt-0.5 text-xs font-medium text-black">Lun–Vie 9:00–18:00 · Sáb 9:00–13:00</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="h-48 w-full overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.066850020197!2d-58.3965908!3d-34.5910408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1714400000000!5m2!1ses!2sar" 
                className="h-full w-full border-0" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-2xl bg-[#131313] p-6 text-white md:col-span-8 md:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-sans">Cotizá sin compromiso</h2>
                <p className="mt-1 text-xs text-white/50">El formulario llega directamente a nuestro equipo.</p>
              </div>
              <Send className="h-5 w-5 text-cyan" />
            </div>

            <form className="mt-8 grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
                  Nombre completo
                  <input required className="mt-1 h-11 rounded-lg border border-white/10 bg-[#1e1e1e] px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan" placeholder="Ej: Juan García" />
                </label>
                <label className="grid gap-1.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
                  Teléfono
                  <input type="tel" required className="mt-1 h-11 rounded-lg border border-white/10 bg-[#1e1e1e] px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan" placeholder="Ej: +54 9 11 1234-5678" />
                </label>
              </div>
              
              <label className="grid gap-1.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
                Email
                <input type="email" required className="mt-1 h-11 rounded-lg border border-white/10 bg-[#1e1e1e] px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan" placeholder="Ej: nombre@dominio.com" />
              </label>

              <label className="grid gap-1.5 text-[9px] font-bold uppercase tracking-wider text-white/70">
                Mensaje
                <textarea required rows={4} className="mt-1 resize-none rounded-lg border border-white/10 bg-[#1e1e1e] px-4 py-3 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan" placeholder="Contanos sobre tu proyecto: m², ambientes, tipo de producto que buscás..." />
              </label>

              <button type="submit" className="mt-2 flex h-12 w-full items-center justify-between rounded-lg bg-cyan px-6 font-bold text-white transition-transform hover:scale-[1.01]">
                <span className="flex items-center gap-2"><Send className="h-4 w-4" /> Enviar consulta</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}
