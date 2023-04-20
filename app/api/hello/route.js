import { NextResponse } from "next/server"
export async function GET(request , response) {
  return NextResponse.json({nombre: 'Alamar', edad: '23'})
}

