import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const resp = await req.json();
    console.log(`Thank you for your interest, ${resp.name}`);
    return new Response(`Thank you for your interest, ${resp.name}`);
  } catch (err) {
    return new Response(err);
  }
};
