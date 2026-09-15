import candlesAsset from "@/assets/category-candles.jpg.asset.json";
import diffusersAsset from "@/assets/category-diffusers.jpg.asset.json";
import spraysAsset from "@/assets/category-sprays.jpg.asset.json";
import oilsAsset from "@/assets/category-oils.jpg.asset.json";
import soapsAsset from "@/assets/category-soaps.jpg.asset.json";
import giftsAsset from "@/assets/category-gifts.jpg.asset.json";

export type Category = "Velas" | "Difusores" | "Sprays" | "Aceites" | "Jabones" | "Sets";
export type Product = { id: number; name: string; category: Category; notes: string; price: number; image: string; tag?: string; description: string };

export const categories: { name: string; filter: Category; description: string; image: string; accent: "magenta" | "sun" | "cyan" }[] = [
  { name: "Velas aromáticas", filter: "Velas", description: "Luz suave y aromas envolventes.", image: candlesAsset.url, accent: "magenta" },
  { name: "Difusores", filter: "Difusores", description: "Una presencia sutil y constante.", image: diffusersAsset.url, accent: "sun" },
  { name: "Sprays ambientales", filter: "Sprays", description: "Renueva el aire en un instante.", image: spraysAsset.url, accent: "cyan" },
  { name: "Aceites esenciales", filter: "Aceites", description: "Esencias puras para cada momento.", image: oilsAsset.url, accent: "sun" },
  { name: "Jabones y cuidado", filter: "Jabones", description: "Botánicos que cuidan tu piel.", image: soapsAsset.url, accent: "cyan" },
  { name: "Sets de regalo", filter: "Sets", description: "Rituales listos para compartir.", image: giftsAsset.url, accent: "magenta" },
];

export const products: Product[] = [
  { id: 1, name: "Vela Ámbar & Vainilla", category: "Velas", notes: "Ámbar · Vainilla · Sándalo", price: 18990, image: candlesAsset.url, tag: "Más vendido", description: "Una calidez envolvente para tardes lentas y espacios íntimos." },
  { id: 2, name: "Vela Bosque Nativo", category: "Velas", notes: "Cedro · Musgo · Pino", price: 19990, image: candlesAsset.url, tag: "Nuevo", description: "El carácter verde y húmedo del bosque después de la lluvia." },
  { id: 3, name: "Difusor Higo & Cedro", category: "Difusores", notes: "Higo · Cedro · Almizcle", price: 24990, image: diffusersAsset.url, tag: "Más vendido", description: "Frutal y amaderado, pensado para acompañar todos los días." },
  { id: 4, name: "Difusor Lavanda Serena", category: "Difusores", notes: "Lavanda · Salvia · Lino", price: 22990, image: diffusersAsset.url, description: "Una pausa aromática que invita a respirar con calma." },
  { id: 5, name: "Spray Ambiental Brisa de Lino", category: "Sprays", notes: "Lino · Algodón · Iris", price: 14990, image: spraysAsset.url, description: "Frescura limpia y delicada para renovar cualquier habitación." },
  { id: 6, name: "Spray Ambiental Té Blanco", category: "Sprays", notes: "Té blanco · Bergamota · Cedro", price: 15990, image: spraysAsset.url, tag: "Nuevo", description: "Luminoso, sereno y sutilmente cítrico." },
  { id: 7, name: "Aceite Esencial Eucalipto", category: "Aceites", notes: "Eucalipto · Menta · Romero", price: 10990, image: oilsAsset.url, description: "Una mezcla clara y herbal para recuperar energía." },
  { id: 8, name: "Aceite Esencial Naranja Dulce", category: "Aceites", notes: "Naranja · Mandarina · Neroli", price: 9990, image: oilsAsset.url, description: "Cítrico amable para llenar de luz tus rituales." },
  { id: 9, name: "Set Ritual de Descanso", category: "Sets", notes: "Lavanda · Manzanilla · Cedro", price: 38990, image: giftsAsset.url, tag: "Edición limitada", description: "Una selección completa para cerrar el día con suavidad." },
  { id: 10, name: "Set Casa Cálida", category: "Sets", notes: "Ámbar · Vainilla · Higo", price: 42990, image: giftsAsset.url, description: "Capas aromáticas que hacen del hogar un refugio." },
  { id: 11, name: "Jabón Botánico Avena & Miel", category: "Jabones", notes: "Avena · Miel · Almendra", price: 7990, image: soapsAsset.url, description: "Espuma cremosa y botánicos para una limpieza gentil." },
  { id: 12, name: "Jabón Botánico Rosa Mosqueta", category: "Jabones", notes: "Rosa · Geranio · Semillas", price: 8490, image: soapsAsset.url, tag: "Nuevo", description: "Una barra artesanal, floral y nutritiva." },
];

export const money = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
