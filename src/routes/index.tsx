import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Heart, Menu, Search, ShoppingBag, Sparkles, Truck, ShieldCheck, Leaf, X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bekoko-hero.jpg";
import editorialImage from "@/assets/bekoko-editorial.jpg";
import candlesImage from "@/assets/category-candles.jpg";
import diffusersImage from "@/assets/category-diffusers.jpg";
import spraysImage from "@/assets/category-sprays.jpg";
import oilsImage from "@/assets/category-oils.jpg";
import soapsImage from "@/assets/category-soaps.jpg";
import giftsImage from "@/assets/category-gifts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "BEKOKO — Aromas para habitar" },
    { name: "description", content: "Velas, difusores y rituales aromáticos para transformar tu hogar." },
    { property: "og:title", content: "BEKOKO — Aromas para habitar" },
    { property: "og:description", content: "Velas, difusores y rituales aromáticos para transformar tu hogar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: BekokoPage,
});

type Category = "Velas" | "Difusores" | "Sprays" | "Aceites" | "Jabones" | "Sets";
type Product = { id: number; name: string; category: Category; notes: string; price: number; image: string; tag?: string; description: string };

const categories: { name: string; filter: Category; description: string; image: string }[] = [
  { name: "Velas aromáticas", filter: "Velas", description: "Luz suave y aromas envolventes.", image: candlesImage },
  { name: "Difusores", filter: "Difusores", description: "Una presencia sutil y constante.", image: diffusersImage },
  { name: "Sprays ambientales", filter: "Sprays", description: "Renueva el aire en un instante.", image: spraysImage },
  { name: "Aceites esenciales", filter: "Aceites", description: "Esencias puras para cada momento.", image: oilsImage },
  { name: "Jabones y cuidado", filter: "Jabones", description: "Botánicos que cuidan tu piel.", image: soapsImage },
  { name: "Sets de regalo", filter: "Sets", description: "Rituales listos para compartir.", image: giftsImage },
];

const products: Product[] = [
  { id: 1, name: "Vela Ámbar & Vainilla", category: "Velas", notes: "Ámbar · Vainilla · Sándalo", price: 18990, image: candlesImage, tag: "Más vendido", description: "Una calidez envolvente para tardes lentas y espacios íntimos." },
  { id: 2, name: "Vela Bosque Nativo", category: "Velas", notes: "Cedro · Musgo · Pino", price: 19990, image: candlesImage, tag: "Nuevo", description: "El carácter verde y húmedo del bosque después de la lluvia." },
  { id: 3, name: "Difusor Higo & Cedro", category: "Difusores", notes: "Higo · Cedro · Almizcle", price: 24990, image: diffusersImage, tag: "Más vendido", description: "Frutal y amaderado, pensado para acompañar todos los días." },
  { id: 4, name: "Difusor Lavanda Serena", category: "Difusores", notes: "Lavanda · Salvia · Lino", price: 22990, image: diffusersImage, description: "Una pausa aromática que invita a respirar con calma." },
  { id: 5, name: "Spray Ambiental Brisa de Lino", category: "Sprays", notes: "Lino · Algodón · Iris", price: 14990, image: spraysImage, description: "Frescura limpia y delicada para renovar cualquier habitación." },
  { id: 6, name: "Spray Ambiental Té Blanco", category: "Sprays", notes: "Té blanco · Bergamota · Cedro", price: 15990, image: spraysImage, tag: "Nuevo", description: "Luminoso, sereno y sutilmente cítrico." },
  { id: 7, name: "Aceite Esencial Eucalipto", category: "Aceites", notes: "Eucalipto · Menta · Romero", price: 10990, image: oilsImage, description: "Una mezcla clara y herbal para recuperar energía." },
  { id: 8, name: "Aceite Esencial Naranja Dulce", category: "Aceites", notes: "Naranja · Mandarina · Neroli", price: 9990, image: oilsImage, description: "Cítrico amable para llenar de luz tus rituales." },
  { id: 9, name: "Set Ritual de Descanso", category: "Sets", notes: "Lavanda · Manzanilla · Cedro", price: 38990, image: giftsImage, tag: "Edición limitada", description: "Una selección completa para cerrar el día con suavidad." },
  { id: 10, name: "Set Casa Cálida", category: "Sets", notes: "Ámbar · Vainilla · Higo", price: 42990, image: giftsImage, description: "Capas aromáticas que hacen del hogar un refugio." },
  { id: 11, name: "Jabón Botánico Avena & Miel", category: "Jabones", notes: "Avena · Miel · Almendra", price: 7990, image: soapsImage, description: "Espuma cremosa y botánicos para una limpieza gentil." },
  { id: 12, name: "Jabón Botánico Rosa Mosqueta", category: "Jabones", notes: "Rosa · Geranio · Semillas", price: 8490, image: soapsImage, tag: "Nuevo", description: "Una barra artesanal, floral y nutritiva." },
];

const money = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function BekokoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<"Todos" | Category>("Todos");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [selected, setSelected] = useState<Product | null>(null);

  const visible = useMemo(() => {
    const needle = query.toLocaleLowerCase("es");
    const result = products.filter((p) => (filter === "Todos" || p.category === filter) && `${p.name} ${p.category} ${p.notes}`.toLocaleLowerCase("es").includes(needle));
    return [...result].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : sort === "az" ? a.name.localeCompare(b.name) : a.id - b.id);
  }, [filter, query, sort]);

  const chooseCategory = (category: Category) => { setFilter(category); scrollTo("catalogo"); };
  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const nav = [{ label: "Inicio", id: "inicio" }, { label: "Catálogo", id: "catalogo" }, { label: "Aromas", id: "categorias" }, { label: "Nosotros", id: "nosotros" }, { label: "Contacto", id: "contacto" }];

  return <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú" onClick={() => setMenuOpen(true)}><Menu /></Button>
        <button onClick={() => scrollTo("inicio")} className="justify-self-center font-display text-2xl tracking-[0.22em] md:justify-self-start">BEKOKO</button>
        <nav className="hidden items-center justify-center gap-7 md:flex">
          {nav.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs uppercase text-muted-foreground transition-colors hover:text-foreground">{item.label}</button>)}
        </nav>
        <div className="flex items-center justify-end gap-0.5">
          <Button variant="ghost" size="icon" aria-label="Buscar" onClick={() => { scrollTo("catalogo"); setTimeout(() => document.getElementById("product-search")?.focus(), 500); }}><Search /></Button>
          <Button variant="ghost" size="icon" aria-label={`${favorites.length} favoritos`} className="hidden sm:inline-flex"><Heart className={favorites.length ? "fill-terracotta text-terracotta" : ""} /></Button>
          <Button variant="ghost" size="icon" aria-label={`${cartCount} productos en el carrito`} className="relative"><ShoppingBag /><span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-terracotta px-1 text-[9px] text-primary-foreground">{cartCount}</span></Button>
        </div>
      </div>
    </header>

    {menuOpen && <div className="fixed inset-0 z-[60] bg-foreground/25 md:hidden" onClick={() => setMenuOpen(false)}>
      <aside className="h-full w-[82%] max-w-sm bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-border pb-6"><span className="font-display text-2xl tracking-[0.22em]">BEKOKO</span><Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"><X /></Button></div>
        <nav className="flex flex-col py-8">{nav.map((item) => <button key={item.id} onClick={() => { setMenuOpen(false); scrollTo(item.id); }} className="border-b border-border py-5 text-left font-display text-3xl">{item.label}</button>)}</nav>
      </aside>
    </div>}

    <section id="inicio" className="relative min-h-[780px] pt-18 lg:min-h-[760px]">
      <img src={heroImage} alt="Vela y difusor BEKOKO en un hogar iluminado naturalmente" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/5" />
      <div className="relative mx-auto flex min-h-[calc(780px-4.5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[calc(760px-4.5rem)]">
        <div className="max-w-2xl animate-rise">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Aromas para habitar</p>
          <h1 className="font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">El aroma también es parte de tu hogar.</h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Fragancias que acompañan tus rituales y convierten cada espacio en un lugar profundamente personal.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7" onClick={() => scrollTo("catalogo")}>Explorar catálogo <ArrowDown /></Button>
            <Button size="lg" variant="outline" className="h-12 border-foreground/40 bg-background/40 px-7 backdrop-blur" onClick={() => scrollTo("categorias")}>Descubrir aromas</Button>
          </div>
        </div>
      </div>
    </section>

    <section id="categorias" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Encuentra tu ritual</p><h2 className="mt-3 font-display text-5xl sm:text-6xl">Aromas para cada espacio</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Objetos sensibles que hacen de lo cotidiano algo memorable.</p></div>
      <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => <article key={category.name} className={index === 1 || index === 4 ? "lg:translate-y-10" : ""}>
          <button onClick={() => chooseCategory(category.filter)} className="group w-full text-left">
            <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={category.image} alt={category.name} width={912} height={1104} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-border py-5"><div className="min-w-0"><h3 className="font-display text-3xl">{category.name}</h3><p className="mt-1 text-sm text-muted-foreground">{category.description}</p></div><ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" /></div>
          </button>
        </article>)}
      </div>
    </section>

    <section id="nosotros" className="bg-secondary/55 py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
      <div className="relative"><img src={editorialImage} alt="Ritual cotidiano con botánicos y una vela encendida" width={912} height={1200} loading="lazy" className="aspect-[3/4] w-full object-cover" /><span className="absolute -bottom-5 right-0 bg-terracotta px-6 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground sm:right-[-20px]">Hecho para pausar</span></div>
      <div className="py-4"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Rituales cotidianos</p><h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl">Pequeños detalles que transforman tus espacios.</h2><p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">Creemos en el poder silencioso de un aroma: puede marcar una pausa, acompañar el descanso y hacer que una rutina sencilla se sienta propia.</p><Button variant="outline" size="lg" className="mt-9 h-12 border-foreground/40 bg-transparent" onClick={() => scrollTo("contacto")}>Conoce nuestra historia <ArrowRight /></Button></div>
    </div></section>

    <section id="catalogo" className="catalog-gradient py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Colección BEKOKO</p><h2 className="mt-3 font-display text-5xl sm:text-6xl">Explora nuestros aromas</h2><p className="mt-4 leading-7 text-muted-foreground">Descubre composiciones creadas para acompañar distintas formas de habitar.</p></div>
      <div className="mt-10 border-y border-border py-5">
        <div className="flex gap-2 overflow-x-auto pb-4">{(["Todos", "Velas", "Difusores", "Sprays", "Aceites", "Sets"] as const).map((item) => <Button key={item} variant={filter === item ? "default" : "ghost"} size="sm" className="shrink-0" onClick={() => setFilter(item)}>{item}</Button>)}</div>
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <label className="relative min-w-0"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><span className="sr-only">Buscar productos</span><input id="product-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por nombre, categoría o notas" className="h-11 w-full border border-input bg-background/65 pl-10 pr-4 text-sm outline-none transition focus:border-foreground" /></label>
          <label><span className="sr-only">Ordenar productos</span><select value={sort} onChange={(e) => setSort(e.target.value)} className="h-11 w-full border border-input bg-background/65 px-4 text-sm outline-none sm:w-56"><option value="featured">Destacados</option><option value="low">Precio menor a mayor</option><option value="high">Precio mayor a menor</option><option value="az">Nombre A-Z</option></select></label>
        </div>
      </div>
      <p className="mt-7 text-xs uppercase tracking-[0.18em] text-muted-foreground">{visible.length} productos</p>
      <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((product) => <article key={product.id} className="group min-w-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-card"><button className="h-full w-full" onClick={() => setSelected(product)} aria-label={`Ver detalle de ${product.name}`}><img src={product.image} alt={product.name} width={912} height={1104} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></button>{product.tag && <span className="absolute left-2 top-2 bg-background/90 px-2 py-1 text-[9px] uppercase tracking-[0.13em] backdrop-blur sm:left-3 sm:top-3">{product.tag}</span>}<Button variant="secondary" size="icon" className="absolute right-2 top-2 bg-background/85 sm:right-3 sm:top-3" onClick={() => toggleFavorite(product.id)} aria-label="Añadir a favoritos"><Heart className={favorites.includes(product.id) ? "fill-terracotta text-terracotta" : ""} /></Button></div>
          <div className="pt-4"><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{product.category}</p><button onClick={() => setSelected(product)} className="mt-1 text-left"><h3 className="font-display text-xl leading-tight sm:text-2xl">{product.name}</h3></button><p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{product.notes}</p><div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2"><span className="min-w-0 font-medium">{money.format(product.price)}</span><Button size="sm" onClick={() => setCartCount((count) => count + 1)}><Plus /> <span className="hidden sm:inline">Agregar</span></Button></div></div>
        </article>)}
      </div>
      {!visible.length && <div className="py-24 text-center"><p className="font-display text-3xl">No encontramos aromas con esa búsqueda.</p><Button variant="link" onClick={() => { setQuery(""); setFilter("Todos"); }}>Ver todos los productos</Button></div>}
    </div></section>

    <section className="border-y border-border bg-background py-16"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
      {[{ icon: Leaf, title: "Ingredientes conscientes", text: "Selecciones nobles y fórmulas cuidadas." }, { icon: Sparkles, title: "Hecho en pequeñas partidas", text: "Atención artesanal en cada detalle." }, { icon: Truck, title: "Despacho a todo Chile", text: "Envíos preparados con cuidado." }, { icon: ShieldCheck, title: "Compra tranquila", text: "Atención cercana antes y después." }].map(({ icon: Icon, title, text }) => <div key={title}><Icon className="size-6 text-sage" /><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
    </div></section>

    <section id="contacto" className="bg-primary py-20 text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-end"><div><p className="text-xs uppercase tracking-[0.25em] opacity-70">Cartas desde casa</p><h2 className="mt-4 max-w-2xl font-display text-5xl sm:text-6xl">Aromas, rituales y novedades en tu correo.</h2></div><form className="flex border-b border-primary-foreground/40 pb-2" onSubmit={(e) => e.preventDefault()}><label className="sr-only" htmlFor="email">Correo electrónico</label><input id="email" type="email" required placeholder="tu@email.com" className="min-w-0 flex-1 bg-transparent px-1 py-3 text-primary-foreground outline-none placeholder:text-primary-foreground/50"/><Button type="submit" variant="secondary" size="icon" aria-label="Suscribirme"><ArrowRight /></Button></form></div></section>

    <footer className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl border-t border-primary-foreground/20 px-5 py-12 sm:px-8"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><p className="font-display text-3xl tracking-[0.2em]">BEKOKO</p><p className="mt-4 max-w-xs text-sm leading-6 opacity-60">Aromas para habitar con intención, calma y belleza.</p></div><FooterList title="Explorar" items={["Velas", "Difusores", "Sprays", "Aceites"]} /><FooterList title="BEKOKO" items={["Nosotros", "Materiales", "Cuidados", "Preguntas frecuentes"]} /><FooterList title="Contacto" items={["hola@bekoko.cl", "Santiago, Chile", "Instagram", "Pinterest"]} /></div><div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/20 pt-6 text-xs opacity-50 sm:flex-row sm:justify-between"><span>© 2026 BEKOKO. Todos los derechos reservados.</span><span>Privacidad · Términos</span></div></div></footer>

    {selected && <div className="fixed inset-0 z-[70] grid place-items-center bg-foreground/45 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`Detalle de ${selected.name}`} onClick={() => setSelected(null)}><div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-background shadow-2xl md:grid-cols-2" onClick={(e) => e.stopPropagation()}><Button variant="secondary" size="icon" className="absolute right-3 top-3 z-10" onClick={() => setSelected(null)} aria-label="Cerrar detalle"><X /></Button><img src={selected.image} alt={selected.name} width={912} height={1104} className="aspect-[4/5] h-full w-full object-cover" /><div className="flex flex-col justify-center p-7 sm:p-10"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{selected.category}</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">{selected.name}</h2><p className="mt-4 text-sm text-muted-foreground">Notas · {selected.notes}</p><p className="mt-6 leading-7 text-muted-foreground">{selected.description}</p><p className="mt-7 text-xl font-semibold">{money.format(selected.price)}</p><div className="mt-7 flex gap-3"><Button size="lg" className="flex-1" onClick={() => setCartCount((count) => count + 1)}><ShoppingBag /> Agregar al carrito</Button><Button size="lg" variant="outline" onClick={() => toggleFavorite(selected.id)} aria-label="Añadir a favoritos"><Heart className={favorites.includes(selected.id) ? "fill-terracotta text-terracotta" : ""} /></Button></div></div></div></div>}
  </main>;
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em]">{title}</h3><ul className="mt-4 space-y-3 text-sm opacity-65">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
