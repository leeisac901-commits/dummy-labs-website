import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, city } = body as { email?: string; city?: string };

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const entry = {
      email,
      city: city ?? "unknown",
      timestamp: new Date().toISOString(),
    };

    // In production this would write to a database.
    // For now we log it server-side so the API is functional.
    console.log("[waitlist] new signup:", entry);

    return NextResponse.json({ ok: true, message: "You're on the list." }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
