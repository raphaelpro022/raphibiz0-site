import React from "react";
import { motion } from "framer-motion";
import { Instagram, Tiktok, Link as LinkIcon, Zap, PenTool, Scissors, ShoppingBag, Sparkles } from "lucide-react";

const LINKS = {
  tiktok: "https://www.tiktok.com/@raphbiz0",
  instagram: "https://www.instagram.com/raphbiz0/",
  email: "mailto:hello@raphbiz0.com",
};

const SERVICES = [
  { icon: <PenTool className="w-6 h-6" />, title: "Miniatures YouTube", desc: "Miniatures pro sous 24h pour booster ton CTR.", price: "5€ / miniature" },
  { icon: <Scissors className="w-6 h-6" />, title: "Montage TikTok/Reels", desc: "Clips courts, sous-titres, cuts dynamiques.", price: "10€ / vidéo <60s" },
  { icon: <ShoppingBag className="w-6 h-6" />, title: "Affiliation setup", desc: "Setup Link-in-bio + idées produits & scripts.", price: "Pack démarrage 19€" },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-violet-500 text-white p-6 font-sans">
      <header className="mb-10">
        <h1 className="text-5xl font-bold mb-2">RaphBiz0</h1>
        <p className="text-white/70 mb-4">Business en ligne • Tips • Services</p>
        <div className="flex gap-3">
          <a href={LINKS.tiktok} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded hover:bg-white/20"><Tiktok /></a>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded hover:bg-white/20"><Instagram /></a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">{s.icon}<h3 className="font-semibold">{s.title}</h3></div>
              <p className="mb-2">{s.desc}</p>
              <p className="font-semibold">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <form action="https://formspree.io/f/mgvzjkzr" method="POST" className="flex flex-col gap-3 max-w-md">
          <input type="text" placeholder="Ton prénom" name="name" className="p-2 rounded bg-black/40 border border-white/10"/>
          <input type="email" placeholder="Email" name="email" className="p-2 rounded bg-black/40 border border-white/10"/>
          <textarea rows={5} placeholder="Ton message..." name="message" className="p-2 rounded bg-black/40 border border-white/10"/>
          <button type="submit" className="p-2 bg-violet-600 rounded hover:bg-violet-700">Envoyer</button>
        </form>
      </section>
    </div>
  );
}

export default App;
