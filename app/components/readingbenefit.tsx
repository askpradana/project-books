import Image from "next/image";
import benefitImages from "../../public/benefitofreadingbooks.png";

export default function ReadingBenefit() {
	return (
		<div className="p-12 gap-4 flex flex-col">
			<div>
				<h1>Interested in reading a books?</h1>
				<Image src={benefitImages} alt="Perks of reading a books" />
				<p className="text-xs font-light">
					*Note: yes, this img is not good, send image designer pls
				</p>
			</div>
			<ol>
				<li>
					<a href="https://www.realsimple.com/health/preventative-health/benefits-of-reading-real-books">
						Improves memory function:
					</a>{" "}
					Reading regularly exercises the brain, helping to improve memory and
					cognitive function
				</li>
				<li>
					<a href="https://www.realsimple.com/health/preventative-health/benefits-of-reading-real-books">
						Increases empathy:
					</a>{" "}
					Literary fiction can help readers understand what others are thinking,
					improving empathy
				</li>
				<li>
					<a href="https://www.realsimple.com/health/preventative-health/benefits-of-reading-real-books">
						Reduces stress:
					</a>{" "}
					Reading can be a serious stress-buster, reducing stress by as much as
					68%
				</li>
				<li>
					<a href="https://www.oberlo.com/blog/benefits-of-reading-books">
						Improves mental health:
					</a>{" "}
					Reading can help prevent age-related cognitive decline and improve
					mental health
				</li>
				<li>
					<a href="https://www.oberlo.com/blog/benefits-of-reading-books">
						Lengthens life:
					</a>{" "}
					Reading for 30 minutes a day can increase your chances of living
					longer by 23%
				</li>
			</ol>
		</div>
	);
}
