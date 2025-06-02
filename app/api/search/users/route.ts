// Fetch query results

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest){
  const { searchParams } = new URL(req.url);
  const login = searchParams.get("q");

  if(!login){
    return NextResponse.json({
      error: "Missing query parameter"
    }, { status: 400 });
  }

  try{
    const response = await axios.get(
      `${process.env.NEXTJS_GIT_URL}/search/users?q=${login}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXTJS_GIT_TOKEN}`,
        },
      }
    );
    return NextResponse.json(response.data);
  }
  catch(error){
    console.error(error);
    return NextResponse.json({
      error: "User not found"
    }, { status: 500 });
  }
}
