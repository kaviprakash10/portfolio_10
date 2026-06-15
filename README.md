# Developer Portfolio

A single-page developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals and micro-animations
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint               |

## Contact Form (EmailJS)

The contact form sends emails to your Gmail via [EmailJS](https://www.emailjs.com/).

### Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. **Email Services** → Add **Gmail** → connect `kaviprakash2383@gmail.com`
3. **Email Templates** → Create a template with these variables:
   - `{{from_name}}` — sender name
   - `{{reply_to}}` — sender email
   - `{{message}}` — message body
   - Set **To Email** to `kaviprakash2383@gmail.com`
4. **Account** → copy your **Public Key**
5. Copy `.env.example` to `.env` and fill in:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server: `npm run dev`

### Example EmailJS template

**Subject:** Portfolio contact from {{from_name}}

**Body:**
```
From: {{from_name}} ({{reply_to}})

{{message}}
```

## Customization

Edit `src/data/portfolio.js` to update:

- Site config (name, tagline, social links, contact details)
- Education & certification
- Tech stack
- Projects

## Project Structure

```
Portfolio/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolio.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Experience.jsx
        ├── TechStack.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── SectionHeading.jsx
```
