import Checkboxes from "@/components/Body/Checkboxes";
import Description from "@/components/Body/Description";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="h-screen">
			<div className="h-1/6 bg-red-300">
				<Header />
			</div>
			<div className="h-5/6 bg-amber-300">
				<div className="min-h-full flex">
					<Description />
					<Checkboxes />
				</div>
			</div>
		</div>
	);
}
