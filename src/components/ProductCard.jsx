import { Button } from "./Button";

export const ProductCard = ({ product }) => {
	return (
		<div className="group" data-aos="fade-up" data-aos-delay={product.aosDelay}>
			<div className="relative space-y-3">
				<img
					alt=""
					className="h-45 w-65 rounded-md object-cover"
					src={product.img}
				/>

				{/* Hover Button */}
				<div className="-translate-1/2 absolute top-1/2 left-1/2 flex size-full items-center justify-center rounded-md text-center opacity-0 duration-200 group-hover:opacity-100 group-hover:backdrop-blur-sm">
					<Button
						bgColor="bg-primary"
						text="Add to card"
						textColor="text-white"
					/>
				</div>
			</div>

			<div className="leading-7">
				<h2 className="font-semibold">{product.title}</h2>
				<h2 className="font-bold">${product.price}</h2>
			</div>
		</div>
	);
};
