import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Tiktok, Link as LinkIcon, Mail, CheckCircle2, Sparkles, Zap, ShoppingBag, PenTool, Scissors } from "lucide-react";

const LINKS = {
  tiktok: "https://www.tiktok.com/@raphbiz0",
  instagram: "https://www.instagram.com/raphbiz0/",
  linktree: "https://linktr.ee/raphbiz0",
  email: "mailto:hello@raphbiz0.com",
};

const BRAND = {
  name: "RaphBiz0",
  tagline: "Business en ligne • Tips • Services",
  primary: "from-violet-500 to-black",
};

const SERVICES = [
  { icon: <PenTool className="w-6 h-6" />, title: "Miniatures YouTube", desc: "Miniatures pro sous 24h pour booster ton CTR.", price: "5€ / miniature" },
  { icon: <Scissors className="w-6 h-6" />, title: "Montage TikTok/Reels", desc: "Clips courts, sous-titres, cuts dynamiques.", price: "10€ / vidéo <60s" },
  { icon: <ShoppingBag className="w-6 h-6" />, title: "Affiliation setup", desc: "Setup Link-in-bio + idées produits & scripts.", price: "Pack démarrage 19€" },
];

const FAQ = [
  { q: "Comment passer commande ?", a: "Contacte-moi par email ou DM TikTok/Instagram avec ton brief. Je réponds dans la journée." },
  { q: "Quels formats tu livres ?", a: "PNG/JPG pour visuels, MP4 pour vidéos, plus les fichiers source si besoin." },
  { q: "Moyens de paiement ?", a: "PayPal, Lydia ou virement. Pour les mineurs: accord parental conseillé." },
];

export default function SiteRaphBiz0() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-violet-500 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-2xl bg-gradient-to-tr ${BRAND.primary}`}></div>
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-white/10 hover:bg-white/20 text-white gap-2 mb-4">
              <Sparkles className="w-4 h-4" /> Disponible pour missions rapides
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {BRAND.name} <span className={`bg-gradient-to-tr ${BRAND.primary} bg-clip-text text-transparent`}>— Créateur & Services</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">{BRAND.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className={`bg-gradient-to-tr ${BRAND.primary}`} asChild>
                <a href="#contact"><Zap className="w-5 h-5 mr-2" /> Me contacter</a>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20" asChild>
                <a href={LINKS.linktree} target="_blank" rel="noreferrer"><LinkIcon className="w-5 h-5 mr-2" /> Mes liens</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href={LINKS.tiktok} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/5 hover:bg-white/10"><Tiktok className="w-5 h-5" /></a>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white/5 hover:bg-white/10"><Instagram className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="bg-white/5 border-white/10 h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${BRAND.primary} text-white/90`}>{s.icon}</div>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-white/80">
                  <p>{s.desc}</p>
                  <p className="mt-3 font-semibold">{s.price}</p>
                  <Button className="mt-4 w-full bg-white/10 hover:bg-white/20" asChild>
                    <a href="#contact">Commander</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Portfolio</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">Exemple visuel {n}</div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-6 grid md:grid-cols-2 gap-6">
            <form action="FORMSPREE_URL" method="POST" className="space-y-3">
              <Input placeholder="Ton prénom" className="bg-black/40 border-white/10" name="name"/>
              <Input type="email" placeholder="Email" className="bg-black/40 border-white/10" name="email"/>
              <Textarea rows={5} placeholder="Ton message..." className="bg-black/40 border-white/10" name="message"/>
              <Button className={`w-full bg-gradient-to-tr ${BRAND.primary}`} type="submit">Envoyer</Button>
            </form>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-white/80">Email</div>
                <a href={LINKS.email} className="text-white/60 break-all">{LINKS.email.replace("mailto:", "")}</a>
              </div>
              <div className="flex gap-3">
                <a href={LINKS.tiktok} target="_blank" className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-center">TikTok</a>
                <a href={LINKS.instagram} target="_blank" className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-center">Instagram</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
