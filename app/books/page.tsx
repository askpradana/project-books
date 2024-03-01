import Image from "next/image";
import Bantuan from "../bantuan";
import BooksGallery from "./booksgallery";

export default function BookList() {
	return (
		<div>
			<div className="flex justify-center items-center w-screen h-[480px]">
				<h2 className="font-light">My Book Collection.</h2>
			</div>
            <BooksGallery />
		</div>
	);
}
