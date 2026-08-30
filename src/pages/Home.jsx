import headphone from "@/assets/hero/headphone.png";
import { Banner } from "@/components/Banner";
import { Category } from "@/components/Category";
import { Category2 } from "@/components/Category2";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

const Banners = [
	{
		discount: "30% OFF",
		title: "Fine Smile",
		date: "10 Jan to 28 Jan",
		image: headphone,
		product: "Air Solo Bass",
		subtitle: "Winter Sale",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quod.",
		bgColor: "bg-primary",
		buttonTextColor: "text-primary",
	},
];

export const Home = () => {
	return (
		<div className="overflow-hidden bg-white duration-200 dark:bg-gray-900 dark:text-white">
			<Navbar />
			<Hero />
			<Category />
			<Category2 />
			<Services />
			<Banner banner={{ ...Banners[0] }} />
		</div>
	);
};
