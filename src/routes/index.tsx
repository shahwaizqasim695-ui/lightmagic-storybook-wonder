import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Butterfly,
  Compass,
  Facebook,
  Feather,
  Flower2,
  Heart,
  Instagram,
  Lightbulb,
  Mail,
  Map,
  Menu,
  MessageCircle,
  Quote,
  Search,
  Send,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/light-magic-hero.jpg";
import mapImage from "@/assets/magical-world-map.jpg";
import friendsImage from "@/assets/liam-sparkle.jpg";
import coverAsset from "@/assets/front-cover.jpg.asset.json";
import authorAsset from "@/assets/author.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Richard Schaefer | Light Magic Story Books" },
      { name: "description", content: "Discover the Light Magic Story Book Collection by Richard Schaefer — magical adventures featuring Liam the Leprechaun, Sparkle the Unicorn, and a world filled with friendship, curiosity, and wonder." },
      { property: "og:title", content: "Richard Schaefer | Light Magic Story Books" },
      { property: "og:description", content: "Step into a world of magical adventures, unforgettable friendships, and wonder." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "home"], ["The Books", "books"], ["Meet the Characters", "characters"],
  ["The Magical World", "world"], ["About Richard", "about"], ["Gallery", "gallery"], ["Contact", "contact"],
];

const stories = Array.from({ length: 7 }, (_, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: `Story Title ${i + 1}`,
  text: "A new Light Magic adventure awaits. Official story details coming soon.",
}));

const places = [
  { name: "Rainbow Falls", x: "18%", y: "28%", text: "A bright path begins where colors meet the cascading water." },
  { name: "Whispering Wood", x: "49%", y: "31%", text: "Ancient trees shelter quiet wonders and friends yet to be met." },
  { name: "Moonlit Lake", x: "76%", y: "42%", text: "Silver light dances across a lake filled with gentle mystery." },
  { name: "Castle on the Hill", x: "86%", y: "17%", text: "A winding golden road climbs toward a faraway story." },
  { name: "Blossom Grove", x: "76%", y: "69%", text: "Pink petals drift over a secret resting place beside the river." },
  { name: "Wildflower Meadow", x: "19%", y: "67%", text: "Butterflies guide curious travelers through a sea of flowers." },
  { name: "Sparkling River", x: "48%", y: "72%", text: "Every bend in the river carries a glimmer of possibility." },
];

const values = [
  [Heart, "Friendship"], [Flower2, "Kindness"], [Search, "Curiosity"], [Sparkles, "Imagination"],
  [Compass, "Adventure"], [Lightbulb, "Discovery"], [Users, "Helping Others"], [Star, "Finding the Good"],
] as const;

function SectionTitle({ eyebrow, title, light = false, text }: { eyebrow: string; title: string; light?: boolean; text?: string }) {
  return <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className={`mb-3 font-sans text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-gold-soft" : "text-secondary"}`}>{eyebrow}</p>
    <h2 className={`text-4xl leading-tight sm:text-5xl lg:text-6xl ${light ? "text-gold-shimmer" : "text-night"}`}>{title}</h2>
    {text && <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 ${light ? "text-cream/80" : "text-muted-foreground"}`}>{text}</p>}
    <div className="mx-auto mt-5 flex items-center justify-center gap-3 text-gold"><span className="h-px w-12 bg-gold/50"/><Sparkles className="size-4"/><span className="h-px w-12 bg-gold/50"/></div>
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [place, setPlace] = useState(places[0]);
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const [review, setReview] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return <main className="bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/20 bg-night/85 text-cream shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => scrollTo("home")} className="group text-left" aria-label="Go to home">
          <span className="block font-display text-xl text-gold-soft">Richard Schaefer</span>
          <span className="block font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-cream/65">Light Magic Story Books</span>
        </button>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {nav.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-cream/75 transition hover:text-gold-soft">{label}</button>)}
        </nav>
        <div className="hidden lg:block"><Button variant="magical" onClick={() => scrollTo("books")}>Explore the Books <ArrowRight/></Button></div>
        <Button variant="ghost" size="icon" className="text-cream hover:bg-cream/10 hover:text-gold lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</Button>
      </div>
      {menuOpen && <nav className="border-t border-cream/10 bg-night px-5 py-5 lg:hidden">{nav.map(([label,id]) => <button key={id} onClick={() => scrollTo(id)} className="block w-full border-b border-cream/10 py-3 text-left font-sans text-sm text-cream/85">{label}</button>)}</nav>}
    </header>

    <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pt-20 text-cream">
      <img src={heroImage} width={1920} height={1080} alt="Liam and Sparkle exploring an enchanted wildflower valley beneath a rainbow" className="absolute inset-0 size-full object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--night)_0%,color-mix(in_oklab,var(--night)_90%,transparent)_31%,color-mix(in_oklab,var(--night)_25%,transparent)_62%,transparent_100%)]"/>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(transparent,var(--background))]"/>
      {[12,25,42,63,78,88].map((n,i)=><span key={n} className="animate-twinkle absolute size-1.5 rounded-full bg-gold-soft shadow-[0_0_12px_var(--gold-soft)]" style={{left:`${n}%`,top:`${22+(i%3)*17}%`,animationDelay:`${i*.45}s`}}/>)}
      <Butterfly className="animate-drift absolute right-[15%] top-[28%] hidden size-7 text-gold-soft drop-shadow-lg md:block"/>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-16 lg:px-8">
        <div className="max-w-[650px]">
          <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-soft">Light Magic Story Book Collection</p>
          <h1 className="text-gold-shimmer text-5xl leading-[1.07] sm:text-6xl lg:text-7xl">Welcome to the World of Light Magic</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/90 sm:text-xl">Magical adventures, unforgettable friendships, and a world filled with wonder.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button variant="magical" size="lg" onClick={() => scrollTo("books")}>Explore the Collection <ArrowRight/></Button><Button variant="moonlight" size="lg" onClick={() => scrollTo("characters")}>Meet Liam &amp; Sparkle</Button></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center font-sans text-[0.6rem] uppercase tracking-[0.2em] text-night/70 sm:block">Scroll to begin<br/><span className="mx-auto mt-2 block h-8 w-px bg-night/40"/></div>
    </section>

    <section id="books" className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute -left-20 top-24 size-72 rounded-full bg-rose/10 blur-3xl"/><div className="absolute -right-20 bottom-10 size-80 rounded-full bg-sky/10 blur-3xl"/>
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-[390px] perspective-[1200px]">
          <div className="absolute -inset-6 -z-10 rotate-3 rounded-md bg-gold/20 blur-xl"/>
          <img src={coverAsset.url} width={585} height={768} alt="Front cover of The Leprechaun and the Unicorn by Richard Schaefer" className="animate-float-soft w-full rounded-r-md border-l-[10px] border-night/80 shadow-[20px_30px_50px_color-mix(in_oklab,var(--night)_35%,transparent)]"/>
        </div>
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary">Featured Book</p>
          <h2 className="mt-3 text-4xl leading-tight text-night sm:text-6xl">The Leprechaun <span className="text-gold">and the</span> Unicorn</h2>
          <p className="mt-4 font-display text-xl italic text-secondary">A Collection of Magical Adventures</p>
          <div className="my-7 h-px w-24 bg-gold"/>
          <p className="text-base leading-8 text-muted-foreground">The 7 Light Magic Story Books are a collection of mythical adventures shared by magical characters: a good-natured Leprechaun named Liam and his favorite Unicorn companion, Sparkle. Together they play and enjoy their friendship, along with the new friends they meet in the magical world they roam.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button variant="magical" size="lg">Discover the Book <BookOpen/></Button><Button variant="outline" size="lg" title="Purchase link coming soon">Buy the Book</Button></div>
          <p className="mt-3 font-sans text-xs text-muted-foreground">Purchase link coming soon.</p>
        </div>
      </div>
    </section>

    <section className="bg-night px-5 py-24 text-cream lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="The Light Magic Story Book Collection" title="7 Magical Adventures" light text="Seven mythical journeys filled with friendship, discovery, and wonder. Official story titles and details will be revealed here."/>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story,i)=><article key={story.number} className={`group relative overflow-hidden rounded-md border border-gold/25 bg-cream/5 p-4 transition duration-500 hover:-translate-y-2 hover:border-gold/60 ${i===0?"lg:col-span-2":""}`}>
            <div className={`relative mb-5 overflow-hidden rounded-sm ${i===0?"aspect-[2/1]":"aspect-[4/3]"}`}><img src={i%2===0?heroImage:friendsImage} loading="lazy" width={640} height={480} alt="Placeholder artwork for a future Light Magic story" className="size-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-night/25"/><span className="absolute left-3 top-3 bg-night/80 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-[0.16em] text-gold-soft">Story {story.number}</span><span className="absolute bottom-3 right-3 rounded-sm bg-cream/90 px-2 py-1 font-sans text-[0.6rem] font-bold uppercase text-night">Placeholder</span></div>
            <h3 className="text-2xl text-gold-soft">{story.title}</h3><p className="mt-2 text-sm leading-6 text-cream/65">{story.text}</p><button className="mt-4 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-gold transition group-hover:gap-3">Read More <ArrowRight className="size-4"/></button>
          </article>)}
        </div>
      </div>
    </section>

    <section id="characters" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Companions on Every Journey" title="Meet the Magical Friends" text="At the heart of every adventure is a friendship full of trust, curiosity, and joy."/>
      <div className="overflow-hidden rounded-md border border-gold/40 bg-card shadow-2xl lg:grid lg:grid-cols-[1.25fr_.75fr]"><img src={friendsImage} loading="lazy" width={1536} height={1024} alt="Liam the Leprechaun standing with Sparkle the Unicorn in a flower-filled magical landscape" className="h-full min-h-[420px] w-full object-cover"/><div className="grid divide-y divide-border">
        <div className="p-8 lg:p-10"><div className="mb-4 flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"><Feather/></span><h3 className="text-3xl text-night">Liam</h3></div><p className="leading-7 text-muted-foreground">A good-natured Leprechaun whose adventures take him across a magical world filled with new friends and discoveries.</p><dl className="mt-5 grid grid-cols-2 gap-4 font-sans text-xs"><div><dt className="font-bold uppercase text-secondary">Personality</dt><dd className="mt-1 text-muted-foreground">Kind &amp; curious</dd></div><div><dt className="font-bold uppercase text-secondary">Role</dt><dd className="mt-1 text-muted-foreground">Adventurous friend</dd></div></dl></div>
        <div className="p-8 lg:p-10"><div className="mb-4 flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-sky text-primary-foreground"><Sparkles/></span><h3 className="text-3xl text-night">Sparkle</h3></div><p className="leading-7 text-muted-foreground">Liam’s favorite Unicorn companion and magical friend, sharing every wonder along the way.</p><dl className="mt-5 grid grid-cols-2 gap-4 font-sans text-xs"><div><dt className="font-bold uppercase text-secondary">Personality</dt><dd className="mt-1 text-muted-foreground">Gentle &amp; loyal</dd></div><div><dt className="font-bold uppercase text-secondary">Role</dt><dd className="mt-1 text-muted-foreground">Magical companion</dd></div></dl></div>
      </div></div>
      <div className="mt-14 text-center"><h3 className="text-3xl text-night">Friends Along the Way</h3><p className="mt-3 text-muted-foreground">More magical friends from the seven stories will be introduced here.</p><div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-3">{["Character One","Character Two","Character Three"].map((name,i)=><article key={name} className="rounded-md border border-dashed border-gold/60 bg-card p-6"><div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-muted"><Users className="text-secondary"/></div><h4 className="font-display text-xl">{name}</h4><p className="mt-2 font-sans text-xs uppercase tracking-[.12em] text-muted-foreground">Character details coming soon</p><p className="mt-3 text-sm text-muted-foreground">Personality and magical role placeholder.</p></article>)}</div></div>
    </div></section>

    <section id="world" className="bg-night px-5 py-24 text-cream lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Choose Your Path" title="Explore the Magical World" light text="Select a glowing place on the map to uncover a little piece of wonder."/>
      <div className="relative overflow-hidden rounded-md border-2 border-gold/50 shadow-[0_30px_80px_color-mix(in_oklab,var(--night)_70%,transparent)]"><img src={mapImage} loading="lazy" width={1536} height={1024} alt="Illustrated map of the Light Magic world with forests, rivers, meadows, waterfalls, blossom trees, and a castle" className="w-full"/>
        {places.map((p,i)=><button key={p.name} onClick={()=>setPlace(p)} aria-label={`Explore ${p.name}`} className={`absolute flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream bg-primary text-night shadow-[0_0_20px_var(--gold)] transition hover:scale-125 sm:size-9 ${place.name===p.name?"scale-125":""}`} style={{left:p.x,top:p.y}}><Sparkles className="size-3.5"/><span className="sr-only">{p.name}</span></button>)}
        <div className="absolute bottom-3 left-3 right-3 rounded-sm border border-gold/40 bg-night/90 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm sm:p-6"><p className="font-sans text-[.62rem] font-bold uppercase tracking-[.2em] text-gold">A place of wonder</p><h3 className="mt-1 text-2xl text-gold-soft">{place.name}</h3><p className="mt-2 text-sm leading-6 text-cream/75">{place.text}</p></div>
      </div></div>
    </section>

    <section className="px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionTitle eyebrow="Stories with Heart" title="More Than Magical Adventures" text="These stories encourage young readers to remain curious, look for the best wherever they go, and appreciate the people they meet."/>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-gold/35 bg-border sm:grid-cols-4">{values.map(([Icon,label])=><div key={label} className="group bg-card p-6 text-center transition hover:bg-gold-soft/30 sm:p-8"><Icon className="mx-auto size-8 text-secondary transition group-hover:-translate-y-1"/><h3 className="mt-4 text-lg text-night sm:text-xl">{label}</h3></div>)}</div>
    </div></section>

    <section id="about" className="relative overflow-hidden bg-secondary px-5 py-24 text-secondary-foreground lg:px-8 lg:py-28"><div className="absolute inset-0 opacity-15"><img src={heroImage} loading="lazy" alt="Enchanted countryside" className="size-full object-cover"/></div><div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.7fr_1.3fr]">
      <div className="mx-auto max-w-xs"><div className="relative"><div className="absolute -inset-3 rotate-3 border border-gold/70"/><img src={authorAsset.url} loading="lazy" width={620} height={900} alt="Richard Schaefer, author of the Light Magic Story Book Collection" className="relative aspect-[4/5] w-full object-cover shadow-2xl"/></div></div>
      <div><p className="font-sans text-xs font-bold uppercase tracking-[.22em] text-gold-soft">The Author Behind the Magic</p><h2 className="text-gold-shimmer mt-3 text-5xl sm:text-6xl">Meet Richard Schaefer</h2><Quote className="my-6 size-10 text-gold/70"/><p className="max-w-3xl text-lg leading-9 text-cream/90">Richard Schaefer is a world traveler himself. Inspired by the lands and people he met along the way, he blends those characters and landscapes into these stories, which are meant to encourage young readers' curiosity: to look for the best wherever they go, and in everyone they meet.</p></div>
    </div></section>

    <section id="gallery" className="px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="A Glimpse Between the Pages" title="Inside the World of Light Magic"/>
      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 lg:grid-cols-4">{[
        [heroImage,"Magical landscape","col-span-2 row-span-2"],[friendsImage,"Liam and Sparkle","row-span-2"],[coverAsset.url,"The book cover","row-span-2"],[mapImage,"The magical world","col-span-2"],[authorAsset.url,"Richard Schaefer",""], [heroImage,"Beyond the rainbow",""]
      ].map(([src,alt,span],i)=><button key={i} onClick={()=>setGalleryImage(src)} className={`group relative overflow-hidden rounded-sm ${span}`}><img src={src} loading="lazy" alt={alt} className="size-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-night/0 transition group-hover:bg-night/30"/><span className="absolute bottom-3 left-3 translate-y-4 font-sans text-xs font-bold uppercase tracking-[.12em] text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{alt}</span></button>)}</div>
    </div></section>
    {galleryImage && <div role="dialog" aria-modal="true" aria-label="Gallery image" className="fixed inset-0 z-[80] flex items-center justify-center bg-night/95 p-5" onClick={()=>setGalleryImage(null)}><Button variant="ghost" size="icon" className="absolute right-5 top-5 text-cream" onClick={()=>setGalleryImage(null)} aria-label="Close gallery"><X/></Button><img src={galleryImage} alt="Enlarged Light Magic gallery artwork" className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"/></div>}

    <section className="bg-muted/60 px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><p className="font-sans text-xs font-bold uppercase tracking-[.2em] text-secondary">For Families &amp; Classrooms</p><h2 className="mt-3 text-4xl text-night sm:text-5xl">Stories for Curious Young Minds</h2><p className="mt-6 leading-8 text-muted-foreground">The Light Magic stories celebrate reading, imagination, curiosity, friendship, kindness, exploration, and positive thinking.</p></div><div className="grid gap-4 sm:grid-cols-2">{["Discussion Questions","Reading Activities","Printable Materials","Story Guides"].map(title=><article key={title} className="rounded-md border border-border bg-card p-6"><BookOpen className="text-secondary"/><h3 className="mt-4 text-xl text-night">{title}</h3><p className="mt-2 text-sm text-muted-foreground">Resource coming soon.</p><span className="mt-4 inline-block rounded-sm bg-muted px-2 py-1 font-sans text-[.58rem] font-bold uppercase tracking-[.12em] text-muted-foreground">Placeholder</span></article>)}</div></div></section>

    <section className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-4xl text-center"><SectionTitle eyebrow="Reader Reflections" title="What Readers Are Saying"/><div className="rounded-md border border-gold/40 bg-card p-8 shadow-xl sm:p-12"><Quote className="mx-auto size-10 text-gold"/><p className="mt-6 text-xl italic leading-9 text-muted-foreground">A future reader review will appear here once authentic feedback is available.</p><p className="mt-6 font-sans text-xs font-bold uppercase tracking-[.16em] text-secondary">Review placeholder {review+1} of 3</p></div><div className="mt-6 flex justify-center gap-2">{[0,1,2].map(i=><button key={i} onClick={()=>setReview(i)} aria-label={`Show review placeholder ${i+1}`} className={`size-2.5 rounded-full ${i===review?"bg-secondary":"bg-border"}`}/>)}</div></div></section>

    <section className="relative overflow-hidden bg-night px-5 py-24 text-center text-cream lg:px-8"><img src={heroImage} loading="lazy" alt="" className="absolute inset-0 size-full object-cover opacity-25"/><div className="absolute inset-0 bg-night/65"/><div className="relative mx-auto max-w-3xl"><Sparkles className="mx-auto mb-5 size-9 text-gold"/><h2 className="text-gold-shimmer text-5xl sm:text-6xl">Begin Your Magical Adventure</h2><p className="mt-5 text-lg text-cream/80">Step into the world of Liam, Sparkle, and their magical friends.</p><Button variant="magical" size="lg" className="mt-8" title="Retailer link coming soon">Buy the Book <ArrowRight/></Button><p className="mt-5 font-sans text-xs text-cream/50">Retailer options will be added when official links are available.</p></div></section>

    <section className="relative overflow-hidden bg-sky px-5 py-20 lg:px-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,color-mix(in_oklab,var(--gold-soft)_35%,transparent),transparent_22%),linear-gradient(125deg,var(--night),var(--sky))]"/><div className="relative mx-auto grid max-w-5xl items-center gap-8 text-cream lg:grid-cols-[1fr_1.2fr]"><div><p className="font-sans text-xs font-bold uppercase tracking-[.2em] text-gold">Letters from Light Magic</p><h2 className="mt-3 text-4xl text-gold-soft sm:text-5xl">Join the Light Magic Adventure</h2><p className="mt-4 leading-7 text-cream/75">Stay connected and be the first to hear about new stories, magical adventures, and updates from Richard Schaefer.</p></div><form onSubmit={e=>e.preventDefault()} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]"><label className="sr-only" htmlFor="newsletter-name">Name</label><input id="newsletter-name" placeholder="Your name" className="h-12 rounded-sm border border-cream/30 bg-cream/10 px-4 text-cream outline-none placeholder:text-cream/60 focus:border-gold"/><label className="sr-only" htmlFor="newsletter-email">Email</label><input id="newsletter-email" type="email" placeholder="Email address" className="h-12 rounded-sm border border-cream/30 bg-cream/10 px-4 text-cream outline-none placeholder:text-cream/60 focus:border-gold"/><Button type="submit" variant="magical" size="lg">Join <Mail/></Button></form></div></section>

    <section id="contact" className="px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-sans text-xs font-bold uppercase tracking-[.2em] text-secondary">Say Hello</p><h2 className="mt-3 text-5xl text-night">Get in Touch</h2><p className="mt-5 leading-8 text-muted-foreground">For questions, reading events, or messages for Richard, use the form and we’ll be in touch.</p><div className="mt-8 flex gap-3"><Button variant="outline" size="icon" aria-label="Instagram link coming soon"><Instagram/></Button><Button variant="outline" size="icon" aria-label="Facebook link coming soon"><Facebook/></Button><Button variant="outline" size="icon" aria-label="Social link coming soon"><MessageCircle/></Button></div><p className="mt-3 font-sans text-xs text-muted-foreground">Social links coming soon.</p></div><form onSubmit={e=>e.preventDefault()} className="grid gap-4 rounded-md border border-gold/35 bg-card p-6 shadow-lg sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="font-sans text-xs font-bold uppercase text-secondary">Name<input className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-4 font-body font-normal normal-case text-foreground outline-none focus:border-gold"/></label><label className="font-sans text-xs font-bold uppercase text-secondary">Email<input type="email" className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-4 font-body font-normal normal-case text-foreground outline-none focus:border-gold"/></label></div><label className="font-sans text-xs font-bold uppercase text-secondary">Message<textarea rows={5} className="mt-2 w-full resize-none rounded-sm border border-input bg-background p-4 font-body font-normal normal-case text-foreground outline-none focus:border-gold"/></label><Button type="submit" variant="magical" size="lg" className="justify-self-start">Send Message <Send/></Button></form></div></section>

    <footer className="relative overflow-hidden bg-night px-5 pb-8 pt-16 text-cream lg:px-8">{[8,18,35,55,72,89].map((x,i)=><Star key={x} className="animate-twinkle absolute size-3 text-gold" style={{left:`${x}%`,top:`${12+(i%2)*20}%`,animationDelay:`${i*.4}s`}}/>)}<div className="relative mx-auto max-w-7xl"><div className="grid gap-10 border-b border-cream/15 pb-12 md:grid-cols-[1.2fr_1fr_.8fr]"><div><h2 className="text-3xl text-gold-soft">Richard Schaefer</h2><p className="mt-2 font-sans text-xs uppercase tracking-[.18em] text-cream/55">Light Magic Story Book Collection</p></div><nav className="grid grid-cols-2 gap-3">{nav.map(([label,id])=><button key={id} onClick={()=>scrollTo(id)} className="text-left font-sans text-xs text-cream/65 hover:text-gold">{label}</button>)}</nav><div><p className="font-display text-xl text-gold-soft">Follow the Adventure</p><div className="mt-4 flex gap-3"><Instagram className="size-5 text-cream/60"/><Facebook className="size-5 text-cream/60"/><Mail className="size-5 text-cream/60"/></div></div></div><div className="flex flex-col justify-between gap-2 pt-6 font-sans text-[.65rem] text-cream/40 sm:flex-row"><p>© {new Date().getFullYear()} Richard Schaefer. All rights reserved.</p><p>Where friendship makes every journey magical.</p></div></div></footer>
  </main>;
}