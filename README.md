# Developer Portfolio

A modern, minimal, and professional developer portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and minimal design
- 🌓 Dark mode support with next-themes
- 📱 Fully responsive (mobile-first)
- 🎨 Smooth animations and transitions
- 📧 Contact form with Resend email integration
- 🎯 SEO optimized
- ♿ Accessible design

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theme:** next-themes
- **Email:** Resend
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
```

Get your API key from [Resend](https://resend.com/api-keys)

5. Update the contact form email addresses in `src/app/actions/sendEmail.ts`:
   - Change `to` field to your email address
   - Change `from` field to your verified domain email (or use `onboarding@resend.dev` for testing)

### Customization

1. **Personal Information:** Edit `src/data/data.ts` to update:
   - Your name, role, and tagline
   - Email and social media links
   - Projects, experience, and skills
   - About section content

2. **Profile Image:** Add your profile image to `public/profile.jpg`

3. **Resume:** Add your resume PDF to `public/resume.pdf`

4. **Colors & Styling:** Customize colors in `tailwind.config.ts`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your `RESEND_API_KEY` environment variable
4. Deploy!

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── actions/          # Server Actions
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── sections/         # Page sections
│   │   ├── ui/               # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   └── data/
│       └── data.ts           # Portfolio content
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
