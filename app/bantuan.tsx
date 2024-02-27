'use client'
import { GetAllBooks } from "./hitter";
import { useEffect, useState } from "react";

interface BooksModel {
	booksid: number;
	title: String;
	author: String;
}

export default function Bantuan() {
	const [booklist, setBookList] = useState<BooksModel[]>([]);

	useEffect(() => {
		GetAllBooks()
			.then((data) => {
				setBookList(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<main>
			<p>Hello prisma</p>
			{booklist.map((book: BooksModel) => (
				<p key={book.booksid}>{book.title}</p>
			))}
		</main>
	);
}
