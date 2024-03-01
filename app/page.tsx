import Bantuan from "./bantuan";
import Fact from "./components/fact";
import Footer from "./components/footer";
import Header from "./components/header";
import ReadingBenefit from "./components/readingbenefit";

export default function Home() {
	return (
		<main>
			<Header />
			<Fact />
			<ReadingBenefit />
			<Footer />
		</main>
	);
}
