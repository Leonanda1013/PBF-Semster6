import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "@/Middleware/withAuth";

function middleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(middleware, ["/profil","/admin"]);
