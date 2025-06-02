import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ login: string }> }
){
  const { login } = await context.params;
  try{
    const response = await axios.get(
      `${process.env.NEXTJS_GIT_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${process.env.NEXTJS_GIT_TOKEN}`
      }
    });
    return NextResponse.json(response.data);
  }
  catch(error){
    console.error(error);
    return NextResponse.json({
      error: "User not fetched"
    },{ status: 500 });
  }
}