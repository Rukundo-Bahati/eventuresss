// pages/api/events.js

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req: NextRequest) {
  try {
    // Fetch events and stats
    const { count: totalEvents } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true });

    const { count: registeredUsers } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    const { count: upcomingEvents } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true })
      .gte('date', new Date().toISOString());

    // Fetch recent activities
    const { data: recentActivities } = await supabase
      .from('activities')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    return NextResponse.json({
      totalEvents,
      registeredUsers,
      upcomingEvents,
      recentActivities: recentActivities || [
        { action: 'Created a new event: "Tech Conference 2023"', time: '2 hours ago' },
        { action: 'Updated user information for John Doe', time: '5 hours ago' },
        { action: 'Deleted event: "Music Festival 2022"', time: '1 day ago' },
      ],
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
