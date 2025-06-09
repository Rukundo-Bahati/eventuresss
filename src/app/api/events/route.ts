import { NextResponse } from 'next/server';

const dummyEvents = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    seats: 150,
    date: '2024-06-15',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    price: 299,
    location: 'San Francisco, CA',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Music Festival',
    description: 'A three-day music festival featuring top artists from around the world.',
    seats: 1000,
    date: '2024-07-20',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    price: 199,
    location: 'Los Angeles, CA',
    category: 'Music'
  },
  {
    id: '3',
    title: 'Food & Wine Expo',
    description: 'Experience the finest cuisines and wines from renowned chefs and wineries.',
    seats: 200,
    date: '2024-08-05',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    price: 149,
    location: 'New York, NY',
    category: 'Food & Drink'
  }
];

export async function GET() {
  return NextResponse.json(dummyEvents);
}
