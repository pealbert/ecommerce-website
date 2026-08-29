import Image1 from "@/assets/category/gaming.png";
import Image3 from "@/assets/category/speaker.png";
import Image2 from "@/assets/category/vr.png";
import { Button } from "./Button";

export const Category2 = () => {
	return (
		<div className="pb-8">
			<div className="container">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* first col */}
					<div className="relative col-span-2 flex h-80 items-end rounded-3xl bg-linear-to-br from-gray-400/90 to-gray-100 py-10 pl-5 text-white">
						<div>
							<div className="mb-4 space-y-2">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-2 font-bold text-4xl opacity-40 xl:text-5xl">
									CONSOLE
								</p>
								<Button
									text="Browse"
									bgColor="bg-primary"
									textColor="text-white"
								/>
							</div>
						</div>
						<img
							src={Image1}
							alt=""
							className="absolute top-1/2 right-0 w-62.5 -translate-y-1/2"
						/>
					</div>

					{/* second col */}
					<div className="relative flex h-80 items-start rounded-3xl bg-linear-to-br from-brand-green to-brand-green/70 py-10 pl-5 text-white">
						<div>
							<div className="mb-4">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-2 font-bold text-4xl opacity-20 xl:text-5xl">
									Oculus
								</p>
								<Button
									text="Browse"
									bgColor="bg-white"
									textColor="text-brand-green"
								/>
							</div>
						</div>
						<img src={Image2} alt="" className="absolute bottom-0 w-80" />
					</div>

					{/* third col */}
					<div className="relative flex h-80 items-start rounded-3xl bg-linear-to-br from-brand-blue to-brand-blue/70 py-10 pl-5 text-white">
						<div>
							<div className="mb-4">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-2 font-bold text-4xl opacity-40 xl:text-5xl">
									Speakers
								</p>
								<Button
									text="Browse"
									bgColor="bg-white"
									textColor="text-brand-blue"
								/>
							</div>
						</div>
						<img
							src={Image3}
							alt=""
							className="absolute right-0 bottom-0 w-50"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
