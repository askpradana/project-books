"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export async function GetAllBooks() {
	const fetchData = await fetch("api/books");
	const data = await fetchData.json();
	return data.booklist;
}

interface BooksModel {
	booksid: number;
	title: string;
	author: string;
	coverbooks: string;
}

export default function BooksGallery() {
	const [booklist, setBookList] = useState<BooksModel[]>([]);
	const [error, setError] = useState(Boolean);

	useEffect(() => {
		GetAllBooks()
			.then((data) => {
				setBookList(data);
			})
			.catch((error) => {
				setError(true);
				console.error("Error fetching data:", error);
			});
	}, []);

	if (error) return <p>Ada masalah saat load data ke database</p>;

	return (
		<main className="flex flex-wrap gap-4 px-12">
			{booklist.map((book: BooksModel) => (
				<Image
					key={book.booksid}
					src={book.coverbooks}
					alt={book.title}
					width={200}
					height={200}
				/>
			))}
		</main>
	);
}
