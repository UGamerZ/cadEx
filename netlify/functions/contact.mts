import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const resp = await req.json();
  console.log(`Thank you for your interest, ${resp.body}`);
  return new Response(`Thank you for your interest, ${resp.body}`);
};
