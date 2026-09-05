import Img1 from "@/assets/product/p-1.jpg";
import Img2 from "@/assets/product/p-2.jpg";
import Img3 from "@/assets/product/p-3.jpg";
import Img4 from "@/assets/product/p-4.jpg";
import Img5 from "@/assets/product/p-5.jpg";
import Img6 from "@/assets/product/p-6.jpg";
import Img7 from "@/assets/product/p-7.jpg";
import { Heading } from "./Heading";
import { ProductCard } from "./ProductCard";

const ProductsData = [
	{
		id: 1,
		img: Img1,
		title: "Boat Headphone",
		price: "120",
		aosDelay: "0",
	},
	{
		id: 2,
		img: Img2,
		title: "Rocky Mountain",
		price: "420",
		aosDelay: "100",
	},
	{
		id: 3,
		img: Img3,
		title: "Goggles",
		price: "320",
		aosDelay: "200",
	},
	{
		id: 4,
		img: Img4,
		title: "Printed",
		price: "220",
		aosDelay: "300",
	},
	{
		id: 5,
		img: Img5,
		title: "Boat Headphone",
		price: "120",
		aosDelay: "0",
	},
	{
		id: 6,
		img: Img6,
		title: "Rocky Mountain",
		price: "420",
		aosDelay: "100",
	},
	{
		id: 7,
		img: Img7,
		title: "Goggles",
		price: "320",
		aosDelay: "200",
	},
	{
		id: 8,
		img: Img2,
		title: "Printed",
		price: "220",
		aosDelay: "300",
	},
];

export const Products = () => {
	return (
		<div>
			<div className="container" id="products">
				{/* Header section */}
				<Heading subtitle="Explore Our Products" title="Our Products" />

				{/* Body section */}
				<div className="mb-10">
					<div className="grid-col-1 grid place-items-center gap-5 sm:grid-cols-2 md:grid-cols-4">
						{ProductsData.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
