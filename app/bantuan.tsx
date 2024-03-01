"use client";
import { GetAllBooks } from "./hitter";
import { useEffect, useState } from "react";

interface BooksModel {
	booksid: number;
	title: String;
	author: String;
}

export default function Bantuan() {
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
		<main>
			<p>Hello prisma</p>
			{booklist.map((book: BooksModel) => (
				<p key={book.booksid}>
					{book.title} {book.author}
				</p>
			))}
		</main>
	);
}
