import { upstashEdge } from "./upstash";
import countries from "./countries.json";
import { NextRequest, NextResponse } from "next/server";

const locations = async (req: NextRequest) => {
  console.log(req);

  const { nextUrl: url, geo, ip } = req;
  const country = geo.country || "US";
  const city = geo.city || "San Francisco";
  const region = geo.region || "CA";

  const countryInfo = countries.find((x) => x.cca2 === country);

  await upstashEdge("set", ip || "0.0.0.0", country);

  url.searchParams.set("flags", countryInfo.flag);
  url.searchParams.set("country", country);

  return NextResponse.rewrite(url);
};

export default locations;
