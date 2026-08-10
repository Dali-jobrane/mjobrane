M.JOBRANE — Personal portfolio and digital menu concept

Files included
- index.html
- style.css
- script.js

Description
This is a complete, responsive, production-ready static website for Dali Jabrane (M.JOBRANE). It is built with semantic HTML5, CSS3, and vanilla JavaScript (no framework). The design follows your brand direction: dark background, off-white text, lime/acid-green accents, large typography, whitespace, subtle glass effects and smooth animations.

Features
- Hero section with strong headline and premium visual orb
- Sticky navigation with responsive mobile menu
- About, Work, Services, Digital Menu Concept, and Contact sections
- Interactive project cards and hover effects
- Smooth reveal animations using IntersectionObserver
- Accessible and semantic markup; keyboard-friendly mobile menu
- Mailto contact button placeholder (YOUR_EMAIL@example.com)
- Responsive across desktop, tablet and mobile
- SEO-friendly meta tags and Open Graph fields

How to run locally
1. Clone the repository (or download files):

   git clone https://github.com/Dali-jobrane/mjobrane.git
   cd mjobrane

2. Open the site locally:

   - Option A (quick): open index.html directly in your browser.
   - Option B (recommended - simple static server):
       python3 -m http.server 5173
     Then open http://localhost:5173 in your browser.

3. Edit content
   - Replace the email in index.html (mailto:YOUR_EMAIL@example.com) with your real address.
   - Update social links in the Contact section.
   - Edit text, add images or replace project links.

Deployment suggestions
- Cloudflare Pages: connect the GitHub repository and deploy the main branch.
- Static hosting (Netlify, Vercel, GitHub Pages): this is a static directory and works on all major static hosts.

Subdomains & Digital Menus
The architecture is static and intentionally does not hard-code anything that would prevent you from using subdomains such as cafe-name.m-jobrane.site.
When you are ready to launch the digital menu product:
- Create a Cloudflare DNS wildcard or individual CNAMEs for each subdomain.
- Deploy a simple menu template (this repo or a separate repo) and configure the subdomain to point to it.

Customization notes
- Fonts are loaded from Google Fonts (Inter). If you self-host fonts, update index.html and style.css.
- Colors and layout can be tweaked in style.css using CSS variables at the top.

Accessibility & Performance
- Uses semantic HTML and ARIA attributes for the mobile nav toggle.
- Minimal JavaScript and no external JS libraries for better performance.

Next steps I can do for you (tell me which you want)
- Push these files into your GitHub repository and create a deploy (I can attempt again).
- Create a React + Vite version with modular components.
- Add example restaurant/café subdomain templates (ready-to-clone) and a small CLI to create new menu pages.
- Generate printable QR codes and instructions that point to cafe-name.m-jobrane.site.

If you'd like, tell me which next step and I'll proceed.