import Bantuan from "./bantuan";
import Fact from "./components/fact";
import Header from "./components/header";
import ReadingBenefit from "./components/readingbenefit";

export default function Home() {
	return (
		<main>
			<Header />
			{/* <Bantuan /> */}
			<Fact />
			<ReadingBenefit />
		</main>
	);
}
