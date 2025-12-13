import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: "u_1", name: "Ada Lovelace", email: "ada@paletto.dev" },
    { id: "u_2", name: "Alan Turing", email: "alan@paletto.dev" },
    { id: "u_3", name: "Grace Hopper", email: "grace@paletto.dev" }
  ]);
}

