"use client";
import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import RequestButton from "./requestbtn";

async function getAllRequestTitle() {
	const fetchData = await fetch("api/request-title", { method: "GET" });
	const data = await fetchData.json();
	return data.requestList;
}

interface RequestModel {
	requestid: string;
	title: string;
	author: string;
	publishedyear: string;
	publishername: string;
	isfullfilled: boolean;
}

export default function AskTitle() {
	const [requestList, setRequestList] = useState<RequestModel[]>([]);
	const [error, setError] = useState(Boolean);

	useEffect(() => {
		getAllRequestTitle()
			.then((data) => {
				setRequestList(data);
			})
			.catch((error) => {
				setError(true);
				console.error("Error fetching data:", error);
			});
	}, []);

	const checkStatus = (status: boolean) => {
		return status ? "Done" : "On searching";
	};

	if (!requestList) {
		return <p>Loading...</p>;
	}

	if (error) return <p>Ada masalah saat load data ke database</p>;

	return (
		<main className="px-12 py-8">
			<p>
				Make sure to read all of the request list to know if your request
				already requested before, use find function on your browser
			</p>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Title</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Author</TableHead>
						<TableHead>Year published</TableHead>
						<TableHead>Publisher</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{requestList &&
						requestList.map((reqModel: RequestModel) => (
							<TableRow key={reqModel.requestid}>
								<TableCell className="font-medium">{reqModel.title}</TableCell>
								<TableCell>{checkStatus(reqModel.isfullfilled)}</TableCell>
								<TableCell>{reqModel.author}</TableCell>
								<TableCell>{reqModel.publishedyear}</TableCell>
								<TableCell>{reqModel.publishername}</TableCell>
							</TableRow>
						))}
				</TableBody>
				<TableCaption>A list of recent request title.</TableCaption>
			</Table>
			<RequestButton />
		</main>
	);
}
