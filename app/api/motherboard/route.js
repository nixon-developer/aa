// pages/api/motherboard.js

import { NextResponse } from 'next/server';
import si from 'systeminformation';

export async function GET() {
  try {
    const motherboard = await si.baseboard();
    return NextResponse.json(motherboard);
  } catch (error) {
    console.error('Error fetching motherboard details:', error);
    return NextResponse.json({ error: 'Failed to fetch motherboard details' }, { status: 500 });
  }
}
