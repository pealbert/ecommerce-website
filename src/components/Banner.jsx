import { cn } from "@/lib/utils";
import { Button } from "./Button";

export const Banner = ({ banner }) => {
	return (
		<div className="flex min-h-100 items-center justify-center">
			<div className="container">
				<div
					className={cn(
						"grid grid-cols-1 items-center gap-6 rounded-3xl text-white md:grid-cols-3",
						banner.bgColor,
					)}
				>
					{/* first col */}
					<div className="p-6 sm:p-8">
						<p className="text-sm">{banner.discount}</p>
						<h2 className="font-bold text-4xl uppercase lg:text-7xl">
							{banner.title}
						</h2>
						<p className="text-sm">{banner.date}</p>
					</div>

					{/* second col */}
					<div className="flex h-full items-center">
						<img
							alt=""
							className="mx-auto w-62.5 scale-125 object-cover drop-shadow-2xl md:w-85"
							src={banner.image}
						/>
					</div>

					{/* third col */}
					<div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-8">
						<p className="font-bold text-xl">{banner.product}</p>
						<p className="font-bold text-3xl sm:text-5xl">{banner.subtitle}</p>
						<p className="text-sm leading-5 tracking-wide">
							{banner.description}
						</p>

						<Button
							bgColor="bg-white"
							text="Shop"
							textColor={banner.buttonTextColor}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
