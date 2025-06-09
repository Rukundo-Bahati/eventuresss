# Eventure

A modern event management platform built with Next.js, Supabase, and Tailwind CSS.

## Features

- User authentication (email/password, Google, GitHub)
- Event creation and management
- Responsive design with beautiful UI
- Real-time updates
- Image optimization
- Role-based access control (Admin & User)

## Tech Stack

- Next.js 15
- React 18
- Supabase (Authentication & Database)
- Tailwind CSS
- Framer Motion
- TypeScript

## Test Credentials

### Admin Account
```
Email: admin@eventure.com
Password: Admin@123
```

### Regular User Account
```
Email: user@eventure.com
Password: User@123
```

## User Roles & Permissions

### Admin
- Create, edit, and delete any event
- Manage user accounts
- Access admin dashboard
- View analytics and reports
- Approve/reject event submissions

### Regular User
- Browse events
- Register for events
- Create personal events
- Edit own events
- View event details
- Manage personal profile

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

## Database Structure

### Events Table
```sql
create table events (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  date timestamp with time zone,
  seats integer,
  image text,
  created_at timestamp with time zone default now(),
  user_id uuid references auth.users(id)
);
```

### User Profiles Table
```sql
create table profiles (
  id uuid references auth.users(id) primary key,
  first_name text,
  last_name text,
  role text default 'user',
  created_at timestamp with time zone default now()
);
```

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

## Testing the Application

1. **User Registration**
   - Navigate to `/auth/register`
   - Fill in the registration form
   - Verify email (if required)

2. **User Login**
   - Navigate to `/auth/login`
   - Use test credentials or your registered account
   - Test "Remember me" functionality
   - Test password reset flow

3. **Event Management**
   - Create a new event
   - Edit event details
   - Upload event images
   - Set event capacity
   - Manage registrations

4. **Admin Features**
   - Access admin dashboard
   - Manage user accounts
   - Review event submissions
   - Generate reports

## Common Issues & Solutions

1. **Image Upload Issues**
   - Ensure proper image format (JPG, PNG)
   - Check file size limits
   - Verify image URL accessibility

2. **Authentication Problems**
   - Clear browser cache
   - Check email verification status
   - Verify environment variables

3. **Database Connection**
   - Verify Supabase credentials
   - Check network connectivity
   - Ensure proper table structure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information about your problem

## Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- Tailwind CSS for the styling system
- All contributors who have helped shape this project
