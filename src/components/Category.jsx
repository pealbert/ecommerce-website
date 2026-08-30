import Image1 from "@/assets/category/earphone.png";
import Image3 from "@/assets/category/macbook.png";
import Image2 from "@/assets/category/watch.png";
import { Button } from "./Button";

export const Category = () => {
	return (
		<div className="py-8">
			<div className="container">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* first col */}
					<div className="relative flex h-80 items-end rounded-3xl bg-linear-to-br from-black/90 to-black/70 py-10 pl-5 text-white dark:from-gray-800 dark:to-gray-800/70">
						<div>
							<div className="mb-4">
								<p className="mb-0.5 text-gray-400">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-4 font-bold text-4xl opacity-20 xl:text-5xl">
									Earphone
								</p>
								<Button
									text="Browse"
									bgColor="bg-primary"
									textColor="text-white"
								/>
							</div>
						</div>
						<img src={Image1} alt="" className="absolute bottom-0 w-80" />
					</div>

					{/* second col */}
					<div className="relative flex h-80 items-end rounded-3xl bg-linear-to-br from-brand-yellow to-brand-yellow/70 py-10 pl-5 text-white">
						<div>
							<div className="mb-4">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-4 font-bold text-4xl opacity-40 xl:text-5xl">
									Gadget
								</p>
								<Button
									text="Browse"
									bgColor="bg-white"
									textColor="text-brand-yellow"
								/>
							</div>
						</div>
						<img
							src={Image2}
							alt=""
							className="absolute -right-12 w-80 lg:top-10"
						/>
					</div>

					{/* third col */}
					<div className="relative col-span-2 flex h-80 items-end rounded-3xl bg-linear-to-br from-primary to-primary/70 py-10 pl-5 text-white">
						<div>
							<div className="mb-4 space-y-2">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-4 font-bold text-4xl opacity-40 xl:text-5xl">
									Laptop
								</p>
								<Button
									text="Browse"
									bgColor="bg-white"
									textColor="text-primary"
								/>
							</div>
						</div>
						<img
							src={Image3}
							alt=""
							className="absolute top-1/2 right-0 w-62.5 -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
