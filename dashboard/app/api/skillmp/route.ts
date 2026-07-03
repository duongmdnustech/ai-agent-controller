import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  try {
    // 1. Grab the incoming search parameters (page, limit, filter, etc.) from the frontend request
    const { searchParams } = new URL(request.url);
    
    // 2. Forward the request from your Next.js server directly to the external target API
    const targetUrl = `https://skillsmp.com/api/skills?${searchParams.toString()}`;
    
    const response = await axios.get(targetUrl, {
      // Forward common headers if the external API expects them, like Auth or User-Agent
      headers: {
        "Accept": "application/json",
      }
    });

    // 3. Return the exact data back to your frontend browser client securely
    return NextResponse.json(response.data, { status: 200 });

  } catch (error: any) {
    console.error("Proxy Error:", error?.response?.data || error.message);
    
    // Pass along the external server's error status code if available, otherwise default to 500
    const statusCode = error?.response?.status || 500;
    const errorMessage = error?.response?.data || { error: "Failed to fetch skills via proxy" };

    return NextResponse.json(errorMessage, { status: statusCode });
  }
}