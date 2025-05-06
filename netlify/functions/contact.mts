import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log(`Thank you for your interest, ${req.body}`);
  return new Response(`Thank you for your interest, ${req.body}`);
};
