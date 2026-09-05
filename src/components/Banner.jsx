import { cn } from "@/lib/utils";
import { Button } from "./Button";

export const Banner = ({ banner }) => {
	return (
		<div className="flex min-h-110 items-center justify-center">
			<div className="group container">
				<div
					className={cn(
						"grid grid-cols-1 items-center gap-6 rounded-3xl text-white md:grid-cols-3",
						banner.bgColor,
					)}
				>
					{/* first col */}
					<div className="p-6 sm:p-8">
						<p className="text-sm" data-aos="slide-right">
							{banner.discount}
						</p>
						<h2
							className="font-bold text-4xl uppercase lg:text-7xl"
							data-aos="zoom-out"
						>
							{banner.title}
						</h2>
						<p className="text-sm" data-aos="fade-up">
							{banner.date}
						</p>
					</div>

					{/* second col */}
					<div className="flex h-full items-center" data-aos="zoom-in">
						<img
							alt=""
							className="mx-auto w-62.5 scale-125 object-cover drop-shadow-2xl duration-300 group-hover:scale-130 md:w-85"
							src={banner.image}
						/>
					</div>

					{/* third col */}
					<div className="flex flex-col items-start justify-center gap-4 p-6 sm:p-8">
						<p className="font-bold text-xl" data-aos="zoom-out">
							{banner.product}
						</p>
						<p className="font-bold text-3xl sm:text-5xl" data-aos="fade-up">
							{banner.subtitle}
						</p>
						<p className="text-sm leading-5 tracking-wide" data-aos="fade-up">
							{banner.description}
						</p>

						<div data-aos="fade-up" data-aos-offset="0">
							<Button
								bgColor="bg-white"
								text="Shop"
								textColor={banner.buttonTextColor}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
