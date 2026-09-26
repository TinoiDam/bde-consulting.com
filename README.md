# BDE Consulting Website

Professionele consultingwebsite gebouwd met Next.js, Tailwind CSS en hosted op Vercel.

## 🎨 Design

- **Kleurenschema**: Dark Navy (#0f1419) + Rose Mauve (#a85a5a)
- **Typografie**: Geist Sans (modern, schoon)
- **Taal**: Nederlands

## 📁 Structuur

```
app/
├── page.tsx           # Homepage met hero sectie
├── services/          # Diensten pagina
├── portfolio/         # Portfolio / Casestudies
├── insights/          # Blog / Insights
└── layout.tsx         # Globale layout met header
components/
├── Header.tsx         # Navigatieheader
```

## 🚀 Lokaal runnen

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 🚀 Deploy naar Vercel

### Stap 1: Git repository
```bash
git add .
git commit -m "Initial BDE Consulting site"
git remote add origin https://github.com/yourusername/bde-consulting
git push -u origin main
```

### Stap 2: Vercel deployment
1. Ga naar https://vercel.com
2. Klik "Add New..." → "Project"
3. Selecteer je GitHub repository
4. Klik "Deploy"

### Stap 3: Custom domain
1. In Vercel Project Settings → Domains
2. Voeg `bde-consulting.com` toe
3. Update DNS records naar Vercel nameservers

## 📝 Blog/Insights met Database

Voor dynamic blog posts met database:

### Optie 1: Supabase (Aanbevolen)
```bash
npm install @supabase/supabase-js
```

Maak database table:
```sql
CREATE TABLE insights (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  excerpt TEXT,
  content TEXT,
  category VARCHAR(100),
  date TIMESTAMP,
  author VARCHAR(100)
);
```

Update `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## 🔧 Aanpassingen

- **Kleuren**: Pas `#0f1419` en `#a85a5a` aan in files
- **Koppelingen**: Update links in `Header.tsx`
- **Content**: Edit pagina's in `app/` directory

## ✨ Next Steps

- [ ] CMS/Database integratie
- [ ] Contactformulier met email
- [ ] Analytics (Vercel Analytics)
- [ ] SEO & meta tags
- [ ] Newsletter signup
