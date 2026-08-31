import Image1 from "@/assets/category/earphone.png";
import Image3 from "@/assets/category/macbook.png";
import Image2 from "@/assets/category/watch.png";
import Image4 from "@/assets/category/gaming.png";
import Image5 from "@/assets/category/speaker.png";
import Image6 from "@/assets/category/vr.png";
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
									bgColor="bg-primary"
									text="Browse"
									textColor="text-white"
								/>
							</div>
						</div>
						<img alt="" className="absolute bottom-0 w-80" src={Image1} />
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
									bgColor="bg-white"
									text="Browse"
									textColor="text-brand-yellow"
								/>
							</div>
						</div>
						<img
							alt=""
							className="absolute -right-12 w-80 lg:top-10"
							src={Image2}
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
									bgColor="bg-white"
									text="Browse"
									textColor="text-primary"
								/>
							</div>
						</div>
						<img
							alt=""
							className="absolute top-1/2 right-0 w-62.5 -translate-y-1/2"
							src={Image3}
						/>
					</div>

					{/* fourth col */}
					<div className="relative col-span-2 flex h-80 items-end rounded-3xl bg-linear-to-br from-gray-400/90 to-gray-100 py-10 pl-5 text-white">
						<div>
							<div className="mb-4 space-y-2">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-4 font-bold text-4xl opacity-40 xl:text-5xl">
									CONSOLE
								</p>
								<Button
									bgColor="bg-primary"
									text="Browse"
									textColor="text-white"
								/>
							</div>
						</div>
						<img
							alt=""
							className="absolute top-1/2 right-0 w-62.5 -translate-y-1/2"
							src={Image4}
						/>
					</div>

					{/* fifth col */}
					<div className="relative flex h-80 items-start rounded-3xl bg-linear-to-br from-brand-green to-brand-green/70 py-10 pl-5 text-white">
						<div>
							<div className="mb-4">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-4 font-bold text-4xl opacity-20 xl:text-5xl">
									Oculus
								</p>
								<Button
									bgColor="bg-white"
									text="Browse"
									textColor="text-brand-green"
								/>
							</div>
						</div>
						<img alt="" className="absolute bottom-0 w-80" src={Image5} />
					</div>

					{/* sixth col */}
					<div className="relative flex h-80 items-start rounded-3xl bg-linear-to-br from-brand-blue to-brand-blue/70 py-10 pl-5 text-white">
						<div>
							<div className="mb-4">
								<p className="mb-0.5 text-white">Enjoy</p>
								<p className="mb-0.5 font-semibold text-2xl">With</p>
								<p className="mb-4 font-bold text-4xl opacity-40 xl:text-5xl">
									Speakers
								</p>
								<Button
									bgColor="bg-white"
									text="Browse"
									textColor="text-brand-blue"
								/>
							</div>
						</div>
						<img
							alt=""
							className="absolute right-0 bottom-0 w-50"
							src={Image6}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
