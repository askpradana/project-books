import { PrismaClient } from "@prisma/client";

export async function GET() {
	const prisma = new PrismaClient();
	const booklist = await prisma.book_list.findMany();

	return Response.json({ booklist });
}

export async function POST(request: Request) {
	const res = await request.json()
	return Response.json({ res })
  }