<<<<<<< HEAD
## Eventure
<p>Event exploration website where you can search for events </p>
<h3>Technologies used</h3>
<p>NextJS</p>
=======
# Eventure

A modern event management platform built with Next.js, Supabase, and Tailwind CSS.

## Features

- User authentication (email/password, Google, GitHub)
- Event creation and management
- Responsive design with beautiful UI
- Real-time updates
- Image optimization

## Tech Stack

- Next.js 15
- React 18
- Supabase (Authentication & Database)
- Tailwind CSS
- Framer Motion
- TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Rukundo-Bahati/eventuresss.git
cd eventure
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository.

2. Import your project in Vercel:
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add your environment variables
   - Deploy!

### Environment Variables

Make sure to set these environment variables in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Building for Production

```bash
npm run build
```

## Running in Production

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
>>>>>>> 000b60b (more pages)
