import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
	const requestList = await prisma.requestbooks.findMany();

	return Response.json({ requestList });
}

interface RequestModel {
	title: string;
	author: string;
	publishedyear: string;
	publishername: string;
	isfullfiled: boolean;
}

export async function POST(request: Request) {
	const body = (await request.json()) as RequestModel;
	const requestData = await prisma.requestbooks.create({
		data: {
			title: body.title,
			author: body.author,
			publishedyear: body.publishedyear,
			publishername: body.publishername,
			isfullfilled: body.isfullfiled,
		},
	});
	return Response.json({ message: "data created!", requestData });
}
