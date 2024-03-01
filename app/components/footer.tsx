import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Footer() {
	return (
		<div className="w-screen h-[240px] flex flex-col justify-between items-center py-4">
			<div className="flex flex-row gap-12 items-center">
				<div className="flex flex-row gap-12">
					<div>
						<h4>Products</h4>
						<p>Products 1</p>
						<p>Products 2</p>
						<p>Products 3</p>
						<p>Products 4</p>
					</div>
					<div>
						<h4>Docs</h4>
						<p>Getting started</p>
						<p>Deployment setup</p>
						<p>Tutorials</p>
						<p>Migrations</p>
					</div>
					<div>
						<h4>Help</h4>
						<p>Status</p>
						<p>Discord</p>
						<p>Support</p>
						<p>Twitter</p>
					</div>
				</div>
			</div>

			<div className="flex flex-row gap-2">
				<HoverCard>
					<p>&copy; 2024 nfldyprdn.com</p>
					<HoverCardTrigger className="no-underline cursor-pointer text-black">
						Privacy and Terms
					</HoverCardTrigger>
					<HoverCardContent>
						Lol, Like I would add something complex like privacy and terms
						immediately
					</HoverCardContent>
				</HoverCard>
			</div>
		</div>
	);
}
