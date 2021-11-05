import type { NextRequest } from "next/server";
import locations from "utils/locations";

export async function middleware(req: NextRequest) {
  return await locations(req);
}
