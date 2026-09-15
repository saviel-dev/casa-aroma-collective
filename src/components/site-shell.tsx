import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Inicio", to: "/" as const },
  { label: "Catálogo", to: "/catalogo" as const },
  { label: "Aromas", to: "/aromas" as const },
  { label: "Nosotros", to: "/nosotros" as const },
  { label: "Contacto", to: "/contacto" as const },
];

export function SiteShell({ children, cartCount = 0, favoriteCount = 0 }: { children: ReactNode; cartCount?: number; favoriteCount?: number }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú" onClick={() => setMenuOpen(true)}><Menu /></Button>
        <Link to="/" className="justify-self-center text-xl font-black uppercase tracking-[0.18em] md:justify-self-start">BEKO<span className="text-cyan">KO</span></Link>
        <nav className="hidden items-center justify-center gap-7 md:flex" aria-label="Navegación principal">
          {nav.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link text-[11px] font-bold uppercase" activeProps={{ className: "text-magenta" }}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center justify-end gap-0.5">
          <Button variant="ghost" size="icon" asChild aria-label="Buscar"><Link to="/catalogo"><Search /></Link></Button>
          <Button variant="ghost" size="icon" aria-label={`${favoriteCount} favoritos`} className="hidden sm:inline-flex"><Heart className={favoriteCount ? "fill-magenta text-magenta" : ""} /></Button>
          <Button variant="ghost" size="icon" aria-label={`${cartCount} productos en el carrito`} className="relative"><ShoppingBag /><span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-magenta px-1 text-[9px] text-on-color">{cartCount}</span></Button>
        </div>
      </div>
    </header>
    {menuOpen && <div className="fixed inset-0 z-[60] bg-foreground/30 md:hidden" onClick={() => setMenuOpen(false)}>
      <aside className="h-full w-[84%] max-w-sm bg-background p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-border pb-6"><span className="text-xl font-black uppercase">BEKO<span className="text-cyan">KO</span></span><Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"><X /></Button></div>
        <nav className="flex flex-col py-7">{nav.map((item, index) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-border py-5"><span className="text-xs font-bold text-magenta">0{index + 1}</span><span className="font-display text-3xl">{item.label}</span></Link>)}</nav>
      </aside>
    </div>}
    <main className="pt-18">{children}</main>
    <footer className="bg-foreground text-on-color"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><p className="text-3xl font-black tracking-[0.14em]">BEKO<span className="text-cyan">KO</span></p><p className="mt-4 max-w-xs text-sm leading-6 opacity-65">Aromas para habitar con intención, calma y belleza.</p></div><FooterGroup title="Explorar" links={["Catálogo", "Aromas", "Novedades"]}/><FooterGroup title="BEKOKO" links={["Nosotros", "Materiales", "Cuidados"]}/><FooterGroup title="Contacto" links={["hola@bekoko.cl", "Santiago, Chile", "Instagram"]}/></div><div className="mt-14 flex flex-col gap-3 border-t border-on-color/20 pt-6 text-xs opacity-55 sm:flex-row sm:justify-between"><span>© 2026 BEKOKO</span><span>Privacidad · Términos</span></div></div></footer>
  </div>;
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return <div><h2 className="text-xs font-bold uppercase text-sun">{title}</h2><ul className="mt-4 space-y-3 text-sm opacity-70">{links.map((link) => <li key={link}>{link}</li>)}</ul></div>;
}
