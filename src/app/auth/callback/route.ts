import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const destination = url.searchParams.get("next");
  const nextPath = destination?.startsWith("/") && !destination.startsWith("//") ? destination : "/dashboard";
  const supabase = await createSupabaseServerClient();
  if (code && supabase) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(nextPath, url.origin));
  }
  return NextResponse.redirect(new URL("/login?error=confirmation", url.origin));
}
