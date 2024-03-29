import { Button } from "@/components/ui/button";
import Image from "next/image";
import booksImage from "@/public/books-bg.png";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex flex-row w-screen h-[600px]">
			<div className=" bg-slate-600 m-4 w-full h-[480px] rounded-3xl flex flex-col items-center justify-start">
				<div className="flex flex-col items-center gap-4 mt-24">
					<div className="flex flex-col items-center text-white">
						<h1 className="text-3xl font-bold">Expand your books collection</h1>
						<p className="text-md">Some tagline to attract your attention.</p>
					</div>
					<div className="flex flex-row gap-4">
						<Button>
							<Link href="/books">Read a Books</Link>
						</Button>
						<Button variant="outline">
							<Link href="/ask-for-a-book-title">Ask for title</Link>
						</Button>
					</div>
					<div className="absolute bottom-1/2 transform translate-y-1/2 ">
						<Image
							src={booksImage}
							alt="Image of books for backgorund"
							width={300}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
