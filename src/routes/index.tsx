import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { categories } from "@/lib/catalog-data";
import heroAsset from "@/assets/bekoko-hero.jpg.asset.json";
import editorialAsset from "@/assets/bekoko-editorial.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "BEKOKO — Aromas para habitar" },
    { name: "description", content: "Aromas contemporáneos para transformar tu hogar y tus rituales cotidianos." },
    { property: "og:title", content: "BEKOKO — Aromas para habitar" },
    { property: "og:description", content: "Aromas contemporáneos para transformar tu hogar y tus rituales cotidianos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

function HomePage() {
  return <SiteShell>
    <section className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-6 sm:px-8 lg:grid-cols-12 lg:py-10">
      <div className="animate-rise lg:col-span-5">
        <div className="flex items-center gap-2"><span className="h-1 w-10 bg-magenta"/><p className="text-[10px] font-bold uppercase text-magenta">Aromas para habitar</p></div>
        <h1 className="mt-4 flex flex-wrap items-baseline gap-4 text-5xl font-black uppercase leading-[0.83] sm:text-6xl lg:text-7xl"><span>TPH</span><span className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-cyan tracking-normal lowercase">Aromas</span></h1>
        <div className="mt-5 border-l-4 border-sun pl-4"><p className="font-display text-xl italic leading-tight sm:text-2xl">El aroma también es parte de tu hogar.</p></div>
        <p className="mt-4 max-w-md text-xs leading-5 text-muted-foreground">Fragancias contemporáneas que acompañan tus rituales y convierten cada espacio en un lugar profundamente personal.</p>
        <div className="mt-5 flex flex-wrap items-center gap-4"><Button size="sm" asChild><Link to="/catalogo">Explorar catálogo <ArrowRight className="ml-1 h-3 w-3"/></Link></Button><Link to="/aromas" className="border-b-2 border-cyan pb-0.5 text-[10px] font-bold uppercase">Descubrir aromas</Link></div>
      </div>
      <div className="relative grid grid-cols-2 gap-2 lg:col-span-7 lg:gap-4">
        <div className="absolute -left-2 -top-2 h-[65%] w-[calc(100%+8px)] border-2 border-cyan"/>
        <div className="group relative col-span-2 aspect-[3/1] overflow-hidden bg-muted shadow-xl"><img src={heroAsset.url} alt="Vela y difusor BEKOKO en un hogar luminoso" width={1600} height={1008} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"/><div className="absolute bottom-0 left-0 bg-background/92 px-3 py-2 backdrop-blur"><p className="text-[8px] font-black uppercase text-magenta">Colección destacada</p><p className="mt-0.5 text-[10px] font-bold uppercase">Rituales de casa</p></div></div>
        <Link to="/aromas" className="group relative aspect-[4/3] overflow-hidden bg-sun p-4 text-ink sm:p-5"><span className="absolute left-4 top-3 text-3xl font-black opacity-10">01</span><div className="flex h-full flex-col justify-end"><Sparkles className="h-4 w-4"/><h2 className="mt-2 text-lg font-black uppercase leading-none sm:text-xl">Mapa de<br/>aromas</h2><span className="mt-2 h-0.5 w-0 bg-ink transition-all duration-500 group-hover:w-full"/></div></Link>
        <Link to="/nosotros" className="group relative aspect-[4/3] overflow-hidden bg-foreground"><img src={editorialAsset.url} alt="Botánicos y vela artesanal BEKOKO" width={912} height={1200} className="h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"/><span className="absolute inset-3 grid place-items-center border border-on-color/70 text-[9px] font-black uppercase text-on-color">Nuestra esencia</span></Link>
      </div>
    </section>

    <section className="border-y border-border bg-secondary py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"><div><p className="text-xs font-bold uppercase text-magenta">Selección BEKOKO</p><h2 className="mt-3 font-display text-5xl sm:text-6xl">Objetos con atmósfera.</h2></div><Button variant="outline" asChild><Link to="/catalogo">Ver todo <ArrowRight/></Link></Button></div><div className="mt-12 grid gap-5 sm:grid-cols-3">{categories.slice(0,3).map((category) => <Link key={category.name} to="/catalogo" className="group"><div className="aspect-[4/5] overflow-hidden bg-muted"><img src={category.image} alt={category.name} width={912} height={1104} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="grid grid-cols-[1fr_auto] items-center border-b-2 border-border py-5 group-hover:border-magenta"><div><h3 className="font-display text-3xl">{category.name}</h3><p className="mt-1 text-sm text-muted-foreground">{category.description}</p></div><ArrowRight/></div></Link>)}</div></div></section>

    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-28"><div className="relative"><img src={editorialAsset.url} alt="Ritual cotidiano BEKOKO" width={912} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover"/><span className="absolute -bottom-4 right-0 bg-magenta px-5 py-3 text-xs font-bold uppercase text-on-color">Hecho para pausar</span></div><div><Leaf className="text-cyan"/><p className="mt-6 text-xs font-bold uppercase text-magenta">Rituales cotidianos</p><h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Pequeños detalles que transforman.</h2><p className="mt-6 max-w-xl leading-8 text-muted-foreground">Creamos objetos aromáticos para marcar una pausa, acompañar el descanso y hacer que una rutina sencilla se sienta propia.</p><Button className="mt-8" variant="outline" asChild><Link to="/nosotros">Conoce nuestra historia <ArrowRight/></Link></Button></div></section>
  </SiteShell>;
}
